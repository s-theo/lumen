<script setup lang="ts">
import { LinkItem } from '../types'
import { Icon, Image, Link } from './common'

const props = defineProps<{
  items: LinkItem[]
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
      v-for="(link, index) in props.items"
      :key="link.link + index"
      class="link no-icon"
      :href="link.link"
      :rel="link.rel"
    >
      <span class="row">
        <template v-if="link.icon">
          <Icon :icon="link.icon" :color="link.color" :alt="link.alt" width="32" height="32" />
        </template>
        <template v-else-if="link.image">
          <Image :image="link.image" :alt="link.alt" width="32" height="32" />
        </template>
        <template v-else>
          <Icon
            class="default-icon"
            alt="external link icon"
            icon="fa6-solid:arrow-up-right-from-square"
            width="24"
            height="24"
          />
        </template>
        <span class="name">{{ link.name }}</span>
      </span>
      <p v-if="link.desc" class="desc">{{ link.desc }}</p>
    </Link>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.flex.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.row {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0;
  border: 1px solid var(--Links-border);
  border-radius: 0.75em;
  background-color: var(--Links-bg);
  padding: 1em;
  min-width: 0;
  text-decoration: none !important;
}

.link:hover {
  transform: var(--Links-transform-hover);
  box-shadow: var(--Links-boxshadow-hover);
  border-color: var(--Links-border-hover);
  background-color: var(--Links-bg-hover);
}

.link:active {
  transform: var(--Links-transform-active);
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.default-icon {
  flex-shrink: 0;
  margin: 0 0.25em 0 0.2em;
}

.name {
  flex: 1 1 0%;
  margin-left: 0.75em;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  color: var(--Links-name);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  margin: 0.875em 0 0 0;
  color: var(--Links-desc);
  font-size: 0.75em;
  line-height: 1.5;
  letter-spacing: 0.025em;
}

@media (max-width: 600px) {
  .flex.grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
