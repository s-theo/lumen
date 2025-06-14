<script setup lang="ts">
import { BoxCubeItem } from '../types'
import { Icon, Image, Link } from './common'

const props = defineProps<{
  items: BoxCubeItem[]
  grid?: number
}>()
</script>

<template>
  <div
    class="grid"
    :style="typeof props.grid === 'number' ? { gridTemplateColumns: `repeat(${props.grid}, 1fr)` } : undefined"
  >
    <Link
      v-for="(boxcube, index) in props.items"
      :key="boxcube.link + index"
      class="link no-icon"
      :href="boxcube.link"
      :rel="boxcube.rel"
      :target="boxcube.target"
    >
      <template v-if="boxcube.icon">
        <Icon :icon="boxcube.icon" :color="boxcube.color" :alt="boxcube.alt" size="32" />
      </template>
      <template v-else-if="boxcube.image">
        <Image :image="boxcube.image" :alt="boxcube.alt" size="32" />
      </template>
      <span class="name">{{ boxcube.name }}</span>
    </Link>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid var(--Boxcube-border);
  border-radius: 0.5em;
  background-color: var(--Boxcube-bg);
  aspect-ratio: 1 / 1;
  width: 100%;
  min-width: 0;
  overflow: hidden;
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

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
</style>
