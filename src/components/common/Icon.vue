<script setup lang="ts">
import { useData } from 'vitepress'

import { computed } from 'vue'

import { Icon } from '@iconify/vue'

import { AltType, IconImageType, SizeType } from '../../types'

const props = defineProps<{
  icon: IconImageType
  color?: IconImageType
  alt?: AltType
  size?: SizeType
}>()

const { isDark } = useData()

const currentIcon = computed(() => {
  if (typeof props.icon === 'object') {
    return isDark.value ? props.icon.dark : props.icon.light
  }
  return props.icon
})

const currentColor = computed(() => {
  if (typeof props.color === 'object') {
    return isDark.value ? props.color.dark : props.color.light
  }
  if (typeof props.color === 'string') {
    return props.color
  }
  return undefined
})
</script>

<template>
  <Icon :icon="currentIcon" :color="currentColor" :aria-label="alt" inline ssr :width="size" :height="size" />
</template>
