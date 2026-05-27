<script setup lang="ts">
</script>

<template>
  <section class="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
    <!-- Large gradient background - matching jadense.com ink wash effect -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-brand-200/40 via-brand-100/30 to-transparent rounded-full blur-3xl" />
      <div class="absolute top-10 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-brand-300/25 to-brand-100/20 rounded-full blur-3xl" />
      <div class="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-brand-200/20 to-transparent rounded-full blur-3xl" />
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Title -->
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-ink-900 mb-4">
        他山之石
        <br />
        <span class="text-brand-600">可以攻玉</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-xl sm:text-2xl font-display font-bold text-brand-700/80 tracking-wider mb-8">
        See Further · Think Deeper · Act Faster
      </p>

      <!-- Description -->
      <p class="text-base text-ink-500 max-w-2xl mx-auto mb-8 leading-relaxed">
        基于Agent架构的下一代科学研究系统。搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a
          href="#"
          class="px-8 py-3 text-base font-medium text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/25 text-center"
        >
          即刻开始
        </a>
        <a
          href="#pricing"
          class="px-8 py-3 text-base font-medium text-ink-700 bg-white/80 border border-ink-200 rounded-full hover:border-brand-300 hover:text-brand-700 transition-all duration-300 text-center"
        >
          查看方案
        </a>
      </div>

      <!-- Search bar / Input mockup - matching jadense.com -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-brand-100/50 border border-brand-100 p-2">
          <div class="flex items-center bg-ink-50 rounded-xl px-4 py-3">
            <svg class="w-5 h-5 text-ink-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="输入你的研究问题..."
              class="flex-1 bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400"
              readonly
            />
            <div class="ml-3 w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center cursor-pointer hover:bg-brand-700 transition-colors">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
