# AI 对话助手落地页设计文档

## 概述

模仿 jadense.com (攻玉学术) 的视觉风格，创建一个 AI 对话助手主题的前端练习/演示落地页。

## 技术栈

- **构建工具**: Vite
- **前端框架**: Vue 3 (Composition API + `<script setup>`)
- **样式**: Tailwind CSS
- **语言**: TypeScript

## 页面结构

### 1. 导航栏 (Navbar)

- 左侧: Logo（"ChatFlow" 或类似名称）
- 中间: 菜单链接 — 介绍 / 功能 / 定价 / 关于
- 右侧: CTA 按钮 "免费体验"
- 固定顶部，滚动时添加背景模糊效果
- 移动端: 汉堡菜单

### 2. Hero 区域

- 左侧:
  - 大标题: "智能对话，无限可能" 或类似
  - 副标题: "基于先进 AI 技术，为您提供自然流畅的对话体验"
  - 两个 CTA 按钮: "开始使用" (主) + "了解更多" (次)
- 右侧:
  - 对话界面 mockup（模拟聊天窗口）
  - 浅色/深色两个主题的界面预览

### 3. 核心功能卡片

4 张卡片，网格布局:
- **智能对话**: 理解上下文，自然交流
- **多语言支持**: 覆盖全球主要语言
- **深度理解**: 分析复杂问题，提供精准回答
- **安全隐私**: 数据加密，隐私保护

每张卡片包含图标 + 标题 + 描述文字

### 4. 工作流展示

标题: "简单三步，开启智能对话"

步骤流程（横向排列，带连接线）:
1. 输入问题
2. AI 分析理解
3. 获取精准回答

### 5. 产品特性展示

左右交替布局（共 3 组）:
- 特性 1: 文字左 + 图片右 — 智能上下文理解
- 特性 2: 图片左 + 文字右 — 多轮对话能力
- 特性 3: 文字左 + 图片右 — 个性化定制

### 6. 定价方案

三列卡片:
- **免费版**: 基础功能，有限次数
- **专业版**: 高级功能，无限使用（推荐标记）
- **企业版**: 定制方案，专属支持

### 7. 页脚 (Footer)

- Logo + 简短描述
- 链接分组: 产品 / 公司 / 支持 / 法律
- 版权信息: © 2026 ChatFlow. All rights reserved.

## 视觉风格

### 配色方案

- **主色调**: 蓝紫渐变 (#6366f1 → #8b5cf6)
- **背景**: 白色 (#ffffff) / 深色模式 (#0f172a)
- **文字**: 深灰 (#1e293b) / 浅色模式下深色
- **辅助色**: 浅蓝 (#eff6ff), 浅紫 (#f5f3ff)

### 排版

- 标题: 大号加粗，渐变色文字
- 正文: 16px，行高 1.6
- 中文使用系统字体栈: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"

### 动效

- 滚动渐入动画 (Intersection Observer)
- 按钮 hover 缩放和颜色变化
- 卡片 hover 上浮阴影
- 平滑滚动 (smooth scroll)

### 响应式

- 桌面端: 最大宽度 1200px 居中
- 平板: 768px 以下调整布局
- 手机: 480px 以下单列堆叠

## 文件结构

```
xueshugongyu/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── style.css (Tailwind 入口)
│   └── components/
│       ├── Navbar.vue
│       ├── Hero.vue
│       ├── Features.vue
│       ├── Workflow.vue
│       ├── ProductShowcase.vue
│       ├── Pricing.vue
│       └── Footer.vue
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-05-27-ai-assistant-landing-page-design.md
```

## 成功标准

- [ ] 页面在浏览器中正常显示
- [ ] 所有 7 个区块完整呈现
- [ ] 响应式布局在移动端正常
- [ ] 滚动动画正常工作
- [ ] 视觉风格接近 jadense.com
