您说：
<script setup lang="ts">
import { isExternal, LinkType, RelType, ClassesType } from '../types'

const props = defineProps<{
  href: LinkType
  rel?: RelType
  classes?: ClassesType
}>()
</script>

<template>
  <a
    :class="props.classes"
    :href="props.href"
    :target="isExternal(props.href) ? '_blank' : '_self'"
    :rel="props.rel ?? (isExternal(props.href) ? 'noreferrer' : undefined)"
  >
    <slot />
  </a>
</template>
