<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useData } from 'vitepress'
import { computed, onMounted, ref, watchEffect } from 'vue'
import type { IconMode, IconType, SizeType } from '../../types'

const props = defineProps<{
  icon: IconType
  color?: IconMode
  size?: SizeType
}>()

const { isDark } = useData()

const resolvedIcon = computed(() => {
  if (typeof props.icon === 'string') return props.icon
  if ('icon' in props.icon) return props.icon.icon
  if ('light' in props.icon && 'dark' in props.icon) return isDark.value ? props.icon.dark : props.icon.light
  if ('svg' in props.icon) {
    if (typeof props.icon.svg === 'object') return isDark.value ? props.icon.svg.dark : props.icon.svg.light
    return props.icon.svg
  }
})

const resolvedColor = computed(() => {
  if (!props.icon || typeof props.icon === 'string') return undefined
  if ('color' in props.icon) {
    if (typeof props.icon.color === 'object') return isDark.value ? props.icon.color.dark : props.icon.color.light
    return props.icon.color
  }
})

const resizeSvg = (svgString: string, size: string) => {
  if (typeof window !== 'undefined') {
    const svgElement = new DOMParser().parseFromString(svgString, 'image/svg+xml').querySelector('svg')
    svgElement?.setAttribute('width', size)
    svgElement?.setAttribute('height', size)
    return svgElement?.outerHTML ?? svgString
  }
  return svgString
}

const resolvedSvg = computed(() =>
  resolvedIcon.value?.includes('<svg') && props.size ? resizeSvg(resolvedIcon.value, String(props.size)) : null
)

const svgRef = ref<HTMLElement | null>(null)

onMounted(() => {
  watchEffect(() => {
    if (svgRef.value && resolvedSvg.value) svgRef.value.innerHTML = resolvedSvg.value
  })
})
</script>

<template>
  <span v-if="resolvedSvg" ref="svgRef" class="iconify" aria-hidden="true" />
  <Icon
    v-else
    :icon="resolvedIcon ?? ''"
    :color="resolvedColor"
    :inline="true"
    :ssr="true"
    :width="size"
    :height="size"
  />
</template>
