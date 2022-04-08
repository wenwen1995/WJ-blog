(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{393:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("font",{attrs:{color:"blue",size:"24"}},[t._v("认识iframe和window.postMessage的使用")])],1),t._v(" "),a("h4",{attrs:{id:"_1、起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、起因"}},[t._v("#")]),t._v(" 1、起因")]),t._v(" "),a("p",[t._v("是看到有赞技术博客里的这篇文章，"),a("a",{attrs:{href:"%5Bhttps://tech.youzan.com/meiye-decorate/%5D(https://tech.youzan.com/meiye-decorate/)"}},[t._v("有赞美业店铺装修前端解决方案")]),t._v("\n里面讲解了他们是如何实现店铺装修前端的架构，其中的模块和设计思想很值得一读(✪ω✪)。其中的这个关于pc页面和h5页面的思想，用到了iframe和postMessage的思想，感觉也是非常巧妙，利用这些做到了页面代码的复用，减少了重复造轮子的问题。")]),t._v(" "),a("p",[t._v("由于对于iframe接触的非常少，那还是先去了解一下原理和内容，再仔细看文章里的实现吧。")]),t._v(" "),a("p",[t._v("mdn里关于window.postMessage链接："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.postMessage"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("上述链接已经讲得很仔细了，不再做过多的重复。")]),t._v(" "),a("p",[a("strong",[t._v("值得注意的一点是：")])]),t._v(" "),a("p",[t._v("otherWindow.postMessage(message, targetOrigin, [transfer])中，")]),t._v(" "),a("p",[a("strong",[t._v("第一个参数：message")])]),t._v(" "),a("p",[t._v("在 Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3)之前， 参数 "),a("code",[t._v("message 必须是一个字符串。")]),t._v(" 从 Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3)开始，参数 "),a("code",[t._v("message被")]),t._v("使用"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/DOM/The_structured_clone_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("结构化克隆算法"),a("OutboundLink")],1),t._v("进行序列化。这意味着您可以将各种各样的数据对象安全地传递到目标窗口，而不必自己序列化它们。**")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("所以，一般来说不做兼容浏览器的处理时，我们现在可以传 各种各样的数据对象，而不是只能传递字符串")])])]),t._v(" "),a("h4",{attrs:{id:"_2、写demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、写demo"}},[t._v("#")]),t._v(" 2、写demo")]),t._v(" "),a("ul",[a("li",[t._v("自己写个测试的Demo例子吧，如何在一个名叫A.html里面使用iframe，嵌入另一个html叫B。在A.html发送消息给B,B的页面接收到发送的消息,显示出来。同时B也可以使用 "),a("strong",[t._v("window.postMessage")]),t._v("发送消息给A。这样就实现了不太页面消息的传递")])]),t._v(" "),a("p",[t._v("这里的例子主要参考的是这篇文章："),a("a",{attrs:{href:"%5Bhttps://juejin.im/post/590c3983ac502e006531df11%5D(https://juejin.im/post/590c3983ac502e006531df11)"}},[t._v("使用 postMessage 解决 iframe 跨域通信问题")])]),t._v(" "),a("ul",[a("li",[t._v("首先来看A.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is A"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./B.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("再来看B.html")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is B"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("效果图如下："),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1273659-283dac87c1b7f3d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"效果图"}})]),t._v(" "),a("ul",[a("li",[t._v("接下来再看如何让A发送消息给B,B接收到消息呢？")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iframe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myFrame'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A页面给你发消息啦~~'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下是用来接收B页面发给A页面消息的逻辑")]),t._v("\n window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("receiveMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receiveMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A页面收到来自B的消息了==>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ul",[a("li",[t._v("接下来再B如何接收到A页面所发消息，并向A再发送一个消息？")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("receiveMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receiveMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B页面收到来自A的消息了==>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B页面也发送个消息给A页面你吧~'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("页面上打印的结果如下：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1273659-cc60160d617f43a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"结果图"}})]),t._v(" "),a("p",[t._v("即这样我们就实现了不同源之间的交流。")]),t._v(" "),a("p",[t._v("那会到最开始有赞店铺装修的前端处理，如何让pc设计更新后，预览的h5页面使用同一套代码（实现跨端复用）呢，就是用了iframe和window.postMessage去处理。详细代码可参考链接，为了更好的理解，")]),t._v(" "),a("p",[t._v("画一个图了解一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1273659-38bdfc278e77b9b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"类Messager的设计思路"}})]),t._v(" "),a("p",[t._v("那对应的h5如果做到复用一套代码呢？文章中是这么写的，")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Messager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("//mei.youzan.com")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pageChangeFromReact'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("即打个比方，"),a("strong",[t._v("pc端做的事情：")])]),t._v(" "),a("p",[t._v("pc端嵌入了iframe, 来源是h5的页面。pc每次绘制完毕或者点击完成或者保存时，都会")]),t._v(" "),a("ul",[a("li",[t._v("在消息存储动作对象上，先去绑定绘制、完成、保存这些事件类型")]),t._v(" "),a("li",[t._v("绑定完成后，在合适的节点去触发 由pc -> h5的一个事件消息发送，告诉h5：“h5渲染端 ,你好！我现在的事件类型是绘制更新完毕/点击完成/点击保存，要渲染的值是blabla...，我的地址是xxx”")]),t._v(" "),a("li",[t._v("由于页面关闭或者一些其他原因，要去销毁这个事件监听器, 防止内存泄露（低版本的ie如果不手动销毁，可能会有问题）")])]),t._v(" "),a("p",[t._v("敲黑板：")]),t._v(" "),a("p",[a("strong",[t._v("这里关于window.addEventListener的理解和解释，这篇文章写得很好： "),a("a",{attrs:{href:"https://blog.csdn.net/qq_29606781/article/details/67650869",target:"_blank",rel:"noopener noreferrer"}},[t._v("js添加事件和移除事件"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("对于h5端，它要做的事情：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建一个自己的messager实例，事件数据来源来自pc端。即h5现在拥有，Messager类里图中所画出的所有属性、值和方法")])]),t._v(" "),a("li",[a("p",[t._v('h5 在消息事件监听处理后，拿到从pc页面传来的消息，即h5: "啊哈哈,我收到消息了，现在的消息是blabla。。。",然后对消息进行解析渲染。')])])]),t._v(" "),a("p",[t._v("这样就可以利用iframe和postMessage，实现共用一份代码，实现更新。")])])}),[],!1,null,null,null);s.default=e.exports}}]);