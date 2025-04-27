<script setup lang="ts">
import { Icon, Pill, isExternal } from '../types'

const pill = defineProps<Pill>()
</script>

<template>
  <section class="container" role="region" aria-label="Open link">
    <a
      class="link"
      :href="pill.link"
      :title="pill.name"
      :aria-label="pill.name"
      :target="isExternal(pill.link) ? '_blank' : '_self'"
      rel="noopener noreferrer"
    >
      <template v-if="pill.icon">
        <Icon
          v-if="typeof pill.icon === 'object'"
          class="iconify light-only"
          :icon="pill.icon.light"
          :color="
            typeof pill.color === 'object' ? pill.color.light : pill.color
          "
          :alt="pill.name"
          :ssr="true"
          :inline="true"
          aria-hidden="true"
        />
        <Icon
          v-if="typeof pill.icon === 'object'"
          class="iconify dark-only"
          :icon="pill.icon.dark"
          :color="typeof pill.color === 'object' ? pill.color.dark : pill.color"
          :alt="pill.name"
          :ssr="true"
          :inline="true"
          aria-hidden="true"
        />
        <Icon
          v-else
          class="iconify"
          :icon="pill.icon"
          :color="typeof pill.color === 'string' ? pill.color : ''"
          :alt="pill.name"
          :ssr="true"
          :inline="true"
          aria-hidden="true"
        />
      </template>
      <template v-else-if="pill.image">
        <img
          v-if="typeof pill.image === 'object'"
          class="icon light-only"
          :src="pill.image.light"
          :alt="pill.name"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <img
          v-if="typeof pill.image === 'object'"
          class="icon dark-only"
          :src="pill.image.dark"
          :alt="pill.name"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <img
          v-else
          class="icon"
          :src="pill.image"
          :alt="pill.name"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </template>
      <h1 class="name">{{ pill.name }}</h1>
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

.icon {
  height: 0.875em;
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
  font-size: 0.875em;
}

.name {
  color: var(--Pill-name);
  font-weight: 450;
  font-size: 0.875em;
  letter-spacing: 0.05em;
}
</style>
