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
      :rel="isExternal(boxcube.link) ? 'noreferrer' : undefined"
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
          :aria-label="boxcube.alt"
          width="38"
          height="38"
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
          :aria-label="boxcube.alt"
          width="38"
          height="38"
        />
        <Icon
          v-else
          class="iconify"
          :icon="boxcube.icon"
          :color="typeof boxcube.color === 'string' ? boxcube.color : ''"
          :ssr="true"
          :inline="true"
          :aria-label="boxcube.alt"
          width="38"
          height="38"
        />
      </template>
      <template v-else-if="boxcube.image">
        <img
          v-if="typeof boxcube.image === 'object'"
          class="light-only"
          :src="boxcube.image.light"
          :alt="boxcube.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
        <img
          v-if="typeof boxcube.image === 'object'"
          class="dark-only"
          :src="boxcube.image.dark"
          :alt="boxcube.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
        <img
          v-else
          :src="boxcube.image"
          :alt="boxcube.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
      </template>
      <span class="name">{{ boxcube.name }}</span>
      <p v-if="boxcube.desc" class="desc">{{ boxcube.desc }}</p>
      <p v-if="boxcube.tag" class="tag">{{ boxcube.tag }}</p>
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
  gap: 0.5em;
}

.container > a {
  flex: 1 1 calc(20% - 0.5em);
  width: 8em;
  max-width: calc(20% - 0.5em);
  height: 8em;
}

.link {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid var(--Boxcube-border);
  border-radius: 0.8em;
  background-color: var(--Boxcube-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
}

.link:hover {
  transform: var(--Boxcube-transform-hover);
  box-shadow: var(--Boxcube-boxshadow-hover);
  border-color: var(--Boxcube-border-hover);
  background-color: var(--Boxcube-bg-hover);
}

.link:active {
  transform: var(--Boxcube-transform-active);
}

.link::after {
  display: none !important;
}

@media (max-width: 1024px) {
  .container > a {
    flex: 1 1 calc(25% - 0.5em);
    max-width: calc(25% - 0.5em);
  }
}

@media (max-width: 768px) {
  .container > a {
    flex: 1 1 calc(33.33% - 0.5em);
    max-width: calc(33.33% - 0.5em);
  }
}

@media (max-width: 480px) {
  .container > a {
    flex: 1 1 calc(50% - 0.5em);
    max-width: calc(50% - 0.5em);
  }
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name,
.desc {
  transform: translateY(0.5em);
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  color: var(--Boxcube-name);
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.2;
  letter-spacing: 0.05em;
}

.desc {
  margin: 0;
  color: var(--Boxcube-desc);
  font-size: 0.75em;
  line-height: 1.5;
}

.tag {
  display: flex;
  position: absolute;
  top: 0.5em;
  right: -3.75em;
  justify-content: center;
  align-items: center;
  transform: rotate(25deg);
  z-index: 1;
  margin: 0;
  border-radius: 0.7em;
  background-color: var(--Boxcube-tag-bg);
  padding: 0.25em 0.5em;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  color: var(--Boxcube-tag);
  font-weight: 500;
  font-size: 0.625em;
  line-height: 1;
  text-transform: uppercase;
}
</style>
