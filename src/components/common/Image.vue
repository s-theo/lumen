<script setup lang="ts">
import { useData } from 'vitepress'

import { computed } from 'vue'

import { AltType, SizeType, ImageType, CropType } from '../../types'

const props = defineProps<{
  image: ImageType
  alt?: AltType
  size?: SizeType
  crop?: CropType
}>()

const { isDark } = useData()

const currentImage = computed(() => {
  if (typeof props.image === 'string') return props.image
  if ('light' in props.image && 'dark' in props.image) {
    return isDark.value ? props.image.dark : props.image.light
  }
  return props.image.src
})

const altText = computed(() => {
  if (props.alt) return props.alt
  if (typeof props.image === 'object' && 'alt' in props.image) return props.image.alt
  return ''
})

const crop = computed(() => {
  return (
    typeof props.image === 'object' &&
    Object.prototype.hasOwnProperty.call(props.image, 'crop') &&
    props.image.crop === true
  )
})
</script>

<template>
  <img
    v-if="crop"
    class="crop"
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
  <img
    v-else
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
