(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{399:function(s,e,a){"use strict";a.r(e);var n=a(44),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("使用vue-element-admin脚手架做系统时，一般系统的侧边栏都是有父级，子级，子子级，发现使用keep-alive，当三级以上的路由时，无法缓存页面？？")]),s._v(" "),a("h5",{attrs:{id:"那首先要了解下keep-alive的作用是啥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那首先要了解下keep-alive的作用是啥"}},[s._v("#")]),s._v(" 那首先要了解下keep-alive的作用是啥？")]),s._v(" "),a("ul",[a("li",[s._v("是用来对页面组件进行缓存不缓存的处理，拥有缓存页面组件，再次进入时，使用原来已经加载好的内容，可以大大的节省请求和渲染时间，是个好东西！")])]),s._v(" "),a("p",[s._v("相关的文章介绍很多，就不赘述了。。。(感兴趣的多查查其他文章)\n那它具体的属性有2种：")]),s._v(" "),a("ul",[a("li",[s._v("include ,包含页面组件name的这些组件页面，会被缓存起来")]),s._v(" "),a("li",[s._v("exclude 除了这些name以外的页面组件，会被缓存起来")]),s._v(" "),a("li",[s._v("还有第3种，如下这样写(即没有include或者exclude属性，表示所有的路由组件都会被缓存起来！！)\n如下所示：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\ncomputed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("注意这里有个坑点：")])]),s._v(" "),a("ul",[a("li",[s._v("发现keep-alive中的include属性或者exclude属性都不管用！后来查阅了一番，发现这个include 或者exclude的name 是"),a("strong",[s._v("页面组件里面具体的name")]),s._v("， 就像这样：（凡是是路由组件，在对应的这个组件页面显示的添着补上对应的name属性啊！别偷懒！）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1273659-a42561c847a8032e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"1.png"}})]),s._v(" "),a("p",[s._v("（1）"),a("strong",[s._v("官方vue组件的name的命名方式")]),s._v("，参考链接： "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-registration.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://cn.vuejs.org/v2/guide/components-registration.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这里，由于默认的eslint配置文件.eslintrc.js中，如下：\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1273659-4fb4cfbc43a645a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"2.png"}})]),s._v(" "),a("p",[s._v("即页面组件的name , 如果不是大写字母开头，就会飘红报错。(我有点强迫症)所以页面所有的路由组件具体页面的name，我都以大写字母开始命名")]),s._v(" "),a("p",[s._v("（2）"),a("strong",[s._v("这个具体vue组件页面的name要跟你router文件中配置的name一样")]),s._v("\n因为在每次打开标签页和关闭标签页处理时，是根据name来匹配，进行添加删除。如果组件内部页面配置的name是Order,而路由文件配置的name是order,那include和exclude也不会有用！")]),s._v(" "),a("h5",{attrs:{id:"准备工作做好了后-就可以使用keep-alive-啦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作做好了后-就可以使用keep-alive-啦"}},[s._v("#")]),s._v(" 准备工作做好了后，就可以使用keep-alive 啦")]),s._v(" "),a("p",[s._v("include 属性进行缓存页面组件的操作了，实现参考了github这篇： "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/commit/9ad96525af3a26c2f4e8d4e9016f801c44df1f80",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/PanJiaChen/vue-element-admin/commit/9ad96525af3a26c2f4e8d4e9016f801c44df1f80"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("上面这个链接的代码，实现了三级路由以上的缓存处理：(但还会有个问题，刷新或者关闭当前标签页，再次打开时，清除不了当前组件的缓存（比如搜索条件写了个东西，进行搜索，关闭或者刷新后，应该清空重新请求，但还是保留。。我们后面会解决的，先接着往下看~）)")]),s._v(" "),a("p",[s._v("上述链接的解决的思路如下：\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1273659-cad3b34bd86ef62b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"3.png"}})]),s._v(" "),a("ul",[a("li",[s._v("代码如下：(三级路由根页面代码)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Parent\n<script>\nexport default {\n  name: 'Menu1',\n  data() {\n  return {\n      ...\n   }\n },\n created() {\n   const route = this.$route.matched.find(item => item.name === 'Menu1')\n   this.$store.dispatch('tagsView/addCachedView', route)\n }\n}\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("strong",[s._v("注： 上述组件的name值和find比较的name 值要均保持一致")]),s._v("，这里，如果当前组件的name改变了后，代码改动的地方有2处，有没有更取巧的方式呢，如下代码，就可以直接获取当前组件的name, 而不用相同的name写两遍")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this.$options.name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("所以上述代码，我们有可以改写成这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Parent\n<script>\nexport default {\n  name: 'Menu1',\n  data() {\n  return {\n      ...\n   }\n },\n created() {\n   const route = this.$route.matched.find(item => item.name === this.$options.name)\n   this.$store.dispatch('tagsView/addCachedView', route)\n }\n}\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("strong",[s._v("那又回到刚才说的问题了，刷新或者关闭再打开当前3级路由的标签页时，缓存未清空？")])]),s._v(" "),a("p",[s._v("问题总是有解决办法的，参考链接是这个issue： "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/3116",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/PanJiaChen/vue-element-admin/pull/3116"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tagsView.js\n\naddCachedView({ commit }, view) {\n   if (view.matched && view.matched.length >= 3) { // 若为三级及其以上路由点击打开标签页时，将三级路由或以上的根目录路由塞入缓存路由name list中\n   commit('ADD_CACHED_VIEW', view.matched[1])\n  }\n   commit('ADD_CACHED_VIEW', view) // 反之，正常的进行标签页的添加进缓存路由name list中\n},\n\n\ndelCachedView({ commit, state }, view) {\n  return new Promise(resolve => {\n    if (view.matched && view.matched.length >= 3) { // 若为三级及其以上路由关闭当前标签页时，将3级路由以上的根目录name 从list中删除\n    commit('DEL_CACHED_VIEW', view.matched[1])\n  }\n   commit('DEL_CACHED_VIEW', view) // 反之，正常的进行标签页的name 从list中删除\n   resolve([...state.cachedViews])\n  })\n},\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("以上解决问题啦~~<("),a("em",[s._v("￣▽￣")]),s._v(")/")]),s._v(" "),a("p",[s._v("还要注意的是：")]),s._v(" "),a("p",[s._v("AppMain.vue里这样写：（注意include方法，取的是cachedViews）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <section class="app-main">\n    <transition name="fade-transform" mode="out-in">\n      <keep-alive :include="cachedViews">\n        <router-view :key="key" />\n      </keep-alive>\n    </transition>\n  </section>\n</template>\n\n\n<script>\nexport default {\n  name: \'AppMain\',\n  computed: {\n    cachedViews() {\n      return this.$store.state.tagsView.cachedViews\n    },\n    key() {\n      return this.$route.path\n    }\n  }\n}\n<\/script>\n<style scope>\n...\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);