<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import {
  Icon,
  IconImageType,
  AltType,
  WidthType,
  HeightType,
  ClassesType
} from '../types'

const props = defineProps<{
  icon: IconImageType
  color?: IconImageType
  alt?: AltType
  width?: WidthType
  height?: HeightType
  classes?: ClassesType
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
  <Icon
    :class="props.classes"
    :icon="currentIcon"
    :color="currentColor"
    :ssr="true"
    :inline="true"
    :aria-label="props.alt"
    :width="props.width"
    :height="props.height"
  />
</template>
