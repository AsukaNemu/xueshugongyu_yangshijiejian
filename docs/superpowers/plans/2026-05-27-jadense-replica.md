# jadense.com 攻玉学术网站复刻 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faithfully replicate the jadense.com (攻玉学术) landing page with Vue 3 + Tailwind CSS, matching the original layout, content, and visual style as closely as possible.

**Architecture:** Single-page Vue 3 app with 7 section components. Based on the original site's structure: Navigation → Hero → Agent Features → Workflow Demo → Research Coverage → CTA → Footer. Tailwind CSS handles all styling with a clean, professional academic theme.

**Tech Stack:** Vite, Vue 3 (Composition API + `<script setup>`), TypeScript, Tailwind CSS

---

## File Structure

```
xueshugongyu/
├── src/
│   ├── components/
│   │   ├── Navbar.vue           # Top navigation bar
│   │   ├── Hero.vue             # Hero with "他山之石可以攻玉"
│   │   ├── AgentFeatures.vue    # 6 feature cards grid
│   │   ├── WorkflowDemo.vue     # Conversation flow demo
│   │   ├── ResearchCoverage.vue # 3 sub-sections: 文献/研究/写作
│   │   ├── ClosingCTA.vue       # Final CTA section
│   │   └── Footer.vue           # Footer with links
│   ├── App.vue                  # Root component
│   ├── main.ts                  # Entry point
│   └── style.css                # Tailwind directives + global styles
```

---

### Task 1: Project Reset & Theme Configuration

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/style.css`
- Delete: `src/components/Features.vue`, `src/components/Hero.vue`, `src/components/Workflow.vue`, `src/components/ProductShowcase.vue`, `src/components/Pricing.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Update tailwind.config.js with jadense theme colors**

The original site uses a clean, professional color scheme. Based on observation:
- Primary: Blue/Indigo tones for CTAs and accents
- Background: White and very light gray (#f8fafc)
- Text: Dark gray (#1e293b) for headings, medium gray (#64748b) for body

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
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
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

- [ ] **Step 2: Update style.css**

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

h1, h2, h3, h4, h5, h6 {
  @apply font-bold;
}
```

- [ ] **Step 3: Delete old components**

```bash
rm src/components/Features.vue src/components/Hero.vue src/components/Workflow.vue src/components/ProductShowcase.vue src/components/Pricing.vue
```

- [ ] **Step 4: Reset App.vue**

```vue
<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <p class="text-center py-20">Loading...</p>
  </div>
</template>
```

- [ ] **Step 5: Verify dev server still works**

Run: `npm run dev`

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "chore: reset project for jadense.com faithful replica"
```

---

### Task 2: Navbar Component

**Files:**
- Create: `src/components/Navbar.vue`

The original navbar has:
- Left: Logo + "攻玉学术" brand name
- Center: 介绍, 定价, 插件生态, 帮助文档, 联系我们
- Right: "即刻开始" CTA button
- Fixed top, transparent at top, white with blur on scroll

- [ ] **Step 1: Create Navbar.vue**

```vue
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
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
            <span class="text-white font-bold text-sm">攻</span>
          </div>
          <span class="text-xl font-bold text-slate-800">攻玉学术</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            {{ link.label }}
          </a>
          <a
            href="#"
            class="px-5 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all duration-300"
          >
            即刻开始
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
        class="md:hidden pb-4 space-y-2"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-lg"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#"
          class="block px-3 py-2 text-sm font-medium text-white text-center bg-brand-600 rounded-lg"
        >
          即刻开始
        </a>
      </div>
    </div>
  </nav>
</template>
```

- [ ] **Step 2: Update App.vue**

```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <p class="text-center py-20 pt-24">Sections coming soon...</p>
  </div>
</template>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.vue src/App.vue
git commit -m "feat: add Navbar matching jadense.com style"
```

---

### Task 3: Hero Section

**Files:**
- Create: `src/components/Hero.vue`

The original hero has:
- Left: "他山之石可以攻玉" title, English subtitle "See Further · Think Deeper · Act Faster"
- Two buttons: "即刻开始" (primary) + "查看方案" (outline)
- Right: Product screenshots (light/dark mode)
- Subtle gradient background

- [ ] **Step 1: Create Hero.vue**

```vue
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
```

- [ ] **Step 2: Update App.vue**

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

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.vue src/App.vue
git commit -m "feat: add Hero section with jadense.com content"
```

---

### Task 4: Agent Features Section

**Files:**
- Create: `src/components/AgentFeatures.vue`

The original has:
- Title: "攻玉学术智能体"
- Subtitle: "基于Agent架构的下一代科学研究系统。"
- Description: "搭配海量工具、技能与亿级文献库，打造属于你的科研助手。"
- 6 feature cards in 2×3 grid

- [ ] **Step 1: Create AgentFeatures.vue**

```vue
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
  <section id="introduction" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900">
          攻玉学术智能体
        </h2>
        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          基于Agent架构的下一代科学研究系统。
        </p>
        <p class="mt-2 text-base text-slate-500 max-w-2xl mx-auto">
          搭配海量工具、技能与亿级文献库，打造属于你的科研助手。
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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

Add import: `import AgentFeatures from './components/AgentFeatures.vue'`
Add component: `<AgentFeatures />` after `<Hero />`

- [ ] **Step 3: Commit**

```bash
git add src/components/AgentFeatures.vue src/App.vue
git commit -m "feat: add Agent Features section with 6 cards"
```

---

### Task 5: Workflow Demo Section

**Files:**
- Create: `src/components/WorkflowDemo.vue`

The original has:
- Title: "从回答问题，到参与研究过程"
- Description about how the agent goes beyond just answering
- Conversation flow showing research assistance

- [ ] **Step 1: Create WorkflowDemo.vue**

```vue
<script setup lang="ts">
</script>

<template>
  <section class="py-20 lg:py-28 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            从回答问题，到参与研究过程
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-6">
            攻玉学术智能体不只是生成回复，而是能够理解研究目标、组织相关资料、调用专业工具，真正参与到研究过程中。
          </p>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">理解复杂的研究问题和需求</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">自动检索和整理相关文献资料</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-700">调用专业工具进行数据分析</span>
            </li>
          </ul>
        </div>

        <!-- Right: Demo -->
        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div class="p-4 border-b border-slate-100 bg-slate-50">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 rounded-full bg-green-400" />
              <span class="text-sm font-medium text-slate-700">研究助手</span>
            </div>
          </div>
          <div class="p-4 space-y-4 h-80 overflow-y-auto">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <span class="text-slate-600 text-sm">U</span>
              </div>
              <div class="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2">
                <p class="text-sm text-slate-700">我需要研究 Transformer 在时间序列预测中的应用</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 justify-end">
              <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                <p class="text-sm text-slate-700 mb-2">好的，我来帮您规划研究路径：</p>
                <p class="text-sm text-slate-600">1. 首先检索该领域的综述文献</p>
                <p class="text-sm text-slate-600">2. 分析主要研究方向和方法</p>
                <p class="text-sm text-slate-600">3. 整理关键论文和代码实现</p>
              </div>
              <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                <span class="text-white text-sm font-bold">攻</span>
              </div>
            </div>
            <div class="flex items-start space-x-3 justify-end">
              <div class="bg-brand-50 rounded-2xl rounded-tr-sm px-4 py-2 max-w-sm">
                <p class="text-sm text-slate-700">正在为您检索相关文献...</p>
                <div class="flex items-center space-x-2 mt-2">
                  <div class="w-4 h-4 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
                  <span class="text-xs text-brand-600">执行中</span>
                </div>
              </div>
              <div class="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                <span class="text-white text-sm font-bold">攻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add import and component after AgentFeatures.

- [ ] **Step 3: Commit**

```bash
git add src/components/WorkflowDemo.vue src/App.vue
git commit -m "feat: add Workflow Demo section"
```

---

### Task 6: Research Coverage Section

**Files:**
- Create: `src/components/ResearchCoverage.vue`

The original has:
- Title: "覆盖科研全流程"
- Three sub-sections: 文献, 研究, 写作
- Each with 3 features and a preview

- [ ] **Step 1: Create ResearchCoverage.vue**

```vue
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
  <section class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900">
          覆盖科研全流程
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          从文献调研到论文写作，一站式支持
        </p>
      </div>

      <div class="space-y-20">
        <div
          v-for="section in sections"
          :key="section.label"
        >
          <h3 class="text-2xl font-bold text-slate-800 mb-8 text-center">
            {{ section.label }}
          </h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="feature in section.features"
              :key="feature.num"
              class="bg-slate-50 rounded-2xl p-6 border border-slate-100"
            >
              <div class="text-sm font-bold text-brand-600 mb-2">{{ feature.num }}</div>
              <h4 class="text-lg font-semibold text-slate-800 mb-2">{{ feature.name }}</h4>
              <p class="text-sm text-slate-500">{{ feature.desc }}</p>
            </div>
          </div>
          <!-- Placeholder for preview -->
          <div class="mt-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl h-48 flex items-center justify-center border border-slate-200">
            <p class="text-sm text-slate-400">{{ section.label }}功能预览区域</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add import and component after WorkflowDemo.

- [ ] **Step 3: Commit**

```bash
git add src/components/ResearchCoverage.vue src/App.vue
git commit -m "feat: add Research Coverage section with 3 sub-sections"
```

---

### Task 7: Closing CTA Section

**Files:**
- Create: `src/components/ClosingCTA.vue`

The original has:
- Title: "让学术研究重新聚焦于灵感"
- Description about handling tedious work
- Two CTA buttons

- [ ] **Step 1: Create ClosingCTA.vue**

```vue
<script setup lang="ts">
</script>

<template>
  <section class="py-20 lg:py-28 bg-gradient-to-br from-brand-50 to-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        让学术研究重新聚焦于灵感
      </h2>
      <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        攻玉学术智能体能够接管科研中的繁杂工作——文献整理、数据处理、格式排版，让您将更多精力投入到真正重要的创新思考中。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
  </section>
</template>
```

- [ ] **Step 2: Update App.vue**

Add import and component after ResearchCoverage.

- [ ] **Step 3: Commit**

```bash
git add src/components/ClosingCTA.vue src/App.vue
git commit -m "feat: add Closing CTA section"
```

---

### Task 8: Footer Component

**Files:**
- Create: `src/components/Footer.vue`

The original footer has:
- Top: Logo + description + social links
- Middle: 4 link groups (产品, 关于, 条款与政策, 合作)
- Bottom: Copyright + ICP filing

- [ ] **Step 1: Create Footer.vue**

```vue
<script setup lang="ts">
const footerLinks = {
  产品: ['Web应用', '插件生态', '私有化部署', '院校合作'],
  关于: ['文档', '更新日志', '关于我们'],
  '条款与政策': ['服务条款', '隐私政策'],
  合作: ['推广合作', '意见反馈'],
}
</script>

<template>
  <footer id="footer" class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Top section -->
      <div class="grid md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span class="text-white font-bold text-sm">攻</span>
            </div>
            <span class="text-lg font-bold">攻玉学术</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            面向真实研究工作流的智能体平台。
          </p>
        </div>

        <!-- Description -->
        <div class="md:col-span-1">
          <p class="text-sm text-slate-400 leading-relaxed">
            基于Agent架构，为学术研究提供智能化支持。从文献检索到论文写作，覆盖科研全流程。
          </p>
        </div>

        <!-- Social links -->
        <div class="flex space-x-4 md:justify-end">
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
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
              <a href="#" class="text-sm text-slate-400 hover:text-white transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p class="text-sm text-slate-500">&copy; 2026 深圳市具陈星火科技有限公司 版权所有</p>
        <p class="text-sm text-slate-500">粤ICP备2026035016号</p>
      </div>
    </div>
  </footer>
</template>
```

- [ ] **Step 2: Update App.vue**

Final App.vue should look like:

```vue
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import AgentFeatures from './components/AgentFeatures.vue'
import WorkflowDemo from './components/WorkflowDemo.vue'
import ResearchCoverage from './components/ResearchCoverage.vue'
import ClosingCTA from './components/ClosingCTA.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue'

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
  document.querySelectorAll('.animate-fade-in-up').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <AgentFeatures />
    <WorkflowDemo />
    <ResearchCoverage />
    <ClosingCTA />
    <Footer />
  </div>
</template>
```

- [ ] **Step 3: Add animation classes**

Add `class="animate-fade-in-up"` to each component's main `<section>` tag.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete jadense.com replica with all sections"
```

---

### Task 9: Final Build & Verification

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 2: Start dev server**

Run: `npm run dev`
Expected: All sections render correctly

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final verification complete"
```
