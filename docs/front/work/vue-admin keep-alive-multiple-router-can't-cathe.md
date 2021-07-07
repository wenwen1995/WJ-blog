使用vue-element-admin脚手架做系统时，一般系统的侧边栏都是有父级，子级，子子级，发现使用keep-alive，当三级以上的路由时，无法缓存页面？？

#####那首先要了解下keep-alive的作用是啥？

* 是用来对页面组件进行缓存不缓存的处理，拥有缓存页面组件，再次进入时，使用原来已经加载好的内容，可以大大的节省请求和渲染时间，是个好东西！


相关的文章介绍很多，就不赘述了。。。(感兴趣的多查查其他文章)
那它具体的属性有2种：

* include ,包含页面组件name的这些组件页面，会被缓存起来
* exclude 除了这些name以外的页面组件，会被缓存起来
* 还有第3种，如下这样写(即没有include或者exclude属性，表示所有的路由组件都会被缓存起来！！)
如下所示：
```js
<keep-alive>
  <router-view :key="key" />
</keep-alive>

computed: {
 key() {
  return this.$route.path
 }
}
```

**注意这里有个坑点：**
 * 发现keep-alive中的include属性或者exclude属性都不管用！后来查阅了一番，发现这个include 或者exclude的name 是**页面组件里面具体的name**， 就像这样：（凡是是路由组件，在对应的这个组件页面显示的添着补上对应的name属性啊！别偷懒！）

![1.png](https://upload-images.jianshu.io/upload_images/1273659-a42561c847a8032e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


   （1）**官方vue组件的name的命名方式**，参考链接： [https://cn.vuejs.org/v2/guide/components-registration.html](https://cn.vuejs.org/v2/guide/components-registration.html)

  这里，由于默认的eslint配置文件.eslintrc.js中，如下：
![2.png](https://upload-images.jianshu.io/upload_images/1273659-4fb4cfbc43a645a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

即页面组件的name , 如果不是大写字母开头，就会飘红报错。(我有点强迫症)所以页面所有的路由组件具体页面的name，我都以大写字母开始命名


  （2）**这个具体vue组件页面的name要跟你router文件中配置的name一样**
           因为在每次打开标签页和关闭标签页处理时，是根据name来匹配，进行添加删除。如果组件内部页面配置的name是Order,而路由文件配置的name是order,那include和exclude也不会有用！

#####准备工作做好了后，就可以使用keep-alive 啦

 include 属性进行缓存页面组件的操作了，实现参考了github这篇： [https://github.com/PanJiaChen/vue-element-admin/commit/9ad96525af3a26c2f4e8d4e9016f801c44df1f80](https://github.com/PanJiaChen/vue-element-admin/commit/9ad96525af3a26c2f4e8d4e9016f801c44df1f80)


上面这个链接的代码，实现了三级路由以上的缓存处理：(但还会有个问题，刷新或者关闭当前标签页，再次打开时，清除不了当前组件的缓存（比如搜索条件写了个东西，进行搜索，关闭或者刷新后，应该清空重新请求，但还是保留。。我们后面会解决的，先接着往下看~）)


上述链接的解决的思路如下：
![3.png](https://upload-images.jianshu.io/upload_images/1273659-cad3b34bd86ef62b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* 代码如下：(三级路由根页面代码)

```
Parent
<script>
export default {
  name: 'Menu1',
  data() {
  return {
      ...
   }
 },
 created() {
   const route = this.$route.matched.find(item => item.name === 'Menu1')
   this.$store.dispatch('tagsView/addCachedView', route)
 }
}
</script>
```

**注： 上述组件的name值和find比较的name 值要均保持一致**，这里，如果当前组件的name改变了后，代码改动的地方有2处，有没有更取巧的方式呢，如下代码，就可以直接获取当前组件的name, 而不用相同的name写两遍
```
this.$options.name
```

所以上述代码，我们有可以改写成这样：

```
Parent
<script>
export default {
  name: 'Menu1',
  data() {
  return {
      ...
   }
 },
 created() {
   const route = this.$route.matched.find(item => item.name === this.$options.name)
   this.$store.dispatch('tagsView/addCachedView', route)
 }
}
</script>
```

 **那又回到刚才说的问题了，刷新或者关闭再打开当前3级路由的标签页时，缓存未清空？**

问题总是有解决办法的，参考链接是这个issue： [https://github.com/PanJiaChen/vue-element-admin/pull/3116](https://github.com/PanJiaChen/vue-element-admin/pull/3116)


```
tagsView.js

addCachedView({ commit }, view) {
   if (view.matched && view.matched.length >= 3) { // 若为三级及其以上路由点击打开标签页时，将三级路由或以上的根目录路由塞入缓存路由name list中
   commit('ADD_CACHED_VIEW', view.matched[1])
  }
   commit('ADD_CACHED_VIEW', view) // 反之，正常的进行标签页的添加进缓存路由name list中
},


delCachedView({ commit, state }, view) {
  return new Promise(resolve => {
    if (view.matched && view.matched.length >= 3) { // 若为三级及其以上路由关闭当前标签页时，将3级路由以上的根目录name 从list中删除
    commit('DEL_CACHED_VIEW', view.matched[1])
  }
   commit('DEL_CACHED_VIEW', view) // 反之，正常的进行标签页的name 从list中删除
   resolve([...state.cachedViews])
  })
},
```

以上解决问题啦~~<(*￣▽￣*)/

还要注意的是：

AppMain.vue里这样写：（注意include方法，取的是cachedViews）
```
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>


<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>
<style scope>
...
</style>
```
