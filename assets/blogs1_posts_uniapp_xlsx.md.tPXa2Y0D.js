import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DfLtQQLG.js";const c=JSON.parse('{"title":"uni-app 写入数据转xlsx，并下载","description":"","frontmatter":{"title":"uni-app 写入数据转xlsx，并下载","description":"","wtime":"2024-08-08 10:00:00","deTags":["uniapp"]},"headers":[],"relativePath":"blogs1/posts/uniapp/xlsx.md","filePath":"blogs1/posts/uniapp/xlsx.md"}'),n={name:"blogs1/posts/uniapp/xlsx.md"},l=t('<p>主要是将xlsx文件先导出xml格式，在拼接字符串，写入xlsx文件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `&lt;?mso-application progid=&quot;Excel.Sheet&quot;?&gt;`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `&lt;Worksheet ss:Name=&quot;sheet名字&quot;&gt;&lt;/Worksheet&gt;`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getFileSystemManager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    filePath: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">USER_DATA_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/hello.xlsx`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: str, </span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    encoding: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span></span>\n<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WriteFileOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div><ul><li><a href="https://blog.csdn.net/qq_32594913/article/details/121394497" target="_blank" rel="noreferrer">uniapp本地多个sheet导出表格</a></li><li><a href="https://juejin.cn/post/7366445016778981386" target="_blank" rel="noreferrer">uniapp打包App实现导出xlsx</a></li><li>uni.getFileSystemManager</li></ul>',3),e=[l];function p(h,k,r,E,d,o){return a(),i("div",null,e)}const F=s(n,[["render",p]]);export{c as __pageData,F as default};
