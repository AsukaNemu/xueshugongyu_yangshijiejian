<script setup lang="ts">
const features = [
  {
    icon: '🎯',
    title: '自主研究规划',
    desc: '根据研究目标自动规划研究路径，分解任务并逐步执行。',
  },
  {
    icon: '🔧',
    title: '技能工具加持',
    desc: '集成海量学术工具和技能，覆盖文献检索、数据分析等场景。',
  },
  {
    icon: '🛡️',
    title: '数据安全保障',
    desc: '严格的数据加密和隐私保护机制，确保研究数据安全。',
  },
  {
    icon: '🏗️',
    title: '共享学术基建',
    desc: '基于共享的学术基础设施，实现知识的积累和复用。',
  },
  {
    icon: '🧠',
    title: '主动记忆成长',
    desc: 'Agent具备长期记忆能力，能够学习和积累研究经验。',
  },
  {
    icon: '💻',
    title: '虚拟科研环境',
    desc: '提供隔离的虚拟研究环境，安全执行代码和实验。',
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
        <p class="mt-4 text-lg text-ink-600 max-w-3xl mx-auto">
          基于Agent架构的下一代科学研究系统。
        </p>
        <p class="mt-2 text-base text-ink-500 max-w-2xl mx-auto">
          搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-ink-50 rounded-2xl p-6 border border-ink-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-lg font-semibold text-ink-800 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-ink-500 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
