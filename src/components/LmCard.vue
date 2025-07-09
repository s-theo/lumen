<script setup lang="ts">
import { Icon, Image, Link } from './common'
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
    <Link
      v-for="(card, index) in props.items"
      :key="card.link + index"
      class="link"
      :href="card.link"
      :rel="card.rel"
      :target="card.target"
      no-icon
    >
      <span class="row">
        <Icon v-if="card.icon" :icon="card.icon" :size="card.size || '64'" />
        <Image v-else-if="card.image" :image="card.image" :size="card.size || '64'" />
        <span v-if="card.name" class="name">{{ card.name }}</span>
      </span>
      <p v-if="card.desc" class="desc">{{ card.desc }}</p>
    </Link>
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
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0;
  border: 1px solid var(--Card-border);
  border-radius: 0.75em;
  background-color: var(--Card-bg);
  padding: 1em;
  min-width: 0;
  text-decoration: none !important;
}

.link:hover {
  transform: var(--Card-transform-hover);
  box-shadow: var(--Card-boxshadow-hover);
  border-color: var(--Card-border-hover);
  background-color: var(--Card-bg-hover);
}

.link:active {
  transform: var(--Card-transform-active);
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name {
  flex: 1 1 0%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  color: var(--Card-name);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  align-self: flex-start;
  margin: 0.875em 0 0 0;
  color: var(--Card-desc);
  font-size: 0.75em;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)) !important;
  }
}
</style>
