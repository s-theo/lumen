<script setup lang="ts">
import { useData } from 'vitepress'
import { Svg } from './common'
import { moveDomElements } from '../types'

const { frontmatter: fm } = useData()
moveDomElements('heroText')
</script>

<template>
  <span ref="heroText">
    <span class="hero-text">{{ fm.hero?.text }}<Svg /></span>
    {{ fm.hero?.textsuffix }}
  </span>
</template>

<style scoped>
.hero-text {
  display: inline-block;
  position: relative;
}
</style>
