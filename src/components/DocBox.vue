<script setup lang="ts">
import { BoxItem, Icon, isExternalLink } from '../types'

const props = defineProps<{ items: BoxItem[] }>()
</script>

<template>
  <div class="box-container">
    <a
      v-for="(box, index) in props.items"
      :key="box.link + index"
      :href="box.link"
      :title="box.name"
      class="box"
      :target="isExternalLink(box.link) ? '_blank' : '_self'"
      rel="noopener"
    >
      <template v-if="box.icon">
        <Icon :icon="box.icon" class="iconify" :style="{ color: box.color }" />
      </template>
      <template v-else-if="box.image">
        <img v-if="typeof box.image === 'object'" :src="box.image.light" alt="Icon" class="icon light-only" />
        <img v-if="typeof box.image === 'object'" :src="box.image.dark" alt="Icon" class="icon dark-only" />
        <img v-else :src="box.image" alt="Icon" class="icon" />
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

.box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.box {
  display: flex;
  position: relative;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-c-bg-alt);
  padding: 0 1.6rem;
  width: 14rem;
  height: 3.5rem;
  text-decoration: none !important;
}

.box:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt-hover);
}

@media (max-width: 1024px) {
  .box {
    flex: 1 1 calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .box {
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
}

.iconify {
  display: flex;
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  justify-content: center;
  align-items: center;
  margin: 0 -0.1em 0 -0.1em;
  color: var(--vp-c-text-1);
  font-size: 2.4em;
}

.name {
  margin-left: 1rem;
  overflow: hidden;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
