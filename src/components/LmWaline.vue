<script setup lang="ts">
import { Waline } from '@waline/client/component'
import { useData, useRoute } from 'vitepress'
import '@waline/client/meta'
import '@waline/client/style'
import type { WalineData } from '../types'

const { Waline_Data: data } = defineProps<{ Waline_Data: WalineData }>()
const route = useRoute()
const { lang, isDark } = useData()
</script>

<template>
  <ClientOnly>
    <Waline
      :server-u-r-l="data.serverURL"
      :path="data.path ?? route.path"
      :lang="data.lang || lang"
      :locale="data.locale"
      :emoji="data.emoji"
      :dark="isDark"
      :comment-sorting="data.commentSorting"
      :meta="data.meta"
      :required-meta="data.requiredMeta"
      :login="data.login"
      :word-limit="data.wordLimit"
      :page-size="data.pageSize"
      :image-uploader="data.imageUploader"
      :highlighter="data.highlighter"
      :tex-renderer="data.texRenderer"
      :search="data.search"
      :no-copyright="data.noCopyright"
      :recaptcha-v3-key="data.recaptchaV3Key"
      :turnstile-key="data.turnstileKey"
      :reaction="data.reaction"
    />
  </ClientOnly>
</template>

<style>
.wl-reaction-text {
  color: var(--vp-c-text-3);
  font-weight: 500;
  font-size: 0.75rem !important;
  line-height: 2.25rem;
}
</style>
