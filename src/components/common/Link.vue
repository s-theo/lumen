您说：
<script setup lang="ts">
import { LinkType, RelType, isExternal } from '../../types'

const props = defineProps<{
  href: LinkType
  rel?: RelType
}>()
</script>

<template>
  <a
    :href="props.href"
    :target="isExternal(props.href) ? '_blank' : '_self'"
    :rel="props.rel ?? (isExternal(props.href) ? 'noreferrer' : undefined)"
  >
    <slot />
  </a>
</template>
