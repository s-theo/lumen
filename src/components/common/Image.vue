<script setup lang="ts">
import { useData } from 'vitepress'

import { computed } from 'vue'

import { AltType, SizeType, IconImageType, CropType } from '../../types'

const props = defineProps<{
  image: IconImageType
  alt?: AltType
  size?: SizeType
  crop?: CropType
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
    :class="{ crop: props.crop }"
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

<style scoped>
img {
  border-radius: 0.25em;
}

img.crop {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
