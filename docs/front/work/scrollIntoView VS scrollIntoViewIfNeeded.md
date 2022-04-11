#### scrollIntoView VS scrollIntoViewIfNeeded 和 爬坑

参考链接
1、[https://blog.csdn.net/fxss5201/article/details/80672263](https://blog.csdn.net/fxss5201/article/details/80672263)
2、[MDN 相关介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoViewIfNeeded)

注：若要在ie使用该属性，则万万不可。
由于我的项目主要是android端，而mobile端的总体支持是比较好的。所以不去考虑它的兼容性问题啦~

#### 异同点
**相同点**：二者都是将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域
**不同点**：
* scrollIntoViewIfNeeded 如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动
* scrollIntoViewIfNeeded  方法是scrollIntoView方法的变体
* scrollIntoViewIfNeeded 方法接受的参数只有true、false，scrollIntoView方法除了接受true、false还有obj参数，具体参见 MDN 上的api 介绍

#### 测试Demo 加深理解
自己写了一个测试的demo,运行在国内的 jsRun网站上，类似于国外的jsFiddle一样，可以写代码，实时看到效果。推荐大家也使用起来
地址是：[http://jsrun.pro/YWfKp/edit](http://jsrun.pro/YWfKp/edit)

效果如图所示：
![代码效果图](https://upload-images.jianshu.io/upload_images/1273659-5a609e617a592cde.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

若是进不去网站，这里附上测试的代码，可在本地测试一波...
html内容：
```html
 <button onclick="moveCenter()" class="btn-style">测试scrollIntoViewIfNeeded---true</button>
  <button onclick="moveOther()" class="btn-style">测试scrollIntoViewIfNeeded---false</button>
  <button onclick="moveScrollIntoView(true)" class="btn-style">测试scrollIntoView--true</button>
  <button onclick="moveScrollIntoView(false)" class="btn-style">测试scrollIntoView--false</button>
  <button onclick="moveScrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})" class="btn-style">测试scrollIntoView--动画</button>
  <ul>
    <li class="item-style">1</li>
    <li class="item-style">2</li>
    <li class="item-style">3</li>
   <input type="text" placeholder="请输入" id="input-style" />
    <li class="item-style">4</li>
    <li class="item-style">5</li>
    <li class="item-style">6</li>
    <li class="item-style">7</li>
    <li class="item-style">8</li>
  </ul>
```

css内容：
```css
   ul {
      margin: 20px 0;
    }
    .item-style {
      height: 200px;
      margin: 20px 0;
      list-style: none;
      border: 1px solid #d6d6d6;
      text-align: center;
      font-size: 90px;
    }
    .item-style:nth-child(2n) {
      background-color: cornflowerblue;
    }
    .item-style:nth-child(2n+1) {
      background-color: burlywood;
    }

    #input-style {
      width: 100%;
      height: 50px;
      font-size: 40px;
    }
    .btn-style {
      height: 80px;
      border-radius: 4px;
      border: none;
      background-color: darkcyan;
      font-size: 30px;
      color: #fff;
    }
```
js内容：
```js
 // 获取页面的input元素
const ele = document.getElementById('input-style') 

// 测试元素将在其所在滚动区的可视区域中居中对齐
  function moveCenter() {
    setTimeout(() => {
        ele.scrollIntoViewIfNeeded()
      },
      500)
  }

  // 测试元素将与其所在滚动区的可视区域最近的边缘对齐
  function moveOther() {
    setTimeout(() => {
        ele.scrollIntoViewIfNeeded(false)
      },
      500)
  }

  // 测试scrollIntoView
  function moveScrollIntoView(content) {
    setTimeout(() => {
        ele.scrollIntoView(content)
      },
      500)
  }
```
**注： 当scrollIntoView 传参数属性时，会有兼容性的问题。chrome和firefox仅支持。需注意。**

*描述一下点击不同的按钮出现的情况：*
* 点击 第1个，即调用scrollIntoViewIfNeeded方法，默认传true值，**input 滚动到 其所在滚动区的可视区域中居中对齐**
* 点击 第2个，即调用scrollIntoViewIfNeeded方法，传了false，**input 滚动到与其所在滚动区的可视区域最近的边缘对齐**。由于此demo中，可视区域的底边缘 距 元素更近，所以，input滚动到可视区域的底边缘对齐。
* 点击 第 3个，即调用scrollIntoView方法，传了true, **input 顶端将和其所在滚动区的可视区域的顶端对齐**
* 点击 第 4个，即调用scrollIntoView方法，传了false, 相当于传递了参数属性 {block: "end", inline: "nearest"}   此时，**input 底端将和其所在滚动区的可视区域的底端对齐**

* 点击 第 5个，即调用scrollIntoView方法，传了参数属性 {behavior: 'smooth', block: 'start', inline: 'nearest'}   即input 会**平滑的滚动到**  **其顶端于所在滚动区可视区域的顶端 对齐（竖直方向上）** ，**（水平方向上滚动到与滚动取可视区域最近的边缘对齐）**

#### 爬坑原因+反思

好了，介绍了解了这么多。是为啥会接触到这个属性？
* 原因是在使用vue编写移动端的页面时，发现跑在android手机上，当页面内容过多，有滚动条时。里面的input每次focus后，会弹出软键盘。而键盘弹出要么会遮挡住输入框的输入，要么是input弹的页面要再手动滚动，才能看到。。

* vue 所用的移动端的框架是vux,刚开始还没想到这个方法。后来发现页面中一个是使用框架的x-input,在android机表现良好，而自己封装的一个原生的input,被键盘弹出摧毁的奇奇怪怪。后来索性看了下github对应的x-input 组件源码，果然做了处理！

源码链接： [vux x-input 源码](https://github.com/airyland/vux/blob/v2/src/components/x-input/index.vue)

核心处理的方法如下：

![核心方法1](https://upload-images.jianshu.io/upload_images/1273659-fe08148f3f87dc51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![核心方法2](https://upload-images.jianshu.io/upload_images/1273659-a02758df6bb2b77d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**这里加上定时器的作用，大概是为了让输入框上滑时更加自然吧....**

当然，也不要忘记在页面离开时，清除监听页面resize的事件监听器哦~
![清除事件监听器](https://upload-images.jianshu.io/upload_images/1273659-be6871c87d771925.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**所以，综上所述，之后碰到类型的问题，都可以采取该方法。果然框架之所以是框架，里面有很多丰富的宝藏啊！多看源码！敲黑板！ᕦ(･ㅂ･)ᕤ**

<Valine />
