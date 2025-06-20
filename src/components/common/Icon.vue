<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { AltType, IconImageMode, IconType, SizeType } from '../../types'

const props = defineProps<{
  icon: IconType
  color?: IconImageMode
  alt?: AltType
  size?: SizeType
}>()

const { isDark } = useData()

const currentIcon = computed(() => {
  if (typeof props.icon === 'string') return props.icon
  if ('light' in props.icon && 'dark' in props.icon) return isDark.value ? props.icon.dark : props.icon.light
  if ('icon' in props.icon) return props.icon.icon
  return ''
})

const currentColor = computed(() => {
  if (typeof props.icon !== 'object' || !props.icon) return undefined
  if ('color' in props.icon) {
    const color = props.icon.color
    if (typeof color === 'string') return color
    if ('light' in color && 'dark' in color) {
      return isDark.value ? color.dark : color.light
    }
  }
  return undefined
})

const ariaLabel = computed(() => {
  const iconAlt = typeof props.icon === 'object' ? props.icon.alt?.trim?.() : undefined
  return iconAlt || props.alt?.trim() || undefined
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
