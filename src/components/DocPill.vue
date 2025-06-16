<script setup lang="ts">
import { Pill } from '../types'
import { Icon, Image, Link } from './common'

const pill = defineProps<Pill>()
</script>

<template>
  <Link class="link ignore-header no-icon" :href="pill.link" :rel="pill.rel" :target="pill.target">
    <template v-if="pill.icon">
      <Icon :icon="pill.icon" :color="pill.color" :alt="pill.alt" size="14" />
    </template>
    <template v-else-if="pill.image">
      <Image :image="pill.image" :alt="pill.alt" :crop="pill.crop" size="14" />
    </template>
    <span class="name">{{ pill.name }}</span>
  </Link>
</template>

<style scoped>
.link {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  transform: translateY(1px);
  transition:
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0 0.125em;
  border: 1px solid var(--Pill-border);
  border-radius: 0.5em;
  background-color: var(--Pill-bg);
  padding: 0em 0.25em;
  height: 1.375em;
  font-size: 1rem;
  text-decoration: none !important;
  white-space: nowrap;
}

.link:hover {
  transform: var(--Pill-transform-hover);
  box-shadow: var(--Pill-boxshadow-hover);
  border-color: var(--Pill-border-hover);
  background-color: var(--Pill-bg-hover);
}

.link:active {
  transform: var(--Pill-transform-active);
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

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name {
  color: var(--Pill-name);
  font-size: 0.875em;
  letter-spacing: 0.05em;
}
</style>
