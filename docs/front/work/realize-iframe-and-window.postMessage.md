<font color=blue size=24>认识iframe和window.postMessage的使用</font>

#### 1、起因

是看到有赞技术博客里的这篇文章，[有赞美业店铺装修前端解决方案]([https://tech.youzan.com/meiye-decorate/](https://tech.youzan.com/meiye-decorate/)
)
里面讲解了他们是如何实现店铺装修前端的架构，其中的模块和设计思想很值得一读(✪ω✪)。其中的这个关于pc页面和h5页面的思想，用到了iframe和postMessage的思想，感觉也是非常巧妙，利用这些做到了页面代码的复用，减少了重复造轮子的问题。

由于对于iframe接触的非常少，那还是先去了解一下原理和内容，再仔细看文章里的实现吧。

mdn里关于window.postMessage链接：[window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

上述链接已经讲得很仔细了，不再做过多的重复。

**值得注意的一点是：**

  otherWindow.postMessage(message, targetOrigin, [transfer])中，

**第一个参数：message**

在 Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3)之前， 参数 `message 必须是一个字符串。` 从 Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3)开始，参数 `message被`使用[结构化克隆算法](https://developer.mozilla.org/en-US/docs/DOM/The_structured_clone_algorithm)进行序列化。这意味着您可以将各种各样的数据对象安全地传递到目标窗口，而不必自己序列化它们。**

***所以，一般来说不做兼容浏览器的处理时，我们现在可以传 各种各样的数据对象，而不是只能传递字符串***

<!-- more -->

#### 2、写demo

- 自己写个测试的Demo例子吧，如何在一个名叫A.html里面使用iframe，嵌入另一个html叫B。在A.html发送消息给B,B的页面接收到发送的消息,显示出来。同时B也可以使用 **window.postMessage**发送消息给A。这样就实现了不太页面消息的传递

这里的例子主要参考的是这篇文章：[使用 postMessage 解决 iframe 跨域通信问题]([https://juejin.im/post/590c3983ac502e006531df11](https://juejin.im/post/590c3983ac502e006531df11)
)

* 首先来看A.html
```html
<body style="border: 5px solid red;">
  <h1>this is A</h1>
 <iframe src="./B.html" id="myFrame"></iframe>
</body>
```

* 再来看B.html
```html
<body style="border: 5px solid yellow;">
  <h1>this is B</h1>
</body>
```
效果图如下：![效果图](http://upload-images.jianshu.io/upload_images/1273659-283dac87c1b7f3d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* 接下来再看如何让A发送消息给B,B接收到消息呢？
```js
  const iframe = document.getElementById('myFrame');
  iframe.onload = function() {
    iframe.contentWindow.postMessage('A页面给你发消息啦~~','*');
  };

//以下是用来接收B页面发给A页面消息的逻辑
 window.addEventListener('message',receiveMessage,false);
 function receiveMessage(event) {
    console.log('A页面收到来自B的消息了==>',event)
  }
```

* 接下来再B如何接收到A页面所发消息，并向A再发送一个消息？
```js
 window.addEventListener('message',receiveMessage,false);
 function receiveMessage(event) {
    console.log('B页面收到来自A的消息了==>',event)
  }
  parent.postMessage('B页面也发送个消息给A页面你吧~','*');
```
* 页面上打印的结果如下：

![结果图](https://upload-images.jianshu.io/upload_images/1273659-cc60160d617f43a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

即这样我们就实现了不同源之间的交流。

那会到最开始有赞店铺装修的前端处理，如何让pc设计更新后，预览的h5页面使用同一套代码（实现跨端复用）呢，就是用了iframe和window.postMessage去处理。详细代码可参考链接，为了更好的理解，

画一个图了解一下：

![类Messager的设计思路](https://upload-images.jianshu.io/upload_images/1273659-38bdfc278e77b9b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

那对应的h5如果做到复用一套代码呢？文章中是这么写的，

```js
this.messager = new Messager(window.parent, `${window.location.protocol}//mei.youzan.com`);  
this.messager.on('pageChangeFromReact', (data) => {  
    ...
});
```

即打个比方，**pc端做的事情：**

pc端嵌入了iframe, 来源是h5的页面。pc每次绘制完毕或者点击完成或者保存时，都会
* 在消息存储动作对象上，先去绑定绘制、完成、保存这些事件类型
* 绑定完成后，在合适的节点去触发 由pc -> h5的一个事件消息发送，告诉h5：“h5渲染端 ,你好！我现在的事件类型是绘制更新完毕/点击完成/点击保存，要渲染的值是blabla...，我的地址是xxx”
* 由于页面关闭或者一些其他原因，要去销毁这个事件监听器, 防止内存泄露（低版本的ie如果不手动销毁，可能会有问题）

敲黑板：

**这里关于window.addEventListener的理解和解释，这篇文章写得很好： [js添加事件和移除事件](https://blog.csdn.net/qq_29606781/article/details/67650869)**


**对于h5端，它要做的事情：**

* 创建一个自己的messager实例，事件数据来源来自pc端。即h5现在拥有，Messager类里图中所画出的所有属性、值和方法

* h5 在消息事件监听处理后，拿到从pc页面传来的消息，即h5: "啊哈哈,我收到消息了，现在的消息是blabla。。。",然后对消息进行解析渲染。

这样就可以利用iframe和postMessage，实现共用一份代码，实现更新。

<Valine />
