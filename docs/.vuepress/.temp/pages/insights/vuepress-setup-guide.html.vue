<template><div><h1 id="vuepress-setup-guide" tabindex="-1"><a class="header-anchor" href="#vuepress-setup-guide"><span>VuePress Setup Guide</span></a></h1>
<p><strong>Published:</strong> November 28, 2025</p>
<p>Setting up VuePress 2.0 for a personal blog or documentation site is straightforward. Here's what you need to know.</p>
<h2 id="what-is-vuepress" tabindex="-1"><a class="header-anchor" href="#what-is-vuepress"><span>What is VuePress?</span></a></h2>
<p>VuePress is a static site generator built on Vue.js. It's perfect for documentation sites, blogs, and portfolios.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@2 @vuepress/bundler-vite@2 vue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration"><span>Basic Configuration</span></a></h2>
<p>Create a <code v-pre>.vuepress/config.js</code> file with your site configuration:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'My Site'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'My awesome site'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'/about'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="building-your-site" tabindex="-1"><a class="header-anchor" href="#building-your-site"><span>Building Your Site</span></a></h2>
<ul>
<li>Development: <code v-pre>npm run docs:dev</code></li>
<li>Production: <code v-pre>npm run docs:build</code></li>
</ul>
<hr>
<p><em>Learn more at <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress Documentation</a></em></p>
</div></template>


