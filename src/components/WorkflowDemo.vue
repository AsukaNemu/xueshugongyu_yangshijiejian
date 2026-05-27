<script setup lang="ts">
</script>

<template>
  <section class="animate-fade-in-up py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            从回答问题，到参与研究过程
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            攻玉学术智能体不只是生成回复，而是能够理解研究目标、组织相关资料、调用专业工具，真正参与到研究过程中。
          </p>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">理解复杂的研究问题和需求</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">自动检索和整理相关文献资料</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">调用专业工具进行数据分析</span>
            </li>
          </ul>
        </div>

        <!-- Right: Demo -->
        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div class="p-4 border-b border-slate-100 bg-slate-50">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 rounded-full bg-green-400" />
              <span class="text-sm font-medium text-slate-700">研究助手</span>
            </div>
          </div>
          <div class="p-4 space-y-4 h-80 overflow-y-auto">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <span class="text-slate-600 text-sm">U</span>
              </div>
              <div class="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2">
                <p class="text-sm text-slate-700">我需要研究 Transformer 在时间序列预测中的应用</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 justify-end">
              <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                <p class="text-sm text-slate-700 mb-2">好的，我来帮您规划研究路径：</p>
                <p class="text-sm text-slate-600">1. 首先检索该领域的综述文献</p>
                <p class="text-sm text-slate-600">2. 分析主要研究方向和方法</p>
                <p class="text-sm text-slate-600">3. 整理关键论文和代码实现</p>
              </div>
              <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                <span class="text-white text-sm font-bold">攻</span>
              </div>
            </div>
            <div class="flex items-start space-x-3 justify-end">
              <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2 max-w-sm">
                <p class="text-sm text-slate-700">正在为您检索相关文献...</p>
                <div class="flex items-center space-x-2 mt-2">
                  <div class="w-4 h-4 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
                  <span class="text-xs text-brand-600">执行中</span>
                </div>
              </div>
              <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                <span class="text-white text-sm font-bold">攻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
