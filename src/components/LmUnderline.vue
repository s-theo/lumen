<script setup lang="ts">
import { useData } from 'vitepress'
import { moveDomElements } from '../composables'
import { LmSvg } from './common'

const { frontmatter: fm } = useData()
moveDomElements('heroText')
</script>

<template>
  <span ref="heroText">
    <span class="hero-text">{{ fm.hero?.text }}<LmSvg /></span>
    {{ fm.hero?.textsuffix }}
  </span>
</template>

<style scoped>
.hero-text {
  display: inline-block;
  position: relative;
}
</style>
