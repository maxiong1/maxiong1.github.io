import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.DfLtQQLG.js";const E=JSON.parse('{"title":"微信内置浏览器和小程序中隐藏IOS滚动条","description":"...","frontmatter":{"title":"微信内置浏览器和小程序中隐藏IOS滚动条","description":"...","wtime":"2024-08-01 21:00:00","deTags":["work"]},"headers":[],"relativePath":"blogs/work/weixin-webview.md","filePath":"blogs/posts/work/weixin-webview.md"}'),l={name:"blogs/work/weixin-webview.md"},t=e(`<h1 id="隐藏ios滚动条" tabindex="-1">隐藏IOS滚动条 <a class="header-anchor" href="#隐藏ios滚动条" aria-label="Permalink to &quot;隐藏IOS滚动条&quot;">​</a></h1><h2 id="在桌面浏览器隐藏滚动条" tabindex="-1">在桌面浏览器隐藏滚动条 <a class="header-anchor" href="#在桌面浏览器隐藏滚动条" aria-label="Permalink to &quot;在桌面浏览器隐藏滚动条&quot;">​</a></h2><h4 id="通过伪类" tabindex="-1">通过伪类 <a class="header-anchor" href="#通过伪类" aria-label="Permalink to &quot;通过伪类&quot;">​</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>非标准: 该特性是非标准的，请尽量不要在生产环境中使用它！</p></div><p><code>::-webkit-scrollbar</code> CSS 伪类元素会影响设置了 <code>overflow:scroll;</code> 的元素的滚动条样式和浏览器body-html滚动条。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::-webkit-scrollbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="滚动条样式的标准方法可用于-scrollbar-color-和-scrollbar-width。" tabindex="-1">滚动条样式的标准方法可用于 scrollbar-color 和 scrollbar-width。 <a class="header-anchor" href="#滚动条样式的标准方法可用于-scrollbar-color-和-scrollbar-width。" aria-label="Permalink to &quot;滚动条样式的标准方法可用于 scrollbar-color 和 scrollbar-width。&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.scroll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	scrollbar-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">transparent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transparent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	scrollbar-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="ios浏览器、微信内置浏览器-小程序-小程序web-view中" tabindex="-1">IOS浏览器、微信内置浏览器-小程序-小程序web-view中 <a class="header-anchor" href="#ios浏览器、微信内置浏览器-小程序-小程序web-view中" aria-label="Permalink to &quot;IOS浏览器、微信内置浏览器-小程序-小程序web-view中&quot;">​</a></h2><p>无法通过伪类来隐藏根元素的滚动条</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>设置非根元素（body、html）的overflow为scroll <ul><li>方案一、可通过伪类来隐藏滚动条</li><li>方案二、设置父级<code>overflow:hidden</code>,设置子级<code>padding-right:10px;overflow:scroll;</code></li></ul></li></ul><h2 id="安卓-微信中" tabindex="-1">安卓 微信中 <a class="header-anchor" href="#安卓-微信中" aria-label="Permalink to &quot;安卓 微信中&quot;">​</a></h2><p>不会出现滚动条</p><h2 id="安卓-普通浏览器中" tabindex="-1">安卓 普通浏览器中 <a class="header-anchor" href="#安卓-普通浏览器中" aria-label="Permalink to &quot;安卓 普通浏览器中&quot;">​</a></h2><p>会出现滚动条</p>`,16),n=[t];function o(r,h,c,d,p,k){return i(),s("div",null,n)}const g=a(l,[["render",o]]);export{E as __pageData,g as default};
