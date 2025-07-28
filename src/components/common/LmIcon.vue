<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, onMounted, ref, watchEffect } from 'vue'
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
  if ('icon' in props.icon) return props.icon.icon
  if ('light' in props.icon && 'dark' in props.icon) return isDark.value ? props.icon.dark : props.icon.light
  if ('svg' in props.icon) {
    if (typeof props.icon.svg === 'object') return isDark.value ? props.icon.svg.dark : props.icon.svg.light
    return props.icon.svg
  }
})

const resColor = computed(() => {
  if (!props.icon || typeof props.icon === 'string') return undefined
  if ('color' in props.icon) {
    if (typeof props.icon.color === 'object') return isDark.value ? props.icon.color.dark : props.icon.color.light
    return props.icon.color
  }
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

const resSvg = computed(() =>
  resIcon.value?.includes('<svg') && props.size ? resSvgSize(resIcon.value, String(props.size)) : null
)

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
