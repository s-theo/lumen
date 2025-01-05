<script setup lang="ts">
import { Icon, Pill, isExternal } from '../types'

const pill = defineProps<Pill>()
</script>

<template>
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
        :color="typeof pill.color === 'object' ? pill.color.light : pill.color"
        :alt="pill.name"
        :ssr="true"
        aria-hidden="true"
      />
      <Icon
        v-if="typeof pill.icon === 'object'"
        class="iconify dark-only"
        :icon="pill.icon.dark"
        :color="typeof pill.color === 'object' ? pill.color.dark : pill.color"
        :alt="pill.name"
        :ssr="true"
        aria-hidden="true"
      />
      <Icon
        v-else
        class="iconify"
        :icon="pill.icon"
        :color="typeof pill.color === 'string' ? pill.color : ''"
        :alt="pill.name"
        :ssr="true"
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
        aria-hidden="true"
      />
      <img
        v-if="typeof pill.image === 'object'"
        class="icon dark-only"
        :src="pill.image.dark"
        :alt="pill.name"
        loading="lazy"
        aria-hidden="true"
      />
      <img
        v-else
        class="icon"
        :src="pill.image"
        :alt="pill.name"
        loading="lazy"
        aria-hidden="true"
      />
    </template>
    <span class="name">{{ pill.name }}</span>
  </a>
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
  gap: 0.25rem;
  transform: translateY(1px);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: var(--pill-bg);
  padding: 0.75rem 0.25rem;
  height: 1rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.link:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.link:active {
  transform: scale(0.9);
}

.icon {
  height: 0.875em;
}

.iconify {
  flex-shrink: 0;
  color: var(--vp-c-text-1);
  font-size: 0.875em;
}

.name {
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
}
</style>
