(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{531:function(s,a,t){"use strict";t.r(a);var e=t(35),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("今天使用 ./deploy.sh 来提交代码，出现了权限的问题，百度了一下 写下这篇mac版github配置ssh")]),s._v(" "),t("p",[s._v("1、首先运行终端，检查是否已经有SSH Key")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("localhost:~ maxiong$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\nlocalhost:.ssh maxiong$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),t("p",[s._v("这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过步骤2，直接进入步骤")]),s._v(" "),t("p",[s._v("2、创建一个SSH key")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("localhost:.ssh maxiong$ ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"78497291@qq.com"')]),s._v(" // 注册邮箱  \n")])])]),t("p",[s._v("接着又会提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Generating public/private rsa key pair.\nEnter "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/maxiong/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter passphrase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Users/maxiong/.ssh/id_rsa.\nYour public key has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Users/maxiong/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:/HhY1WNRHrj3cRGZQTMrwYedqaEzCT6rrdO+dJ0NBEE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78497291")]),s._v("@qq.com\nThe key's randomart image is:\n+---"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RSA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("----+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          .Eo.*OO"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  .*.@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" +oO.o"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" o *.+.+."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        S + o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         *  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        *.o. o "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       o.+.      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       .+o.      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SHA256"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-----+\n")])])]),t("p",[s._v("3、添加公钥到你的远程仓库（github）")]),s._v(" "),t("p",[s._v("a、查看你生成的公钥，输入：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("localhost:.ssh maxiong$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])])]),t("p",[s._v("b、登陆你的github帐户，创建key 将a打印出来的数据复制到github上。点击保存")]),s._v(" "),t("p",[s._v("c、验证下这个key是不是正常工作")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("localhost:.ssh maxiong$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\nHi maxiong88"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),t("p",[s._v("因为我没有设置密码所以输入c以后直接提示我成功了")])])}),[],!1,null,null,null);a.default=n.exports}}]);