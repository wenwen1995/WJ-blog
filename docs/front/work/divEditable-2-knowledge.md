<font color=blue size=6>六期模块--计算公式功能点梳理(二)</font>

### （二） 梳理代码 + 解惑篇

> 上篇说了selection、range相关的知识点，这篇我们来说说怎么实现的逻辑，和其中遇到的问题


简化版的逻辑流程图实现如下：

<ImgViewer :src="require('./2022-5-6/7.png')"/>


具体的代码流程图图（可放大，对比代码参考）：

<ImgViewer :src="require('./2022-5-6/5.png')"/>

上篇说到的一些问题：

<font style="color: grey; ">1、如何确定当前的光标位置，可以支持键盘输入@显示，也支持选择后插入？</font>

<font style="color: grey; ">2、选择的是变量，如何显示为蓝色，且光标不可定位在其中 ？</font>

<font style="color: grey; ">3、如何与后台交互这部分数据，并回显数据 ？</font>

<font style="color: grey; ">4、如何输入@后显示配置的下拉列表，并且支持模糊搜索？</font>

<font style="color: grey; ">5、如何回车后也支持上述功能实现（之前是不支持的）?</font>



通过对比逻辑梳理图就可以发现，除了第三个问题，**其他问题都已在图中显示并解决**

第3个问题，由于显示是类似于qq空间这样处理的：

<ImgViewer :src="require('./2022-5-6/6.png')"/>

每个@变量， **实际上在contentEditable div里是一个button。** 而这个div的内容，后台不需要存储这么多button之类的字符串，所以要对button等做一层转化。


与后台交互的内容如下：

```js
  getResultData() {
      const obj = Object.assign({}, this.form)
      // 将内容去除标签
      const reg = /<\/?button.*?>/g // 去除button标签
      let str = obj.calculationFormula.replace(reg, '~').replace(/&nbsp;/g, ' ') // 将变量首尾前面加~符号，如~@减长sssss2~，为了反解析，将nbsp;转化成空格
      str = str.replace(/<span.*?>|<\/span>/ig, '')
      obj.calculationFormulaShow = str // 未去除，即obj.calculationFormula内容为本身的editable的div的innerHtml, 用来回显内容
      obj.calculationFormula = this.$refs['editableRef'].$el.innerText.replace(/(@[A-Za-z0-9\u4e00-\u9fa5]+)/g, '~$1~').replace(/\n|\r/g, '').replace(/\s+/g, ' ') // innerText控件自带获取不带html内容的方法， 将变量进行首尾~@变量~处理，正则去除回车换行，将空格转化为空字符串
      //...其他一些处理
      return obj
  },
```

回显处理：

```js
 Api.getDetail(data.id).then(res => {
    const obj = Object.assign({}, res.data)
    obj.calculationFormula = obj.calculationFormulaShow.replace(/\~@/g, '<button contenteditable="false" style="color: #66b1ff;border: none;background: #fff" onclick="return false">@')
        .replace(/\~/g, '</button>').replace(/>\s+/g, '>&nbsp;').replace(/FNL/g) // 将变量~@变量~转化为button形式
    this.form = obj
})
```

以上结束~



