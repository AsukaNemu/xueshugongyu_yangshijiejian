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
