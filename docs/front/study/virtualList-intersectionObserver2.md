<font color=blue size=6>虚拟列表(item 固定高度--采用intersectionObserver)（二）</font>

> 接上篇，来讨论 向上回滚时，应该做些什么？

### topItem的实现

> 此方法是向上回滚，回显之前的内容。要明确做哪几件事:

> 1、首元素出现时，说明我们需要回显之前的内容了，此时的start 初始索引、 end 结束索引改如何变化？

举个例子来说明：

* 当我们渲染：序号7-21的元素时，回滚时，此时start = 之前的start - increment = 7 - 7 = 0; 此时end = start + visibleCount = 14
* 以此类推。。

> 2、向上回滚时，当start、end索引改变时，我们该做些什么？

* 记录下此时的start, 以便后续的向上回滚

* 回滚时，要将容器的滚动轴 通过 translate3d y轴的距离，移动到当前要回去的元素，以便让他们在当前视口显示

* translate3d y轴的距离 怎么计算呢？ 因为我们向上回滚的时候，是以 展示数量的一半作为减量increment，进行start变化的，则滚动的距离： this.startOffset -= this.itemSize * increment

* 同时，我们应该缓存 记录下此时的首元素距顶部的距离、首元素显示的intersectionRatio，为了之后向上回滚进行的比较


上述代码如下书写：

```js
topItem(entry){
    // 向上回滚
    const {boundingClientRect} = entry
    const {top} = boundingClientRect
    const {topReturnPrevY, topReturnPrevRatio, currentStart} = this.domCatheObj

    // 向上回滚，第一个元素的top, 距离顶部的距离变成越来越大，由负数逐渐变为正数
    if (top > topReturnPrevY && entry.isIntersecting && entry.intersectionRatio >= topReturnPrevRatio) {
        this.start = this.getStartIndex(false)
        this.end = this.start + this.visibleCount
        console.log('return top index... ', this.start, this.end)

        //设置滚动的 translate3d y轴距离: startOffset
        this.setScrollUpStartOffset()


        // 注意：这里需要移除之前设定的多余.last类名, 否则页面会有2个.last类名，并且对他们移除原有的监听、重新设置监听！！
        this.$nextTick(() => {
            this.removeExtraClass()
            this.removeObserve()
            this.observeEle()
        })

        // 缓存当前的start、此时的首元素距顶部的距离、首元素显示的intersectionRatio 参数
        this.updateDomCatheObj({
            currentStart: this.start,
            topReturnPrevY: top,
            topReturnPrevRatio: entry.intersectionRatio
        })
    } else {
        this.updateDomCatheObj({
            topReturnPrevY: top,
            topReturnPrevRatio: entry.intersectionRatio
        })
    }
},
// 移除掉多余的last类名
removeExtraClass() {
    const ele = this.query('.detailContain')
    for(let i = 0 ; i < ele.length; i++) {
        const isNotLast = ele[i].classList.contains('last') && (i !== ele.length - 1)
        if(isNotLast) {
            ele[i].classList.remove('last')
        }
    }
},
removeObserve() {
    const { firstEle, lastEle } = this.setClass()
    this.server.unobserve(firstEle)
    this.server.unobserve(lastEle)
},
setScrollUpStartOffset() {
    const increment = Math.floor(this.visibleCount / 2);
    this.startOffset -= increment * this.itemSize
    if(this.startOffset < 0) {
        this.startOffset = 0;
    }
}
```



> 里面有个注意代码看见了么，我来解释下是啥意思

```js
 this.$nextTick(() => {
    this.removeExtraClass()
    this.removeObserve()
    this.observeEle()
})
```

因为按照之前的分析，滚动到最后，元素不足14个，没有last类名，我们手动给他加上了。但是回滚时，是有14个元素的，如果不移除设置的.last class的话，会有2个出现，影响判断。
同时，还应该移除之前的监听，为其加上新的监听，因为最后一个元素变化了


完整代码请戳：[完整代码](https://jsrun.net/MxeKp)


