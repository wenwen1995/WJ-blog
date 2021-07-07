### 1、transform的教程，参见菜鸟教程：[transform菜鸟教程](https://www.runoob.com/cssref/css3-pr-transform.html)

简言之，可对 Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。

 ### 2、 transform-origin教程， 参见菜鸟教程和MDN教程： 

*   菜鸟教程：[transform-origin 菜鸟教程](https://www.runoob.com/cssref/css3-pr-transform-origin.html)

*   MDN教程： [transform-origin mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

简言之，该属性允许您更改转换元素的位置。

2D转换元素可以改变元素的X和Y轴。 3D转换元素，还可以更改元素的Z轴。

**注意： 使用此属性必须先使用 [transform](https://www.runoob.com/cssref/css3-pr-transform.html) 属性。**

语法：`transform-origin: x-axis y-axis z-axis;`
![image.png](https://upload-images.jianshu.io/upload_images/1273659-7b5c68975d9d309d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**我的理解： transform-origin 用来变形原点（即围绕哪个原点进行变形），transform用来变形**

**默认未设置的情况下，变形原点都是盒子的中心点**，而有些情况我们需要不在中心点对其进行旋转和缩放等，则需要通过transform-origin 来动态改变原点，再进行变形

这篇文章总结的很好：[介绍transform-origin的新浪博客](http://blog.sina.com.cn/s/blog_780a942701014xl8.html)

![image.png](https://upload-images.jianshu.io/upload_images/1273659-c9fca92d68204484.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/1273659-d5dc8e0f8df777a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

结合起来看，画个示意图就是这样的：

![image.png](https://upload-images.jianshu.io/upload_images/1273659-25cb65065daa8f9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我这边仿照着mdn的例子，创建了demo用来加深理解, 可以看看这个[例子](http://jsrun.net/ikVKp)
![image.png](https://upload-images.jianshu.io/upload_images/1273659-bef55c402ba3ed83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




