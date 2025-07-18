<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { EXTERNAL_URL_RE } from '../../composables'
import type { LinkType, RelType, TargetType } from '../../types'

const props = defineProps<{
  tag?: string
  href: LinkType
  rel?: RelType
  target?: TargetType
  noIcon?: boolean
}>()

const { href, rel, target, noIcon } = props
const tag = computed(() => props.tag ?? (props.href ? 'a' : 'span'))
const isExternal = computed(() => (props.href && EXTERNAL_URL_RE.test(props.href)) || props.target === '_blank')
</script>

<template>
  <component
    :is="tag"
    :class="{ 'lm-link': href, 'vp-external-link-icon': isExternal && !noIcon, 'no-icon': noIcon }"
    :href="href ? withBase(href) : undefined"
    :rel="rel ?? (isExternal ? 'noreferrer' : undefined)"
    :target="target ?? (isExternal ? '_blank' : undefined)"
  >
    <slot />
  </component>
</template>
