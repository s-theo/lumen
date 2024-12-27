<script setup lang="ts">
import { Icon, Pill, isExternalLink } from '../types'

const props = defineProps<Pill>()
</script>

<template>
  <a
    :href="props.link"
    :title="props.name"
    class="pill"
    :target="isExternalLink(props.link) ? '_blank' : '_self'"
    rel="noopener"
  >
    <template v-if="props.icon">
      <Icon :icon="props.icon" class="iconify" :style="{ color: props.color }" />
    </template>
    <template v-else-if="props.image">
      <img v-if="typeof props.image === 'object'" :src="props.image.light" alt="Icon" class="icon light-only" />
      <img v-if="typeof props.image === 'object'" :src="props.image.dark" alt="Icon" class="icon dark-only" />
      <img v-else :src="props.image" alt="Icon" class="icon" />
    </template>
    <span class="name">{{ props.name }}</span>
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
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0 0.15rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-alt);
  padding: 0.75rem 0.25rem;
  height: 1rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt-hover);
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
  overflow: hidden;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
