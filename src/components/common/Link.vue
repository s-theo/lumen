<script setup lang="ts">
import { LinkType, RelType, TargetType, isExternal } from '../../types'

const props = defineProps<{
  href: LinkType
  rel?: RelType
  target?: TargetType
}>()

const { href, rel, target } = props
</script>

<template>
  <a
    :href="href"
    :rel="rel ?? (isExternal(href) ? 'noreferrer' : undefined)"
    :target="target ?? (isExternal(href) ? '_blank' : undefined)"
  >
    <slot />
  </a>
</template>
