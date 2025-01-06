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
      class="share-link-button"
      :class="{ copied }"
      :aria-label="
        copied
          ? ShareButton.copiedText || '链接已复制!'
          : ShareButton.buttonText || '分享此页面'
      "
      aria-live="polite"
      @click="copyLink(shareLink)"
    >
      <span v-if="!copied">
        <Icon
          class="iconify"
          :icon="ShareButton.buttonIcon || 'solar:share-bold'"
          :ssr="true"
          alt="Icon"
          aria-hidden="true"
        />
        {{ ShareButton.buttonText || '分享此页面' }}
      </span>

      <span v-else>
        <Icon
          class="iconify"
          :icon="ShareButton.copiedIcon || 'mdi:thumbs-up'"
          :ssr="true"
          alt="Icon"
          aria-hidden="true"
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
  border: 1px solid var(--ShareButton-border);
  border-radius: 1rem;
  background-color: var(--ShareButton-bg);
  padding: 0.5rem 1rem;
  width: 100%;
  overflow: hidden;
  color: var(--ShareButton-text);
  font-weight: 500;
  font-size: 0.875rem;
}

.share-link-button::before {
  position: absolute;
  top: 0;
  left: -100%;
  z-index: -1;
  transition: left 0.6s ease;
  background-color: var(--ShareButton-transition);
  width: 100%;
  height: 100%;
  content: '';
}

.share-link-button.copied::before {
  left: 0;
  background-color: var(--ShareButton-transition);
}

.share-link-button:hover {
  transform: translateY(-1px);
  border-color: var(--ShareButton-border-hover);
  background-color: var(--ShareButton-bg-hover);
}

.share-link-button:active {
  transform: scale(0.9);
}

.share-link-button.copied {
  color: var(--ShareButton-copied-text);
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
  margin: 0 0 -0.2em 0;
  color: var(--ShareButton-icon);
  font-size: 1.2em;
}
</style>
