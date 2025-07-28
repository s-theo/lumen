<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref, onMounted, watchEffect } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconMode, IconType, SizeType } from '../../types'

const props = defineProps<{
  icon: IconType
  color?: IconMode
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
    if (color && 'light' in color && 'dark' in color) return isDark.value ? color.dark : color.light
  }
  return undefined
})

const resSvgSize = (svgString: string, size: string) => {
  if (typeof window !== 'undefined') {
    const svgElement = new DOMParser().parseFromString(svgString, 'image/svg+xml').querySelector('svg')
    svgElement?.setAttribute('width', size)
    svgElement?.setAttribute('height', size)
    return svgElement?.outerHTML ?? svgString
  }
  return svgString
}

const resSvg = computed(() => {
  return resIcon.value?.includes('<svg') && props.size ? resSvgSize(resIcon.value, String(props.size)) : null
})

const refSvg = ref<HTMLElement | null>(null)

onMounted(() => {
  watchEffect(() => {
    if (refSvg.value && resSvg.value) refSvg.value.innerHTML = resSvg.value || ''
  })
})
</script>

<template>
  <span v-if="resSvg" ref="refSvg" class="iconify" aria-hidden="true" />
  <Icon v-else :icon="resIcon ?? ''" :color="resColor" :inline="true" :ssr="true" :width="size" :height="size" />
</template>
