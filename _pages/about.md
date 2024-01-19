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

# 🐨 Me

I am currently a final-year Master student at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), under the supervise of [Prof. Fan Cheng](https://www.cs.sjtu.edu.cn/~chengfan/index.html), major in computer science. Before that, I received my B.S. degree in IEEE honor class at SJTU, major in computer science. I used to be a research intern at [ SJTU interpretable ML lab](https://sjtu-xai-lab.github.io/), guided by [Prof. Quanshi Zhang](http://qszhang.com) during my undergraduate study.

In 2021.10~2022, I worked as a research intern in Microsoft Research Asia (MSRA) [DKI group](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/) guided by [Haoyu Dong](https://www.microsoft.com/en-us/research/people/hadong/). I worked on some interesting research topics related to semi-structured tabular data, such as table pre-training, table question answering. 

Currently, I work as a research assistant in [XLang Lab](https://xlang.ai) @[HKUNLP](https://hkunlp.github.io/) advised by Prof. Tao Yu.
I also have the fortune to work with [Qian Liu](https://siviltaram.github.io/) at [Sea AI Lab](https://sail.sea.com/), who is an excellent collaborator!🤗

<a href='https://scholar.google.com/citations?user=qi8UzmkAAAAJ&hl=en'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>
<a href='./uploads/FZhou_Resume.pdf'><img src="https://img.shields.io/badge/-Fan's Resumé-299DE7?logo=gitbook&logoColor=white"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkoalazf99.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=page hits&edge_flat=false"/></a>


<!-- # 🔥 News
- *2024.01*: &nbsp;🎉🎉 Our **Lemur** paper(Agent Model) got accepted by ICLR'24 (Spotlight, 5%).
- *2023.10*: &nbsp;🔥🔥 We've built [OpenAgents](https://github.com/xlang-ai/OpenAgents), an open platform for language agents in the wild!
- *2023.10*: &nbsp;🙋🙋 We have released [Lemur-70B](https://arxiv.org/abs/2310.06830), an agentic language model based on LLama-2!
- *2023.04*: &nbsp;🔥🔥 New preprint applying [**symbolic tasks** in **instruction tuning**](https://arxiv.org/abs/2304.07995)!
- *2022.10*: &nbsp;🎉🎉 Our **TaCube** paper(Table QA) got accepted by EMNLP'22 (Oral Presentation). -->

# 🔥 News
<style>  
    .scrollable-area {  
        max-height: 180px;  
        overflow-y: auto;  
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);  
        padding: 10px;  
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

<div class="scrollable-area">  
    <ul>  
        <li><em>2024.01</em>: 🎉🎉 Our <strong>Lemur</strong> paper(Agent Model) got accepted by ICLR'24 (<font color="#cc0000">Spotlight</font>, 5%).</li>  
        <li><em>2023.10</em>: 🔥🔥 We've built <a href="https://github.com/xlang-ai/OpenAgents">OpenAgents</a>, an open platform for language agents in the wild!</li>  
        <li><em>2023.10</em>: 🙋🙋 We have released <a href="https://arxiv.org/abs/2310.06830">Lemur-70B</a>, an agentic language model based on LLama-2!</li>  
        <li><em>2023.04</em>: 🔥🔥 New <a href="https://arxiv.org/abs/2304.07995">preprint</a> applying <strong>symbolic tasks</strong> in <strong>instruction tuning</strong></li>  
        <li><em>2022.10</em>: 🎉🎉 Our <strong>TaCube</strong> paper(Table QA) got accepted by EMNLP'22 (<font color="#cc0000">Oral</font> Presentation).</li>  
    </ul>  
</div>  

# 🥑 Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/openagents_overview.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[*OpenAgents*](https://github.com/xlang-ai/OpenAgents)

Host your own ChatGPT Plus locally!

[**Demo**](https://chat.xlang.ai) | [**Paper**](https://arxiv.org/abs/2310.10634) | [**Doc**](https://docs.xlang.ai) | [![](https://img.shields.io/github/stars/xlang-ai/OpenAgents?style=social)](https://github.com/xlang-ai/OpenAgents)
-  Data Agent: code interpreter augmented with data tools
- Plugins Agent: 200+ plugins for daily life
- Web Agent: autonomous web browsing
</div>
</div>

# 📝 Publications 

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">OpenAgents: An Open Platform for Language Agents in the Wild</font></strong>\\
Tianbao Xie\*, **Fan Zhou\***, Zhoujun Cheng\*, Peng Shi\*, Luoxuan Weng\*, Yitao Liu\*, Toh Jing Hua, Junning Zhao, Qian Liu, Che Liu, Leo Z. Liu, Yiheng Xu, Hongjin Su, Dongchan Shin, Caiming Xiong, Tao Yu, (*=equal contribution) \\
**(2023, Preprint)** |  [📄 <a href="https://arxiv.org/abs/2310.10634" style="pdf"><span>PDF</span></a>] | [🛠 <a href="https://github.com/xlang-ai/OpenAgents" style="code"><span>Code</span></a>] | [📓 <a href="https://www.xlang.ai/blog/xlang-intro" style="pdf"><span>Blog</span></a>] | [![](https://img.shields.io/github/stars/xlang-ai/OpenAgents?style=social)](https://github.com/xlang-ai/OpenAgents)
</div><br>


<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Lemur: Harmonizing Natural Language and Code for Language Agents</font></strong>\\
Yiheng Xu\*, Hongjin Su\*, Chen Xing\*, Boyu Mi, Qian Liu, Weijia Shi, Binyuan Hui, **Fan Zhou**, Yitao Liu, Tianbao Xie, Zhoujun Cheng, Siheng Zhao, Lingpeng Kong, Bailin Wang, Caiming Xiong, Tao Yu, (*=equal contribution) \\
**ICLR 2024,** **<font color="#cc0000">Spotlight</font>** | [📄 <a href="https://arxiv.org/abs/2310.06830" style="pdf"><span>PDF</span></a>] | [🛠 <a href="https://github.com/OpenLemur/Lemur" style="code"><span>Code</span></a>] | [🤗 <a href="https://huggingface.co/OpenLemur" style=pdf><span>hf models</span></a>] | [📓 <a href="https://www.xlang.ai/blog/openlemur" style="pdf"><span>Blog</span></a>] | [![](https://img.shields.io/github/stars/OpenLemur/Lemur?style=social)](https://github.com/OpenLemur/Lemur)
</div><br>


<div class='paper-box-text' markdown="1">
<strong><font color="#374798">From Zero to Hero: Examining the Power of Symbolic Tasks in Instruction Tuning</font></strong>\\
Qian Liu\*, **Fan Zhou\***, Zhengbao Jiang, Longxu Dou, Min Lin, (*=equal contribution) \\
**(2023, Preprint)** |  [📄 <a href="https://arxiv.org/abs/2304.07995" style="pdf"><span>PDF</span></a>] | [🛠 <a href="https://github.com/sail-sg/symbolic-instruction-tuning" style="code"><span>Code</span></a>] | [🤗 <a href="https://huggingface.co/datasets/sail/symbolic-instruction-tuning" style="pdf"><span>hf datasets</span></a> & <a href="https://huggingface.co/models?search=sail/tapex-zero"><span>models</span></a>] | [![](https://img.shields.io/github/stars/sail-sg/symbolic-instruction-tuning?style=social)](https://github.com/sail-sg/symbolic-instruction-tuning)
</div><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Reflection of Thought: Inversely Eliciting Numerical Reasoning in Language Models via Solving Linear Systems</font></strong>\\
**Fan Zhou\***, Haoyu Dong\*, Qian Liu, Zhoujun Cheng, Shi Han, Dongmei Zhang, (*=equal contribution) \\
**NeurIPS 2022, 2nd MATH-AI Workshop** | [📄 <a href="https://arxiv.org/abs/2210.05075" style="pdf"><span>PDF</span></a>] 
</div><br>
 
<div class='paper-box-text' markdown="1">
<strong><font color="#374798">TaCube: Pre-computing Data Cubes for Answering Numerical-Reasoning Questions over Tabular Data</font></strong>\\
**Fan Zhou**, Mengkang Hu, Haoyu Dong, Zhoujun Cheng, Fan Cheng, Shi Han, Dongmei Zhang \\
**EMNLP 2022,** **<font color="#cc0000">Oral</font>** | [📄 <a href="https://arxiv.org/abs/2205.12682" style="pdf"><span>PDF</span></a>] | [🛠 <a href="https://github.com/koalazf99/tacube" style="code"><span>Code</span></a>]
</div><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Table Pre-training: A Survey on Model Architectures, Pretraining Objectives, and Downstream Tasks</font></strong>\\
Haoyu Dong, Zhoujun Cheng, Xinyi He, Mengyu Zhou, Anda Zhou, **Fan Zhou**, Ao Liu, Shi Han, Dongmei Zhang \\
**IJCAI 2022(survey track)** | [📄 <a href="https://arxiv.org/abs/2201.09745" style="pdf"><span>PDF</span></a>]
</div><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Exploring Image Regions Not Well Encoded by an INN</font></strong>\\
Zenan Ling, **Fan Zhou**, Meng Wei, Quanshi Zhang \\
**AISTATS 2022** | [📄 <a href="https://proceedings.mlr.press/v151/ling22a/ling22a.pdf" style="pdf"><span>PDF</span></a>]
</div><br>

<div class='paper-box-text' markdown="1">
<strong><font color="#374798">Quantification and Analysis of Layer-wise and Pixel-wise Information Discarding</font></strong>\\
Haotian Ma, Hao Zhang, **Fan Zhou**, Quanshi Zhang \\
**ICML 2022** | [📄 <a href="https://proceedings.mlr.press/v162/ma22b/ma22b.pdf" style="pdf"><span>PDF</span></a>] | [🛠 <a href="https://github.com/haotianSustc/deepinfo" style="code"><span>Code</span></a>]
</div>

# 📖 Service
- Workshop Reviewer: [Instruction Workshop @ NeurIPS 2023](https://an-instructive-workshop.github.io/)

# 🎖 Honors and Awards
- MSRA Stars of Tomorrow (Award of Excellent Intern), 2022
- Outstanding Graduates of SJTU, 2021
- SJTU Academic Scholarship, 2017~2020
- Shanghai City Scholarship(≈top 5%), 2018

# 📖 Educations
- *2021.09 - 2024.03 (expected)*, M.S.@SJTU, Computer Science & Engineering
- *2017.09 - 2021.06*, B.S.@SJTU, IEEE honor class, Computer Science.