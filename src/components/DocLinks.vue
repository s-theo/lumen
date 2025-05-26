<script setup lang="ts">
import { LinkItem, Icon } from '../types'
import { IconDisplay, ImageDisplay, Link } from '../composables'

const props = defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <Link
    v-for="(link, index) in props.items"
    :key="link.link + index"
    :href="link.link"
    :rel="link.rel"
    :classes="'link'"
  >
    <template v-if="link.icon">
      <IconDisplay
        :icon="link.icon"
        :color="link.color"
        :alt="link.alt"
        width="32"
        height="32"
      />
    </template>
    <template v-else-if="link.image">
      <ImageDisplay
        :image="link.image"
        :alt="link.alt"
        width="32"
        height="32"
      />
    </template>
    <template v-else>
      <Icon
        class="default-icon"
        aria-label="external link icon"
        icon="fa6-solid:arrow-up-right-from-square"
        width="24"
        height="24"
      />
    </template>
    <div class="text-content">
      <span class="name">{{ link.name }}</span>
      <p v-if="link.desc" class="desc">{{ link.desc }}</p>
    </div>
  </Link>
</template>

<style scoped>
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.link {
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.5em 0;
  border: 1px solid var(--Links-border);
  border-radius: 0.8em;
  background-color: var(--Links-bg);
  padding: 1em;
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

.link::after {
  display: none !important;
}

.iconify {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  color: var(--iconify-defaultcolor);
}

.default-icon {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  margin: 0 0.25em 0 0.2em;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1em;
  overflow: hidden;
}

.name,
.desc {
  max-width: 100%;
}

.name {
  overflow: hidden;
  color: var(--Links-name);
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  margin: 0.25em 0 0 0;
  color: var(--Links-desc);
  font-size: 0.75em;
  line-height: 1.5;
}
</style>
