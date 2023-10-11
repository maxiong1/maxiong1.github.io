(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{557:function(e,t,i){"use strict";i.r(t);var n=i(35),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("为什么来写这边文章，是因为我们老大在群里说一句：")]),e._v(" "),i("p",[i("code",[e._v("vertical-align: baseline; 这个baseline的具体位置是什么，有谁比较了解; 还有就是一朋友问我vertical-align与line-height关系")])]),e._v(" "),i("p",[e._v("表示一脸的懵逼，不知道在说什么；")]),e._v(" "),i("h3",{attrs:{id:"为什么line-height可以让内联元素-垂直居中"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#为什么line-height可以让内联元素-垂直居中"}},[e._v("#")]),e._v(" 为什么line-height可以让内联元素“垂直居中”")]),e._v(" "),i("p",[e._v("坊间流传着这么一种说法：“要想让单行文字垂直居中，只要设置 line-height 大小和 height高度一样就可以了。”类似下面这样的代码：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v(".title {   height: 24px;   line-height: 24px; }\n")])])]),i("p",[e._v("从效果上看，似乎验证了这种说法的正确性。但是，实际上，上面的说法对 CSS 初学者会产生 两个严重的误导，同时，语句本身也存在不严谨的地方!\n误区之一：要让单行文字垂直居中，只需要line-height这一个属性就可以，与height 一点儿关系都没有。也就是说，我们直接：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v(".title {   line-height: 24px; } \n")])])]),i("p",[e._v("就可以了。坊间传闻的说法会误导大小一定要同时设置height属性才可以。")]),e._v(" "),i("p",[e._v("误区二：行高控制文字垂直居中，不仅适用于单行，多行也是可以的。准确的说法应该是 “line-height 可以让单行或多行元素近似垂直居中”。\n稍等，这里有个词似乎和上面的表述 有点儿微妙的差异，“近似垂直居中”？没错，一定要加上“近似”二字，这样的说法才足够严 谨。\n换句话说，我们通过line-height设置的垂直居中，并不是真正意义上的垂直居中！究 竟是怎么一回事？")]),e._v(" "),i("p",[e._v("这里，其实要解答的是两个问题，一个是为何可以“垂直居中”，另一个是为何是“近似”.")]),e._v(" "),i("p",[e._v("行高可以实现“垂直居中”原因在于 CSS 中“行 距的上下等分机制”，如果行距的添加规则("),i("code",[e._v("单一")]),e._v(")是在文字的上方或者下方，则行高是无法让文字垂直 居中的。")]),e._v(" "),i("p",[e._v("说“近似”是因为文字字形的垂直中线位置普遍要比真正的“行框盒子”的垂直中线位置 低，譬如我们拿现在用得比较多的微软雅黑字体举例：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("p {   font-size: 80px;   line-height: 120px;   background-color: #666;   font-family: 'microsoft yahei';   color: #fff; } \n<p>微软雅黑</p>\n")])])]),i("p",[e._v("结果，我都不需要标注，肉眼就能看出字形明显偏下:")]),e._v(" "),i("p",[e._v("由于我们平时使用的font-size都比较小，12px～16px很多，因此，虽然微软雅黑字 体有下沉，但也就 1 像素的样子，\n所以我们往往觉察不到 这种“垂直对齐”其实并不是真正意义上的垂直居中，只 是感官上看上去像是垂直居中罢了。\n这也是我总是称 line-height 实现的单行文本垂直居中为“近似垂直居 中”的原因。")]),e._v(" "),i("p",[e._v("多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要 line-height 属性的好朋友vertical-align属性帮助才可以（此处不再做参考）")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('.box {   line-height: 120px;   background-color: #f0f3f9; } \n.content {   display: inline-block;   line-height: 20px;   margin: 0 20px;   vertical-align: middle; } \n<div class="box">   \n\t<div class="content">基于行高实现的...</div> \n</div> \n')])])]),i("p",[e._v("说一下实现原理：")]),e._v(" "),i("p",[e._v("（1）多行文字使用一个标签包裹，然后设置display为inline-block。\n好处在于既能 重置外部的 line-height 为正常的大小，又能保持内联元素特性，从而可以设置 vertical-align属性，以及产生一个非常关键的“行框盒子”。\n我们需要的其实并不是这个 “行框盒子”，而是每个“行框盒子”都会附带的一个产物—“幽灵空白节点”，即一个宽度为 0、表现如同普通字符的看不见的“节点”。\n有了这个“幽灵空白节点”，我们的 line- height:120px 就有了作用的对象，从而相当于在.content 元素前面撑起了一个高度为 120px的宽度为0的内联元素。")]),e._v(" "),i("p",[e._v("（2）因为内联元素默认都是基线对齐的，所以我们通过对.content元素设置vertical- align:middle来调整多行文本的垂直位置，\n从而实现我们想要的“垂直居中”效果。如果是 要借助line-height实现图片垂直居中效果，也是类似的原理和做法。 细心的读者可能发现，\n上面我解释原理的时候，“垂直居中”这 4 个字加了引号，莫非， 这里的“垂直居中”又是“近似”？ 你还真说对了，\n这里实现的“垂直居中”确实也不是真正意义上的垂直居中，也是“近似 垂直居中”。\n还是上面的多行文本垂直居中的例子，如果我们捕获到多行文本元素的尺寸空间，\n截个图，然后通过尺子工具一量就会发现，上面的留空是 41px，下面的留空是39px，对啦，原来不是完全的垂直居 中，")]),e._v(" "),i("p",[i("code",[e._v("不垂直居中与line-height无关，而是vertical- align导致的")])]),e._v(" "),i("h3",{attrs:{id:"line-height-的好朋友-vertical-align"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#line-height-的好朋友-vertical-align"}},[e._v("#")]),e._v(" line-height 的好朋友 vertical-align")]),e._v(" "),i("p",[e._v("话有点多了直接上干货")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('.box { line-height: 32px; } \n.box > span { font-size: 24px; } \n<div class="box">   \n<span>文字</span> \n</div>\n')])])]),i("p",[e._v(".box元素的高度是多少？\n很多人一定认为是32px：因为没有设置height等属性，高度就由line-height决定， 与font-size无关，所以这里明摆着终高度就是32px。\n但是事实上，高度并不是 32px，而是要大那么几像素（受不同字体影响，增加高度也不一样），比方说35px。\n这里，之所以终.box元素的高度并不等于line-height，就 是因为行高的朋友属性vertical-align在背后默默地下了黑手。\nvertical-align 知识点比 line-height 要多，\n我们现在就 来一点一点地揭开vertical-align属性的层层面纱。（"),i("code",[e._v("这里主要是说vertical-align：middle近似垂直居中的问题")]),e._v("）")]),e._v(" "),i("p",[e._v("• 内联元素：元素的垂直中心点和行框盒子基线往上 1/2 x-height处对齐。\n• table-cell元素：单元格填充盒子相对于外面的表格行居中对齐。")]),e._v(" "),i("p",[e._v("table-cell 元素的 vertial-align:middle 中规中矩，没什么好说的")]),e._v(" "),i("p",[e._v("倒是内联元素的vertial-align:middle有很多说不完的故事。")]),e._v(" "),i("p",[e._v("定义中“基线往上 1/2 x-height处”， 指的就是 middle 的位置，仔细品味一下，“基线”就是字符 x 底边缘，而 x-height 就是字符 x 的高度。\n考虑到大部分字体的字符 x 上下是等分的，因此，从“基线往上 1/2x-height 处”我们就可以看出是字符 x 中心交叉点的位置。\n换句话说就是，vertial-align:middle 可以让内联元素的真正意义上的垂直中心位置和字符 x 的交叉点对齐。")]),e._v(" "),i("p",[e._v("基本上所有的字体中，字符 x 的位置(相对于盒子的中心线)都是偏下一点儿的，font-size 越大偏移越明显，\n这才导致默认状态下的vertial-align:middle实现的都是“近似垂直居中”。")]),e._v(" "),i("p",[e._v("演示页面有两条水平线，其中，图片上线显示的是图片垂直中心位置，而贯穿整个容器的线就是容器的垂直中心位置，可以看到，默认状态下，两根线就不在一个水平线\n因为图片上的那根线趋向于和字符 x 的中心靠近，而不是容器的垂直中心。如果我们把 font-size改大，如48px，则效果更加明显")]),e._v(" "),i("p",[e._v("如果想要实现真正意义上的垂直居中对齐，只要想办法让字符 x 的中心位置就是容器的垂直中心位置(蓝色线)即可，")]),e._v(" "),i("h4",{attrs:{id:"方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),i("ul",[i("li",[e._v("设置 font-size:0，整个字符 x 缩小成了一个看不见的点， 根据line-height的半行间距上下等分规则，这个点就正 好是整个容器的垂直中心位置，这样就可以实现真正意义上 的垂直居中对齐了。")]),e._v(" "),i("li",[e._v("使用vertical-align的数值百分比类，手动去设置该值，优点：一、兼容性好；二、可以精准控制内联元素的垂直对齐位置")])]),e._v(" "),i("p",[e._v("[此篇正在完善中....]\n为什么来写这边文章，是因为我们老大在群里说一句：")]),e._v(" "),i("p",[i("code",[e._v("vertical-align: baseline; 这个baseline的具体位置是什么，有谁比较了解; 还有就是一朋友问我vertical-align与line-height关系")])]),e._v(" "),i("p",[e._v("表示一脸的懵逼，不知道在说什么；")]),e._v(" "),i("h2",{attrs:{id:"这个总结步骤分为几步"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#这个总结步骤分为几步"}},[e._v("#")]),e._v(" 这个总结步骤分为几步")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("1、内联行元素、行盒子、ifc、bfc\n2、字体为什么会上下留白\n3、baseline是什么\n4、baseline的位置\n5、vertical-align\n6、案例\n")])])]),i("h2",{attrs:{id:"一、内联行元素、行盒子、ifc、bfc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、内联行元素、行盒子、ifc、bfc"}},[e._v("#")]),e._v(" 一、内联行元素、行盒子、ifc、bfc")]),e._v(" "),i("p",[e._v("。。。。。。。")]),e._v(" "),i("h2",{attrs:{id:"二、字体为什么会上下留白"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、字体为什么会上下留白"}},[e._v("#")]),e._v(" 二、字体为什么会上下留白")]),e._v(" "),i("p",[e._v("原因是在于字体本身：它的工作原理是：")]),e._v(" "),i("p",[i("code",[e._v("a font defines its em-square (or UPM, units per em), a kind of container where each character will be drawn. This square uses relative units and is generally set at 1000 units. But it can also be 1024, 2048 or anything else. based on its relative units, metrics of the fonts are set (ascender, descender, capital height, x-height, etc.). Note that some values can bleed outside of the em-square. in the browser, relative units are scaled to fit the desired font-size.")])]),e._v(" "),i("h5",{attrs:{id:"一键翻译"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一键翻译"}},[e._v("#")]),e._v(" 一键翻译")]),e._v(" "),i("p",[e._v("一个字体定义了它的em-square（或者UPM，每个单位的单位），一种容器，每个字符将被绘制。这个广场使用相对单位，一般设置为1000个单位。但它也可以是1024，2048或其他任何东西。\n根据其相对单位设置字体的度量（上升，下降，大写高度，x高度等）。请注意，某些值可能会在em-square外溢出。\n在浏览器中，相对单位被缩放以适合所需的字体大小。")]),e._v(" "),i("h5",{attrs:{id:"可参考"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#可参考"}},[e._v("#")]),e._v(" 可参考")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align?utm_source=CSS-Weekly&utm_campaign=Issue-253&utm_medium=web",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align?utm_source=CSS-Weekly&utm_campaign=Issue-253&utm_medium=web"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.im/post/59c9bc196fb9a00a402e0166",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/59c9bc196fb9a00a402e0166"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"三、baseline是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三、baseline是什么"}},[e._v("#")]),e._v(" 三、baseline是什么")]),e._v(" "),i("p",[e._v("可以将上面的四条红色实线，想象成我们学习英文的时候用的4线格本，上面标注的baseline基线就是4线格本的第三条线。(也是就是x字母的底边线)")]),e._v(" "),i("p",[e._v("这里面的图片需要区分字体（宋体【正规字体】、其他字体），大家看到在baseline与text-bottom中间还有一个红色线，这条线其实也是text-bottom，只不过因为字体的不同,会导致字体的上下留白也不一样(HHead/Win Descent这个值不同导致字体高度不同)")]),e._v(" "),i("p",[i("code",[e._v("在baseline与middle之间的距离是x-height，就是字母x一半高度")])]),e._v(" "),i("h2",{attrs:{id:"四、baseline的位置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四、baseline的位置"}},[e._v("#")]),e._v(" 四、baseline的位置")]),e._v(" "),i("h5",{attrs:{id:"_1-不同display值的baseline的位置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-不同display值的baseline的位置"}},[e._v("#")]),e._v(" （1）不同display值的baseline的位置")]),e._v(" "),i("p",[e._v("问题：是所有的display类型的元素都有Baseline吗？像inline-block这样的元素如果有好几行文字，是按第一行文字的baseline,还是按第二行文字的基线呢？")]),e._v(" "),i("p",[e._v("像这样的一个div盒模型中有两行文字，那么它的基线应该是按哪一条呢？为什么要搞清楚这个问题？因为display:inline;display:inline-block;的元素都是按baseline来对齐的。不知道你写的元素的baseline在哪，也就等于你写的下一个元素出现在哪个位置，你根本不知道。")]),e._v(" "),i("p",[e._v("你会发现，但没有一种对齐标准的时候，物品的摆放将显得异常的混乱。所以这个时候，理解display:inline:display:inline-block;display:block;的基线在什么位置就显得格外的重要了")]),e._v(" "),i("h5",{attrs:{id:"接下来分情况考虑"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接下来分情况考虑"}},[e._v("#")]),e._v(" 接下来分情况考虑：")]),e._v(" "),i("h6",{attrs:{id:"一-display-inline的基线"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一-display-inline的基线"}},[e._v("#")]),e._v(" （一）display:inline的基线")]),e._v(" "),i("p",[e._v("inline的元素（如：span,label,i,等元素）的基线就是其中的元素的字体的基线。")]),e._v(" "),i("p",[e._v("就是在第一节中的各种baseline.几个不同的inline元素放在同一行的时候，就是把几个的baseline对齐就可以了，就像上面的不同字号的“MO”按基线对齐后的排列是一样的。")]),e._v(" "),i("h6",{attrs:{id:"二-display-inline-block的基线"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二-display-inline-block的基线"}},[e._v("#")]),e._v(" （二）display:inline-block的基线")]),e._v(" "),i("p",[e._v("我们用一个实例来看一下：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('<style>\n\t.a{\n\t\tdisplay:inline-block;\n\t\twidth:100px;\n\t\theight:100px;\n\t\tword-wrap:break-word; // 在长单词或 URL 地址内部进行换行\t\n\t\tbackground-color: hsl(2, 86%, 58%);\n\t\tcolor:#fff;\n\t}\n\t.cspan{\n\t\tcolor:#000\n\t}\n</style>\n<div>\n\t<div class="a">\n\t\t<span>\n\t\t\tMOMOMOMOMOMOMOOMOM\n\t\t</span>\n\t</div>\n\t<span class="cspan">MOMO</span>\n</div>\n')])])]),i("p",[e._v("展示效果，如下")]),e._v(" "),i("p",[e._v("从图中可以看出div元素的baseline是以其包含的inline元素的最后一行作为自己的baseline。下一个同一行中的元素将会把baseline与div的这条基线对齐。")]),e._v(" "),i("h6",{attrs:{id:"那么所有的display-inline-block-都这样吗-像img这种的里面没有inline元素的怎么办呢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#那么所有的display-inline-block-都这样吗-像img这种的里面没有inline元素的怎么办呢"}},[e._v("#")]),e._v(" 那么所有的display:inline-block;都这样吗？像img这种的里面没有inline元素的怎么办呢？")]),e._v(" "),i("p",[e._v("我们再通过一个实例来看一下。")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('`\n<img src="https://c4.xinstatic.com/f3/20180314/1617/5aa8da9d20d37241999_18.jpg" alt="" style="background-color:hsl(2, 86%, 58%);height:100px;width:100px;">\n<span style="color:#000">MOMO</span>\n`\n')])])]),i("p",[e._v("可以看出img的baseline是它的最底边")]),e._v(" "),i("p",[e._v("其实看到这，我们大概也能得出一些结论了，就是display:inline-block;的元素的baseline(基线)当其中有inline元素是按inline的baseline,当没inline元素是，按最低边。")]),e._v(" "),i("p",[e._v("这样总结对吗？告诉你：基本是对的。不信，我们来看一下W3C对于inline-block的基线的定义：")]),e._v(" "),i("p",[e._v("参考："),i("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visudet.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3.org/TR/CSS2/visudet.html，最下面一行"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("code",[e._v("The baseline of an 'inline-block' is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its 'overflow' property has a computed value other than 'visible', in which case the baseline is the bottom margin edge.")])]),e._v(" "),i("h6",{attrs:{id:"我大概解释是"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#我大概解释是"}},[e._v("#")]),e._v(" 我大概解释是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v("行块“的基线是正常流中最后一行框的基线，除非他没有在当前流中（如果用position等会让元素脱离文档流、或者是没有内容），\n或者它的oveflow属性是可见（visible）以外的值（hidden、scroll、auto），\n在这种情况下，基线是底部边距边缘。\n")])])]),i("p",[e._v("1、对于用到overflow属性非visible值的情况，做了一个实例")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('`\n<div>\n\t<div style="display:inline-block;width:100px;height:100px;word-wrap:break-word;\n\tbackground-color: hsl(2, 86%, 58%);color:#fff;overflow:hidden">\n\t\t<span>\n\t\t\tMOMOMOMOMOMOMOOMacxM\n\t\t</span>\n\t</div>\n\t<span style="color:#000">MOMO</span>\n</div>\n`\n')])])]),i("p",[e._v("效果如下，inline-block元素的基线是底部边缘了")]),e._v(" "),i("p",[e._v("2、对于无内容的情况，做了一个实例")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('`\n<div style="width:100%;height:200px;border:#000 solid 1px;position:relative;">\n\t<div style="display:inline-block;width:100px;height:100px;border:1px solid red;"></div>\n\t<span></span>\n\t<div style="border-top:1px solid blue;width:100%;height:1px;position:absolute;top:100px;"></div>\n</div>\n`\n')])])]),i("p",[e._v("效果如下，inline-block元素的基线是底部边缘了(蓝色线就是基线，【为什么inline-block元素有白色缝隙我们下面会说】)")]),e._v(" "),i("h6",{attrs:{id:"三-display-inline-block的基线"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三-display-inline-block的基线"}},[e._v("#")]),e._v(" （三）display:inline-block的基线")]),e._v(" "),i("p",[e._v("因为block元素是自己霸占一行，所以它根本不需要基线，因为它不需要在前面或者后面与任何元素对齐。")]),e._v(" "),i("h2",{attrs:{id:"五、vertical-align"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#五、vertical-align"}},[e._v("#")]),e._v(" 五、vertical-align")]),e._v(" "),i("h5",{attrs:{id:"接下来就给大家详细讲解下vertical-align是什么-干什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接下来就给大家详细讲解下vertical-align是什么-干什么"}},[e._v("#")]),e._v(" 接下来就给大家详细讲解下vertical-align是什么，干什么？")]),e._v(" "),i("p",[e._v("先看取值")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[e._v("值")]),e._v(" "),i("th",{staticStyle:{"text-align":"center"}},[e._v("描述")])])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("baseline")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("默认值，元素放到父元素的基线上")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("top")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("把元素的顶端与行中最高元素（整行【行盒子】的顶部）的顶端对齐")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("text-top")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("把元素的顶端与父元素字体的顶端对齐(整个字体元素顶部【"),i("code",[e._v("为什么字体上下会有留白")]),e._v("】)")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("bottom")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("把元素的顶端与行中最低的元素（整行的底部）的顶端对齐")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("text-bottom")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("把元素的低端与父元素字体的低端对齐")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("middle")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("把子元素放置在父元素的中部（小写字母中间对齐）")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("%")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("使用line-height属性的百分比值来排列次元素，允许负值")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("length")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("正负数都是以父元素的基线为准，往上下移动")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("inherit")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("规定继承父元素属性值")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("sub")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("垂直对齐文本的下标")])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("supper")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("垂直对齐文本的上标")])])])]),e._v(" "),i("h6",{attrs:{id:"参考w3链接-https-www-w3-org-tr-css2-visudet-html-vertical-align"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参考w3链接-https-www-w3-org-tr-css2-visudet-html-vertical-align"}},[e._v("#")]),e._v(" 参考w3链接 "),i("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visudet.html#vertical-align",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3.org/TR/CSS2/visudet.html#vertical-align"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("code",[e._v("This property affects the vertical positioning inside a line box of the boxes generated by an inline-level element.")])]),e._v(" "),i("p",[e._v("此属性影响内联行元素(inline-level element)生成的盒子，在行框（盒子）中的垂直位置。")]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("我们用案例来做说明")]),e._v(" "),i("h5",{attrs:{id:"img底部的缝隙与使用inline-block元素内是空元素的时候底部有缝隙"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#img底部的缝隙与使用inline-block元素内是空元素的时候底部有缝隙"}},[e._v("#")]),e._v(" img底部的缝隙与使用inline-block元素内是空元素的时候底部有缝隙")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('<div style="width:100%;border:#000 solid 1px;position:relative;">\n\t<div style="display:inline-block;width:100px;height:100px;border:1px solid red;"></div>\n\t<div style="display:inline-block;width:100px;height:100px;border:1px solid red;"></div>\n\t<div style="border-top:1px solid blue;width:100%;height:1px;position:absolute;top:100px;"></div>\n</div>  \n<div style="width:100%;border:#000 solid 1px;position:relative;margin-top:20px">\n\t<img src="https://c6.xinstatic.com/f3/20180310/1128/5aa350e17af22370842_18.jpg" width="100px" height="100px">\n\t<div style="border-top:1px solid blue;width:100%;height:1px;position:absolute;top:100px;"></div>\n</div>  \n<div style="width:100%;border:#000 solid 1px;position:relative;margin-top:20px">\n\t<img src="https://c6.xinstatic.com/f3/20180310/1128/5aa350e17af22370842_18.jpg" width="100px" height="100px">\n\t<span>搜索xxcv</span>\n\t<div style="border-top:1px solid blue;width:100%;height:1px;position:absolute;top:100px;"></div>\n</div>\n')])])]),i("p",[e._v("以上蓝色部分为baseline基线，\n在div中放入inline-block元素内容为空或者是img标签的时候\n会出现白色缝隙")]),e._v(" "),i("p",[e._v("起因：")]),e._v(" "),i("p",[e._v("这个问题产生主要是由于baseline造成的\n还是上文说到的4线格本，实际上inline-block的图片下面的哪个\n空白就是baseline与bottom之间的距离")]),e._v(" "),i("p",[e._v("解决：")]),e._v(" "),i("p",[e._v("1.给父级元素添加line-height:0px，因为line-height指的是vertical-align的bottom与top之间的距离，设置为0的时候baseline与bottom之间的距离为0；\n2.同上，父级元素设置font-size:0,这样行高line-height也是0，也就没有空白缝隙了\n3.将img变成块级元素\n4.给父级元素添加具体高度\n5.给inline-block、inline添加vertical-align：bottom、top、middle")]),e._v(" "),i("p",[e._v("会发现使用line-height、height 会把字体下面一小部分给删除掉，")]),e._v(" "),i("h5",{attrs:{id:"左侧是一个文字-右侧是一个图标-进行水平对齐"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#左侧是一个文字-右侧是一个图标-进行水平对齐"}},[e._v("#")]),e._v(" 左侧是一个文字，右侧是一个图标，进行水平对齐.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('<pre>红色是baseline，inline元素的baseline与inline-block的baseline对齐</pre>\n<div style="border:1px solid #000;margin:10px;position:relative">\n<span style="">我是爸爸axg</span>\n<span style="display: inline-block;width: 20px;height: 20px;background: blue;"></span>\n<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:20px;"></div>\n</div>\n<pre>红色是baseline，inline元素的baseline与inline-block的baseline对齐</pre>\n<div style="border:1px solid #000;margin:10px;position:relative">\n<span style="vertical-align:middle">我是爸爸axg</span>\n<span style="display: inline-block;width: 20px;height: 20px;background: blue;vertical-align:middle"></span>\n<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:20px;"></div>\n</div>\n<pre>\n大家注意到没有，第一个案例与第二个案例的文字距离顶部的距离是没有变化的（那为什么会有间距呢），而inline-block元素在下调；\n我们来找一下行盒子,\n我们看到红色分虚线他平分了行盒子，而这个虚线恰好就是 行盒子的基线+x的height一半；\n其实行盒子最后，会存在一个我们看不到的文本盒子，这里我们通过添加一个伪元素，添加一个x，直观模式下，该文本也会默认大小的（font-size：0除外）\n所以该缝隙，就是由于这个文本盒子本身空间所占据的；\n当将icon高度拉高、父级盒子字体设置为0、当前元素font-size变大，都可以解决此类问题\n</pre>\n<style>\n.a-line::after {\ncontent: \'x\'\n}\n</style>\n\n<div style="border:1px solid #000;margin:10px;position:relative" class="a-line">\n<span style="vertical-align:middle">我是爸爸axg</span>\n<span style="display: inline-block;width: 20px;height: 20px;background: blue;vertical-align:middle"></span>\n<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:20px;"></div>\n<div style="border-top:1px dashed red;width:100%;height:1px;position:absolute;top:12px;"></div>\n</div>\n<pre>设置font-size:0;</pre>\n<style>\n.a-line::after {\ncontent: \'x\';\n}\n</style>\n\n<div style="border:1px solid #000;margin:10px;position:relative;font-size:0;" class="a-line">\n<span style="vertical-align:middle;font-size:14px;">我是爸爸axg</span>\n<span style="display: inline-block;width: 20px;height: 20px;background: blue;vertical-align:middle"></span>\n<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:20px;"></div>\n<div style="border-top:1px dashed red;width:100%;height:1px;position:absolute;top:12px;"></div>\n</div>\n<pre>只将inline-block添加vertical-align:middle属性</pre>\n<div style="border:1px solid #000;margin:10px;position:relative;" class="a-line">\n<span style="font-size:14px;">我是爸爸axg</span>\n<span style="display: inline-block;width: 20px;height: 20px;background: blue;vertical-align:middle"></span>\n<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:20px;"></div>\n<div style="border-top:1px dashed red;width:100%;height:1px;position:absolute;top:12px;"></div>\n</div>\n')])])]),i("h5",{attrs:{id:"inline-block下沉"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#inline-block下沉"}},[e._v("#")]),e._v(" inline-block下沉")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[e._v('<pre>\n我们通过给ul添加一个伪元素来确定ul的baseline，我们知道是x的底部，我们发现inline-block元素是以ul的baseline对齐的；\n这种问题我们应该怎么决解呢\n\t给所有inline-block元素添加vertical-align：top、bottom、middle等值,ulj基线会改变\n\t这里使用overflow：hidden会隐藏下面button按钮\n</pre>\n<style>\nul::after{\ncontent:"x"\n}\n</style>\n<ul style="margin:10px;padding:10px;border:blue solid 1px;">\n<li style="position:relative;width:200px;height:250px;border:#000 solid 1px;display:inline-block;font-size:14px;">\n\t<img src="https://c6.xinstatic.com/f3/20180310/1128/5aa350e17af22370842_18.jpg" width="100%">\n\t<p style="width:80%;text-align:center;">周星驰财政学财政学在电风扇电风扇走心辞职信</p>\n\t<div style="width:100px;height:20px;background:red;position:absolute;left:50%;bottom:-10px;margin-left:-50px"></div>\n\t<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:170px;"></div>\n</li>\n<li style="position:relative;width:200px;height:250px;border:#000 solid 1px;display:inline-block;font-size:14px;" width="100%">\n\t<img src="https://c6.xinstatic.com/f3/20180310/1128/5aa350e17af22370842_18.jpg" width="100%">\n\t<p style="width:80%;text-align:center;">周星驰财政学财政</p>\n\t<div style="width:100px;height:20px;background:red;position:absolute;left:50%;bottom:-10px;margin-left:-50px"></div>\n\t<div style="border-top:1px solid red;width:100%;height:1px;position:absolute;top:152px;"></div>\n</li>\n</ul>\n')])])]),i("p",[e._v("参考链接：")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://segmentfault.com/a/1190000004466536",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://segmentfault.com/a/1190000004466536"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align?utm_source=CSS-Weekly&utm_campaign=Issue-253&utm_medium=web",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align?utm_source=CSS-Weekly&utm_campaign=Issue-253&utm_medium=web"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.im/post/59c9bc196fb9a00a402e0166",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/59c9bc196fb9a00a402e0166"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("可是查看张鑫旭的《css世界》一书，讲的很好")])]),e._v(" "),i("p",[e._v("以上摘自 《css世界》")])])}),[],!1,null,null,null);t.default=a.exports}}]);