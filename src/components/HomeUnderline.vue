<script setup lang="ts">
import { useData } from 'vitepress'

import { moveDomElements } from '../types'
import { Svg } from './common'

const { frontmatter: fm } = useData()

moveDomElements()
</script>

<template>
  <span id="hero-text">
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
