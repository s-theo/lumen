<script setup lang="ts">
import { BoxCubeItem, Icon, isExternalLink } from '../types'

const props = defineProps<{ items: BoxCubeItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(boxcube, index) in props.items"
      :key="boxcube.link + index"
      class="link"
      :href="boxcube.link"
      :title="boxcube.name"
      :target="isExternalLink(boxcube.link) ? '_blank' : '_self'"
      rel="noopener"
    >
      <template v-if="boxcube.icon">
        <Icon :icon="boxcube.icon" class="iconify" :style="{ color: boxcube.color }" />
      </template>
      <template v-else-if="boxcube.image">
        <img v-if="typeof boxcube.image === 'object'" :src="boxcube.image.light" alt="Icon" class="icon light-only" />
        <img v-if="typeof boxcube.image === 'object'" :src="boxcube.image.dark" alt="Icon" class="icon dark-only" />
        <img v-else :src="boxcube.image" alt="Icon" class="icon" />
      </template>
      <span class="name">{{ boxcube.name }}</span>
      <span class="desc">{{ boxcube.desc }}</span>
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
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-c-bg-alt);
  width: 8.2rem;
  height: 8.2rem;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
}

.link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt-hover);
}

@media (max-width: 1024px) {
  .link {
    flex: 1 1 calc(25% - 0.5rem);
    max-width: calc(25% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .link {
    flex: 1 1 calc(33.33% - 0.5rem);
    max-width: calc(33.33% - 0.5rem);
  }
}

.icon {
  margin-top: -1rem;
  height: 2.5rem;
}

.iconify {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩 */
  margin-top: -1rem;
  color: var(--vp-c-text-1);
  font-size: 3em;
}

.name {
  position: absolute;
  bottom: 1.25rem;
  max-width: 80%;
  overflow: hidden;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  position: absolute;
  bottom: 0.15rem;
  max-width: 80%;
  overflow: hidden;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
