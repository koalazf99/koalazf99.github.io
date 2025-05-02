---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,600,400italic,600italic,300,300italic'
    rel='stylesheet' type='text/css'>
<style>

</style>
# 🐨 About Me
I am Fan Zhou, currently a PhD student advised by Prof. [Pengfei Liu](http://pfliu.com/).

Previously, I obtained my Master Degree, and Bachelor Degree (IEEE honor class) at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) (SJTU), major in computer science.
I've interned at [Microsoft Research Asia](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/) (2021-2022), [XLang Lab](https://xlang.ai/)@[HKUNLP](https://hkunlp.github.io/) (2023), where I spent wonderful times with my mentors and colleagues, and made some good friends.

## Research Interests
I try to build useful tools and train performant models towards the goal of powerful and general-purpose AI.
Recently, I am particularly interested in the following topics, and develop several scalable methods for them:
- Data-Centric Methods and Foundation Model Development: ([**MegaMath**](https://arxiv.org/abs/2504.02807), [**ProX**](https://arxiv.org/abs/2409.17115), [**Sailor2**](https://sea-sailor.github.io/blog/sailor2/))
- Code Generation, Understanding, and Everything related to Reasoning ([**MSTaR**](https://arxiv.org/abs/2412.17451), [**OctoThinker**](https://natural-rugby-f7c.notion.site/OctoThinker-Revisiting-Mid-Training-1d20b810e2d680c494a9f9dad0a90d53))
- Agentic Language Models and Applications: ([**OpenAgents**](https://github.com/xlang-ai/OpenAgents), [**Lemur**](https://arxiv.org/abs/2310.06830))

<!-- <a href='https://scholar.google.com/citations?user=qi8UzmkAAAAJ&hl=en'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>
<a href='./uploads/FZhou_Resume.pdf'><img src="https://img.shields.io/badge/-My Resumé-299DE7?logo=gitbook&logoColor=white"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkoalazf99.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=false"/></a> -->


# 🔥 News

<style>  
    .scrollable-area {  
        max-height: 190px;  
        overflow-y: auto;  
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);  /* 更柔和的阴影 */
        padding: 10px 15px;  /* 增加内边距让内容不贴边 */
        color: #333;
        border: 1px solid #e0e0e0;  /* 浅灰色边框 */
        border-radius: 8px;  /* 圆角边框 */
        background-color: #ffffff;  /* 确保背景是白色 */
    }
    /* 设置滚动条的宽度和轨道背景 */
    .scrollable-area::-webkit-scrollbar {
        width: 8px;
    }
    /* 设置滚动条轨道 */
    .scrollable-area::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }
    /* 设置滚动条滑块 */
    .scrollable-area::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    /* 鼠标悬停在滑块上时的样式 */
    .scrollable-area::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .pdf {
        text-decoration: none;
        color: #122c8b;
    }
    .code {
        text-decoration: none;
        color: #122c8b;
    }
    .title{
        color: #374798;
    }
</style>

<div class="scrollable-area" style="width:100%;">
    <ul>
        <li><em>2025.05</em>: 📄 <strong>ProX</strong> and <strong>MSTaR</strong> paper are accepted by ICML'25.</li>
        <li><em>2025.04</em>: 🔥 Say hi to <strong>OctoThinker</strong>, a mid-training ablation study in the era of RL scaling.</li>
        <li><em>2025.04</em>: 🔥 We release <strong>MegaMath</strong>, the largest math pre-training dataset to date containing 370B tokens.</li>
        <li><em>2024.12</em>: 🔥 Enjoy <a href="https://sea-sailor.github.io/blog/sailor2/"><strong>Sailor2</strong></a>, a state-of-the-art language model family for south-east asia.</li>
        <li><em>2024.11</em>: 🔥 We have released <a href="https://mstar-lmm.github.io/"><strong>MStaR</strong></a>, a self-evolving training recipe for multimodal reasoning.</li>
        <li><em>2024.09</em>: 🔥 We have released <a href="https://arxiv.org/abs/2409.17115"><strong>ProX</strong></a>, a small-LM-based pre-training data refining framework!</li>
        <li><em>2024.09</em>: 📄 <strong>OlympicArena</strong> paper is accepted by Neurips'24.</li>
        <li><em>2024.07</em>: 📄 <strong>OpenAgents</strong> paper is accepted by COLM'24.</li>
        <li><em>2024.05</em>: 📄 <strong>Preference Dissection</strong> paper is accepted by ACL'24.</li>
        <li><em>2024.01</em>: 📄 Our <strong>Lemur</strong> paper(Agent Model) is accepted by ICLR'24 (<strong><font color="#cc0000">Spotlight</font></strong>, 5%).</li>  
        <li><em>2023.10</em>: 🔥 We've built <a href="https://github.com/xlang-ai/OpenAgents">OpenAgents</a>, an open platform for language agents in the wild!</li>  
        <li><em>2023.10</em>: 🙋 We have released <a href="https://arxiv.org/abs/2310.06830">Lemur-70B</a>, an agentic language model based on LLama-2!</li>  
        <li><em>2023.04</em>: 🔥 New <a href="https://arxiv.org/abs/2304.07995">preprint</a> applying <strong>symbolic tasks</strong> in <strong>instruction tuning</strong></li>  
        <li><em>2022.10</em>: 📄 Our <strong>TaCube</strong> paper(Table QA) is accepted by EMNLP'22 (<strong><font color="#cc0000">Oral</font></strong> Presentation).</li>  
    </ul>  
</div>

<!-- import publications markdown -->
{% include publications.md %}


<!-- # Projects
<div class='paper-box'>
    <div class='paper-box-image'>
        <div><img src='images/openagents_overview.png' alt="sym" width="100%"></div>
    </div>
    <div class='paper-box-text' markdown="1">

[**OpenAgents**](https://github.com/xlang-ai/OpenAgents) (2023) [![](https://img.shields.io/github/stars/xlang-ai/OpenAgents?style=social)](https://github.com/xlang-ai/OpenAgents)

Host your own ChatGPT Plus locally!

- **Data Agent**: code interpreter augmented with data tools
- **Plugins Agent**: 200+ plugins for daily life
- **Web Agent**: autonomous web browsing
</div>
</div> -->

# Exeperiences

- <img src="images/education.png" width=18em style="vertical-align: middle;"> _2017.09 - 2021.06_, B.S.@SJTU, CS, IEEE honor class.
- <img src="images/education.png" width=18em style="vertical-align: middle;"> _2021.09 - 2024.03_, M.S.@SJTU, CS.
<!-- - <img src="images/intern.png" width=18em style="vertical-align: middle;"> _2021.10 - 2022.08_, Intern@MSRA. -->
<!-- - <img src="images/intern.png" width=18em style="vertical-align: middle;"> _2023.09 - 2023.09_, Intern@XLang-HKU. -->
<!-- - <img src="images/intern.png" width=18em style="vertical-align: middle;"> _2024.02 -_, Research Collaborator@Sea AI Lab, Singapore. -->
<!-- - <img src="images/intern.png" width=18em style="vertical-align: middle;"> _2024.01 - 2024.06_, Research Assistant@Shanghai AI Lab, Shanghai. -->
<!-- - <img src="images/intern.png" width=18em style="vertical-align: middle;"> _2024.06 - 2025.04_, Intern@LLM360. -->

# Service and Awards

- Reviewer: ICLR, NeurIPS, COLM, ACL, IJCAI, COLING, ...
<!-- [Instruction Workshop @ NeurIPS 2023](https://an-instructive-workshop.github.io/), [MATH-AI Workshop @ NeurIPS 2024](https://mathai2024.github.io/) -->
<!-- - TA: Introduction to Programming (2021), [Large Language Models](https://gair-nlp.github.io/cs2916/) (CS2916, 2024) -->
- MSRA: Award of Excellent Intern, 2022
<!-- - Outstanding Graduates of SJTU, 2021 -->
<!-- - SJTU Academic Scholarship, 2017~2020 -->
<!-- - Shanghai City Scholarship(≈top 5%), 2018 -->