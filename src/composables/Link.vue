您说：
<script setup lang="ts">
import { isExternal, LinkType, RelType, ClassesType } from '../types'

const props = defineProps<{
  link: LinkType
  rel?: RelType
  classes?: ClassesType
}>()
</script>

<template>
  <a
    :class="['ignore-header', props.classes]"
    :href="props.link"
    :target="isExternal(props.link) ? '_blank' : '_self'"
    :rel="props.rel ?? (isExternal(props.link) ? 'noreferrer' : undefined)"
  >
    <slot />
  </a>
</template>
