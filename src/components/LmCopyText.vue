<script setup lang="ts">
import { ref, computed } from 'vue'
import { LmIcon, LmImage } from './common'
import type { CopyTextItem } from '../types'

const props = defineProps<CopyTextItem>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const tipPos = computed(() => props.tipPos ?? 'top')

const handleCopy = async () => {
  await navigator.clipboard.writeText(props.text)
  copied.value = true
  if (timer !== null) clearTimeout(timer)
  timer = setTimeout(() => {
    copied.value = false
  }, 1000)
}
</script>

<template>
  <button
    class="copy ignore-header"
    :class="{ 'no-icon': props.noIcon }"
    type="button"
    aria-label="点击复制"
    :title="props.text"
    @click="handleCopy"
  >
    <Transition name="fade">
      <span v-if="copied" :class="['tip', tipPos]">{{ props.tip || '已复制' }}</span>
    </Transition>
    <template v-if="!props.noIcon">
      <LmIcon v-if="props.icon" :icon="props.icon" size="14" />
      <LmImage v-else-if="props.image" :image="props.image" size="14" />
      <LmIcon v-else icon="heroicons-solid:clipboard-copy" size="14" />
    </template>
    <span class="copy-text" :class="{ bold: props.bold }" v-html="props.label || props.text" />
  </button>
</template>

<style scoped>
.copy {
  all: unset;
  display: inline-flex;
  position: relative;
  align-items: center;
  gap: 0.25em;
  transform: translateY(2.5px);
  transition:
    background-color 0.3s,
    border 0.3s;
  cursor: pointer;
  margin-right: 0.25em;
  border: 1px solid var(--lm-CopyText-border);
  border-radius: 0.5em;
  background-color: var(--lm-CopyText-bg);
  padding: 0em 0.5em;
  height: 1.375em;
  font-weight: initial;
  font-size: 0.875rem;
}

.vp-doc h1 .copy {
  vertical-align: top;
  margin-top: 0px;
}

.vp-doc h2 .copy,
.vp-doc h3 .copy {
  vertical-align: top;
  margin-top: -1px;
}

.vp-doc h4 .copy,
.vp-doc h5 .copy,
.vp-doc h6 .copy {
  vertical-align: top;
  margin-top: -2px;
}

.vp-doc td .copy {
  vertical-align: 1px;
  font-size: 0.875em;
}

.vp-doc td .copy.no-icon {
  vertical-align: 1.5px;
}

.copy.no-icon {
  transform: translateY(0.5px);
}

.copy:hover {
  border-color: var(--lm-CopyText-border-hover);
  background-color: var(--lm-CopyText-bg-hover);
}

.tip {
  position: absolute;
  z-index: 10;
  border: 0.5px solid var(--lm-CopyText-tip-border);
  border-radius: 4px;
  background-color: var(--lm-CopyText-tip-bg);
  padding: 3px 6px;
  pointer-events: none;
  color: var(--lm-CopyText-tip-text);
  font-size: 0.875em;
  line-height: 1;
  white-space: nowrap;
}

.tip.top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
}

.tip.bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
}

.tip.left {
  top: 50%;
  right: 100%;
  transform: translateX(-4px) translateY(-50%);
}

.tip.right {
  top: 50%;
  left: 100%;
  transform: translateX(4px) translateY(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-CopyText-iconify-color, var(--lm-iconify-defColor));
}

.copy-text {
  color: var(--lm-CopyText-text-color);
}

.copy-text.bold {
  font-weight: 500;
}
</style>
