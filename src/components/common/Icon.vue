<script setup lang="ts">
import { useData } from 'vitepress'

import { computed } from 'vue'

import { Icon } from '@iconify/vue'

import { AltType, IconType, SizeType, IconImageMode } from '../../types'

const props = defineProps<{
  icon: IconType
  color?: IconImageMode
  alt?: AltType
  size?: SizeType
}>()

const { isDark } = useData()

const currentIcon = computed(() => {
  if (typeof props.icon === 'string') return props.icon
  if (props.icon && typeof props.icon === 'object' && 'light' in props.icon && 'dark' in props.icon) {
    return isDark.value ? props.icon.dark : props.icon.light
  }
  if (props.icon && typeof props.icon === 'object' && 'icon' in props.icon) {
    return props.icon.icon
  }
  return ''
})

const currentColor = computed(() => {
  if (!props.icon) return undefined
  if (typeof props.icon === 'string') {
    return undefined
  }
  if ('color' in props.icon && props.icon.color) {
    if (typeof props.icon.color === 'object' && 'light' in props.icon.color && 'dark' in props.icon.color) {
      return isDark.value ? props.icon.color.dark : props.icon.color.light
    }
    if (typeof props.icon.color === 'string') {
      return props.icon.color
    }
  }
  return undefined
})

const ariaLabel = computed(() => {
  const alt = props.alt?.trim()
  const iconAlt = typeof props.icon === 'object' ? props.icon.alt?.trim?.() : undefined
  return alt || iconAlt || undefined
})
</script>

<template>
  <Icon
    :icon="currentIcon"
    :color="currentColor"
    :aria-label="ariaLabel"
    :inline="true"
    :ssr="true"
    :width="size"
    :height="size"
  />
</template>
