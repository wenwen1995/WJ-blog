(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(t,s,a){t.exports=a.p+"assets/img/3.c0070b47.png"},384:function(t,s,a){t.exports=a.p+"assets/img/4.cdc81cf3.png"},385:function(t,s,a){t.exports=a.p+"assets/img/5.a4bf0633.png"},386:function(t,s,a){t.exports=a.p+"assets/img/6.4ce6f8e2.png"},387:function(t,s,a){t.exports=a.p+"assets/img/7.6f20dbe1.png"},388:function(t,s,a){t.exports=a.p+"assets/img/9.1788778c.png"},389:function(t,s,a){t.exports=a.p+"assets/img/10.4544b8c8.png"},390:function(t,s,a){t.exports=a.p+"assets/img/11.23bd2e20.png"},423:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"vue打包-element-icons-woff-和element-icons-ttf-字体文件路径错误-导致icon图标显示不见的问题。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue打包-element-icons-woff-和element-icons-ttf-字体文件路径错误-导致icon图标显示不见的问题。"}},[t._v("#")]),t._v(" vue打包 element-icons.woff 和element-icons.ttf 字体文件路径错误，导致icon图标显示不见的问题。")]),t._v(" "),n("p",[t._v("之前项目中，碰到过几次，都是没改项目配置。然后打包完成部署后发现，element fonts字体丢失了。就像下面这样：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(383),alt:"丢失1"}})]),t._v(" "),n("p",[t._v("查看network后，发现fonts的路径不对，static下并无fonts文件，或者有些时候，会变成static/css/static/fonts/这样。而去服务器查找一番，发现路径并不对，才导致访问失败")]),t._v(" "),n("p",[n("img",{attrs:{src:a(384),alt:"丢失2"}})]),t._v(" "),n("p",[t._v("查阅百度。。答案千篇一律，都是这样的，并不能解决我的问题：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(385),alt:"不能解决的解答方法"}})]),t._v(" "),n("p",[t._v("而我的 build/utils下的generateLoaders()长这样。。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(386),alt:"我本地的项目"}})]),t._v(" "),n("p",[t._v("正常情况下，前端项目打包，最终生成的dist文件包含内容应该如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(387),alt:"dist打包后项目目录"}})]),t._v(" "),n("p",[t._v("那咋办。费了一番功夫，终于有解决办法了，这里有2个解决办法：\n参考了这篇文章，"),n("a",{attrs:{href:"https://blog.csdn.net/u013299635/article/details/106523649",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接1"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("希望能帮到你。")]),t._v(" "),n("h5",{attrs:{id:"第一个"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个"}},[t._v("#")]),t._v(" 第一个：")]),t._v(" "),n("p",[t._v("解决方法如下，修改红色箭头指出的地方，")]),t._v(" "),n("p",[n("img",{attrs:{src:a(388),alt:"修改这个地方"}})]),t._v(" "),n("p",[t._v("改动代码如下：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loaders"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MiniCssExtractPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            publicPath"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loaders"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("这样重新打包后就好了，路径恢复正常。")]),t._v(" "),n("p",[t._v("有个问题是，一般前端项目代码打包好之后，直接打开index.html文件是无法运行和浏览的，除非将打包好的代码部署到服务器上，那前端如何查看打包好的文件呢？也方便我们调试查看问题，比如这个fonts路径问题，")]),t._v(" "),n("p",[t._v("参考链接这个："),n("a",{attrs:{href:"https://blog.csdn.net/kiyoometal/article/details/106860510",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览打包好的文件：npm包serve的使用"),n("OutboundLink")],1),t._v("。敲几个命令，成功后，在项目dist文件夹下，输入 "),n("code",[t._v("serve")]),t._v(" 就可以看到效果了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(389),alt:"项目预览"}})]),t._v(" "),n("h4",{attrs:{id:"第二个"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二个"}},[t._v("#")]),t._v(" 第二个：")]),t._v(" "),n("p",[t._v("常规的webpack.base.conf.js里面关于字体文件的配置如下所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(390),alt:"fonts文件配置"}})]),t._v(" "),n("p",[t._v("我们改写一下形式，并使用file-loader来加载（这里")]),t._v(" "),n("p",[t._v("[ ] file-loader和url-loader的异同点，等到下一篇文章再做总结")]),t._v(" "),n("p",[t._v("[ ] 其实还要总结一篇绝对路径、相对路径的，总是搞不清楚。。\n）")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(woff2?|eot|ttf|otf)(\\?.*)?$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fonts/[name].[hash:7].[ext]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            outputPath"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            publicPath"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../static/'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("好了，以上问题就解决啦。")]),t._v(" "),n("Valine")],1)}),[],!1,null,null,null);s.default=e.exports}}]);