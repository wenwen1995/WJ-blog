<font color=blue size=24>single-spa </font>

起因是看了一下掘金的这篇链接; [每日优鲜供应链前端团队微前端改造](https://juejin.im/post/5d7f702ce51d4561f777e258, 讲最终将多个独立的小项目，利用single-spa框架的方法(即l类似于微服务)) 整合成一个大项目。讲的很不错

* 适用场景：项目庞大，多个子项目整合在一个大的项目中。即使子项目的所用的技术栈不同，比如vue,react, angular有相应的single-spa的轮子，可以进行整合。

<!-- more -->

* 不适用于：
   （1）< ie9 以下的版本
   （2）项目不大型，不需要切分
   （3）项目应用之间没有必然的联系

* 优点：
   (1) 若多个应用之间公用一些共有的部分，可将其抽离出来，在最终的打包过程中明显的体积缩小。运行加快。
   (2) 不同的应用之间，由一个跳转到另一个时，在不涉及应用之间状态交互时，不用考虑重写之类的问题，只需配置好对应的spa，就可以进行切换

* 自身理解：
    在娘胎里，熊大、熊二、熊三...熊n 都是熊妈妈的宝宝。做b超时都能看到各个熊宝宝的表现和各自的行为，但是总体上，它们都在熊妈妈的肚子里。

    而熊妈妈就属于 这个single-spa 包装后的平台， 而每个熊宝宝都是独立的，有各自的行为状态

* 更好的理解，可以参考这篇链接： [](https://juejin.im/post/5a0ea4ec6fb9a0450407725c)

[single-spa  github官网](https://single-spa.js.org/)
<font color=red size=3>注： 英文不错的同学可以好好读读官网的教程文章，写的超级好，有详细的教程、api和参数文档</font>

[single-spa-vue的例子](https://github.com/joeldenning/coexisting-vue-microfrontends)

<font color=red size=3>注：该例中是全部以vue为单应用，组合起来的一个single-spa场景, 建议clone下来后跑一遍，并参考文档深刻理解其中含义</font>

如下所示：

  (1)黑色部分每一个都是一个vue单页应用，最外层橙色的包裹器将他们注册开启包裹进来
  (2)navvar 应用通过vue-router的方式，可以跳转到app1应用或者app2应用

![整个demo的结构理解](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/1.png)

分析一下单应用navbar, app1, app2。因为他们文件结构都是相同的，所以就看下app1 和app2好啦，如下：

![目录结构图](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/2.png)


按照官网例子安装好对应的依赖后，查看文件夹中的内容。

#### 1.先看package.json

**除了name和监听的端口不一样**，其他都一样

![package.json图](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/3.png)

由于navbar、app1、app2的目录结构基本一致，就只说app1的吧，
app1 的目录结构如下：

![app1 的目录结构](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/4.png)

#### 2.vue.config.js是这样写的:

```js
module.exports = {
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', false)
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false,
}
```

上述配置表明:
    * 热加载配置中： 关闭当前应用的代码改变就加载的功能，关闭热更新，
    * 先将vue和vue-router的依赖暴露出去，再在最终的root-html-file的index.html中进行配置，目的是 **为了多个单应用之间相同的依赖，它们的版本号应该保持一致，vue实例应该保持一致**
    * 关闭最终打包生成的文件后面带有hash码


#### 3. babel.config.js,

写成这样是为了让浏览器支持最新的es语法，比如扩展运算符，动态import，转化vue jsx 或者转化generator和async/await语法糖

```js
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```

#### 4.入口文件main.js 改变
<font color=red size=3>一般的vue应用,</font>  入口文件main.js 配置如下：

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

**src/main.js ，此文件为应用的入口文件配置如下：**
```js
import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

//应用初始
export const bootstrap = vueLifecycles.bootstrap;
//应用挂载
export const mount = vueLifecycles.mount;
//应用卸载
export const unmount = vueLifecycles.unmount;
```

其中这里的singleSpaVue(opts)里面的参数和表示的含义分别是：

* Vue,**（必须参数）**，Vue对象，通过import暴露或者通过require('vue')的方式
* appOptions,**（必须参数）**，是用于创建你的vue应用的一个实例对象，通过new Vue(appOptions)的方式创建。
<font color=red size=3>注意：如果没有给appOptions提供一个挂载的节点el元素上，那它创建一个div，作为一个默认的容器插入到你的vue应用dom中</font>
* loadRootComponent（可选参数，可替代appOptions中的render）,解析你的根组件并返回一个promise对象。这个适合于懒加载


#### 5.src/set-public-path.js书写

```js
__webpack_public_path__ = window.getPublicPath('app1')
```

**__webpack_public_path__是webpack的output配置中的publickPath参数的另外一种配置，它是webpack暴露的一个全局变量，表示设置运行的publicPath**

这里window.getPublicPath，是个方法，定义在最外层的root-html-file下的html的script标签中，用来获取当前应用的publicPath是什么。

可能有同学很好奇了，为啥上述的每个vue应用，都没有webpack的配置文件，也要设置上述的publicPath路径？
这是因为使用了vue/cli-service 插件，它里面封装了webpack, 启动每个应用的命令是这样写的：

`"serve": "vue-cli-service serve --port 8081",`

实际上：
![](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/5.png)

#### 6. router.js、App.vue、views/ 等文件都跟我们写vue文件保持一致，不做细讲。

再看我们最终融合的应用**root-html-file**, 目录文件如下：

![root-html-file目录图](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/6.png)

##### 7.package.json很简单，代码如下，serve是个node服务插件，将我们的项目展示在浏览器上，

```js
{
  "name": "root-html-file",
  "scripts": {
    "serve": "serve -s -l 5000"
  },
  "devDependencies": {
    "serve": "^11.1.0"
  }
}
```

#### 8. root-html-file中的index.html

主要的是这个index.html文件，里面这些东西都很重要，

下面来挑主要的一一说明，

```js
<script type="systemjs-importmap">
      {
        "imports": {
          "navbar": "http://localhost:8080/app.js",
          "app1": "http://localhost:8081/app.js",
          "app2": "http://localhost:8082/app.js",
          "single-spa": "https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.7/system/single-spa.min.js",
          "vue": "https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js",
          "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@3.0.7/dist/vue-router.min.js"
        }
      }
</script>
```

这里是使用**systemjs**，是一个运行于浏览器端的模块加载器，将我们整个应用所需要的js文件，都以imports的形式引入进来

再来看body中的script代码，这里面比较核心。一一分析下，总体代码如下：

![核心代码](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/7.png)

<font color=lightblue size=3>第一部分：</font>

```js
var originalResolve = System.resolve
 var moduleMap = {}
 System.resolve = function(name) {
    return originalResolve.apply(this, arguments).then(resolved => {
    moduleMap[name] = resolved;
    return resolved;
  });
}
```
上述代码是将导入的模块文件，通过system.resolve解析出来，形成一个 **moduleMap对象**。

**这里由于默认输入localhost: 5000,加载的只有navbar应用和single-spa插件，vue插件、vue-router插件。**

![图示](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/8.png)

app1应用和app2应用是点击上述链接，通过vue-router的形式进入，并加载对应的应用，所以

结果得到验证，如下图所示，一开始的localhost:5000时，打印其中的moduleMap信息，显示如下
![结果](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/9.png)


**进入app1应用时, 由于vue-router配置的作用，默认地址栏后加了个/app1,但实际加载的app1是跑在localhost: 8081上的，**

![图示](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/10.png)

localhost:5000/app1时的moduleMap信息：
![结果](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/11.png)

**进入app2应用时，同理地址栏后加了个/app2,但实际加载的app2是跑在localhost: 8082上的，**

![图示](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/12.png)

localhost:5000/app2时的moduleMap信息：
![结果](https://wrapper-1258672812.cos.ap-chengdu.myqcloud.com/19-9-20/13.png)

<font color=purple size=4>即个人理解： 这样做到了访问不同的应用，对应的模块按需加载，节省多余的请求和带宽，提高加载效率。</font>

<font color=lightblue size=3>第二部分： </font>

```js
window.getPublicPath = function(name) {
   const url = moduleMap[name]
   console.log('url ---?',url)
   if (url) {
     let index = url.lastIndexOf('/js')
     if (index < 0) {
      index = url.lastIndexOf('/')
     }
     index++
    return url.slice(0, index);
   } else {
   throw Error(`Could not find url for module '${name}'`)
 }
}
```

*这里是通过拿到moduleMap键值对中的值，即现在请求访问的url，用来设置当前应用运行时的publicPath！不得不说是很巧妙的一种方式啊~*

<font color=lightblue size=3>第三部分： </font>

```js
 Promise.all([System.import('single-spa'), System.import('vue'), System.import('vue-router')]).then(function (modules) {
      var singleSpa = modules[0];
      var Vue = modules[1];
      var VueRouter = modules[2];

      Vue.use(VueRouter)

      singleSpa.registerApplication(
        'navbar',
        () => System.import('navbar'),
        location => true
      );


      singleSpa.registerApplication(
        'app1',
        () => System.import('app1'),
        location => location.pathname.startsWith('/app1')
      )


      singleSpa.registerApplication(
        'app2',
        () => System.import('app2'),
        location => location.pathname.startsWith('/app2')
      )
    singleSpa.start();
})
```

<font color=red size=3>注： 由于System.import('xxx') 这种方式，获得是个promise对象，所以检测所需模块是否都引入完全，使用Promise.all方法~</font>

这里是引入所有应用所需的模块后，注册single-spa应用，

**registerApplication(name, howToLoad, activityFunction)**

      name: （required）,为application的name
      howToload: (required),是一个function ,表示怎样加载，上述代码是通过System.import， 加载各个项目的入口js文件 (模块加载)
      activityFunction: (required) 也是一个function, 当url符合时，返回true

最后再进行singleSpa.start() 进行启动


啦啦啦~完结撒花 :smiley:

通过对于demo的分析，更好的理解了single-spa的使用场景和如何进行的。不得不说，single-spa的设计和想法，令人眼界大开~希望未来有机会也能在大型多个应用上一展身手


```diff
 后记：
```
 
后来自己参考网上的实例，参考网站：[react+vue single-spa实战](https://www.jdon.com/52552)

也写了个以react, vue分别为单应用的 简单的single-spa， 例子详戳：
[模仿的react+vue single-spa实战](https://github.com/wenwen1995/single-spa-test-demo)
