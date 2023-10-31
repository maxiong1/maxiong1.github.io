(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{522:function(t,a,s){"use strict";s.r(a);var e=s(35),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li")]),t._v(" "),s("h2",{attrs:{id:"读取全部数据-渲染页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取全部数据-渲染页面"}},[t._v("#")]),t._v(" 读取全部数据，渲染页面")]),t._v(" "),s("p",[t._v("一次性读取上百上千上万条数据，渲染页面（数据量小的情况下需等待全部渲染完成才会展示、数据量大的情况下可能会导致浏览器卡死）")]),t._v(" "),s("p",[t._v("目前优化方案是：虚拟滚动，就是渲染可视视口（浏览器中网站可见内容）的那部分")]),t._v(" "),s("h4",{attrs:{id:"vxetable-虚拟列表-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vxetable-虚拟列表-list"}},[t._v("#")]),t._v(" vxeTable-虚拟列表（list）")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注：")]),t._v(" "),s("p",[t._v("必须固定容器高度和行高")]),t._v(" "),s("ul",[s("li",[t._v("DOM结构\n"),s("ul",[s("li",[t._v("固定高度的容器（是一个父容器、scroll属性值为auto）")]),t._v(" "),s("li",[t._v("父容器包含两个子容器（一个子容器的高度是数据总高度它是浮动的且宽度为0，一个子容器存放数据渲染dom）")])])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("vxe-list--virtual-wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--父容器--\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("vxe-list--y-space"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据总高度且浮动且宽度为0--\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("vxe-list--body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--数据容器--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("原理\n"),s("ul",[s("li",[t._v("通过"),s("code",[t._v("slice")]),t._v("方法拿到一组数据，渲染到页面")]),t._v(" "),s("li",[t._v("计算出第一个数据元素的行高")]),t._v(" "),s("li",[t._v("计算"),s("code",[t._v("结束处索引")]),t._v("：通过可视区域的高度除以行高且向上取整获取可视区域展示数据条数")]),t._v(" "),s("li",[t._v("计算出总数据的高度")]),t._v(" "),s("li",[t._v("计算出数据容器的marginTop属性值为："),s("code",[t._v("起始处的索引*行高")])]),t._v(" "),s("li",[t._v("监听父容器"),s("code",[t._v("onscroll")]),t._v("事件")]),t._v(" "),s("li",[t._v("从新计算"),s("code",[t._v("提取开始处的索引")]),t._v("(父容器的内容垂直滚动的像素数scrollTop/行高 - 1且向下取整)、"),s("code",[t._v("提取终止处的索引")]),t._v("(父容器的内容垂直滚动的像素数scrollTop/行高 - 1且向下取整 + 可视区域展示数据条数)")]),t._v(" "),s("li",[t._v("向上滚动或者向下滚动，计算出新的开始结束索引不能与旧的开始结束索引一致,不一致才会继续下面的操作")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("slice")]),t._v("方法截取数据渲染页面，并从新计算空白容器高度与数据容器的marginTop属性")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("可以使用marginTop或者transform：translate3d")]),t._v(" "),s("h4",{attrs:{id:"vxetable-虚拟表格-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vxetable-虚拟表格-table"}},[t._v("#")]),t._v(" vxeTable-虚拟表格（table）")]),t._v(" "),s("p",[s("code",[t._v("未开始")])]),t._v(" "),s("h4",{attrs:{id:"微博list-不等高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微博list-不等高"}},[t._v("#")]),t._v(" 微博list（不等高）")]),t._v(" "),s("ul",[s("li",[t._v("拿到数据以后，将这些数据存放在一个"),s("code",[t._v("temporary")]),t._v("临时的容器里面(样式为："),s("code",[t._v("opacity: 0;position: absolute;top: 0;left: 0;z-index: -99; width: 100%;overflow: hidden;")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("$nextTick")]),t._v("通过"),s("code",[t._v("offsetHeight")]),t._v("获取各元素的像素高度")]),t._v(" "),s("li",[t._v("监听"),s("code",[t._v("window.onscroll")]),t._v("事件")]),t._v(" "),s("li",[t._v("数据容器的paddingTop()、paddingBottom")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);