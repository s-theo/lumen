<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { ImageType, SizeType } from '../../types'

const props = defineProps<{
  image: ImageType
  size?: SizeType
  crop?: boolean
}>()

defineOptions({ inheritAttrs: false })

const { isDark } = useData()

const currentImage = computed(() => {
  if (typeof props.image === 'string') return props.image
  if ('light' in props.image && 'dark' in props.image) {
    return isDark.value ? props.image.dark : props.image.light
  }
  return props.image.src
})

const altText = computed(() => (typeof props.image === 'object' && props.image.alt ? props.image.alt : ''))

const crop = computed(() => {
  return typeof props.image === 'object' && 'crop' in props.image ? Boolean(props.image.crop) : false
})

const cleanedAttrs = computed(() => {
  if (typeof props.image === 'string') return {}
  const { light, dark, crop, ...restAttrs } = props.image
  return restAttrs
})
</script>

<template>
  <img
    :class="crop ? 'crop' : undefined"
    :src="currentImage ? withBase(currentImage) : undefined"
    :alt="altText"
    :width="size"
    :height="size"
    loading="lazy"
    v-bind="typeof image === 'string' ? $attrs : { ...cleanedAttrs, ...$attrs }"
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
