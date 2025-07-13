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

const resIcon = computed(() => {
  if (typeof props.icon === 'string') return props.icon
  if ('light' in props.icon && 'dark' in props.icon) return isDark.value ? props.icon.dark : props.icon.light
  if ('icon' in props.icon) return props.icon.icon

  if ('svg' in props.icon) {
    const svg = props.icon.svg
    if (typeof svg === 'string') return svg
    if (svg && typeof svg === 'object' && 'light' in svg && 'dark' in svg) return isDark.value ? svg.dark : svg.light
  }

  return undefined
})

const resColor = computed(() => {
  if (typeof props.icon !== 'object' || !props.icon) return undefined
  if ('color' in props.icon) {
    const color = props.icon.color
    if (typeof color === 'string') return color
    if ('light' in color && 'dark' in color) return isDark.value ? color.dark : color.light
  }
  return undefined
})
</script>

<template>
  <span v-if="resIcon && resIcon.startsWith('<svg')" class="iconify" aria-hidden="true" v-html="resIcon" />
  <Icon v-else :icon="resIcon" :color="resColor" :inline="true" :ssr="true" :width="size" :height="size" />
</template>
