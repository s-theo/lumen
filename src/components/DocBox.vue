<script setup lang="ts">
import { BoxItem } from '../types'
import { Icon, Image, Link } from './common'

const props = defineProps<{ items: BoxItem[] }>()
</script>

<template>
  <Link v-for="(box, index) in props.items" :key="box.link + index" class="link" :href="box.link" :rel="box.rel">
    <template v-if="box.icon">
      <Icon :icon="box.icon" :color="box.color" :alt="box.alt" width="32" height="32" />
    </template>
    <template v-else-if="box.image">
      <Image :image="box.image" :alt="box.alt" width="32" height="32" />
    </template>
    <span class="name">{{ box.name }}</span>
  </Link>
</template>

<style scoped>
.link {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.15em;
  border: 1px solid var(--Box-border);
  border-radius: 0.5em;
  background-color: var(--Box-bg);
  padding: 0 1.6em;
  width: 10em;
  height: 3em;
  text-decoration: none !important;
}

.link:hover {
  transform: var(--Box-transform-hover);
  box-shadow: var(--Box-boxshadow-hover);
  border-color: var(--Box-border-hover);
  background-color: var(--Box-bg-hover);
}

.link:active {
  transform: var(--Box-transform-active);
}

.link::after {
  display: none !important;
}

@media (max-width: 1024px) {
  .link {
    flex: 1 1 calc(50% - 0.5em);
    max-width: calc(50% - 0.5em);
  }
}

@media (max-width: 768px) {
  .link {
    flex: 1 1 calc(50% - 0.5em);
    max-width: calc(50% - 0.5em);
  }
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name {
  overflow: hidden;
  color: var(--Box-name);
  font-size: 0.75em;
  letter-spacing: 0.05em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
