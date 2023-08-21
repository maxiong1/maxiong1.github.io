(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{527:function(t,n,o){"use strict";o.r(n);var e=o(35),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[t._v("react\n原生js学习bind方法")])]),t._v(" "),o("p",[t._v("[修改与05-17]")]),t._v(" "),o("h5",{attrs:{id:"语法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("fun.bind(thisArg[,arg1[,arg2[,...]]])\n    thisArg 当绑定函数被调用时，该参数会作为`原函数`运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。\n    arg1..  当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法\n")])])]),o("h5",{attrs:{id:"返回值"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("返回由指定的this值和初始化参数改造的原函数拷贝\n\n> 返回个函数\n> 可以传入参数\n\n`\n\tvar foo = {value:1}\n\tfunction bar (name, age){console.log()}\n\tvar barFoo = bar.bind(foo, 'display') // bindFoo是一个函数\n\tbindFoo('33') // 此处可以再次传入参数\n`\n前两个实现\n`\n\tFunction.prototype.bind = function(context){\n\t\tvar self = this;\n\t\t// 获取bind函数从第二个参数到最后一个参数\n\t\tvar args = Array.prototype.slice.call(arguments, 1)\n\t\treturn function(){\n\t\t\t// 这时候的arguments是指bind返回的函数bindFoo调用时传入的参数\n\t\t\tvar bindArgs = Array.prototype.slice.call(agruments);\n\t\t\tself.apply(context, args.concat(bindArgs));\n\t\t}\n\t}\n`\n\n> 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。: 通过修改返回的函数的原型来实现\n\n`\nvar value = 2;\n\nvar foo = {\n\tvalue: 1\n};\n\nfunction bar(name, age) {\n\tthis.habit = 'shopping';\n\tconsole.log(this.value);\n\tconsole.log(name);\n\tconsole.log(age);\n}\n\nbar.prototype.friend = 'kevin';\n\nvar bindFoo = bar.bind(foo, 'daisy');\n\nvar obj = new bindFoo('18'); // this 已经指向了 obj\n// undefined\n// daisy\n// 18\nconsole.log(obj.habit);\nconsole.log(obj.friend);\n// shopping\n// kevin\n尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了\n`\n第三个\n`\nFunction.property.bind2 = function(context){\n\tlet self = this;\n\t// self -> bar(){}\n\tlet args = Array.prototype.slice.call(arguments, 1);\n\tlet fbound = function(){\n\t\tlet bindArgs = Array.property.slice.call(arguments);\n\t\t// 1.当作为构造函数时， this -》实例（fbound创建的实例），self->绑定函数bar，结果为true，那么self指向实例\n\t\t// 2.当作为普通函数时， this->window，self-》绑定函数，此时结果为false，那么self指向绑定的context\n\t\tself.apply(this instanceof self ? this : context, args.concat(bindArgs));\n\t}\n\t// 为了要让 this instanceof self 为true 就要创建的实例继承绑定函数bar\n\t// 唯一办法就是让创建实例的函数fbound的prototype指向bar函数的prototype\n\treturn fbound\n}\n\nversion 2.0 直接将 fbound.prototype = this.prototype，我们直接修改fbound.prototype 的时候，也会直接修改函数bar的 prototype。这个时候，我们可以通过一个空函数来进行中转，然后利用组合继承的方式来实现\nFunction.prototype.bind2 = function (context) {\n\tvar self = this;\n\tvar args = Array.prototype.slice.call(arguments, 1);\n\t\n\tvar fNOP = function () {}; // // 定义一个中间函数，用于作为继承的中间值\n\n\tvar fbound = function () {\n\t\tvar bindArgs = Array.prototype.slice.call(arguments);\n\t\tself.apply(this instanceof self ? this : context, args.concat(bindArgs));\n\t}\n\t// 先让 fNOP 的原型方法指向 this 即函数bar的原型方法，继承 this 的属性\n\tfNOP.prototype = this.prototype;\n\t// 再将 fbound 即要返回的新函数的原型方法指向 fNOP 的实例化对象\n\t// 这样，既能让 fBound 继承 this 的属性，在修改其原型链时，又不会影响到 this 的原型链\n\tfbound.prototype = new fNOP();\n\treturn fbound;\n}\n\n在上面的代码中，我们引入了一个新的函数 fun，用于继承原函数的原型，并通过 new 操作符实例化出它的实例对象，供 fBound 的原型继承，至此，我们既让新函数继承了原函数的所有属性与方法，又保证了不会因为其对原型链的操作影响到原函数\n\n`\n")])])]),o("h5",{attrs:{id:"描述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),o("p",[t._v("bind() 方法会创建一个新函数。当这个新函数被调用时，\nbind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数")]),t._v(" "),o("p",[t._v("我们先来看一下bind 原生写法")]),t._v(" "),o("p",[o("code",[t._v("if (!Function.prototype.bind) { Function.prototype.bind = function(oThis) { // 如果不是一个函数抛出错误 if (typeof this !== 'function') { throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable'); } // 这里用到了一个slice, 从第一个参数开始返回，过滤掉了")]),t._v("this`\nvar aArgs   = Array.prototype.slice.call(arguments, 1),\n// 当前this\nfToBind = this,\n// 空函数 中间件 继承中间值\nfNOP    = function() {},\nfBound  = function() {\n// 如果 当前this检 测返回当前this，否则传过来的this\nreturn fToBind.apply(this instanceof fNOP\n? this\n: oThis,\n// 默认参数与传入参数合并\naArgs.concat(Array.prototype.slice.call(arguments)));\n};")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("// 维护原型关系\nif (this.prototype) {\n  // Function.prototype doesn't have a prototype property\n  // 先让 fNOP 的原型方法指向 this 即函数bar的原型方法，继承 this 的属性\n  fNOP.prototype = this.prototype; \n}\n// 再将 fbound 即要返回的新函数的原型方法指向 fNOP 的实例化对象 这样，既能让 fBound 继承 this 的属性，在修改其原型链时，又不会影响到 this 的原型链\nfBound.prototype = new fNOP();\n\nreturn fBound;\n")])])]),o("p",[t._v("};\n}\n`")]),t._v(" "),o("h2",{attrs:{id:"react"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" react")]),t._v(" "),o("p",[t._v("事件 箭头函数、bind 绑定")]),t._v(" "),o("p",[t._v('`\nclass A extends React.Component{\nsss=(a,b,c,d,e)=>{\nconsole.log(a,b,c,d,e) // 3,4,1,2\n/*\nooo = {(d, e)=>this.sss("3", "4", d, e)}\nvar ooo = function(d, e){\nreturn sss(a,b,c,d) // 可以使用不定参数 ...  展开运算符\n}\n'),o("em",[t._v('/\n}\nmmm=(...args)=>{\nconsole.log(args) // 数组 ["aa", "bb", "1", "2", event]\n/')]),t._v('\nooo = {this.mmm.bind(this, "aa", "bb")}\nthis.mmm.bind(this, "aa", "bb")("1", "2")')]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('\t\t*/\n\t}\t\n\trender(){\n\t\treturn(\n\t\t\t<div>\n\t\t\t\t<Button ooo = {(d, e)=>this.sss("3", "4", d, e)}/>\n\t\t\t\t<Button ooo = {this.mmm.bind(this, "aa", "bb")}/>\n\t\t\t</div>\n\t\t)\n\t}\n}\nclass Button extends React.Component{\n\tpFn=()=>{\n\t\tthis.props.ooo("1", "2")\n\t}\n\trender(){\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<p onClick={this.pFn}></p>\n\t\t\t</div>\n\t\t)\n\t}\n}\n')])])]),o("p",[t._v("`")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://juejin.im/post/5abb8fbe5188255569190c17",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5abb8fbe5188255569190c17"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("https://juejin.im/post/5af935d151882542821c6d91")])])])}),[],!1,null,null,null);n.default=s.exports}}]);