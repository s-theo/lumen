<script setup lang="ts">
import { withBase } from 'vitepress'
import { LinkType, RelType, TargetType, isExternal } from '../../types'

const props = defineProps<{
  href: LinkType
  rel?: RelType
  target?: TargetType
  noIcon?: boolean
}>()

const { href, rel, target, noIcon } = props
</script>

<template>
  <a
    :class="{ 'vp-external-link-icon': isExternal(href) && !noIcon, 'no-icon': noIcon }"
    :href="href ? withBase(href) : undefined"
    :rel="rel ?? (isExternal(href) ? 'noreferrer' : undefined)"
    :target="target ?? (isExternal(href) ? '_blank' : undefined)"
  >
    <slot />
  </a>
</template>
