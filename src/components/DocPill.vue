<script setup lang="ts">
import { Icon, Pill, isExternal } from '../types'

const pill = defineProps<Pill>()
</script>

<template>
  <a
    :href="pill.link"
    :title="pill.name"
    class="pill"
    :target="isExternal(pill.link) ? '_blank' : '_self'"
    rel="noopener"
  >
    <template v-if="pill.icon">
      <Icon
        v-if="typeof pill.icon === 'object'"
        :icon="pill.icon.light"
        class="iconify light-only"
        :style="{ color: typeof pill.color === 'object' ? pill.color.light : pill.color }"
      />
      <Icon
        v-if="typeof pill.icon === 'object'"
        :icon="pill.icon.dark"
        class="iconify dark-only"
        :style="{ color: typeof pill.color === 'object' ? pill.color.dark : pill.color }"
      />
      <Icon v-else :icon="pill.icon" class="iconify" :style="{ color: pill.color }" />
    </template>
    <template v-else-if="pill.image">
      <img v-if="typeof pill.image === 'object'" :src="pill.image.light" alt="Icon" class="icon light-only" />
      <img v-if="typeof pill.image === 'object'" :src="pill.image.dark" alt="Icon" class="icon dark-only" />
      <img v-else :src="pill.image" alt="Icon" class="icon" />
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

.pill {
  display: inline-flex;
  align-items: center;
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

.pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--pill-bg-hover);
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.875em;
}

.iconify {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: var(--vp-c-text-1);
  font-size: 0.875em;
}

.name {
  margin-left: 0.2rem;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
}
</style>
