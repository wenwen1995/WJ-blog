#### 静态环形进度条svg实现

环形进度条可以用svg 实现，Element-ui中的环形进度条就是用svg实现的

 svg好文链接：
  1、推荐！介绍svg实现环形的用法，以及 stroke-dasharray, stroke-dashoffset表示的意义： [https://www.cnblogs.com/daisygogogo/p/11044353.html](https://www.cnblogs.com/daisygogogo/p/11044353.html)
  2、[https://jakearchibald.com/2013/animated-line-drawing-svg/](https://jakearchibald.com/2013/animated-line-drawing-svg/)
  3、国外实现环形进度条好文： [https://css-tricks.com/building-progress-ring-quickly/](https://css-tricks.com/building-progress-ring-quickly/)

所以，看了上述几篇文章，才能看下面的svg代码，So，svg的基本知识就不多讲了。

html: （代码用vue书写）
```js
<div id="app">
  <svg
      class="progress-ring"
      width="120"
      height="120">
    <circle
        class="progress-ring__circle"
        stroke="#0C7CEB"
        stroke-width="10"
        fill="transparent"
        r="50"
        cx="60"
        cy="60"/>
  </svg>


  <p>进度为：{{ initialVal }}</p>
  <button @click="minusOne"> 点我减1</button>
  <button @click="plusOne"> 点我加1</button>
  </div>
</div>
```

css代码：（关于这块也是有点说的， 继续往下看吧~）
```css
<style>
  .progress-ring__circle {
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
  }
</style>
```

Js代码：
```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
      el: document.getElementById('app'),
      data() {
        return {
            initialVal: 70,
            perimeter: 0,
        }
      },
      mounted() {
          const el = document.querySelector('.progress-ring__circle');
          const radius = el.r.baseVal.value;
          this.perimeter = 2 * Math.PI * radius;
          // 虚线长为周长，间距为周长，如此循环
          el.style.strokeDasharray = `${this.perimeter} ${this.perimeter}`;
          this.setOffset();
      },
      methods: {
          setOffset() {
              const offset = this.perimeter - (this.initialVal/100) * this.perimeter;
              const el = document.querySelector('.progress-ring__circle');
              el.style.strokeDashoffset = offset;
          },
          minusOne() {
              this.initialVal -= 1;
              this.setOffset();
          },
          plusOne() {
            this.initialVal += 1;
            this.setOffset();
          },
      }
  })
</script>
```
来理解一下svg的思路：

Svg 实现环形图的原理是：**设置stroke-dasharray虚线长度等于当前圆的周长，间隔大于或者等于圆的周长（这样相当于 虚线长是圆的一周，隔个圆的一周长度，再进行环形（效果就这么出来） ）**

而圆的周长怎么算呢， 圆的周长 = 2 * Pi * r(圆的半径)

所以初始mounted函数中，代码中，设置了元素的strokeDasharray 为周长，间隔等于周长，
```js
mounted() {
          const el = document.querySelector('.progress-ring__circle');
          const radius = el.r.baseVal.value;
          this.perimeter = 2 * Math.PI * radius;
          // 虚线长为周长，间距为周长，如此循环
          el.style.strokeDasharray = `${this.perimeter} ${this.perimeter}`;
          this.setOffset();
},
```
而this.setOffset()的作用是对线条设置偏移，实现动态变化，上述文章也说了：

![image.png](https://upload-images.jianshu.io/upload_images/1273659-54c3e31177db8262.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


而我们的svg circle，当设置了stroke-dashoffset时，默认其出发点是为中心的垂直和水平向右倾斜。所以有必要负的角度旋转圆，来获得想要的效果。

未对环形设置样式之前，是这样的：

![image.png](https://upload-images.jianshu.io/upload_images/1273659-bc7ed718d09dd358.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

加上style样式后，就变成我们想要的，从12点方向开始顺时针旋转，如下图
```css
.progress-ring__circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/1273659-c568b9befe80c38b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里，transform 和transform-origin 的用法，有一篇不错的文章讲的很棒：[http://www.360doc.com/content/20/0710/23/25947829_923464975.shtml](http://www.360doc.com/content/20/0710/23/25947829_923464975.shtml)， 当然你也可以参考我的这篇文章进行阅读学习：https://www.jianshu.com/p/074cb7116537

接上面offset设置，初始执行了函数setOffset,  总周长 减去 百分比周长，得到的是个正数，上面截图怎么说来着，
  *   offset 为正数，向左 偏移 offset 个单位
 *   offset 为负数，向右 偏移 offset 个单位

![image.png](https://upload-images.jianshu.io/upload_images/1273659-4c53eba7682eaa9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```css
const offset = this.perimeter - (this.initialVal/100) * this.perimeter;
```

默认没设置strokeDashoffset、也没设置上述的样式（旋转等），circle是个满圆，现在设置了个正数，即可以这么理解，即满足我们的要求了


![image.png](https://upload-images.jianshu.io/upload_images/1273659-ccc7a12cd548ad08.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

而当点击点我减一的按钮时，百分比持续减少，根据 **被减数 -  减数 = 差**，百分比就是里面的减数，**被减数不变，减数持续减少，得到的差即offset值就变得越来越大，即每次向左往回拉的就越厉害**，视觉看起来就是**逆时针走**

同理，当点击点我加一的按钮时，百分比持续增大，根据 **被减数 -  减数 = 差**，百分比就是里面的减数，**被减数不变，减数持续增大，得到的差即offset值就变得越来越小，即每次向左往回拉的就越小**，视觉看起来就是**顺时针走**
