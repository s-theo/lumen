<script setup lang="ts">
import { computed } from 'vue'
import { LmIcon, LmImage, LmLink } from './common'
import { getLocaleKey } from '../composables'
import type { AsideAll, AsideItem, AsidePromo } from '../types'

const props = defineProps<{ Aside_Data: AsideItem }>()

const localeKey = getLocaleKey()

const aside = computed<AsideAll[]>(() => {
  const data = props.Aside_Data
  if (Array.isArray(data)) return data
  return data?.i18n?.[localeKey.value] ?? []
})

function isAsidePromo(item: AsideAll): item is AsidePromo {
  return 'promo' in item && typeof item.promo === 'string'
}
</script>

<template>
  <LmLink
    v-for="(aside, i) in aside"
    :key="isAsidePromo(aside) ? aside.promo + i : 'name' in aside ? aside.name + i : i"
    :class="['link', { 'has-promo': isAsidePromo(aside), 'has-name': 'name' in aside }]"
    :tag="aside.link ? 'a' : 'div'"
    :href="aside.link"
    :rel="aside.rel"
    :target="aside.target"
    no-icon
  >
    <LmIcon v-if="aside.icon" :icon="aside.icon" :size="aside.size || '32'" />
    <LmImage v-else-if="aside.image" class="icon" :image="aside.image" :size="aside.size || '32'" />
    <div>
      <template v-if="isAsidePromo(aside)">
        <span class="promo" v-html="aside.promo"></span>
        <p v-if="aside.info1" class="info" v-html="aside.info1"></p>
        <p v-if="aside.info2" class="info" v-html="aside.info2"></p>
      </template>
      <template v-else>
        <p v-if="aside.hide1" class="hide" v-html="aside.hide1"></p>
        <span class="name" v-html="aside.name"></span>
        <p v-if="aside.hide2" class="hide" v-html="aside.hide2"></p>
      </template>
    </div>
  </LmLink>
</template>

<style scoped>
.link {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 0.75em;
  transition:
    transform 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0.125em 0;
  border: 1.5px solid var(--lm-Aside-border);
  border-radius: 0.5em;
  background-color: var(--lm-Aside-bg);
  padding: 0.25em 0;
  text-align: center;
}

.link.lm-link:hover.has-promo {
  border-color: var(--lm-Aside-promo-border-hover);
  background-color: var(--lm-Aside-promo-bg-hover);
}

.link.lm-link:hover.has-name {
  border-color: var(--lm-Aside-name-border-hover);
  background-color: var(--lm-Aside-name-bg-hover);
}

.link.lm-link:hover {
  transform: var(--lm-Aside-transform-hover);
}

.link.lm-link:active {
  transform: var(--lm-Aside-transform-active);
}

.link.lm-link:hover .icon,
.link.lm-link:hover .iconify {
  transform: scale(1.15);
}

ul:last-of-type {
  margin-bottom: 1em;
}

.link:hover .hide {
  opacity: 0.9;
}

.link .icon,
.link .iconify {
  flex-shrink: 0;
  transition: transform 0.5s;
  color: var(--lm-iconify-defColor);
}

.link .hide {
  opacity: 0;
  transition: opacity 0.5s;
  color: var(--lm-Aside-hide);
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1;
}

.link .info {
  color: var(--lm-Aside-info);
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.2;
}

.link .name {
  background-image: var(--lm-Aside-name);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--lm-Aside-name-color);
  font-weight: 600;
  font-size: 0.875em;
}

.link .promo {
  background-image: var(--lm-Aside-promo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--lm-Aside-promo-color);
  font-weight: 600;
  font-size: 0.875em;
}
</style>
