<script setup lang="ts">
import { AsideItem } from '../types'
import { IconDisplay, ImageDisplay, Link } from '../composables'

const props = defineProps<{ Aside_Data: AsideItem[] }>()
</script>

<template>
  <Link
    v-for="(aside, index) in props.Aside_Data"
    :key="index"
    :href="aside.link"
    :rel="aside.rel"
    :classes="
      'link' +
      (aside.promo ? ' has-promo' : '') +
      (aside.name ? ' has-name' : '')
    "
  >
    <template v-if="aside.icon">
      <IconDisplay
        :icon="aside.icon"
        :color="aside.color"
        :alt="aside.alt"
        width="24"
        height="24"
      />
    </template>
    <template v-else-if="aside.image">
      <ImageDisplay
        :classes="'icon'"
        :image="aside.image"
        :alt="aside.alt"
        width="24"
        height="24"
      />
    </template>
    <div>
      <span class="promo" v-html="aside.promo"></span>
      <p v-if="aside.hide1" class="hide" v-html="aside.hide1"></p>
      <p v-if="aside.info1" class="info" v-html="aside.info1"></p>
      <span v-if="aside.name" class="name" v-html="aside.name"></span>
      <p v-if="aside.hide2" class="hide" v-html="aside.hide2"></p>
      <p v-if="aside.info2" class="info" v-html="aside.info2"></p>
    </div>
  </Link>
</template>

<style scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.link {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 1em;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: 0.125em 0;
  border: 1.5px solid var(--AsideLogo-border);
  border-radius: 0.8em;
  background-color: var(--AsideLogo-bg);
  padding: 0.25em 0;
}

.link:hover {
  transform: var(--AsideLogo-transform-hover);
}

.link:active {
  transform: var(--AsideLogo-transform-active);
}

ul:last-of-type {
  margin-bottom: 1em;
}

.link:hover .icon,
.link:hover .iconify {
  transform: scale(1.75);
}

.link:hover .hide {
  opacity: 0.9;
}

.link:hover.has-promo {
  border-color: var(--AsideLogo-promo-border-hover);
  background-color: var(--AsideLogo-promo-bg-hover);
}

.link:hover.has-name {
  border-color: var(--AsideLogo-name-border-hover);
  background-color: var(--AsideLogo-name-bg-hover);
}

.link .icon {
  transform: scale(1.25);
  transition: transform 0.5s;
}

.link .iconify {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  transform: scale(1.25);
  transition: transform 0.5s;
  color: var(--iconify-defaultcolor);
}

.link .hide {
  opacity: 0;
  transition: opacity 0.5s;
  color: var(--AsideLogo-hide);
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1;
}

.link .info {
  color: var(--AsideLogo-info);
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.2;
}

.link .name {
  background-image: var(--AsideLogo-name);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 0.875em;
}

.link .promo {
  background-image: var(--AsideLogo-promo);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 0.875em;
}
</style>
