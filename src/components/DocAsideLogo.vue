<script setup lang="ts">
import { AsideItem, Icon, isExternal } from '../types'

const props = defineProps<{ Aside_Data: AsideItem[] }>()
</script>

<template>
  <aside aria-label="Open link">
    <ul>
      <li v-for="(aside, index) in props.Aside_Data" :key="index">
        <a
          class="link"
          :class="{ 'has-promo': aside.promo, 'has-name': aside.name }"
          :href="aside.link"
          :title="aside.promo || aside.name"
          :aria-label="aside.promo || aside.name"
          :target="isExternal(aside.link) ? '_blank' : '_self'"
          rel="noreferrer"
        >
          <template v-if="aside.icon">
            <Icon
              v-if="typeof aside.icon === 'object'"
              class="iconify light-only"
              :icon="aside.icon.light"
              :color="
                typeof aside.color === 'object'
                  ? aside.color.light
                  : aside.color
              "
              :ssr="true"
              :inline="true"
              :alt="aside.name"
            />
            <Icon
              v-if="typeof aside.icon === 'object'"
              class="iconify dark-only"
              :icon="aside.icon.dark"
              :color="
                typeof aside.color === 'object' ? aside.color.dark : aside.color
              "
              :ssr="true"
              :inline="true"
              :alt="aside.name"
            />
            <Icon
              v-else
              class="iconify"
              :icon="aside.icon"
              :color="typeof aside.color === 'string' ? aside.color : ''"
              :ssr="true"
              :inline="true"
              :alt="aside.name"
            />
          </template>
          <template v-else-if="aside.image">
            <img
              v-if="typeof aside.image === 'object'"
              class="icon light-only"
              :src="aside.image.light"
              :alt="aside.name"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <img
              v-if="typeof aside.image === 'object'"
              class="icon dark-only"
              :src="aside.image.dark"
              :alt="aside.name"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <img
              v-else
              class="icon"
              :src="aside.image"
              :alt="aside.name"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
          </template>
          <span>
            <template v-if="aside.promo">
              <span class="promo" v-html="aside.promo"></span>
            </template>
            <template
              v-if="
                aside.hide1 ||
                aside.info1 ||
                aside.name ||
                aside.hide2 ||
                aside.info2
              "
            >
              <p v-if="aside.hide1" class="hide" v-html="aside.hide1"></p>
              <p v-if="aside.info1" class="info" v-html="aside.info1"></p>
              <span v-if="aside.name" class="name" v-html="aside.name"></span>
              <p v-if="aside.hide2" class="hide" v-html="aside.hide2"></p>
              <p v-if="aside.info2" class="info" v-html="aside.info2"></p>
            </template>
          </span>
        </a>
      </li>
    </ul>
  </aside>
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
  margin: 0.25em 0;
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
  width: 1.5em;
}

.link .iconify {
  flex-shrink: 0; /* 禁止图标在 flex 布局中因空间不足被压缩。 */
  transform: scale(1.25);
  transition: transform 0.5s;
  color: var(--iconify-defaultcolor);
  font-size: 1.5em;
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
