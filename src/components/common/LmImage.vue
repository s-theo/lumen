<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import type { ImageType, SizeType } from '../../types'

const props = defineProps<{
  image: ImageType
  size?: SizeType
  crop?: boolean
}>()

defineOptions({ inheritAttrs: false })

const isImage = (image: ImageType): image is { light: string; dark: string } =>
  typeof image === 'object' && 'light' in image && 'dark' in image

const resCrop = computed(() =>
  typeof props.image === 'object' && 'crop' in props.image ? Boolean(props.image.crop) : false
)

const resAttrs = computed(() => {
  if (typeof props.image === 'string') return {}
  const { light, dark, crop, ...restAttrs } = props.image
  return restAttrs
})

const onError = (e: Event): void => {
  if (e.target instanceof HTMLImageElement) {
    e.target.onerror = null
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%238cbcd6' d='M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4'/%3E%3Ccircle cx='35' cy='16' r='3' fill='%23b3ddf5'/%3E%3Cpath fill='%239ac9e3' d='M20 16L9 32h22z'/%3E%3Cpath fill='%23b3ddf5' d='m31 22l-8 10h16z'/%3E%3Ccircle cx='38' cy='38' r='10' fill='%23f44336'/%3E%3Cg fill='%23fff'%3E%3Cpath d='m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z'/%3E%3Cpath d='m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z'/%3E%3C/g%3E%3C/svg%3E"
  }
}
</script>

<template>
  <template v-if="isImage(props.image)">
    <img
      class="dark-img"
      :class="resCrop ? 'crop' : undefined"
      :src="withBase(props.image.dark)"
      :width="size ?? undefined"
      :height="size ?? undefined"
      loading="lazy"
      aria-hidden="true"
      alt=""
      data-no-viewer
      v-bind="{ ...resAttrs, ...$attrs }"
      @error="onError"
    />
    <img
      class="light-img"
      :class="resCrop ? 'crop' : undefined"
      :src="withBase(props.image.light)"
      :width="size ?? undefined"
      :height="size ?? undefined"
      loading="lazy"
      aria-hidden="true"
      alt=""
      data-no-viewer
      v-bind="{ ...resAttrs, ...$attrs }"
      @error="onError"
    />
  </template>
  <template v-else>
    <img
      :class="resCrop ? 'crop' : undefined"
      :src="typeof props.image === 'string' ? withBase(props.image) : withBase(props.image.src)"
      :width="size ?? undefined"
      :height="size ?? undefined"
      loading="lazy"
      aria-hidden="true"
      alt=""
      data-no-viewer
      v-bind="typeof props.image === 'string' ? $attrs : { ...resAttrs, ...$attrs }"
      @error="onError"
    />
  </template>
</template>

<style scoped>
:root:not(.dark) .dark-img,
:root:is(.dark) .light-img {
  display: none;
}

img {
  border-radius: 0.25em;
  pointer-events: none;
}

img.crop {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
