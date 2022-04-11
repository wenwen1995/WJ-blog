(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{364:function(t,s,e){t.exports=e.p+"assets/img/1.90b1fea3.png"},365:function(t,s,e){t.exports=e.p+"assets/img/2.0e54099c.png"},366:function(t,s,e){t.exports=e.p+"assets/img/5.131e80d0.png"},367:function(t,s,e){t.exports=e.p+"assets/img/3.b095b78c.png"},368:function(t,s,e){t.exports=e.p+"assets/img/4.0e3c0f1b.png"},369:function(t,s,e){t.exports=e.p+"assets/img/6.97cccc03.png"},370:function(t,s,e){t.exports=e.p+"assets/img/7.1813cb26.png"},371:function(t,s,e){t.exports=e.p+"assets/img/8.95487286.png"},372:function(t,s,e){t.exports=e.p+"assets/img/9.ca63ff11.png"},373:function(t,s,e){t.exports=e.p+"assets/img/10.845759a4.png"},374:function(t,s,e){t.exports=e.p+"assets/img/11.449d3766.png"},375:function(t,s,e){t.exports=e.p+"assets/img/12.6ac7fc05.png"},403:function(t,s,e){"use strict";e.r(s);var a=e(44),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"git-revert-vs-git-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-vs-git-reset"}},[t._v("#")]),t._v(" git revert VS git reset")]),t._v(" "),a("blockquote",[a("p",[t._v("日常工作中，我们会十分频繁的用到git相关命令，git可以说是我们工作的一部分，合理正确的使用好git,对我们十分有帮助")])]),t._v(" "),a("p",[t._v("先看下git 的三大区（工作区、暂存区、版本库）：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("工作区 working directory")]),t._v(" "),a("p",[t._v("此时文件处于 untracked（未追踪） 状态，此时使用git add命令可将文件加入到暂存区")])]),t._v(" "),a("li",[a("p",[t._v("暂存区 staging area")])])]),t._v(" "),a("p",[t._v("此时文件处于 unstaged 状态，此时使用commit 命令将文件提交到版本库")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("版本库 repositoty")])]),t._v(" "),a("p",[t._v("这里提供一个学习的链接："),a("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("git学习地址"),a("OutboundLink")],1),t._v("，学习内容会让你更丰富的理解git相关知识。")]),t._v(" "),a("p",[t._v("还有个图片，可以帮助大家记忆：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(364),alt:"学习图片"}})]),t._v(" "),a("p",[t._v("在这里我要提到的是git revert和git reset。")]),t._v(" "),a("p",[t._v("先开始总结一下异同点：")]),t._v(" "),a("p",[a("strong",[t._v("相同点：")]),t._v(" 都可以恢复某次提交的记录")]),t._v(" "),a("p",[a("strong",[t._v("不同点：")])]),t._v(" "),a("p",[a("code",[t._v("git revert")])]),t._v(" "),a("ul",[a("li",[t._v("这个命令创建一个新的提交,撤销之前的某次或者连续、不连续的提交；")]),t._v(" "),a("li",[t._v("会在git提交历史中添加新的记录(不修改现有历史)；")]),t._v(" "),a("li",[t._v("头指针往最新的走")])]),t._v(" "),a("p",[a("code",[t._v("git reset")])]),t._v(" "),a("ul",[a("li",[t._v("微微有些复杂的一个命令，有好些可以带的参数。")]),t._v(" "),a("li",[t._v("是针对于暂存区处理，会修改当前头指针指向")]),t._v(" "),a("li",[t._v("会改变现有的历史提交记录")])]),t._v(" "),a("p",[t._v("字面意思理解一下二者的区别：")]),t._v(" "),a("ul",[a("li",[t._v("reset 是重置的意思，revert 是恢复、还原的意思，作为 Coder ，第一感觉 reset 的效果比 revert 更猛一些，实际情况也的确如此，")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("那我们经常会碰到的场景是这样的：")]),t._v(" "),a("blockquote",[a("p",[t._v("比如我们前端已经联调测试好需求代码了，提交上去了。后面也有几次新的提交。 但此时来了个新的bug修复紧急要上线，并且要求之前测好提交的那部分功能暂时先不上，这时候我们该怎么办？")])]),t._v(" "),a("p",[t._v("模拟一下场景，我们已经提交了好几次，当前的HEAD指针指向最新的commit如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(365),alt:"提交场景1"}})]),t._v(" "),a("p",[t._v("注意：上述这个界面，在window的环境下，可以输入"),a("code",[t._v("gitk")]),t._v("查看所有的提交列表信息，比git log直观很多，当然也可以通过这个命令： "),a("code",[t._v("gitk xxxx(具体某个文件)")]),t._v("，显示出来某个文件的一系列提交记录")]),t._v(" "),a("p",[t._v("此时来了新的bug改动，相当于我们要在提交的1的基础上进行改动，进行新的提交，后面提交的内容还需要，只是暂时不用，怎么办呢？")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("git reflog")]),t._v(" 先查看所有的提交记录了（类似于数据库保存了所有的提交的操作记录）")]),t._v(" "),a("p",[a("img",{attrs:{src:e(366),alt:"reflog看到所有的提交记录"}})]),t._v(" "),a("h4",{attrs:{id:"先试试git-reset会出现什么结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先试试git-reset会出现什么结果"}},[t._v("#")]),t._v(" 先试试git reset会出现什么结果？")]),t._v(" "),a("p",[t._v("1、先输入 "),a("code",[t._v("git reset c9afe3")]),t._v(",用于回退到提交记录1，重做一次新的操作\n此时现象是：后面2次提交的记录都没了（其实提交的内容还在，只是我们看不到了）,HEAD指针指向了第一次提交记录,保留最新的暂存区的内容（2,3之前commit过了，所以内容还在）")]),t._v(" "),a("p",[a("img",{attrs:{src:e(367),alt:"提交场景2.1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(368),alt:"提交场景2.2"}})]),t._v(" "),a("p",[t._v("这里提一嘴：")]),t._v(" "),a("p",[t._v("git reset 常用命令有三个分别是 soft, hard, mixed，这里相当于是 git reset --mixed c9afe3。关于这3者的区别如下：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git reset --soft")])])]),t._v(" "),a("p",[t._v("移动HEAD到指定的 commit 节点，但"),a("strong",[t._v("保留 工作区和暂存区的内容")]),t._v("，简单来说就是你的代码还在只是变成了未提交状态或未添加状态")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("git reset --hard")])])]),t._v(" "),a("p",[t._v("彻底丢掉当前版本的修改，并更改HEAD移动到指定的commit节点；就是回退到指定的版本。"),a("strong",[a("font",{attrs:{color:"red",size:"3"}},[t._v("不保留本地任何修改（危险！！）")])],1)]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("git reset --mixed (默认的)")])])]),t._v(" "),a("p",[t._v("--mixed是reset的默认参数，也就是当你不指定任何参数时的参数使用的。")]),t._v(" "),a("p",[t._v("它"),a("strong",[t._v("只会保留暂存区的内容")]),t._v("，然后将HEAD移动到指定的commit节点。")]),t._v(" "),a("p",[t._v("我们再次回退到之前最新的commit记录,输入 "),a("code",[t._v("git reset ed2668d")]),t._v("。接下来，我们试下reset后面加上soft参数")]),t._v(" "),a("h4",{attrs:{id:"试试git-reset后面加上soft参数变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#试试git-reset后面加上soft参数变化"}},[t._v("#")]),t._v(" 试试git reset后面加上soft参数变化")]),t._v(" "),a("p",[a("img",{attrs:{src:e(369),alt:"git reset后面加上soft参数的记录"}})]),t._v(" "),a("p",[t._v("我们再次回退到之前最新的commit记录,输入 "),a("code",[t._v("git reset ed2668d")]),t._v("。接下来，我们试下reset后面加上hard参数")]),t._v(" "),a("h4",{attrs:{id:"试试git-reset后面加上hard参数变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#试试git-reset后面加上hard参数变化"}},[t._v("#")]),t._v(" 试试git reset后面加上hard参数变化")]),t._v(" "),a("p",[a("img",{attrs:{src:e(370),alt:"git reset后面加上hard参数的记录"}})]),t._v(" "),a("p",[t._v("所以对于之前我们说的问题："),a("strong",[t._v("此时来了新的bug改动，相当于我们要在提交的1的基础上进行改动，进行新的提交")]),t._v("，可以使用安全的命令实现")]),t._v(" "),a("p",[a("code",[t._v("git reset c9afe3(这个提交id为需要在之前提交的某个基础上改动的id)")])]),t._v(" "),a("h4",{attrs:{id:"git-revert会出现什么结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-revert会出现什么结果"}},[t._v("#")]),t._v(" git revert会出现什么结果？")]),t._v(" "),a("p",[t._v("这里要普及一下revert命令的知识：")]),t._v(" "),a("p",[t._v("git revert 撤销某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销，作为一次最新的提交，\n可以单个撤销，也可以连续撤销，亦可以不连续撤销，命令如下")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git revert "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销前一次 commit")]),t._v("\ngit revert "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销前前一次 commit    ")]),t._v("\ngit revert commit_id "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（比如:fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("连续：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n commit_id_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit_id_end\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("不连续：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n commit_id_1\ngit revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n commit_id_3\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用该命令可以撤回到commit_id_1和commit_id_3的提交")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们重新建个index.js, 提交3次，形成如下的记录：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(371),alt:"初始项目"}})]),t._v(" "),a("p",[t._v("我们试下命令  "),a("code",[t._v("git revert cb97721")]),t._v(",想要撤销2的改动，3保留，即在1的基础上添加新的改动。即原来是")]),t._v(" "),a("p",[t._v("1---\x3e2 ----\x3e3")]),t._v(" "),a("p",[t._v("希望变成：")]),t._v(" "),a("p",[t._v("1---\x3e3---\x3e??，然后再继续接下来的改动")]),t._v(" "),a("p",[t._v("(ÒωÓױ)！？输入命令后，控制台竟然有冲突？？")]),t._v(" "),a("p",[a("img",{attrs:{src:e(372),alt:"冲突内容"}})]),t._v(" "),a("p",[t._v("查阅一番得知，这样的出现是正确的，因为对于我们的第1、2、3次提交，都针对的是同一个index.js文件。对于我们上述输的命令，")]),t._v(" "),a("p",[a("code",[t._v("git revert cb97721")])]),t._v(" "),a("p",[t._v("它要"),a("strong",[t._v("撤销第二次的提交")]),t._v("，即相当于第二次提交的内容没有，"),a("strong",[t._v("显示第一次提交的内容")]),t._v("，而第一次index.js里面的内容是什么呢？")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("而现在的内容是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("所以，多出了中间绿色圈出来的这部分内容：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(373),alt:"冲突内容标注"}})]),t._v(" "),a("p",[t._v("我们可以依据项目实际内容做抉择后，比如这里我就想恢复到提交1那时候的状态，所以解决冲突后,")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# modify and save file\ngit add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("一顿操作后，再次查看，可以看到发生了变化")]),t._v(" "),a("p",[a("img",{attrs:{src:e(374),alt:"解决冲突内容后的提交"}})]),t._v(" "),a("p",[t._v("或者对于我们提到的情况，可以不使用上述命令，reset或者revert, 使用checkout命令，这里有个checkout链接学习："),a("a",{attrs:{href:"https://blog.csdn.net/longintchar/article/details/82953474",target:"_blank",rel:"noopener noreferrer"}},[t._v("git checkout 用法"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("我们使用里面 checkout 的第一种用法,用于拿暂存区的文件覆盖工作区的文件，或者用指定提交中的文件覆盖暂存区和工作区中对应的文件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("所以对于我们的情景，应该写出的语句是:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout cef6676 index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reverted to 提交1的记录"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("即可以解决我们的问题。")]),t._v(" "),a("blockquote",[a("p",[t._v("PS: 如果我们过了一段时间之后，还需要之前 暂时不见的 改动的内容该怎么办呢？留个思考题，我们下次接着说。")])]),t._v(" "),a("p",[t._v("git的神奇魔法很多，很多知识我们在实际运用中还得好好学习")]),t._v(" "),a("p",[a("img",{attrs:{src:e(375),alt:"哈哈哈"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);