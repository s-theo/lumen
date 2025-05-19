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
      aria-live="assertive"
      @click="copyLink(shareLink)"
    >
      <span v-if="!copied" class="buttonText">
        <Icon
          class="iconify"
          :icon="ShareButton.buttonIcon || 'solar:copy-bold'"
          :ssr="true"
          :inline="true"
          aria-label="复制链接的图标"
          width="16"
          height="16"
        />
        {{ ShareButton.buttonText || '复制页面链接' }}
      </span>

      <span v-else class="copiedText">
        <Icon
          class="iconify"
          :icon="ShareButton.copiedIcon || 'mdi:thumbs-up'"
          :ssr="true"
          :inline="true"
          aria-label="复制成功图标"
          width="16"
          height="16"
        />
        {{ ShareButton.copiedText || '链接已复制!' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.share-link-container {
  padding: 1em;
}

.buttonText,
.copiedText {
  font-weight: 500;
  font-size: 1em;
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
  border-radius: 1em;
  background-color: var(--ShareButton-bg);
  padding: 0.5em 1em;
  width: 100%;
  overflow: hidden;
  color: var(--ShareButton-text);
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
  transform: var(--ShareButton-transform-hover);
  border-color: var(--ShareButton-border-hover);
  background-color: var(--ShareButton-bg-hover);
}

.share-link-button:active {
  transform: var(--ShareButton-transform-active);
}

.share-link-button.copied {
  color: var(--ShareButton-copied-text);
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
  margin: 0 0 -0.1em 0;
  color: var(--ShareButton-icon);
}
</style>
