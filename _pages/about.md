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
I am Fan Zhou, currently doing AI research at [GAIR Lab](https://plms.ai) (2024 -- Now) mentored by Prof. [Pengfei Liu](http://pfliu.com/).

Previously, I obtained my Master Degree, and Bachelor Degree (IEEE honor class) at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) (SJTU), major in computer science.
I've interned at [Microsoft Research Asia](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/) (2021-2022), [XLang Lab](https://xlang.ai/)@[HKUNLP](https://hkunlp.github.io/) (2023), where I spent wonderful times with my mentors and colleagues.

## Research Interests
I am generally interested in Natural Language Processing, and try to train good models and build useful tools.

Recently, I am particularly interested in:
- Data-Centric Methods: ([**ProX**](https://arxiv.org/abs/2409.17115))
- Code Generation, Understanding, and Reasoning.
- Agentic Language Models and Applications: ([**OpenAgents**](https://github.com/xlang-ai/OpenAgents), [**Lemur**](https://arxiv.org/abs/2310.06830))

<a href='https://scholar.google.com/citations?user=qi8UzmkAAAAJ&hl=en'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>
<a href='./uploads/FZhou_Resume.pdf'><img src="https://img.shields.io/badge/-My Resumé-299DE7?logo=gitbook&logoColor=white"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkoalazf99.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=false"/></a>

<!-- # 🔥 News
- *2024.01*: &nbsp;🎉🎉 Our **Lemur** paper(Agent Model) got accepted by ICLR'24 (Spotlight, 5%).
- *2023.10*: &nbsp;🔥🔥 We've built [OpenAgents](https://github.com/xlang-ai/OpenAgents), an open platform for language agents in the wild!
- *2023.10*: &nbsp;🙋🙋 We have released [Lemur-70B](https://arxiv.org/abs/2310.06830), an agentic language model based on LLama-2!
- *2023.04*: &nbsp;🔥🔥 New preprint applying [**symbolic tasks** in **instruction tuning**](https://arxiv.org/abs/2304.07995)!
- *2022.10*: &nbsp;🎉🎉 Our **TaCube** paper(Table QA) got accepted by EMNLP'22 (Oral Presentation). -->

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
        <li><em>2024.11</em>: 🔥 We have released <a href="https://mstar-lmm.github.io/"><strong>MStaR</strong></a>, a self-evolving training recipe for multimodal reasoning.</li>
        <li><em>2024.09</em>: 🔥 We have release <a href="https://arxiv.org/abs/2409.17115"><strong>ProX</strong></a>, a slm-based pre-training data refining framework.</li>
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

# Publications

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Diving into Self-Evolving Training for Multimodal Reasoning</font></strong>\\
Wei Liu\*, Junlong Li\*, Xiwen Zhang, **Fan Zhou**, Yu Cheng, Junxian He, (*=equal contribution) \\
**2024, Project**. <br>
<a href="https://mstar-lmm.github.io/" style="code"><span>Project Page</span></a>
</div>
<span>A self-evolving training recipe for multimodal reasoning.</span>
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Programming Every Example: Lifting Pre-training Data Quality like Experts at Scale</font></strong>\\
**Fan Zhou\***, Zengzhi Wang\*, Qian Liu, Junlong Li, Pengfei Liu, (*=equal contribution) \\
**2024, Preprint**. <br>
<a href="https://arxiv.org/abs/2409.17115" style="pdf"><span>PDF</span></a> / 
<a href="https://github.com/GAIR-NLP/ProX" style="code"><span>Code</span></a> / 
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/gair-prox" style="pdf"><span>Dataset</span>,</a>
<span>**<font color="#cc0000">>5K Downloads</font>**</span> / 
<a href="https://gair-nlp.github.io/ProX" style="pdf"><span>Project Page</span></a> / 
<a href="https://github.com/GAIR-NLP/ProX">
<img src="https://img.shields.io/github/stars/GAIR-NLP/ProX?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>A small-LLM-based pre-training data refining framework via seamless program generation, with **<font color="#cc0000">>100B Tokens of High-quality Data</font>** released.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">OlympicArena: Benchmarking Multi-discipline Cognitive Reasoning for Superintelligent AI</font></strong>\\
Zhen Huang, Zengzhi Wang, Shijie Xia, Xuefeng Li, Haoyang Zou, Ruijie Xu, Run-Ze Fan, Lyumanshan Ye, Ethan Chern, Yixin Ye, Yikai Zhang, Yuqing Yang, Ting Wu, Binjie Wang, Shichao Sun, Yang Xiao, Yiyuan Li, **Fan Zhou**, Steffi Chern, Yiwei Qin, Yan Ma, Jiadi Su, Yixiu Liu, Yuxiang Zheng, Shaoting Zhang, Dahua Lin, Yu Qiao, Pengfei Liu \\
**Neurips 2024 (DB track)** <br>
<a href="https://arxiv.org/abs/2406.12753" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/GAIR-NLP/OlympicArena" style="code"><span>Code</span></a> /
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/datasets/GAIR/OlympicArena" style="pdf"><span>Datasets</span></a> /
<a href="https://gair-nlp.github.io/OlympicArena/" style="pdf"><span>Project Page</span></a> /
<a href="https://github.com/GAIR-NLP/OlympicArena">
<img src="https://img.shields.io/github/stars/GAIR-NLP/OlympicArena?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>A challenging multi-modal olympic competition benchmark for LLMs and LVMs.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Dissecting Human and LLM Preferences</font></strong>\\
Junlong Li, **Fan Zhou**, Shichao Sun, Yikai Zhang, Hai Zhao, Pengfei Liu \\
**ACL 2024** <br>
<a href="https://arxiv.org/abs/2402.11296" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/GAIR-NLP/Preference-Dissection" style="code"><span>Code</span></a> /
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/datasets/GAIR/Preference-Dissection" style="pdf"><span>Datasets</span></a> /
<a href="https://github.com/GAIR-NLP/Preference-Dissection">
<img src="https://img.shields.io/github/stars/GAIR-NLP/Preference-Dissection?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>Disentangling preferred and dispreferred features of LLM responses.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">OpenAgents: An Open Platform for Language Agents in the Wild</font></strong>\\
Tianbao Xie\*, **Fan Zhou\***, Zhoujun Cheng\*, Peng Shi\*, Luoxuan Weng\*, Yitao Liu\*, Toh Jing Hua, Junning Zhao, Qian Liu, Che Liu, Leo Z. Liu, Yiheng Xu, Hongjin Su, Dongchan Shin, Caiming Xiong, Tao Yu, (*=equal contribution) \\
**COLM 2024** <br>
<a href="https://arxiv.org/abs/2310.10634" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/xlang-ai/OpenAgents" style="code"><span>Code</span></a> /
<a href="https://www.xlang.ai/blog/xlang-intro" style="pdf"><span>Blog</span></a>
<span>**<font color="#cc0000"> (7.5K Users)</font>**</span> / 
<a href="https://github.com/xlang-ai/OpenAgents">
<img src="https://img.shields.io/github/stars/xlang-ai/OpenAgents?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>An open platform for using, hosting, and building language agents.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Lemur: Harmonizing Natural Language and Code for Language Agents</font></strong>\\
Yiheng Xu\*, Hongjin Su\*, Chen Xing\*, Boyu Mi, Qian Liu, Weijia Shi, Binyuan Hui, **Fan Zhou**, Yitao Liu, Tianbao Xie, Zhoujun Cheng, Siheng Zhao, Lingpeng Kong, Bailin Wang, Caiming Xiong, Tao Yu, (*=equal contribution) \\
**ICLR 2024,** **<font color="#cc0000">Spotlight</font>** <br>
<a href="https://arxiv.org/abs/2310.06830" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/OpenLemur/Lemur" style="code"><span>Code</span></a> /
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/OpenLemur" style="pdf"><span>Models</span></a> /
<a href="https://www.xlang.ai/blog/openlemur" style="pdf"><span>Blog</span></a>
<a href="https://github.com/OpenLemur/Lemur">
<img src="https://img.shields.io/github/stars/OpenLemur/Lemur?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>A 70B agent model pre-trained with balanced code-text corpora, compatible with GPT-3.5.</span>
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">From Zero to Hero: Examining the Power of Symbolic Tasks in Instruction Tuning</font></strong>\\
Qian Liu\*, **Fan Zhou\***, Zhengbao Jiang, Longxu Dou, Min Lin, (*=equal contribution) \\
**Tech Report 2023** <br>
<a href="https://arxiv.org/abs/2304.07995" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/sail-sg/symbolic-instruction-tuning" style="code"><span>Code</span></a> /
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/datasets/sail/symbolic-instruction-tuning" style="pdf"><span>Datasets</span></a> &
<a href="https://huggingface.co/models?search=sail/tapex-zero"><span>Models</span></a> /
<a href="https://github.com/sail-sg/symbolic-instruction-tuning">
<img src="https://img.shields.io/github/stars/sail-sg/symbolic-instruction-tuning?style=social" style="vertical-align: middle;"> \\
</a>
</div>
<span>A symbolic and synthetic method for improving instruction tuning.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Reflection of Thought: Inversely Eliciting Numerical Reasoning in Language Models via Solving Linear Systems</font></strong>\\
**Fan Zhou\***, Haoyu Dong\*, Qian Liu, Zhoujun Cheng, Shi Han, Dongmei Zhang, (*=equal contribution) \\
**NeurIPS 2022, 2nd MATH-AI Workshop** <br>
<a href="https://arxiv.org/abs/2210.05075" style="pdf"><span>PDF</span> \\
</a>
</div>
<span>Inference time calibration for LLM-based numerical reasoning.</span> 
<br><br>
 
<div class='paper-box-text' markdown="1">
<strong><font color="#374798">TaCube: Pre-computing Data Cubes for Answering Numerical-Reasoning Questions over Tabular Data</font></strong>\\
**Fan Zhou**, Mengkang Hu, Haoyu Dong, Zhoujun Cheng, Fan Cheng, Shi Han, Dongmei Zhang \\
**EMNLP 2022,** **<font color="#cc0000">Oral</font>** <br>
<a href="https://arxiv.org/abs/2205.12682" style="pdf"><span>PDF</span> \\
</a>
</div>
<span>Pre-computing aggregation/arithmetic results to assist table numerical reasoning.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Table Pre-training: A Survey on Model Architectures, Pretraining Objectives, and Downstream Tasks</font></strong>\\
Haoyu Dong, Zhoujun Cheng, Xinyi He, Mengyu Zhou, Anda Zhou, **Fan Zhou**, Ao Liu, Shi Han, Dongmei Zhang \\
**IJCAI 2022 (survey track)** <br>
<a href="https://arxiv.org/abs/2201.09745" style="pdf"><span>PDF</span> \\
</a>
</div>
<span>A survey on various tabular models, especially on the pretrained transformers.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Exploring Image Regions Not Well Encoded by an INN</font></strong>\\
Zenan Ling, **Fan Zhou**, Meng Wei, Quanshi Zhang \\
**AISTATS 2022** <br>
<a href="https://proceedings.mlr.press/v151/ling22a/ling22a.pdf" style="pdf"><span>PDF</span> \\
</a>
</div>
<span>An analysis on the normalizing flow's generation flaws.</span> 
<br><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Quantification and Analysis of Layer-wise and Pixel-wise Information Discarding</font></strong>\\
Haotian Ma, Hao Zhang, **Fan Zhou**, Quanshi Zhang \\
**ICML 2022** <br>
<a href="https://proceedings.mlr.press/v162/ma22b/ma22b.pdf" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/haotianSustc/deepinfo" style="code"><span>Code</span> \\
</a>
</div>
<span>A quantitative analysis of CNNs.</span> 
<br><br>


# Projects
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
</div>

# Exeperiences

- <img src="images/education.png" width=18em style="vertical-align: middle;"> _2021.09 - 2024.03_, M.S.@SJTU, Computer Science.
- <img src="images/education.png" width=18em style="vertical-align: middle;"> _2017.09 - 2021.06_, B.S.@SJTU, IEEE honor class, Computer Science.

# Service and Awards

- Reviewer: COLING 2024~2025, ICLR 2025, [Instruction Workshop @ NeurIPS 2023](https://an-instructive-workshop.github.io/), [MATH-AI Workshop @ NeurIPS 2024](https://mathai2024.github.io/)
- Teaching Assistant: Introduction to Programming (2021), [Large Language Models](https://gair-nlp.github.io/cs2916/) (CS2916, 2024)
- MSRA Stars of Tomorrow (Award of Excellent Intern), 2022
- Outstanding Graduates of SJTU, 2021
<!-- - SJTU Academic Scholarship, 2017~2020 -->
- Shanghai City Scholarship(≈top 5%), 2018