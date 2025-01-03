<script setup lang="ts">
import { Icon, ShareButtonItem, useCopyLink, useShareLink } from '../types'

// 引入组件的 props 类型
const ShareButton = defineProps<Partial<ShareButtonItem>>()

// 复制链接功能
const { copied, copyLink } = useCopyLink()

// 当前页面的分享链接
const shareLink = useShareLink()
</script>

<template>
  <div class="share-link-container">
    <button
      @click="copyLink(shareLink)"
      class="share-link-button"
      :class="{ copied }"
    >
      <span v-if="!copied">
        <Icon
          :icon="ShareButton.buttonIcon || 'solar:share-bold'"
          class="iconify"
        />
        {{ ShareButton.buttonText || '分享此页面' }}
      </span>

      <span v-else>
        <Icon
          :icon="ShareButton.copiedIcon || 'mdi:thumbs-up'"
          class="iconify"
        />
        {{ ShareButton.copiedText || '链接已复制!' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.share-link-container {
  padding: 1rem;
}

.share-link-button {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 1rem;
  background-color: var(--vp-c-bg-alt);
  padding: 0.5rem 1rem;
  width: 100%;
  overflow: hidden;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  font-size: 0.875rem;
}

.share-link-button::before {
  position: absolute;
  top: 0;
  left: -100%;
  z-index: -1;
  transition: left 0.6s ease;
  background-color: var(--vp-c-brand-soft);
  width: 100%;
  height: 100%;
  content: '';
}

.share-link-button:hover {
  transform: translateY(-1px);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-alt-hover);
}

.share-link-button:active {
  transform: scale(0.9);
}

.share-link-button:focus {
  outline: 2px solid var(--vp-c-brand-2);
  outline-offset: 2px;
}

.share-link-button.copied {
  color: var(--vp-c-brand-1);
}

.share-link-button.copied::before {
  left: 0;
  background-color: var(--vp-c-brand-soft);
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
  margin: 0 0 -0.2em 0;
  font-size: 1.2em;
}
</style>
