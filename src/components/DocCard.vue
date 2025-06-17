<script setup lang="ts">
import { CardItem } from '../types'
import { Icon, Image, Link } from './common'

const props = defineProps<{
  items: CardItem[]
  grid?: boolean | number
}>()
</script>

<template>
  <div
    :class="[
      'flex',
      typeof props.grid === 'boolean' && props.grid ? 'grid' : '',
      typeof props.grid === 'number' ? 'grid' : ''
    ]"
    :style="typeof props.grid === 'number' ? { gridTemplateColumns: `repeat(${props.grid}, 1fr)` } : undefined"
  >
    <Link
      v-for="(card, index) in props.items"
      :key="card.link + index"
      class="card no-icon"
      :href="card.link"
      :rel="card.rel"
      :target="card.target"
    >
      <span class="row">
        <template v-if="card.icon">
          <Icon :icon="card.icon" :alt="card.alt" :size="card.size || '64'" />
        </template>
        <template v-else-if="card.image">
          <Image :image="card.image" :alt="card.alt" :size="card.size || '64'" />
        </template>
        <span v-if="card.name" class="name">{{ card.name }}</span>
      </span>
      <p v-if="card.desc" class="desc">{{ card.desc }}</p>
    </Link>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 0.5em 0;
}

.flex.grid {
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

.card {
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

.card:hover {
  transform: var(--Card-transform-hover);
  box-shadow: var(--Card-boxshadow-hover);
  border-color: var(--Card-border-hover);
  background-color: var(--Card-bg-hover);
}

.card:active {
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
  letter-spacing: 0.05em;
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
  letter-spacing: 0.025em;
}

@media (max-width: 600px) {
  .flex.grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
