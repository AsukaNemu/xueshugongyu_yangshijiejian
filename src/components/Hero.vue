<script setup lang="ts">
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl" />
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            他山之石
            <br />
            <span class="text-brand-600">可以攻玉</span>
          </h1>
          <p class="mt-4 text-lg text-slate-500 tracking-wide">
            See Further · Think Deeper · Act Faster
          </p>
          <p class="mt-6 text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            基于Agent架构的下一代科学研究系统。搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              class="px-8 py-3 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 text-center"
            >
              即刻开始
            </a>
            <a
              href="#pricing"
              class="px-8 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-brand-300 hover:text-brand-600 transition-all duration-300 text-center"
            >
              查看方案
            </a>
          </div>
        </div>

        <!-- Right: Product Preview -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div class="bg-slate-900 rounded-t-xl p-2 flex items-center space-x-2">
              <div class="flex space-x-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400" />
                <div class="w-3 h-3 rounded-full bg-yellow-400" />
                <div class="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div class="flex-1 bg-slate-800 rounded-md h-6 flex items-center px-3">
                <span class="text-xs text-slate-400">app.jadense.com</span>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <span class="text-brand-600 text-sm font-bold">U</span>
                </div>
                <div class="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                  <p class="text-sm text-slate-700">帮我查找关于深度学习在医学影像中应用的最新文献</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2 max-w-sm">
                  <p class="text-sm text-slate-700">已为您检索到 1,247 篇相关文献，以下是按引用量排序的前 10 篇...</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                  <span class="text-white text-sm font-bold">攻</span>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <span class="text-brand-600 text-sm font-bold">U</span>
                </div>
                <div class="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                  <p class="text-sm text-slate-700">帮我总结一下 ResNet 在这个领域的主要贡献</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Floating badge -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-100">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 rounded-full bg-green-400" />
              <span class="text-xs text-slate-500">Agent 就绪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
