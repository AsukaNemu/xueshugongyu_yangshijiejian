<script setup lang="ts">
const features = [
  {
    title: '自主研究规划',
    desc: '根据研究目标自动规划研究路径，分解任务并逐步执行。',
    icon: 'target',
  },
  {
    title: '技能工具加持',
    desc: '集成海量学术工具和技能，覆盖文献检索、数据分析等场景。',
    icon: 'tools',
  },
  {
    title: '数据安全保障',
    desc: '严格的数据加密和隐私保护机制，确保研究数据安全。',
    icon: 'shield',
  },
  {
    title: '共享学术基建',
    desc: '基于共享的学术基础设施，实现知识的积累和复用。',
    icon: 'building',
  },
  {
    title: '主动记忆成长',
    desc: 'Agent具备长期记忆能力，能够学习和积累研究经验。',
    icon: 'brain',
  },
  {
    title: '虚拟科研环境',
    desc: '提供隔离的虚拟研究环境，安全执行代码和实验。',
    icon: 'code',
  },
]
</script>

<template>
  <section id="introduction" class="animate-fade-in-up py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-ink-900">
          攻玉学术智能体
        </h2>
        <p class="mt-4 text-lg text-ink-500 max-w-2xl mx-auto">
          基于Agent架构的下一代科学研究系统。
          <br class="hidden sm:block" />
          搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group bg-white rounded-2xl p-6 border border-ink-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300"
        >
          <!-- Line-style SVG icons matching jadense.com -->
          <div class="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
            <!-- Target icon -->
            <svg v-if="feature.icon === 'target'" class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <!-- Tools icon -->
            <svg v-else-if="feature.icon === 'tools'" class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.34 12.05a4.24 4.24 0 010-6l.88-.88a4.24 4.24 0 016 0l1.59 1.59m2.55 2.55l5.1 5.1a4.24 4.24 0 010 6l-.88.88a4.24 4.24 0 01-6 0l-1.59-1.59" />
            </svg>
            <!-- Shield icon -->
            <svg v-else-if="feature.icon === 'shield'" class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <!-- Building icon -->
            <svg v-else-if="feature.icon === 'building'" class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <!-- Brain icon -->
            <svg v-else-if="feature.icon === 'brain'" class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <!-- Code icon -->
            <svg v-else class="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-base font-semibold text-ink-800 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-ink-500 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
