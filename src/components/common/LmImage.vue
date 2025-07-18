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

const isImage = (img: ImageType): img is { light: string; dark: string } => {
  return typeof img === 'object' && 'light' in img && 'dark' in img
}

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
