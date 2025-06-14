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
</script>

<template>
  <img :src="currentImage" :alt="alt" :width="size" :height="size" loading="lazy" decoding="async" />
</template>
