<script setup lang="ts">
const footerLinks = {
  产品: ['Web应用', '插件生态', '私有化部署', '院校合作'],
  关于: ['文档', '更新日志', '关于我们'],
  '条款与政策': ['服务条款', '隐私政策'],
  合作: ['推广合作', '意见反馈'],
}
</script>

<template>
  <footer id="footer" class="bg-ink-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Top section -->
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-lg shadow-brand-600/20">
              <span class="text-white font-bold text-base">攻</span>
            </div>
            <span class="text-lg font-bold">攻玉学术</span>
          </div>
          <p class="text-sm text-ink-400 leading-relaxed">
            面向真实研究工作流的智能体平台。
          </p>
        </div>

        <!-- Description -->
        <div class="md:col-span-1">
          <p class="text-sm text-ink-400 leading-relaxed">
            基于Agent架构，为学术研究提供智能化支持。从文献检索到论文写作，覆盖科研全流程。
          </p>
        </div>

        <!-- Social links -->
        <div class="flex space-x-4 md:justify-end">
          <a href="#" class="text-ink-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <a href="#" class="text-ink-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Link groups -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div v-for="(links, group) in footerLinks" :key="group">
          <h4 class="text-sm font-semibold text-white mb-4">{{ group }}</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link">
              <a href="#" class="text-sm text-ink-400 hover:text-white transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-ink-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p class="text-sm text-ink-500">&copy; 2026 深圳市具陈星火科技有限公司 版权所有</p>
        <p class="text-sm text-ink-500">粤ICP备2026035016号</p>
      </div>
    </div>
  </footer>
</template>
