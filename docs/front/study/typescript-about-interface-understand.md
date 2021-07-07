<font color=red size=5>TYPESCRIPT 关于interface理解</font>

网址：[Typescript入门教程](https://ts.xcatliu.com/advanced/class)

#### 1、面向对象编程三大特性： 继承、多态、封装

**继承：** 子类继承父类，有父类的特征，也有自己的特征，就像孩子和父亲一样，遗传了父亲的特征，但也有自己的特征。

**多态：** 由继承而产生的相关的不同类，对于同一种方法有不同的实现。

*比如： 双胞胎姐妹都是父母的孩子，都会吃饭。但对于吃饭而言，一个可能吃的狼吞虎咽，一个可能吃的细嚼慢咽。*

多态的实现，在我总结看来应该有2种方法：

* 可以采取继承父类后，方法的重写，
* 可以采取，父类中进行抽象方法的定义，子类中分别实现该抽象方法，里面可以进行不同的书写。


**封装：** 对于数据操作的细节隐藏起来，只暴露对外的接口。这样可以很好的保护内部的数据

<!-- more -->

#### 2、接口(interface)

一般来说类与类之间，只能是一个继承一个的关系，不能有多个的关系。而接口，当它是概括出类的一些独有方法，在要使用时，在对应的类中implements(实现)即可。

当然接口也可以对于对象的形状进行描述（具体的详细介绍可以参考 [对象的类型--接口](https://ts.xcatliu.com/basics/type-of-object-interfaces))

所以综上两点,下面自己实现了一个demo,更好的理解此概念。

**场景：**

不管是房子还是车子等，都要有门，门的属性无非这些： 宽度，高度，颜色，材质。

**预处理步骤：**

* 将门的形状定义为一个接口，包含上述我们所说的属性

* 将造门的方法定义为一个单独的接口，具体造成什么样的门，到房子这个类，汽车这个类中去实现。

typescript一下子没办法上手，所以先从熟悉的E6写法来写demo吧。

**先定义一个父类Thing,里面设置我们所需要的属性**

```js
class Thing {
	constructor() {
		this.height = 0;
		this.width = 0;
		this.color = "";
		this.texture = "";
	}
	
  setAttribute(doorAttribute) {
  	const { height,width, color, texture } = doorAttribute;
  	this.height = height;
  	this.width = width;
		this.color = color;
		this.texture = texture;
  }
}
```

**再定义一个子类House, 它继承了父类Thing。**

这样我们继承Thing中的所有属性和方法，并且还可以使用自定义的方法buildDoor来打印想要的结果

```js
class House extends Thing {
	buildDoor() {
		console.log(`house door is, height: ${this.height},width:${this.width},
  	        color: ${this.color}, texture: ${this.texture}！`);
	}
}
```

**然后我们来测试验证一下结果**
```js
const house = new House();
const houseValue = { 
	height: 800, 
	width: 200, 
	color: 'red', 
	texture: 'wood', 
};
house.setAttribute(houseValue);
house.buildDoor(); 

//打印结果如下：
//house door is, height: 800,width:200,color: red, texture: wood！

```

转变到typescript如何书写？其实参考预处理步骤和ES6的写法，还是很好写出来。

* 将门的形状定义为一个接口,为后面对象赋值使用

```ts
interface DoorAttribute {
	height: number;
	width: number;
	color: string;
	texture: string;
}
```

* 建门的方法定义为一个接口，车子和房子具体要造什么样的门，在各自的类中实现。

```ts
interface Door {
	buildDoor();
}
```

* 父类Thing
```ts
class Thing {
	height;
	width;
	color;
	texture;
  setAttribute(doorAttribute: DoorAttribute) {
  	this.height = doorAttribute.height;
  	this.width = doorAttribute.width;
  	this.color = doorAttribute.color;
  	this.texture = doorAttribute.texture;
  };
}
```

* 子类House, 它继承了父类Thing并实现buildDoor接口

**注意这里的extends、implements关键字**

```ts
class House extends Thing implements Door {
	 buildDoor() {
	 	 console.log(`house door is, height: ${this.height},width:${this.width}
  	        color: ${this.color}, texture: ${this.texture}！`);
	 }
}
```

* 子类Car,同样也继承了父类Thing并实现buildDoor接口

```ts
class Car extends Thing implements Door {
	buildDoor() {
	 	console.log(`car door is, height: ${this.height},width:${this.width}
  	        color: ${this.color}, texture: ${this.texture}！`);
	}
}
```

* 实例化House和car,测试验证结果

**注意这里使用了 对象的类型--接口 的特性**

```ts
const house = new House();
const houseValue: DoorAttribute = { height: 800, width: 200, color: 'red', texture: 'wood', };
house.setAttribute(houseValue);
house.buildDoor();


const car = new Car();
const carValue: DoorAttribute = { height: 300, width: 600, color: 'black', texture: 'aluminum', };
car.setAttribute(carValue);
car.buildDoor();

```

* 打印结果如下：
```ts
house door is, height: 800,width:200
  	        color: red, texture: wood！
car door is, height: 300,width:600
  	        color: black, texture: aluminum！
```

以上的例子，我们熟悉了 **类实现接口**、**对象的类型--接口** 的知识点。

同时，我们也实现了继承（子类继承父类）、多态（接口在不同类的中实现书写）的面向对象特性。

当然这里面值得一提的是，多态的实现还可以用abstract关键字进行实现，而interface与abstact的异同点，请看这篇分享。

其他关于类与接口的理解，还是参考最开始的链接。




