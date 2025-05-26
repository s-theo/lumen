<script setup lang="ts">
import { Pill } from '../types'
import { IconDisplay, ImageDisplay, Link } from '../composables'

const pill = defineProps<Pill>()
</script>

<template>
  <Link :href="pill.link" :rel="pill.rel" :classes="'link ignore-header'">
    <template v-if="pill.icon">
      <IconDisplay
        :icon="pill.icon"
        :color="pill.color"
        :alt="pill.alt"
        width="14"
        height="14"
      />
    </template>
    <template v-else-if="pill.image">
      <ImageDisplay
        :image="pill.image"
        :alt="pill.alt"
        width="14"
        height="14"
      />
    </template>
    <span class="name">{{ pill.name }}</span>
  </Link>
</template>

<style scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.vp-doc h1 > .link {
  vertical-align: top;
  margin-top: 2px;
}

.vp-doc h2 > .link {
  vertical-align: top;
  margin-top: 1px;
}

.vp-doc h3 > .link {
  vertical-align: top;
  margin-top: 1px;
}

.vp-doc h4 > .link,
.vp-doc h5 > .link,
.vp-doc h6 > .link {
  vertical-align: top;
  line-height: 18px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  transform: translateY(1px);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 0.125em;
  border: 1px solid var(--Pill-border);
  border-radius: 0.5em;
  background-color: var(--Pill-bg);
  padding: 0em 0.25em;
  height: 1.375em;
  font-size: 1rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.link:hover {
  transform: var(--Pill-transform-hover);
  box-shadow: var(--Pill-boxshadow-hover);
  border-color: var(--Pill-border-hover);
  background-color: var(--Pill-bg-hover);
}

.link:active {
  transform: var(--Pill-transform-active);
}

.link::after {
  display: none !important;
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name {
  color: var(--Pill-name);
  font-size: 0.75em;
  letter-spacing: 0.05em;
}
</style>
