#### 静态环形进度条css3实现

**使用html + css3 + js实现（项目中实现的）：**

html:
```html
<div class="circle_wrapper" >
  <div class="wrapper left">
    <div class="circleProgress leftcircle" ></div>
  </div>
  <div class="wrapper right">
    <div class="circleProgress rightcircle"></div>
  </div>
  <div class="text-wrap">
    <div>70</div>
  </div>
</div>
```
css ：
```css
<style>
    .circle_wrapper {
        width: 80px;
        height: 80px;
        background: linear-gradient(to bottom, #00C3DB, #0C7DEB);
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .wrapper {
        width: 40px;
        height: 80px;
        position: absolute;
        top: 0;
        overflow: hidden;
    }


    .circleProgress {
        width: 40px;
        height: 80px;
        background: rgba(255,255,255, 0.8);
        position: absolute;
        top: 0;
    }


    .rightcircle {
        border-radius: 0 40px 40px 0;
        right: 0;
       transform-origin: left center;
    }


    .leftcircle {
        border-radius: 40px 0 0 40px;
        left: 0;
       transform-origin: right center;
    }


    .right {
        right: 0
    }


    .left {
        left: 0
    }


    .text-wrap {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #fff;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
```

上述css代码的作用分别介绍一下，

1、 .circle_wrapper的作用是 实现一个宽高都为80px 带渐变背景色的圆：

![image.png](https://upload-images.jianshu.io/upload_images/1273659-0a4e9507ad872bc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2、类名wrapper left , 和 wrapper right的作用是 设置左右两个宽度为40px, 高度为80px 的长方形，

![image.png](https://upload-images.jianshu.io/upload_images/1273659-4913fdc9a6cf0c3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

![image.png](https://upload-images.jianshu.io/upload_images/1273659-5640ad240a381328.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**overflow: hidden 作用里，里面的div会进行旋转会超出，父级将超出部分盖住**

3、类名 circleProgress rightcircle  和 类名 circleProgress leftcircle的作用是，在上述对应的半个左右div容器里，弄个半圆出来， 这个半圆就是实际用来 旋转的

**注意： border-radius 的值里，四个值分别代表上、右、下、左 的圆角值**

所以，对于 rightcircle 是右边和下边圆角值为40px, 即右边和下边弄成半圆形，其他位置值为0， 
对于 leftcircle 是左边和上边圆角值为40px, 即左边和上边弄成半圆形，其他位置值为0，


4、上述设置样式后，还没有出现个环形，那如何出现环形呢，就是类名 text-wrap起作用了，即它是一个比最外层80*80 要小得一个正方形，设置border-radius = 50%后，就可以构成环形了，如下图所示：

（这里text-wrap设置的宽高都是70px, 则此时环形的width就是 80- 70 = 10px咯）

![image.png](https://upload-images.jianshu.io/upload_images/1273659-80898727502a6a80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在环形是出来了，如何让其根据不同的值，显示不同的进度（后面的进度条不是全满的状态，而是值多少，就是多少），这就涉及到css3 的旋转计算了

Js  代码实现思路：
  1、 圆周角是360度，分成100份（因为进度满了是100%），每一份是3.6度
  2、 计算要转的角度，这里采用顺时针，从右向左旋转，
     比如现在 通过计算出来百分比是 70%， 则需要转动的角度是 70 * 3.6 = 252度， 
    如果算出来的角度大于180度，则右边是转满180度，还剩下252 -180 = 72度，由左边的圆形旋转这个角度即可
3、代码整体是用vue实现的，这里使用组件的局部指令实现功能， 如下的**v-left-circle-progress，v-right-circle-progress**，：

```html
<div class="wrapper left">
  <div class="circleProgress leftcircle" v-left-circle-progress=“{already: 70, all: 100}"></div>
</div>
<div class="wrapper right">
  <div class="circleProgress rightcircle" v-right-circle-progress=“{already: 70, all: 100}"></div>
</div>
```

js:
```js
 <script src="[https://cdn.jsdelivr.net/npm/vue/dist/vue.js](https://cdn.jsdelivr.net/npm/vue/dist/vue.js)"></script>
<script>
  new Vue({
      el: document.getElementById('app'),
      directives: { // 自定义指令，环形进度条动态计算进度,从右往左顺时针旋转
          'left-circle-progress': {
              inserted(el, binding, vnode) {
                  let that = vnode.context;
                  const resultAngle = that.getResultAngle(binding.value);
                  if(resultAngle >= 180) { // 左边旋转
                      el.style.transform = `rotate(${resultAngle - 180}deg)`
                  }
              },
          },
          'right-circle-progress': {
              inserted(el, binding, vnode) {
                  let that = vnode.context;
                  const resultAngle = that.getResultAngle(binding.value);
                  // 右边旋转，超过180度，旋转180度，反之旋转对应的度数
                  el.style.transform = (resultAngle < 180) ? `rotate(${resultAngle}deg)` : `rotate(180deg)`;
              },
          }
      },
      methods: {
          getResultAngle(obj) {
              const { already, all } = obj
              let everyAngle = 3.6 // 分成100份，360度，一份3.6度
              const ratio = (already / all) * 100
              const result = everyAngle * ratio // 最终要转的角度
              return result;
          },
      }
  })
</script>
```
最终就实现了该效果：

![image.png](https://upload-images.jianshu.io/upload_images/1273659-df73bb2e81959c20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<Valine />
