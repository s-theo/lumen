<script setup lang="ts">
import { BoxCubeItem } from '../types'
import { Icon, Image, Link } from './common'

const props = defineProps<{ items: BoxCubeItem[] }>()
</script>

<template>
  <Link
    v-for="(boxcube, index) in props.items"
    :key="boxcube.link + index"
    class="link"
    :href="boxcube.link"
    :rel="boxcube.rel"
  >
    <template v-if="boxcube.icon">
      <Icon :icon="boxcube.icon" :color="boxcube.color" :alt="boxcube.alt" width="32" height="32" />
    </template>
    <template v-else-if="boxcube.image">
      <Image :image="boxcube.image" :alt="boxcube.alt" width="32" height="32" />
    </template>
    <span class="name">{{ boxcube.name }}</span>
  </Link>
</template>

<style scoped>
.link {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.25em;
  border: 1px solid var(--Boxcube-border);
  border-radius: 0.5em;
  background-color: var(--Boxcube-bg);
  width: 6.75em;
  height: 6.75em;
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

.name {
  transform: translateY(1em);
  max-width: 80%;
  overflow: hidden;
  color: var(--Boxcube-name);
  font-size: 0.75em;
  letter-spacing: 0.05em;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
