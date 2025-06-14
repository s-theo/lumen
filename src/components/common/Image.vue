<script setup lang="ts">
import { useData } from 'vitepress'

import { computed } from 'vue'

import { AltType, SizeType, IconImageType } from '../../types'

const props = defineProps<{
  image: IconImageType
  alt?: AltType
  size?: SizeType
}>()

const { isDark } = useData()

const currentImage = computed(() => {
  if (typeof props.image === 'object') {
    return isDark.value ? props.image.dark : props.image.light
  }
  return props.image
})

const altText = computed(() => props.alt ?? '')
</script>

<template>
  <img
    :src="currentImage"
    :alt="altText"
    :width="size"
    :height="size"
    loading="lazy"
    decoding="async"
    referrerpolicy="no-referrer"
    fetchpriority="low"
    draggable="false"
  />
</template>
