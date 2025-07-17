<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import { CardItem } from '../types'

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
      :tag="card.link ? 'a' : 'div'"
      :href="card.link"
      :rel="card.rel"
      :target="card.target"
      no-icon
    >
      <section class="card">
        <div class="card-header">
          <LmIcon v-if="card.icon" :icon="card.icon" :size="card.size || '48'" />
          <LmImage v-else-if="card.image" :image="card.image" :size="card.size || '48'" />
          <h5 v-if="card.name" class="name" v-html="card.name"></h5>
        </div>
        <p v-if="card.desc" class="desc" v-html="card.desc"></p>
      </section>
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

.link {
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
  color: var(--lm-Card-name);
  text-decoration: none !important;
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

.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-iconify-defColor);
}

.name {
  width: 100%;
  overflow: hidden;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
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
