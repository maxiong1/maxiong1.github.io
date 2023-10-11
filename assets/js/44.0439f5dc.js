(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{540:function(t,a,s){"use strict";s.r(a);var n=s(35),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"dom元素隐藏无法初始化echart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom元素隐藏无法初始化echart"}},[t._v("#")]),t._v(" DOM元素隐藏无法初始化echart")]),t._v(" "),s("p",[t._v("因为Echarts没有获取到宽高导致初始化失败,需要设置该DOM的"),s("code",[t._v("width")]),t._v(" 、"),s("code",[t._v("height")]),t._v(" 属性")]),t._v(" "),s("h2",{attrs:{id:"反向坐标轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向坐标轴"}},[t._v("#")]),t._v(" 反向坐标轴")]),t._v(" "),s("p",[t._v("项目中如果y轴作为 类目轴时，默认顺序是从下往上布局，从而看到的数据是第一个是在最下面，想要修改这样的局面\n让类目轴 从上到下排列：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("yAxis")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inverse")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认 false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"最小值不是从0开始的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最小值不是从0开始的"}},[t._v("#")]),t._v(" 最小值不是从0开始的")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("series"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" series"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" min\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"y轴是类目轴-x轴是数值轴-x轴如何实现向类目轴那样的-坐标轴分割间隔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#y轴是类目轴-x轴是数值轴-x轴如何实现向类目轴那样的-坐标轴分割间隔"}},[t._v("#")]),t._v(" y轴是类目轴，x轴是数值轴, x轴如何实现向类目轴那样的 坐标轴分割间隔")]),t._v(" "),s("p",[t._v("用 formatter，不要的值返回空字符串")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("axisLabel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("formatter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"legend的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legend的问题"}},[t._v("#")]),t._v(" legend的问题")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("legend")]),t._v("也是通过接口实时变化的话，需要单独拿出，不然图表会一闪一闪的更新")]),t._v(" "),s("h2",{attrs:{id:"双y轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双y轴"}},[t._v("#")]),t._v(" 双y轴")]),t._v(" "),s("p",[t._v("1，yAxis. splitNumber = 5：固定坐标轴的分割段数\n2，min\\max 坐标轴刻度最小大值;获取最大值在除以5向上取整再乘以5")])])}),[],!1,null,null,null);a.default=e.exports}}]);