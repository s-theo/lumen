<script setup lang="ts">
import { Icon, Pill, isExternal } from '../types'

const pill = defineProps<Pill>()
</script>

<template>
  <section class="container">
    <a
      class="link"
      :href="pill.link"
      :target="isExternal(pill.link) ? '_blank' : '_self'"
      rel="noreferrer"
    >
      <template v-if="pill.icon">
        <Icon
          v-if="typeof pill.icon === 'object'"
          class="iconify light-only"
          :icon="pill.icon.light"
          :color="
            typeof pill.color === 'object' ? pill.color.light : pill.color
          "
          :aria-label="pill.alt"
          :ssr="true"
          :inline="true"
          width="14"
          height="14"
        />
        <Icon
          v-if="typeof pill.icon === 'object'"
          class="iconify dark-only"
          :icon="pill.icon.dark"
          :color="typeof pill.color === 'object' ? pill.color.dark : pill.color"
          :aria-label="pill.alt"
          :ssr="true"
          :inline="true"
          width="14"
          height="14"
        />
        <Icon
          v-else
          class="iconify"
          :icon="pill.icon"
          :color="typeof pill.color === 'string' ? pill.color : ''"
          :aria-label="pill.alt"
          :ssr="true"
          :inline="true"
          width="14"
          height="14"
        />
      </template>
      <template v-else-if="pill.image">
        <img
          v-if="typeof pill.image === 'object'"
          class="light-only"
          :src="pill.image.light"
          :alt="pill.alt"
          loading="lazy"
          decoding="async"
          width="14"
          height="14"
        />
        <img
          v-if="typeof pill.image === 'object'"
          class="dark-only"
          :src="pill.image.dark"
          :alt="pill.alt"
          loading="lazy"
          decoding="async"
          width="14"
          height="14"
        />
        <img
          v-else
          :src="pill.image"
          :alt="pill.alt"
          loading="lazy"
          decoding="async"
          width="14"
          height="14"
        />
      </template>
      <span class="name">{{ pill.name }}</span>
    </a>
  </section>
</template>

<style scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

section.container {
  all: unset;
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-size: 1rem;
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
  padding: 0.75em 0.25em;
  height: 1em;
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
  font-weight: 450;
  font-size: 0.875em;
  letter-spacing: 0.05em;
}
</style>
