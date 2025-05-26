<script setup lang="ts">
import { BoxCubeItem } from '../types'
import { IconDisplay, ImageDisplay, Link } from '../composables'

const props = defineProps<{ items: BoxCubeItem[] }>()
</script>

<template>
  <Link
    v-for="(boxcube, index) in props.items"
    :key="boxcube.link + index"
    :href="boxcube.link"
    :rel="boxcube.rel"
    :classes="'link'"
  >
    <template v-if="boxcube.icon">
      <IconDisplay
        :icon="boxcube.icon"
        :color="boxcube.color"
        :alt="boxcube.alt"
        width="38"
        height="38"
      />
    </template>
    <template v-else-if="boxcube.image">
      <ImageDisplay
        :image="boxcube.image"
        :alt="boxcube.alt"
        width="38"
        height="38"
      />
    </template>
    <span class="name">{{ boxcube.name }}</span>
    <p v-if="boxcube.desc" class="desc">{{ boxcube.desc }}</p>
    <p v-if="boxcube.tag" class="tag">{{ boxcube.tag }}</p>
  </Link>
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
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.3em;
  border: 1px solid var(--Boxcube-border);
  border-radius: 0.8em;
  background-color: var(--Boxcube-bg);
  width: 8em;
  height: 8em;
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
  .link {
    width: calc(24% - 0.5em);
  }
}

@media (max-width: 768px) {
  .link {
    width: calc(33% - 0.5em);
  }
}

@media (max-width: 480px) {
  .link {
    width: calc(49.5% - 0.5em);
  }
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name,
.desc {
  max-width: 80%;
  overflow: hidden;

  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name {
  transform: translateY(0.5em);
  color: var(--Boxcube-name);
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.2;
  letter-spacing: 0.05em;
}

.desc {
  position: absolute;
  bottom: 1em;
  margin: 0;
  width: 80%;
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
