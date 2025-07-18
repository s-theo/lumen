<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import type { CardItem } from '../types'

const props = defineProps<{
  items: CardItem[]
  grid?: number
}>()
</script>

<template>
  <div
    class="grid"
    :style="typeof props.grid === 'number' ? { gridTemplateColumns: `repeat(${props.grid}, 1fr)` } : undefined"
  >
    <LmLink
      v-for="(card, i) in props.items"
      :key="card.name ? card.name + i : (card.desc ?? '') + i"
      class="link"
      :href="card.link"
      :rel="card.rel"
      :target="card.target"
      no-icon
    >
      <span class="row">
        <LmIcon v-if="card.icon" :icon="card.icon" :size="card.size || '48'" />
        <LmImage v-else-if="card.image" :image="card.image" :size="card.size || '48'" />
        <span v-if="card.name" class="name" v-html="card.name"></span>
      </span>
      <p v-if="card.desc" class="desc" v-html="card.desc"></p>
    </LmLink>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
  margin: 0.5em 0;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
  width: 100%;
  min-width: 0;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    color 0.25s,
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0;
  border: 1px solid var(--lm-Card-border);
  border-radius: 0.75em;
  background-color: var(--lm-Card-bg);
  padding: 1em;
  min-width: 0;
  text-decoration: none !important;
}

.link.lm-link {
  color: var(--lm-Card-name);
}

.link.lm-link:hover {
  transform: var(--lm-Card-transform-hover);
  box-shadow: var(--lm-Card-boxshadow-hover);
  border-color: var(--lm-Card-border-hover);
  background-color: var(--lm-Card-bg-hover);
  color: var(--lm-Card-name-hover);
}

.link.lm-link:active {
  transform: var(--lm-Card-transform-active);
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-iconify-defColor);
}

.name {
  flex: 1 1 0%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  align-self: flex-start;
  margin: 0.875em 0 0 0;
  color: var(--lm-Card-desc);
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.5;
  word-break: break-all;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)) !important;
  }
}
</style>
