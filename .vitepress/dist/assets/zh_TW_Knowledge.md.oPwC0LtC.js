import{_ as s,o as a,c as i,R as n}from"./chunks/framework.emLw3Ecc.js";const u=JSON.parse('{"title":"如何使用","description":"","frontmatter":{},"headers":[],"relativePath":"zh_TW/Knowledge.md","filePath":"zh_TW/Knowledge.md"}'),e={name:"zh_TW/Knowledge.md"},l=n(`<h1 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h1><h3 id="adguard-home" tabindex="-1">AdGuard Home <a class="header-anchor" href="#adguard-home" aria-label="Permalink to &quot;AdGuard Home&quot;">​</a></h3><p>複製可用的訂閱鏈接，將其導入 AdGuard Home 的 DNS 黑名單中，即可生效。</p><h3 id="adguard-dns" tabindex="-1">AdGuard DNS <a class="header-anchor" href="#adguard-dns" aria-label="Permalink to &quot;AdGuard DNS&quot;">​</a></h3><p>在規則列表中直接找到「AWAvenue Ads Rule」，勾選訂閱即可。</p><h3 id="adguard" tabindex="-1">AdGuard <a class="header-anchor" href="#adguard" aria-label="Permalink to &quot;AdGuard&quot;">​</a></h3><p>複製可用的訂閱鏈接，將其導入 AdGuard 的自定義過濾列表中，即可生效。</p><p><a href="./AdGuard.html">詳細教學（附操作影片）</a></p><h3 id="藍貓" tabindex="-1">藍貓 <a class="header-anchor" href="#藍貓" aria-label="Permalink to &quot;藍貓&quot;">​</a></h3><p>簡單地舉個例子，自行配置。請注意，反饋群不接受此類詢問。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rule-providers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  AWAvenue Ads Rule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    behavior</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">domain</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./rule_providers/AWAvenue-Ads-Rule-Clash.yaml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 需要時請調整此路徑</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule-Clash.yaml&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60480</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RULE-SET,AWAvenue Ads Rule,REJECT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 這裡的「REJECT」組僅為示例。根據實際需要配置具體的組。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Surge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Just a moment（咕咕咕）。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### mosdns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Just a moment（咕咕咕）。</span></span></code></pre></div>`,11),h=[l];function t(p,d,r,k,o,E){return a(),i("div",null,h)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};
