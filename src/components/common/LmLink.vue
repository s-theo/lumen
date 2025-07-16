<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { LinkType, RelType, TargetType, isExternal } from '../../types'

const props = defineProps<{
  tag?: string
  href: LinkType
  rel?: RelType
  target?: TargetType
  noIcon?: boolean
}>()

const { href, rel, target, noIcon } = props
const tag = computed(() => props.tag ?? (props.href ? 'a' : 'span'))
</script>

<template>
  <component
    :is="tag"
    :class="{ 'lm-link': href, 'vp-external-link-icon': isExternal(href) && !noIcon, 'no-icon': noIcon }"
    :href="href ? withBase(href) : undefined"
    :rel="rel ?? (isExternal(href) ? 'noreferrer' : undefined)"
    :target="target ?? (isExternal(href) ? '_blank' : undefined)"
  >
    <slot />
  </component>
</template>
