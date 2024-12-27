<script setup lang="ts">
import { Prelink, usePrelink } from '../types'

const prelink: Prelink | undefined = usePrelink()
</script>

<template>
  <a v-if="prelink" :href="prelink.link" :target="prelink.target" rel="noopener" class="prelink">
    <span v-html="prelink.title"></span>
  </a>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  transition: all 0.5s ease;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  background-color: var(--vp-button-alt-bg);
  padding: 0.3rem 1.5rem;
  font-weight: 600;
  font-size: 0.75rem;
}

.prelink:hover {
  transform: translateY(-1px);
  background-color: var(--vp-button-alt-hover-bg);
}
</style>
