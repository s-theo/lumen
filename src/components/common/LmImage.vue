<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed, onMounted } from 'vue'
import type { ImageType, SizeType } from '../../types'

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
    target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%238cbcd6' d='M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4'/%3E%3Ccircle cx='35' cy='16' r='3' fill='%23b3ddf5'/%3E%3Cpath fill='%239ac9e3' d='M20 16L9 32h22z'/%3E%3Cpath fill='%23b3ddf5' d='m31 22l-8 10h16z'/%3E%3Ccircle cx='38' cy='38' r='10' fill='%23f44336'/%3E%3Cg fill='%23fff'%3E%3Cpath d='m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z'/%3E%3Cpath d='m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z'/%3E%3C/g%3E%3C/svg%3E"
  }
}

onMounted(() => {
  resImage.value
})
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
