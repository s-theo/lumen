<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import { BoxCubeItem } from '../types'

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
    <LmLink
      v-for="(boxcube, i) in props.items"
      :key="boxcube.name + i"
      class="link"
      :tag="boxcube.link ? 'a' : 'div'"
      :href="boxcube.link"
      :rel="boxcube.rel"
      :target="boxcube.target"
      no-icon
    >
      <section class="boxcube">
        <LmIcon v-if="boxcube.icon" :icon="boxcube.icon" :size="boxcube.size || '32'" />
        <LmImage v-else-if="boxcube.image" :image="boxcube.image" :size="boxcube.size || '32'" />
        <h5 class="name" v-html="boxcube.name"></h5>
      </section>
    </LmLink>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5em;
  margin: 0.5em 0;
}

.link {
  transition:
    color 0.25s,
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  border: 1px solid var(--lm-Boxcube-border);
  border-radius: 0.5em;
  background-color: var(--lm-Boxcube-bg);
  aspect-ratio: 1 / 1;
  min-width: 0;
  overflow: hidden;
  color: var(--lm-Boxcube-name);
  text-decoration: none !important;
}

.link.lm-link:hover {
  transform: var(--lm-Boxcube-transform-hover);
  box-shadow: var(--lm-Boxcube-boxshadow-hover);
  border-color: var(--lm-Boxcube-border-hover);
  background-color: var(--lm-Boxcube-bg-hover);
  color: var(--lm-Boxcube-name-hover);
}

.link.lm-link:active {
  transform: var(--lm-Boxcube-transform-active);
}

.boxcube {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-iconify-defColor);
}

.name {
  transform: translateY(1em);
  max-width: 80%;
  overflow: hidden;
  font-weight: 600;
  font-size: 0.75em;
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
