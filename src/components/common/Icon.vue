<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { IconImageMode, IconType, SizeType } from '../../types'

const props = defineProps<{
  icon: IconType
  color?: IconImageMode
  size?: SizeType
}>()

const { isDark } = useData()

const icon = computed(() => {
  if (typeof props.icon === 'string') return props.icon
  if ('light' in props.icon && 'dark' in props.icon) return isDark.value ? props.icon.dark : props.icon.light
  if ('icon' in props.icon) return props.icon.icon
  return undefined
})

const color = computed(() => {
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
</script>

<template>
  <Icon :icon="icon" :color="color" :inline="true" :ssr="true" :width="size" :height="size" />
</template>
