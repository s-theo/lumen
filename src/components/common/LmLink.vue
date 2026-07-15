<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { isExternal as isExternalUrl } from '../../composables'
import type { LinkType, RelType, TargetType } from '../../types'

const props = defineProps<{
  tag?: string
  href: LinkType
  rel?: RelType
  target?: TargetType
  noIcon?: boolean
}>()

const resolvedTag = computed(() => props.tag ?? (props.href ? 'a' : 'span'))
const isExternalLink = computed(() => isExternalUrl(props.href ?? '') || props.target === '_blank')
</script>

<template>
  <component
    :is="resolvedTag"
    :class="{
      'lm-link': props.href,
      'vp-external-link-icon': isExternalLink && !props.noIcon,
      'no-icon': props.noIcon
    }"
    :href="props.href ? withBase(props.href) : undefined"
    :rel="props.rel ?? (isExternalLink ? 'noreferrer' : undefined)"
    :target="props.target ?? (isExternalLink ? '_blank' : undefined)"
  >
    <slot />
  </component>
</template>
