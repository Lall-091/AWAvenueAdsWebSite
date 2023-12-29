import{_ as s,o as a,c as i,R as e}from"./chunks/framework.slSl-7H0.js";const E=JSON.parse('{"title":"How to Use","description":"","frontmatter":{},"headers":[],"relativePath":"en/Knowledge.md","filePath":"en/Knowledge.md"}'),t={name:"en/Knowledge.md"},n=e(`<h1 id="how-to-use" tabindex="-1">How to Use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to Use&quot;">​</a></h1><h3 id="adguard-home" tabindex="-1">AdGuard Home <a class="header-anchor" href="#adguard-home" aria-label="Permalink to &quot;AdGuard Home&quot;">​</a></h3><p>Copy the available subscription link and import it into AdGuard Home&#39;s DNS blacklist to take effect.</p><h3 id="adguard-dns" tabindex="-1">AdGuard DNS <a class="header-anchor" href="#adguard-dns" aria-label="Permalink to &quot;AdGuard DNS&quot;">​</a></h3><p>In the rule list, directly find &quot;AWAvenue Ads Rule&quot; and check the subscription.</p><h3 id="adguard" tabindex="-1">AdGuard <a class="header-anchor" href="#adguard" aria-label="Permalink to &quot;AdGuard&quot;">​</a></h3><p>Copy the available subscription link and import it into AdGuard&#39;s custom filtering list to take effect.</p><h3 id="clash-meta" tabindex="-1">Clash Meta <a class="header-anchor" href="#clash-meta" aria-label="Permalink to &quot;Clash Meta&quot;">​</a></h3><p>Simply configure it yourself. Note that feedback groups do not accept this type of inquiry.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rule-providers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  AWAvenue Ads Rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    behavior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">domain</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./rule_providers/AWAvenue-Ads-Rule-Clash.yaml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Adjust this path as needed</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Adblock-Rule-Clash.yaml&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60480</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RULE-SET,AWAvenue Ads Rule,REJECT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # The &quot;REJECT&quot; group here is just an example. Configure specific groups based on your needs.</span></span></code></pre></div><h3 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h3><p>Just a moment (to be added).</p><h3 id="mosdns" tabindex="-1">mosdns <a class="header-anchor" href="#mosdns" aria-label="Permalink to &quot;mosdns&quot;">​</a></h3><p>Just a moment (to be added).</p>`,14),l=[n];function h(d,p,r,o,k,u){return a(),i("div",null,l)}const g=s(t,[["render",h]]);export{E as __pageData,g as default};