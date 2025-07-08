<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { AltType, ImageType, SizeType } from '../../types'

const props = defineProps<{
  image: ImageType
  alt?: AltType
  size?: SizeType
  crop?: boolean
}>()

const { isDark } = useData()

const currentImage = computed(() => {
  if (typeof props.image === 'string') return props.image
  if ('light' in props.image && 'dark' in props.image) {
    return isDark.value ? props.image.dark : props.image.light
  }
  return props.image.src
})

const altText = computed(() => props.alt ?? (typeof props.image === 'object' ? (props.image.alt ?? '') : ''))

const crop = computed(() => {
  return typeof props.image === 'object' && 'crop' in props.image ? Boolean(props.image.crop) : false
})
</script>

<template>
  <img
    :class="{ crop: crop }"
    :src="currentImage ? withBase(currentImage) : undefined"
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
