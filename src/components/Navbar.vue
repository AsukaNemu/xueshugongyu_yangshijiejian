<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: '介绍', href: '#introduction' },
  { label: '定价', href: '#pricing' },
  { label: '插件生态', href: '#plugins' },
  { label: '帮助文档', href: '#docs' },
  { label: '联系我们', href: '#footer' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md border-ink-100 shadow-sm' : 'bg-white/80 backdrop-blur-sm border-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-lg shadow-brand-600/20">
            <span class="text-white font-bold text-base">攻</span>
          </div>
          <span class="text-xl font-bold text-ink-900">攻玉学术</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-all duration-200"
          >
            {{ link.label }}
          </a>
          <div class="ml-4">
            <a
              href="#"
              class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-brand-700 rounded-xl hover:bg-brand-800 transition-all duration-300 shadow-md shadow-brand-700/20 hover:shadow-lg hover:shadow-brand-700/30"
            >
              即刻开始
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg text-ink-600 hover:bg-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileOpen ? '关闭导航菜单' : '打开导航菜单'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        v-if="mobileOpen"
        class="md:hidden pb-4 space-y-1 bg-white rounded-xl mt-2 p-3 shadow-xl border border-ink-100"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block px-4 py-2.5 text-sm font-medium text-ink-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <div class="pt-2 mt-2 border-t border-ink-100">
          <a
            href="#"
            class="block px-4 py-2.5 text-sm font-medium text-white text-center bg-brand-700 rounded-lg hover:bg-brand-800 transition-colors"
          >
            即刻开始
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
