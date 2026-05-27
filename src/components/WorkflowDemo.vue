<script setup lang="ts">
</script>

<template>
  <section class="animate-fade-in-up py-20 lg:py-28 bg-ink-50/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 leading-tight">
            从回答问题，<br />到参与研究过程
          </h2>
          <p class="text-base text-ink-500 leading-relaxed mb-8 max-w-md">
            攻玉学术智能体不只是生成回复，而是能够理解研究目标、组织相关资料、调用专业工具，真正参与到研究过程中。
          </p>
          <div class="space-y-5">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-ink-800">理解复杂的研究问题和需求</h4>
                <p class="text-sm text-ink-500 mt-0.5">深入分析研究目标，制定个性化方案</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-ink-800">自动检索和整理相关文献资料</h4>
                <p class="text-sm text-ink-500 mt-0.5">亿级文献库智能检索与筛选</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-ink-800">调用专业工具进行数据分析</h4>
                <p class="text-sm text-ink-500 mt-0.5">集成代码执行与数据可视化</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Demo -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl shadow-ink-200/30 border border-ink-100 overflow-hidden">
            <div class="px-4 py-3 border-b border-ink-100 flex items-center space-x-2">
              <div class="flex space-x-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div class="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <span class="text-xs text-ink-400 ml-2">研究助手</span>
            </div>
            <div class="p-5 space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-7 h-7 rounded-full bg-ink-100 flex items-center justify-center flex-shrink-0">
                  <span class="text-ink-500 text-xs">U</span>
                </div>
                <div class="bg-ink-50 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-xs">
                  <p class="text-sm text-ink-700">帮我查找关于深度学习在医学影像中应用的最新文献</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-sm">
                  <p class="text-sm text-ink-700">已为您检索到 1,247 篇相关文献，以下是按引用量排序的前 10 篇...</p>
                </div>
                <div class="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">攻</span>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-7 h-7 rounded-full bg-ink-100 flex items-center justify-center flex-shrink-0">
                  <span class="text-ink-500 text-xs">U</span>
                </div>
                <div class="bg-ink-50 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-xs">
                  <p class="text-sm text-ink-700">帮我总结一下 ResNet 在这个领域的主要贡献</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-sm">
                  <p class="text-sm text-ink-700">正在为您整理相关资料...</p>
                  <div class="flex items-center space-x-2 mt-2">
                    <div class="w-3 h-3 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                    <span class="text-xs text-brand-500">执行中</span>
                  </div>
                </div>
                <div class="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">攻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
