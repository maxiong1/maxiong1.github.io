import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DfLtQQLG.js";const o=JSON.parse('{"title":"new 操作符","description":"","frontmatter":{"title":"new 操作符","description":"","wtime":"2018-01-01 16:00:00","deTags":["javascript"],"pageClass":"dm-xiong-detail"},"headers":[],"relativePath":"blogs1/posts/javascript/js-new.md","filePath":"blogs1/posts/javascript/js-new.md"}'),h={name:"blogs1/posts/javascript/js-new.md"},t=n(`<h1 id="new操作符" tabindex="-1">new操作符 <a class="header-anchor" href="#new操作符" aria-label="Permalink to &quot;new操作符&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yck&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下是conosle.log(t)输出</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Test {</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yck&quot;</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    __proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        sayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ƒ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ƒ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            caller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Test&quot;</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ƒ, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ƒ}</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            __proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ƒ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            [[FunctionLocation]]: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VM4610</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            [[Scopes]]: Scopes[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        __proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Object</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>从上面我们可以知道</p><ul><li>new 操作符会返回一个新对象，所以我们需要在内部创建一个对象</li><li>这个对象可以访问构造函数上的任意属性,可以访问到构造函数原型上的属性/方法，所以需要将对象与构造函数链接起来</li><li>返回原始值需要忽略，返回对象需要正常处理</li></ul><p>我们就可以着手来实现功能了</p><p>1、<code>Object.create()</code>以一个现有对象作为原型，创建一个新对象。使用现有的对象来提供新创建的对象的__proto__。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Con</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Con</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Con.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, args)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>2、<code>Object.setPrototypeOf({},prototype/null)</code>设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或null。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Con</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Con</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Con.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, args)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>关于构造函数返回值的问题：</p><ul><li>构造函数会默认返回this，也就是新的实例对象</li><li>普通函数如果没有return值的话，返回undefined</li><li>return的是五种简单数据类型：String,Number,Boolean,Null,Undefined的话，构造函数会忽略return的值，依然返回this对象</li><li>如果return的是引用类型：Array,Date,Object,Function,RegExp,Error的话，构造函数和普通函数都会返回return后面的值,构造函数的原型不被使用</li></ul>`,11),l=[t];function k(p,e,E,r,d,g){return a(),i("div",null,l)}const c=s(h,[["render",k]]);export{o as __pageData,c as default};