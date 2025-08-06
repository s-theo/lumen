<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import type { PillItem } from '../types'

const pill = defineProps<PillItem>()
</script>

<template>
  <LmLink
    :class="['link', 'ignore-header', { 'no-icon-img': !pill.icon && !pill.image }]"
    :href="pill.link"
    :rel="pill.rel"
    :target="pill.target"
    no-icon
  >
    <LmIcon v-if="pill.icon" :icon="pill.icon" :size="pill.size || '14'" />
    <LmImage v-else-if="pill.image" :image="pill.image" :size="pill.size || '14'" />
    <span class="name" v-html="pill.name"></span>
  </LmLink>
</template>

<style scoped>
.link {
  display: inline-flex;
  align-items: center;
  vertical-align: -1px;
  gap: 0.25em;
  transition:
    color 0.25s,
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0 0.125em;
  border: 1px solid var(--lm-Pill-border);
  border-radius: 0.5em;
  background-color: var(--lm-Pill-bg);
  padding: 0em 0.25em;
  height: 1.375em;
  font-size: 1rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.link.no-icon-img {
  vertical-align: 1.5px;
}

.link.lm-link {
  color: var(--lm-Pill-name);
}

.link.lm-link:hover {
  transform: var(--lm-Pill-transform-hover);
  box-shadow: var(--lm-Pill-boxshadow-hover);
  border-color: var(--lm-Pill-border-hover);
  background-color: var(--lm-Pill-bg-hover);
  color: var(--lm-Pill-name-hover);
}

.link.lm-link:active {
  transform: var(--lm-Pill-transform-active);
}

.vp-doc h1 > .link {
  vertical-align: top;
  margin-top: 2px;
}

.vp-doc h2 > .link {
  vertical-align: top;
  margin-top: 1px;
}

.vp-doc h3 > .link {
  vertical-align: top;
  margin-top: 1px;
}

.vp-doc h4 > .link,
.vp-doc h5 > .link,
.vp-doc h6 > .link {
  vertical-align: top;
  line-height: 18px;
}

.vp-doc td > .link {
  vertical-align: -1px;
  font-size: 1em;
}

.vp-doc td > .link.no-icon-img {
  vertical-align: 1.5px;
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-iconify-defColor);
}

.name {
  font-weight: 500;
  font-size: 0.875em;
}
</style>
