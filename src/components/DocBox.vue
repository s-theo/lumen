<script setup lang="ts">
import { BoxItem, Icon, isExternal } from '../types'

const props = defineProps<{ items: BoxItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(box, index) in props.items"
      :key="box.link + index"
      class="link"
      :href="box.link"
      :target="isExternal(box.link) ? '_blank' : '_self'"
      :title="box.name"
      :aria-label="box.name"
      rel="noopener noreferrer"
    >
      <template v-if="box.icon">
        <Icon
          v-if="typeof box.icon === 'object'"
          class="iconify light-only"
          :icon="box.icon.light"
          :style="{
            color: typeof box.color === 'object' ? box.color.light : box.color
          }"
          :alt="box.name"
          aria-hidden="true"
        />
        <Icon
          v-if="typeof box.icon === 'object'"
          class="iconify dark-only"
          :icon="box.icon.dark"
          :style="{
            color: typeof box.color === 'object' ? box.color.dark : box.color
          }"
          :alt="box.name"
          aria-hidden="true"
        />
        <Icon
          v-else
          class="iconify"
          :icon="box.icon"
          :style="{ color: box.color }"
          :alt="box.name"
          aria-hidden="true"
        />
      </template>
      <template v-else-if="box.image">
        <img
          v-if="typeof box.image === 'object'"
          class="icon light-only"
          :src="box.image.light"
          :alt="box.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-if="typeof box.image === 'object'"
          class="icon dark-only"
          :src="box.image.dark"
          :alt="box.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-else
          class="icon"
          :src="box.image"
          :alt="box.name"
          loading="lazy"
          aria-hidden="true"
        />
      </template>
      <span class="name">{{ box.name }}</span>
      <span v-if="box.tag" class="tag">{{ box.tag }}</span>
    </a>
  </div>
</template>

<style scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link {
  display: flex;
  position: relative;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-c-bg-alt);
  padding: 0 1.6rem;
  width: 14rem;
  height: 3.5rem;
  text-decoration: none !important;
}

.link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.link:active {
  transform: scale(0.9);
}

@media (max-width: 1024px) {
  .link {
    flex: 1 1 calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .link {
    flex: 1 1 calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
  }
}

.tag {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border-radius: 0 0.7rem 0 0.7rem;
  background-color: var(--vp-c-brand-3);
  padding: 0.25rem 0.5rem;
  color: var(--vp-c-brand-text);
  font-size: 0.625rem;
  line-height: 1;
}

.icon {
  height: 2.4em;
}

.iconify {
  flex-shrink: 0;
  color: var(--vp-c-text-1);
  font-size: 2.4em;
}

.name {
  overflow: hidden;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
