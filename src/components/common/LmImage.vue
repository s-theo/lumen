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

const resImage = computed(() => {
  if (typeof props.image === 'string') return props.image
  if ('light' in props.image && 'dark' in props.image) return isDark.value ? props.image.dark : props.image.light
  if ('src' in props.image) return props.image.src
  return undefined
})

const resCrop = computed(() => {
  return typeof props.image === 'object' && 'crop' in props.image ? Boolean(props.image.crop) : false
})

const resAttrs = computed(() => {
  if (typeof props.image === 'string') return {}
  const { light, dark, crop, ...restAttrs } = props.image
  return restAttrs
})

const onError = (e: Event): void => {
  const target = e.target
  if (target instanceof HTMLImageElement) {
    target.onerror = null
    target.src = 'https://api.iconify.design/flat-color-icons:remove-image.svg'
  }
}
</script>

<template>
  <img
    :class="resCrop ? 'crop' : undefined"
    :src="resImage ? withBase(resImage) : undefined"
    :width="size ?? undefined"
    :height="size ?? undefined"
    loading="lazy"
    aria-hidden="true"
    alt=""
    v-bind="typeof image === 'string' ? $attrs : { ...resAttrs, ...$attrs }"
    @error="onError"
  />
</template>

<style scoped>
img {
  border-radius: 0.25em;
  pointer-events: none;
}

img.crop {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
