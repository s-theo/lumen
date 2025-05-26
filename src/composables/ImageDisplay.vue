<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import {
  IconImageType,
  AltType,
  WidthType,
  HeightType,
  ClassesType
} from '../types'

const props = defineProps<{
  image: IconImageType
  alt?: AltType
  width?: WidthType
  height?: HeightType
  classes?: ClassesType
}>()

const { isDark } = useData()

const currentImage = computed(() => {
  if (typeof props.image === 'object') {
    return isDark.value ? props.image.dark : props.image.light
  }
  return props.image
})
</script>

<template>
  <img
    :class="props.classes"
    :src="currentImage"
    :alt="props.alt"
    loading="lazy"
    decoding="async"
    :width="props.width"
    :height="props.height"
  />
</template>
