<script setup lang="ts">
const sections = [
  {
    label: '文献板块',
    features: [
      { num: '01', name: '文献检索', desc: '亿级文献库，智能检索与筛选' },
      { num: '02', name: '文献阅读', desc: '智能翻译与关键信息提取' },
      { num: '03', name: '知识沉淀', desc: '构建个人知识空间' },
    ],
  },
  {
    label: '研究板块',
    features: [
      { num: '01', name: '研究设计', desc: '协助设计研究方案和实验流程' },
      { num: '02', name: '仿真指导', desc: '提供仿真建模的专业指导' },
      { num: '03', name: '系统选型', desc: '推荐合适的工具和方法' },
    ],
  },
  {
    label: '写作板块',
    features: [
      { num: '01', name: '智能引注', desc: '自动生成规范的引用格式' },
      { num: '02', name: '文本润色', desc: '优化学术表达和语法' },
      { num: '03', name: '模拟评审', desc: '模拟同行评审反馈' },
    ],
  },
]
</script>

<template>
  <section class="animate-fade-in-up py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-ink-900">
          覆盖科研全流程
        </h2>
        <p class="mt-4 text-lg text-ink-600">
          从文献调研到论文写作，一站式支持
        </p>
      </div>

      <div class="space-y-20">
        <div
          v-for="section in sections"
          :key="section.label"
        >
          <h3 class="text-2xl font-bold text-ink-800 mb-8 text-center">
            {{ section.label }}
          </h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="feature in section.features"
              :key="feature.num"
              class="bg-ink-50 rounded-2xl p-6 border border-ink-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="text-sm font-bold text-brand-600 mb-2">{{ feature.num }}</div>
              <h4 class="text-lg font-semibold text-ink-800 mb-2">{{ feature.name }}</h4>
              <p class="text-sm text-ink-500">{{ feature.desc }}</p>
            </div>
          </div>
          <!-- Placeholder for preview -->
          <div class="mt-8 bg-gradient-to-br from-ink-50 to-brand-50 rounded-2xl h-48 flex items-center justify-center border border-ink-100">
            <p class="text-sm text-ink-400">{{ section.label }}功能预览区域</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
