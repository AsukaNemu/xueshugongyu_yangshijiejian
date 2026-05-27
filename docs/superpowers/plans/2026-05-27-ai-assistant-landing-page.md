# AI 对话助手落地页 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vue 3 + Tailwind CSS landing page mimicking jadense.com's visual style, themed as an AI conversation assistant.

**Architecture:** Single-page Vite + Vue 3 app with 7 section components (Navbar, Hero, Features, Workflow, ProductShowcase, Pricing, Footer). Each component is self-contained with its own template and styles. Tailwind CSS handles all styling. Intersection Observer provides scroll animations.

**Tech Stack:** Vite, Vue 3 (Composition API + `<script setup>`), TypeScript, Tailwind CSS

---

## File Structure

```
xueshugongyu/
├── index.html                     # Vite entry HTML
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite config
├── tailwind.config.js             # Tailwind config
├── postcss.config.js              # PostCSS config
├── tsconfig.json                  # TypeScript config
├── tsconfig.node.json             # TypeScript node config
├── src/
│   ├── main.ts                    # Vue app entry
│   ├── App.vue                    # Root component, assembles all sections
│   ├── style.css                  # Tailwind directives + global styles
│   └── components/
│       ├── Navbar.vue             # Fixed top navigation
│       ├── Hero.vue               # Hero section with CTA + mockup
│       ├── Features.vue           # 4 feature cards grid
│       ├── Workflow.vue           # 3-step workflow
│       ├── ProductShowcase.vue    # Alternating text+image sections
│       ├── Pricing.vue            # 3-column pricing cards
│       └── Footer.vue             # Footer with links
└── public/
    └── favicon.svg                # Simple favicon
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/style.css`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "chatflow-landing",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.3",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "vite": "^6.3.5",
    "vue-tsc": "^2.2.8"
  }
}
```

- [ ] **Step 2: Create vite.config.ts**

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

- [ ] **Step 3: Create tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Create postcss.config.js**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 5: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

- [ ] **Step 6: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 7: Create index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChatFlow - 智能对话助手</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 8: Create src/main.ts**

```ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```

- [ ] **Step 9: Create src/style.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply text-slate-800 antialiased;
}
```

- [ ] **Step 10: Create src/App.vue (placeholder)**

```vue
<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <p class="text-center py-20 text-2xl">App loading...</p>
  </div>
</template>
```

- [ ] **Step 11: Create public/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <text x="16" y="22" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="sans-serif">C</text>
</svg>
```

- [ ] **Step 12: Install dependencies and verify dev server**

Run: `cd /Users/asukanemu/Documents/GitHub/xueshugongyu && npm install && npm run dev`
Expected: Server starts on http://localhost:5173, page shows "App loading..."

- [ ] **Step 13: Commit**

```bash
git init && git add -A && git commit -m "chore: scaffold Vite + Vue 3 + Tailwind project"
```

---

### Task 2: Navbar Component

**Files:**
- Create: `src/components/Navbar.vue`

- [ ] **Step 1: Create Navbar.vue**

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: '介绍', href: '#features' },
  { label: '功能', href: '#workflow' },
  { label: '定价', href: '#pricing' },
  { label: '关于', href: '#about' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
            <span class="text-white font-bold text-sm">C</span>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
            ChatFlow
          </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
          >
            {{ link.label }}
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-violet-500 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            免费体验
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
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
        v-if="mobileOpen"
        class="md:hidden pb-4 space-y-2"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#"
          class="block px-3 py-2 text-sm font-medium text-white text-center bg-gradient-to-r from-primary-500 to-violet-500 rounded-lg"
        >
          免费体验
        </a>
      </div>
    </div>
  </nav>
</template>
```

- [ ] **Step 2: Update App.vue to include Navbar**

```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <p class="text-center py-20 text-2xl pt-24">App loading...</p>
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Run: `npm run dev`
Expected: Navbar visible at top, fixed on scroll, mobile menu toggles

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.vue src/App.vue
git commit -m "feat: add Navbar with scroll effect and mobile menu"
```

---

### Task 3: Hero Section

**Files:**
- Create: `src/components/Hero.vue`

- [ ] **Step 1: Create Hero.vue**

```vue
<script setup lang="ts">
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
              智能对话
            </span>
            <br />
            <span class="text-slate-800">无限可能</span>
          </h1>
          <p class="mt-6 text-lg text-slate-500 max-w-xl mx-auto lg:mx-0">
            基于先进 AI 技术，为您提供自然流畅的对话体验。无论工作、学习还是创作，ChatFlow 都是您的智能伙伴。
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              class="px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-500 to-violet-500 rounded-xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              开始使用
            </a>
            <a
              href="#features"
              class="px-8 py-3 text-base font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-primary-300 hover:text-primary-600 transition-all duration-300 text-center"
            >
              了解更多
            </a>
          </div>
        </div>

        <!-- Right: Chat Mockup -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <!-- Chat header -->
            <div class="px-4 py-3 bg-gradient-to-r from-primary-500 to-violet-500 flex items-center space-x-3">
              <div class="w-3 h-3 rounded-full bg-white/30" />
              <div class="w-3 h-3 rounded-full bg-white/30" />
              <div class="w-3 h-3 rounded-full bg-white/30" />
              <span class="text-white text-sm font-medium ml-2">ChatFlow</span>
            </div>
            <!-- Chat messages -->
            <div class="p-4 space-y-4 h-72">
              <div class="flex justify-end">
                <div class="bg-primary-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-xs text-sm">
                  帮我解释一下量子计算的基本原理
                </div>
              </div>
              <div class="flex justify-start">
                <div class="bg-slate-100 text-slate-700 px-4 py-2 rounded-2xl rounded-bl-sm max-w-sm text-sm">
                  量子计算利用量子力学中的叠加态和纠缠态来处理信息。与经典比特只能是 0 或 1 不同，量子比特可以同时处于两种状态的叠加...
                </div>
              </div>
              <div class="flex justify-end">
                <div class="bg-primary-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-xs text-sm">
                  能举个实际应用的例子吗？
                </div>
              </div>
              <div class="flex justify-start">
                <div class="bg-slate-100 text-slate-700 px-4 py-2 rounded-2xl rounded-bl-sm max-w-sm text-sm">
                  当然！比如在药物研发中，量子计算机可以模拟分子行为，加速新药发现过程...
                </div>
              </div>
            </div>
            <!-- Chat input -->
            <div class="px-4 py-3 border-t border-slate-100">
              <div class="flex items-center bg-slate-50 rounded-xl px-4 py-2">
                <input
                  type="text"
                  placeholder="输入消息..."
                  class="flex-1 bg-transparent text-sm outline-none text-slate-600"
                  readonly
                />
                <button class="ml-2 w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-violet-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- Floating badges -->
          <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-slate-100 hidden lg:block">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 rounded-full bg-green-400" />
              <span class="text-xs text-slate-500">在线 · 即时响应</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Replace content with:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: Hero section with title, CTA buttons, and chat mockup visible

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.vue src/App.vue
git commit -m "feat: add Hero section with chat mockup"
```

---

### Task 4: Features Section

**Files:**
- Create: `src/components/Features.vue`

- [ ] **Step 1: Create Features.vue**

```vue
<script setup lang="ts">
const features = [
  {
    icon: '💬',
    title: '智能对话',
    desc: '理解上下文，自然流畅地与您交流，像真人一样思考和回应。',
  },
  {
    icon: '🌍',
    title: '多语言支持',
    desc: '覆盖全球主要语言，无缝切换，让沟通没有边界。',
  },
  {
    icon: '🧠',
    title: '深度理解',
    desc: '分析复杂问题，提供精准、有深度的回答和建议。',
  },
  {
    icon: '🔒',
    title: '安全隐私',
    desc: '端到端数据加密，严格保护您的隐私和数据安全。',
  },
]
</script>

<template>
  <section id="features" class="py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">
          为什么选择
          <span class="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">ChatFlow</span>
        </h2>
        <p class="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          强大的 AI 能力，简洁的使用体验
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-lg font-semibold text-slate-800 mb-2">{{ feature.title }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add Features import:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: 4 feature cards in a grid with icons, hover effects

- [ ] **Step 4: Commit**

```bash
git add src/components/Features.vue src/App.vue
git commit -m "feat: add Features section with 4 cards"
```

---

### Task 5: Workflow Section

**Files:**
- Create: `src/components/Workflow.vue`

- [ ] **Step 1: Create Workflow.vue**

```vue
<script setup lang="ts">
const steps = [
  {
    num: '01',
    title: '输入问题',
    desc: '用自然语言描述您的需求，就像和朋友聊天一样简单。',
    icon: '✏️',
  },
  {
    num: '02',
    title: 'AI 分析理解',
    desc: 'ChatFlow 理解您的意图，整合知识库，进行深度推理。',
    icon: '⚡',
  },
  {
    num: '03',
    title: '获取精准回答',
    desc: '获得结构化、有深度的回答，附带参考来源。',
    icon: '✅',
  },
]
</script>

<template>
  <section id="workflow" class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">
          简单三步，开启
          <span class="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">智能对话</span>
        </h2>
        <p class="mt-4 text-lg text-slate-500">无需复杂设置，即刻开始使用</p>
      </div>

      <div class="relative">
        <!-- Connection line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-violet-200 to-primary-200 -translate-y-1/2" />

        <div class="grid lg:grid-cols-3 gap-8">
          <div
            v-for="step in steps"
            :key="step.num"
            class="relative bg-white rounded-2xl p-8 border border-slate-100 text-center hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
          >
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-violet-500 text-white text-2xl mb-6 relative z-10">
              {{ step.icon }}
            </div>
            <div class="text-xs font-bold text-primary-500 tracking-widest mb-2">STEP {{ step.num }}</div>
            <h3 class="text-xl font-semibold text-slate-800 mb-3">{{ step.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add Workflow import:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Workflow from './components/Workflow.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: 3-step workflow with connecting line, icons, and descriptions

- [ ] **Step 4: Commit**

```bash
git add src/components/Workflow.vue src/App.vue
git commit -m "feat: add Workflow section with 3-step flow"
```

---

### Task 6: Product Showcase Section

**Files:**
- Create: `src/components/ProductShowcase.vue`

- [ ] **Step 1: Create ProductShowcase.vue**

```vue
<script setup lang="ts">
const showcases = [
  {
    title: '智能上下文理解',
    desc: 'ChatFlow 能够记住对话历史，理解上下文关联，让您无需重复说明背景。无论是多轮深入讨论还是跨会话延续，都能精准把握。',
    features: ['对话历史记忆', '上下文关联分析', '跨会话延续'],
    imageLeft: false,
  },
  {
    title: '多轮对话能力',
    desc: '支持复杂多轮对话，逐步深入探讨话题。AI 会根据您的反馈不断调整回答方向，直到满足您的需求。',
    features: ['逐步深入探讨', '智能追问引导', '回答方向调整'],
    imageLeft: true,
  },
  {
    title: '个性化定制',
    desc: '根据您的使用习惯和偏好，ChatFlow 会不断优化回答风格和内容推荐，打造专属于您的 AI 助手。',
    features: ['使用习惯学习', '回答风格定制', '个性化推荐'],
    imageLeft: false,
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <div
        v-for="(item, index) in showcases"
        :key="index"
        class="grid lg:grid-cols-2 gap-12 items-center"
        :class="{ 'lg:direction-rtl': item.imageLeft }"
      >
        <!-- Text -->
        <div :class="item.imageLeft ? 'lg:order-2' : ''">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            {{ item.title }}
          </h2>
          <p class="text-lg text-slate-500 leading-relaxed mb-6">{{ item.desc }}</p>
          <ul class="space-y-3">
            <li
              v-for="feature in item.features"
              :key="feature"
              class="flex items-center space-x-3 text-slate-600"
            >
              <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Image placeholder -->
        <div :class="item.imageLeft ? 'lg:order-1' : ''">
          <div class="bg-gradient-to-br from-primary-100 to-violet-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-primary-200/50">
            <div class="text-center">
              <div class="text-6xl mb-4">{{ index === 0 ? '🧠' : index === 1 ? '💬' : '⚙️' }}</div>
              <p class="text-sm text-primary-600 font-medium">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add ProductShowcase import:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Workflow from './components/Workflow.vue'
import ProductShowcase from './components/ProductShowcase.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
    <ProductShowcase />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: 3 alternating text+image sections with feature checklists

- [ ] **Step 4: Commit**

```bash
git add src/components/ProductShowcase.vue src/App.vue
git commit -m "feat: add ProductShowcase section with alternating layout"
```

---

### Task 7: Pricing Section

**Files:**
- Create: `src/components/Pricing.vue`

- [ ] **Step 1: Create Pricing.vue**

```vue
<script setup lang="ts">
const plans = [
  {
    name: '免费版',
    price: '¥0',
    period: '/月',
    desc: '适合个人试用',
    features: [
      '每日 20 次对话',
      '基础问答功能',
      '标准响应速度',
      '社区支持',
    ],
    cta: '免费开始',
    highlighted: false,
  },
  {
    name: '专业版',
    price: '¥49',
    period: '/月',
    desc: '适合个人深度使用',
    features: [
      '无限对话次数',
      '高级推理能力',
      '优先响应速度',
      '对话历史记录',
      '优先客服支持',
    ],
    cta: '立即订阅',
    highlighted: true,
  },
  {
    name: '企业版',
    price: '¥299',
    period: '/月',
    desc: '适合团队和企业',
    features: [
      '专业版全部功能',
      '团队协作空间',
      'API 接入',
      '自定义模型训练',
      '专属客户经理',
      'SLA 保障',
    ],
    cta: '联系我们',
    highlighted: false,
  },
]
</script>

<template>
  <section id="pricing" class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-800">
          选择适合您的
          <span class="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">方案</span>
        </h2>
        <p class="mt-4 text-lg text-slate-500">灵活定价，按需选择</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
          :class="plan.highlighted
            ? 'bg-gradient-to-b from-primary-500 to-violet-500 text-white border-transparent shadow-xl shadow-primary-500/20'
            : 'bg-white border-slate-100 hover:shadow-xl'"
        >
          <div
            v-if="plan.highlighted"
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary-600 text-xs font-bold px-3 py-1 rounded-full shadow"
          >
            推荐
          </div>
          <h3 class="text-xl font-bold mb-1" :class="plan.highlighted ? 'text-white' : 'text-slate-800'">
            {{ plan.name }}
          </h3>
          <p class="text-sm mb-6" :class="plan.highlighted ? 'text-white/70' : 'text-slate-400'">
            {{ plan.desc }}
          </p>
          <div class="mb-6">
            <span class="text-4xl font-bold">{{ plan.price }}</span>
            <span class="text-sm" :class="plan.highlighted ? 'text-white/70' : 'text-slate-400'">{{ plan.period }}</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center space-x-3 text-sm"
              :class="plan.highlighted ? 'text-white/90' : 'text-slate-600'"
            >
              <svg class="w-4 h-4 flex-shrink-0" :class="plan.highlighted ? 'text-white' : 'text-primary-500'" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a
            href="#"
            class="block w-full text-center py-3 rounded-xl font-medium text-sm transition-all duration-300"
            :class="plan.highlighted
              ? 'bg-white text-primary-600 hover:bg-slate-50'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
          >
            {{ plan.cta }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add Pricing import:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Workflow from './components/Workflow.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import Pricing from './components/Pricing.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
    <ProductShowcase />
    <Pricing />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: 3 pricing cards, middle one highlighted with gradient background

- [ ] **Step 4: Commit**

```bash
git add src/components/Pricing.vue src/App.vue
git commit -m "feat: add Pricing section with 3-tier cards"
```

---

### Task 8: Footer Component

**Files:**
- Create: `src/components/Footer.vue`

- [ ] **Step 1: Create Footer.vue**

```vue
<script setup lang="ts">
const footerLinks = {
  产品: ['ChatFlow Web', 'ChatFlow API', 'ChatFlow 桌面端', '更新日志'],
  公司: ['关于我们', '博客', '加入我们', '联系我们'],
  支持: ['帮助中心', '使用文档', '社区论坛', '状态页面'],
  法律: ['隐私政策', '服务条款', 'Cookie 政策', '安全说明'],
}
</script>

<template>
  <footer id="about" class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">C</span>
            </div>
            <span class="text-lg font-bold">ChatFlow</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            智能对话，无限可能。让 AI 成为您的得力助手。
          </p>
        </div>

        <!-- Link groups -->
        <div v-for="(links, group) in footerLinks" :key="group">
          <h4 class="text-sm font-semibold text-white mb-4">{{ group }}</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link">
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p class="text-sm text-slate-500">&copy; 2026 ChatFlow. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
```

- [ ] **Step 2: Update App.vue**

Add Footer import and assemble all components:
```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Workflow from './components/Workflow.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
    <ProductShowcase />
    <Pricing />
    <Footer />
  </div>
</template>
```

- [ ] **Step 3: Verify in browser**

Expected: Full page with all 7 sections, dark footer at bottom

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.vue src/App.vue
git commit -m "feat: add Footer component, complete all page sections"
```

---

### Task 9: Scroll Animation & Polish

**Files:**
- Modify: `src/style.css`
- Modify: `src/App.vue`

- [ ] **Step 1: Add scroll animation CSS to style.css**

Append to `src/style.css`:

```css
@layer utilities {
  .animate-fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .animate-fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **Step 2: Add intersection observer to App.vue**

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Workflow from './components/Workflow.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.animate-fade-in-up').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Workflow />
    <ProductShowcase />
    <Pricing />
    <Footer />
  </div>
</template>
```

- [ ] **Step 3: Add animation classes to section components**

Add `class="animate-fade-in-up"` to the main container `<div>` or `<section>` in each component:
- `Features.vue`: the `<section>` tag
- `Workflow.vue`: the `<section>` tag
- `ProductShowcase.vue`: each showcase `<div>` in the v-for
- `Pricing.vue`: the `<section>` tag

For example in Features.vue, change:
```html
<section id="features" class="py-20 lg:py-28 bg-slate-50">
```
to:
```html
<section id="features" class="py-20 lg:py-28 bg-slate-50 animate-fade-in-up">
```

- [ ] **Step 4: Verify in browser**

Expected: Sections fade in and slide up as you scroll down

- [ ] **Step 5: Commit**

```bash
git add src/style.css src/App.vue src/components/Features.vue src/components/Workflow.vue src/components/ProductShowcase.vue src/components/Pricing.vue
git commit -m "feat: add scroll fade-in animations"
```

---

### Task 10: Final Build Verification

- [ ] **Step 1: Run dev server and full visual check**

Run: `npm run dev`
Check: All 7 sections render correctly, responsive on mobile, animations work, no console errors

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: Build succeeds, no errors

- [ ] **Step 3: Preview production build**

Run: `npm run preview`
Expected: Production build serves correctly

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final build verification complete"
```
