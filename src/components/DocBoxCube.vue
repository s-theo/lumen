<script setup lang="ts">
import { BoxCubeItem, Icon, isExternal } from '../types'

const props = defineProps<{ items: BoxCubeItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(boxcube, index) in props.items"
      :key="boxcube.link + index"
      class="link"
      :href="boxcube.link"
      :target="isExternal(boxcube.link) ? '_blank' : '_self'"
      :title="boxcube.name"
      :aria-label="boxcube.name"
      rel="noopener noreferrer"
    >
      <template v-if="boxcube.icon">
        <Icon
          v-if="typeof boxcube.icon === 'object'"
          class="iconify light-only"
          :icon="boxcube.icon.light"
          :color="
            typeof boxcube.color === 'object'
              ? boxcube.color.light
              : boxcube.color
          "
          :ssr="true"
          :inline="true"
          :alt="boxcube.name"
          aria-hidden="true"
        />
        <Icon
          v-if="typeof boxcube.icon === 'object'"
          class="iconify dark-only"
          :icon="boxcube.icon.dark"
          :color="
            typeof boxcube.color === 'object'
              ? boxcube.color.dark
              : boxcube.color
          "
          :ssr="true"
          :inline="true"
          :alt="boxcube.name"
          aria-hidden="true"
        />
        <Icon
          v-else
          class="iconify"
          :icon="boxcube.icon"
          :color="typeof boxcube.color === 'string' ? boxcube.color : ''"
          :ssr="true"
          :inline="true"
          :alt="boxcube.name"
          aria-hidden="true"
        />
      </template>
      <template v-else-if="boxcube.image">
        <img
          v-if="typeof boxcube.image === 'object'"
          class="icon light-only"
          :src="boxcube.image.light"
          :alt="boxcube.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-if="typeof boxcube.image === 'object'"
          class="icon dark-only"
          :src="boxcube.image.dark"
          :alt="boxcube.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-else
          class="icon"
          :src="boxcube.image"
          :alt="boxcube.name"
          loading="lazy"
          aria-hidden="true"
        />
      </template>
      <span class="name">{{ boxcube.name }}</span>
      <span v-if="boxcube.desc" class="desc">{{ boxcube.desc }}</span>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-c-bg-alt);
  width: 7.5rem;
  height: 7.5rem;
  -webkit-text-decoration: none !important;
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
  height: 2.5em;
}

.iconify {
  flex-shrink: 0;
  color: var(--vp-c-text-1);
  font-size: 2.5em;
}

.name,
.desc {
  transform: translateY(0.5rem);
  max-width: 80%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05rem;
}

.desc {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1rem;
}
</style>
