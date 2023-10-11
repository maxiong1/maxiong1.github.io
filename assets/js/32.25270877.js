(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{528:function(t,s,a){"use strict";a.r(s);var n=a(35),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),a("p",[t._v("引用的 futeng 的话：")]),t._v(" "),a("p",[t._v("牢记：站高一个维度去理解问题！")]),t._v(" "),a("p",[t._v("为了理解DOM，我们至少需要站在浏览器的角度思考。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("txt")]),t._v("和"),a("code",[t._v("html/xml")]),t._v("的区别仅仅是因为后者是有组织的结构文件;")]),t._v(" "),a("li",[t._v("浏览器将结构化的文档以树的数据结构读入浏览器内存，并将每个树的子节点定义为一个NODE对象")]),t._v(" "),a("li",[t._v("这每个节点（NODE）都有自己的属性（名称、类型、内容...）")]),t._v(" "),a("li",[t._v("NODE之间有层级关系（parents、child、sibling...）")]),t._v(" "),a("li",[t._v("以上已经完成文档的建模工作（将文档内容以树形结构写入内存），此时再编写一些方法来操作节点（属性和位置信息），即为NODE API")])]),t._v(" "),a("p",[t._v("抽象一下：")]),t._v(" "),a("ul",[a("li",[t._v("DOM是一种将HTML/XML文档组织成对象模型的建模过程；")]),t._v(" "),a("li",[t._v("DOM建模重点在于如何解析HTML/XML文档和开放符合DOM接口规范的节点操作API接口")])]),t._v(" "),a("p",[t._v("再抽象一下：")]),t._v(" "),a("ul",[a("li",[t._v("解析文档，建模成对象模型，开放API接口。")])]),t._v(" "),a("p",[t._v("最后：")]),t._v(" "),a("ul",[a("li",[t._v("DOM：Document Object Model 文档对象模型")])]),t._v(" "),a("p",[t._v("再回顾下整个过程，每个步骤都可以问自己几个问题，\n比如：\nDOM到底是建模过程，还是最后建的那个模型，\n还是指操作节点的API接口呢，还是...？")]),t._v(" "),a("p",[t._v("以上是站在浏览器的角度思考DOM，你还可以站在浏览器设计人员、网页编码人员等角度考虑：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("DOM是一个对象模型，它将文档内容建模为对象并组织为树状结构，定义了这些对象的行为和属性以及这些对象之间的关系")])]),t._v(" "),a("li",[a("p",[t._v("DOM跟JavaScript什么关系？")]),t._v(" "),a("ul",[a("li",[t._v("DOM很显然诞生在浏览器，一开始是用JS实现的；")]),t._v(" "),a("li",[t._v("但随着DOM本身的发展，已经形成规范，你可以用任何一种语言比如Python来解析文档，生成对像树，只要满足DOM标准，包括开放标准的操作接口，那你实现的就是一个DOM")])])]),t._v(" "),a("li",[a("p",[t._v("DOM开放的接口如何操作？")]),t._v(" "),a("ul",[a("li",[t._v("JS原生接口使用。")]),t._v(" "),a("li",[t._v("JQuery高纬度封装如何使用。")])])])]),t._v(" "),a("p",[t._v("牢记：站高一个维度去理解问题 ！")]),t._v(" "),a("h2",{attrs:{id:"虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[t._v("#")]),t._v(" 虚拟DOM")]),t._v(" "),a("p",[t._v("比如：更新文章列表")]),t._v(" "),a("p",[t._v("一般情况下，我们会清空容器，在渲染")]),t._v(" "),a("p",[t._v("虚拟dom是diff出不一样的节点，只渲染不同的节点内容")]),t._v(" "),a("p",[t._v("为什么说如果大批量操作DOM会影响效能呢，请看下面代码：")]),t._v(" "),a("p",[t._v("DOM元素非常大，我们创建一个"),a("code",[t._v("<p>")]),t._v("元素")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 谷歌74.0.3729.108 打印出了241个第一层属性")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Virtual DOM 是以js(普通的js对象)模拟特定DOM结构而产生的树状结构。")])]),t._v(" "),a("p",{staticClass:"tip"},[t._v("VDOM保证的并不是在所有状态下都比操作原生DOM来的快速，比如我们可以快速的找到我们需要操作的dom元素")]),t._v(" "),a("p",[t._v("用途是不直接操作DOM，而是操作这些树，再将这些变更的更新到真实的DOM上，提升效能")]),t._v(" "),a("p",[t._v("当我们频繁的去操作DOM的时候可能会有性能问题")]),t._v(" "),a("p",[t._v("vnode库")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//github.com/snabbdom/snabbdom"}},[t._v("snabbdom")])])]),t._v(" "),a("h2",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")])])}),[],!1,null,null,null);s.default=v.exports}}]);