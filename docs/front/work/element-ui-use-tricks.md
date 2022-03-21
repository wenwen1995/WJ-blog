### element-ui 使用时的奇淫巧技

#### 1、el-table 的表格cell,  开启全局的toolTip提示？

#### 2、el-dialog禁止点击任意空白处关闭弹窗（默认是dialog是开启这个功能的）？

答：
对（1），局部的某个组件文件中, 在el-table-column标签中配置show-overflow-tooltip可以实现提示，但就是太麻烦了
对（2）， 局部的某个组件文件中， 可以在el-dialog中，增加属性  `:close-on-click-modal="false" ` 实现, 但一个个加也太麻烦了

![这双眼睛看透了一切~](https://upload-images.jianshu.io/upload_images/1273659-45cc922d76b212e9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

哈哈，那就动手实现吧，全局设置上述功能！在main.js里这么写：

```js
//......
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css
//......

// 默认开启悬浮提示样式，定义FitTable 扩展table的样式
ElementUI.TableColumn.props.showOverflowTooltip= {type:Boolean, default: true};
//全局修改默认配置，点击空白处不能关闭弹窗
ElementUI.Dialog.props.closeOnClickModal.default = false
```

#### 3、希望el-table 有这样的功能，table-column组件的属性show-overflow-tooltip是否能同时在对应表头生效?
如下显示：

![图片](https://upload-images.jianshu.io/upload_images/1273659-d4de0bad274245f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

答： 
* 如果是对于个别组件文件，实现该效果，即 百度 查询 **element-ui table renderHeader** 实现即可
* 对于已经写了很多文件来说，要想统一实现该效果，有没有方法？哈哈，答案是有的，不然我怎么截图出来! 接下来需要这几步，就可以实现！

1. 在你项目的某个目录下，新建一个table-column.js, 作用: **继承el-table-column的功能，但是在它上面又进行自己的扩展**！

**table-column.js**， 这里采用了vue jsx的写法，要注意几点，第一，项目的element-ui 中的table是否已经支持renderHeader , 第二，看你的项目是否支持vue jsx, 不支持的话，乖乖的动态写render方法哦~

```js
import { TableColumn } from 'element-ui'

export default {
  name: 'ElTableColumn',
  extends: TableColumn,  // 继承本来的TableColumn 功能
  props: {
    // 使用 renderHeader 方法，设置默认的table-column 表头渲染，当字体超过7个字时(文字出现超出的省略号)，悬浮显示toolTip,
    // 采用jsx 语法进行书写
    renderHeader: {
      type: Function,
      default: (h, { column }) => {
        const { label } = column;
        if(label) {
          const len = label.length;
          return len > 7 ? <el-tooltip class="item" effect="dark" content={label} placement="top">
              <span style={{ width: `100px`,display: 'inline-block',overflow: 'hidden',textOverflow: 'ellipsis'}}>{label}</span>
            </el-tooltip>
            : <span>{ label }</span>
        }
        return <span>{ label }</span>;
      }
    }
  },
}
```

2.  在main.js中，引入这个文件，并且全局注册该组件，覆盖原来的ElTableColumn，

```js
import FitTableColumn from '@/utils/table-column'
Vue.component('ElTableColumn' || FitTableColumn.name, FitTableColumn)
```

配置好上述2点，热更新代码后，效果就有啦~

但我这里： 控制台报warning这个：`[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.` 。。。就先不管了，有空再解决这个warning.



