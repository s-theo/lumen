<script setup lang="ts">
import { Icon, LinkItem, isExternal } from '../types'

const props = defineProps<{ items: LinkItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(link, index) in props.items"
      :key="link.link + index"
      class="link"
      :href="link.link"
      :title="link.name"
      :aria-label="link.name"
      :target="isExternal(link.link) ? '_blank' : '_self'"
      rel="noopener noreferrer"
    >
      <template v-if="link.icon">
        <Icon
          v-if="typeof link.icon === 'object'"
          class="iconify light-only"
          :icon="link.icon.light"
          :style="{
            color:
              typeof link.color === 'object' ? link.color.light : link.color
          }"
          :ssr="true"
          :alt="link.name"
          aria-hidden="true"
        />
        <Icon
          v-if="typeof link.icon === 'object'"
          class="iconify dark-only"
          :icon="link.icon.dark"
          :style="{
            color: typeof link.color === 'object' ? link.color.dark : link.color
          }"
          :ssr="true"
          :alt="link.name"
          aria-hidden="true"
        />
        <Icon
          v-else
          class="iconify"
          :icon="link.icon"
          :style="{ color: link.color }"
          :ssr="true"
          :alt="link.name"
          aria-hidden="true"
        />
      </template>
      <template v-else-if="link.image">
        <img
          v-if="typeof link.image === 'object'"
          class="icon light-only"
          :src="link.image.light"
          :alt="link.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-if="typeof link.image === 'object'"
          class="icon dark-only"
          :src="link.image.dark"
          :alt="link.name"
          loading="lazy"
          aria-hidden="true"
        />
        <img
          v-else
          class="icon"
          :src="link.image"
          :alt="link.name"
          loading="lazy"
          aria-hidden="true"
        />
      </template>
      <template v-else>
        <Icon
          class="default-icon"
          alt="Default Icon"
          icon="fa6-solid:arrow-up-right-from-square"
          aria-hidden="true"
        />
      </template>
      <div class="text-content">
        <span class="name">{{ link.name }}</span>
        <span v-if="link.desc" class="desc">{{ link.desc }}</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link {
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-c-bg-alt);
  padding: 1rem;
  text-decoration: none !important;
}

.link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.link:active {
  transform: scale(0.9);
}

.icon,
.iconify {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  height: 2rem;
  color: var(--vp-c-text-2);
  font-size: 2rem;
}

.default-icon {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  margin: 0 0.25rem 0 0.2rem;
  font-size: 1.5em;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
  overflow: hidden;
}

.name,
.desc {
  max-width: 100%;
}

.name {
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.2;
  letter-spacing: 0.05rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  margin-top: 0.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  line-height: 1.5;
}
</style>
