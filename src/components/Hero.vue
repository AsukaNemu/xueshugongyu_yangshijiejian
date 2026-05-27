<script setup lang="ts">
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl" />
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-50 rounded-full blur-3xl" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-900">
            他山之石
            <br />
            <span class="text-brand-700">可以攻玉</span>
          </h1>
          <div class="relative mt-6">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-ink-800 tracking-wider">
              See Further · Think Deeper · Act Faster
            </p>
            <div class="absolute inset-0 pointer-events-none" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M50 0 C60 20 80 30 100 50 C80 70 60 80 50 100 C40 80 20 70 0 50 C20 30 40 20 50 0Z%22 fill=%22%23166534%22 opacity=%220.08%22/></svg>'); background-size: 60px 60px; mix-blend-mode: multiply;"></div>
          </div>
          <p class="mt-6 text-base text-ink-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            基于Agent架构的下一代科学研究系统。搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              class="px-8 py-3 text-base font-medium text-white bg-brand-700 rounded-xl hover:bg-brand-800 transition-all duration-300 hover:shadow-lg hover:shadow-brand-700/25 text-center"
            >
              即刻开始
            </a>
            <a
              href="#pricing"
              class="px-8 py-3 text-base font-medium text-ink-700 bg-white border border-ink-200 rounded-xl hover:border-brand-300 hover:text-brand-700 transition-all duration-300 text-center"
            >
              查看方案
            </a>
          </div>
        </div>

        <!-- Right: Product Preview -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl shadow-ink-200/50 border border-ink-100 overflow-hidden">
            <div class="bg-ink-900 rounded-t-xl p-2 flex items-center space-x-2">
              <div class="flex space-x-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400" />
                <div class="w-3 h-3 rounded-full bg-yellow-400" />
                <div class="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div class="flex-1 bg-ink-800 rounded-md h-6 flex items-center px-3">
                <span class="text-xs text-ink-400">app.jadense.com</span>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <span class="text-brand-700 text-sm font-bold">U</span>
                </div>
                <div class="bg-ink-50 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                  <p class="text-sm text-ink-700">帮我查找关于深度学习在医学影像中应用的最新文献</p>
                </div>
              </div>
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2 max-w-sm">
                  <p class="text-sm text-ink-700">已为您检索到 1,247 篇相关文献，以下是按引用量排序的前 10 篇...</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-brand-700 flex items-center justify-center">
                  <span class="text-white text-sm font-bold">攻</span>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <span class="text-brand-700 text-sm font-bold">U</span>
                </div>
                <div class="bg-ink-50 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                  <p class="text-sm text-ink-700">帮我总结一下 ResNet 在这个领域的主要贡献</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Floating badge -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-ink-100">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 rounded-full bg-brand-500" />
              <span class="text-xs text-ink-500">Agent 就绪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
