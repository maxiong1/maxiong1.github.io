(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{526:function(e,t,l){"use strict";l.r(t);var a=l(35),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"charles-代理失败"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#charles-代理失败"}},[e._v("#")]),e._v(" Charles 代理失败")]),e._v(" "),l("p",[l("code",[e._v("charles ios10.3 代理失败 SSLHandshake: Received fatal alert: unknown_ca")])]),e._v(" "),l("p",[l("code",[e._v("ios升级10版本发现使用charles代理访问https返回unknown ，即：SSLHandshake: Received fatal alert: unknown_ca")])]),e._v(" "),l("p",[e._v("好嘛，我抓个包，发现https 全部变成了unknown 。\ncharles设置好了代理，手机上设置好了ip地址和端口。\n这不科学\n经过一番探索终于在酷推上找到一篇文章\n翻译如下：\n在IOS10.3中信任根证书\n设置》通用》关于本机》证书信任设置（这个在最下面） �勾选针对根证书启用完全信任。\n再次进入charles 嘿嘿嘿。\n这是ios处于安全性的考虑，没有默认开启，大家遇到这样的问题设置下就可以。当然前提是，必须设置好服务端和客户端的代理")]),e._v(" "),l("h2",{attrs:{id:"charles基础"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#charles基础"}},[e._v("#")]),e._v(" Charles基础")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("左侧")]),e._v(" "),l("ul",[l("li",[e._v("Structure 网络请求按访问域名分类")]),e._v(" "),l("li",[e._v("Sequence 网络请求按访问的时间排序")])])]),e._v(" "),l("li",[l("p",[e._v("过滤网络")]),e._v(" "),l("ul",[l("li",[e._v("filter 栏目输入")]),e._v(" "),l("li",[e._v("Proxy->Recording Setting->include 设置")]),e._v(" "),l("li",[e._v("在想过滤的网络请求上右击，选择 “Focus”，之后在 Filter 一栏勾选上 Focussed 一项")])])]),e._v(" "),l("li",[l("p",[e._v("代理")]),e._v(" "),l("ul",[l("li",[e._v("在 Charles 的菜单栏上选择 “Proxy”–>“Proxy Settings”，填入代理端口 8888，并且勾上 “Enable transparent HTTP proxying” 就完成了在 Charles 上的设置")])])]),e._v(" "),l("li",[l("p",[e._v("模拟慢速网络")]),e._v(" "),l("ul",[l("li",[e._v("Proxy”–>“Throttle Setting")])])]),e._v(" "),l("li",[l("p",[e._v("解决冲突")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);