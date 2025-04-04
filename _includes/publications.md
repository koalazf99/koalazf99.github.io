<!-- CSS 样式：默认未选中显示灰色，选中时为黑色 -->
<style>
  .publication-header span {
    cursor: pointer;
    color: gray;
  }
  .publication-header span.active {
    color: black;
  }
</style>

<div id="publications">

<!-- 标题区域，使用 h1 实现 Markdown 的 # 标题效果 -->
<h1 class="publication-header">
  <span id="selectedHeader" class="active" onclick="filterPubs('selected')">📖 Selected Publications</span> |
  <span id="fullHeader" onclick="filterPubs('full')">Full</span>
</h1>

<div class="paper-box-text" data-selected="true" markdown="1">
<strong><font color="#374798">MegaMath: Pushing the Limits of Open Math Corpora</font></strong>\\
**Fan Zhou\***, Zengzhi Wang\*, Nikhil Ranjan, Zhoujun Cheng, Liping Tang, Guowei He, Zhengzhong Liu, Eric P. Xing \\
**2025, Preprint**. <br>
<a href="https://arxiv.org/abs/2504.02807" style="pdf"><span>PDF</span></a> / 
<a href="https://github.com/LLM360/MegaMath" style="code"><span>Code</span></a> / 
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/datasets/LLM360/MegaMath" style="pdf"><span>Dataset</span></a> /
<a href="https://github.com/LLM360/MegaMath">
<img src="https://img.shields.io/github/stars/LLM360/MegaMath?style=social" style="vertical-align: middle;"> \\
</a>
<span>The largest open math pre-training dataset with 370B tokens.</span>
<br>
<br>
</div>


<div class="paper-box-text" data-selected="true" markdown="1">
<strong><font color="#374798">Sailor2: Sailing in South-East Asia with Inclusive Multilingual LLMs</font></strong>\\
Longxu Dou\*, Qian Liu\*, **Fan Zhou\***, Changyu Chen\*, 
<span id="authorsCollapsed">... , </span>
<span id="authorsExpanded" style="display: none;">
Zili Wang, Ziqi Jin, Zichen Liu, Tongyao Zhu, Cunxiao Du, Penghui Yang, Haonan Wang, Xin Mao, Xiachong Feng, Man Tsung Yeung, Xinyi Wan, Kunat Pipatanakul, Fajri Koto, Min Si Thu, Hynek Kydlicek, Zeyi Liu, Qunshu Lin, Sittipong Sripaisarnmongkol, Kridtaphad Sae-Khow, Nirattisai Thongchim, Taechawat Konkaew, Narong Borijindargoon, Matichon Maneegard, Phakphum Artkaew, Quan Nguyen, Wannaphong Phatthiyaphaibun, Zheng-Xin Yong, Anh Dao, Hoang H. Tran, Mike Zhang, 
</span>
Tianyu Pang, Chao Du, Wei Lu, Min Lin (*=equal contribution)
<a href="#" onclick="
      var a = document.getElementById('authorsExpanded');
      var c = document.getElementById('authorsCollapsed');
      if(a.style.display==='none'){
         a.style.display='inline';
         c.style.display='none';
         this.innerText='[less authors]';
      } else {
         a.style.display='none';
         c.style.display='inline';
         this.innerText='[more authors]';
      }
      return false;
    ">
[more authors]
</a> \\
**2025, Tech Report**. <br>
<a href="https://arxiv.org/abs/2502.12982" style="pdf"><span>PDF</span></a> /
<a href="https://sea-sailor.github.io/blog/sailor2/" style="code"><span>Blog</span></a> /
<a href="https://github.com/sail-sg/sailor2" style="code"><span>Code</span></a> /
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/sailor2" style="pdf"><span>Resources</span></a> /
<a href="https://github.com/sail-sg/sailor2">
<img src="https://img.shields.io/github/stars/sail-sg/sailor2?style=social" style="vertical-align: middle;"> \\
</a>
<span>An open state-of-the-art language model family for south-east asia languages, continually trained on Qwen-2.5.</span>
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
<strong><font color="#374798">Diving into Self-Evolving Training for Multimodal Reasoning</font></strong>\\
Wei Liu\*, Junlong Li\*, Xiwen Zhang, **Fan Zhou**, Yu Cheng, Junxian He, (*=equal contribution) \\
**2024, Preprint**. <br>
<a href="https://arxiv.org/abs/2412.17451" style="pdf"><span>PDF</span></a> / 
<a href="https://github.com/hkust-nlp/mstar" style="code"><span>Code</span></a> / 
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/collections/hkust-nlp/m-star-676bbf9f749dbf511e7c4a32" style="pdf"><span>Resources</span></a> /
<a href="https://mstar-lmm.github.io/" style="code"><span>Project Page</span></a> /
<a href="https://github.com/hkust-nlp/mstar">
<img src="https://img.shields.io/github/stars/hkust-nlp/mstar?style=social" style="vertical-align: middle;"> \\
</a>
<span>A self-evolving training recipe for multimodal reasoning, M-STaR.</span>
<br>
<br>
</div>

<div class="paper-box-text" data-selected="true" markdown="1">
<strong><font color="#374798">Programming Every Example: Lifting Pre-training Data Quality like Experts at Scale</font></strong>\\
**Fan Zhou\***, Zengzhi Wang\*, Qian Liu, Junlong Li, Pengfei Liu, (*=equal contribution) \\
**2024, Preprint**. <br>
<a href="https://arxiv.org/abs/2409.17115" style="pdf"><span>PDF</span></a> / 
<a href="https://github.com/GAIR-NLP/ProX" style="code"><span>Code</span></a> / 
<img src="images/huggingface_logo.svg" width=23em style="vertical-align: middle;"> 
<a href="https://huggingface.co/gair-prox" style="pdf"><span>Dataset</span></a>
<span>**<font color="#cc0000">(>10K Downloads, >500B Tokens)</font>**</span> / 
<a href="https://gair-nlp.github.io/ProX" style="pdf"><span>Project Page</span></a> / 
<a href="https://github.com/GAIR-NLP/ProX">
<img src="https://img.shields.io/github/stars/GAIR-NLP/ProX?style=social" style="vertical-align: middle;"> \\
</a>
<span>A small-LLM-based pre-training data refining framework via seamless program generation.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
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
<span>A challenging multi-modal olympic competition benchmark for LLMs and LVMs.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
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
<span>Disentangling preferred and dispreferred features of LLM responses.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="true" markdown="1">
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
<span>An open platform for using, hosting, and building language agents.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="true" markdown="1">
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
<span>A 70B agent model pre-trained with balanced code-text corpora, compatible with GPT-3.5.</span>
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
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
<span>A symbolic and synthetic method for improving LM instruction tuning.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
<strong><font color="#374798">Reflection of Thought: Inversely Eliciting Numerical Reasoning in Language Models via Solving Linear Systems</font></strong>\\
**Fan Zhou\***, Haoyu Dong\*, Qian Liu, Zhoujun Cheng, Shi Han, Dongmei Zhang, (*=equal contribution) \\
**NeurIPS 2022, 2nd MATH-AI Workshop** <br>
<a href="https://arxiv.org/abs/2210.05075" style="pdf"><span>PDF</span> \\
</a>
<span>Inference time calibration for LLM-based numerical reasoning.</span> 
<br>
<br>
</div>
 
<div class="paper-box-text" data-selected="true" markdown="1">
<strong><font color="#374798">TaCube: Pre-computing Data Cubes for Answering Numerical-Reasoning Questions over Tabular Data</font></strong>\\
**Fan Zhou**, Mengkang Hu, Haoyu Dong, Zhoujun Cheng, Fan Cheng, Shi Han, Dongmei Zhang \\
**EMNLP 2022,** **<font color="#cc0000">Oral</font>** <br>
<a href="https://arxiv.org/abs/2205.12682" style="pdf"><span>PDF</span> \\
</a>
<span>Pre-computing aggregation/arithmetic results to assist table numerical reasoning.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
<strong><font color="#374798">Table Pre-training: A Survey on Model Architectures, Pretraining Objectives, and Downstream Tasks</font></strong>\\
Haoyu Dong, Zhoujun Cheng, Xinyi He, Mengyu Zhou, Anda Zhou, **Fan Zhou**, Ao Liu, Shi Han, Dongmei Zhang \\
**IJCAI 2022 (survey track)** <br>
<a href="https://arxiv.org/abs/2201.09745" style="pdf"><span>PDF</span> \\
</a>
<span>A survey on various tabular models, especially on the pretrained transformers.</span> 
<br>
<br>
</div>

<div class="paper-box-text" data-selected="false" markdown="1">
<strong><font color="#374798">Exploring Image Regions Not Well Encoded by an INN</font></strong>\\
Zenan Ling, **Fan Zhou**, Meng Wei, Quanshi Zhang \\
**AISTATS 2022** <br>
<a href="https://proceedings.mlr.press/v151/ling22a/ling22a.pdf" style="pdf"><span>PDF</span> \\
</a>
<span>An analysis on the normalizing flow's generation flaws.</span> 
<br>
<br>
</div>


<div class="paper-box-text" data-selected="false" markdown="1">
<strong><font color="#374798">Quantification and Analysis of Layer-wise and Pixel-wise Information Discarding</font></strong>\\
Haotian Ma, Hao Zhang, **Fan Zhou**, Quanshi Zhang \\
**ICML 2022** <br>
<a href="https://proceedings.mlr.press/v162/ma22b/ma22b.pdf" style="pdf"><span>PDF</span></a> /
<a href="https://github.com/haotianSustc/deepinfo" style="code"><span>Code</span> \\
</a>
<span>A quantitative analysis of CNNs.</span> 
<br>
<br>
</div>


</div>

<script>
function filterPubs(filterType) {
  var pubs = document.getElementById('publications').children;
  for (var i = 0; i < pubs.length; i++) {
    var selectedAttr = pubs[i].getAttribute('data-selected');
    if (selectedAttr !== null) { // 只对存在 data-selected 属性的元素进行处理
      if (filterType === 'selected') {
        pubs[i].style.display = (selectedAttr === 'true') ? '' : 'none';
      } else {
        pubs[i].style.display = '';
      }
    }
  }
  // 更新标题 active 样式
  if (filterType === 'selected') {
    document.getElementById('selectedHeader').classList.add('active');
    document.getElementById('fullHeader').classList.remove('active');
  } else {
    document.getElementById('fullHeader').classList.add('active');
    document.getElementById('selectedHeader').classList.remove('active');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  filterPubs('selected');
});
</script>