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
  <div class="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4">
    <nav
      class="max-w-6xl mx-auto rounded-full transition-all duration-300"
      :class="scrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-brand-100/20 border border-white/50'
        : 'bg-gradient-to-r from-brand-100/60 via-white/50 to-brand-100/60 backdrop-blur-md border border-white/30'"
    >
      <div class="px-5 sm:px-6">
        <div class="flex items-center justify-between h-14">
          <!-- Logo -->
          <a href="#" class="flex items-center space-x-2.5">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <span class="text-white font-bold text-sm">攻</span>
            </div>
            <span class="text-lg font-bold text-ink-900">攻玉学术</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="px-3 py-1.5 text-sm text-ink-600 hover:text-brand-600 transition-colors duration-200"
            >
              {{ link.label }}
            </a>
            <div class="ml-3">
              <a
                href="#"
                class="inline-flex items-center px-5 py-2 text-sm font-medium text-brand-700 bg-brand-100/80 rounded-full hover:bg-brand-200/80 transition-all duration-300"
              >
                即刻开始
                <svg class="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2 rounded-lg text-ink-600 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-menu"
            :aria-label="mobileOpen ? '关闭导航菜单' : '打开导航菜单'"
            @click="mobileOpen = !mobileOpen"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          class="md:hidden pb-4 space-y-1"
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
              class="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-brand-700 bg-brand-100/80 rounded-lg hover:bg-brand-200/80 transition-colors"
            >
              即刻开始
              <svg class="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
