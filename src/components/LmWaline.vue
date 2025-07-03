<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { Waline } from '@waline/client/component'
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
      :serverURL="data.serverURL"
      :path="route.path"
      :lang="data.lang || lang"
      :locale="data.locale"
      :emoji="data.emoji"
      :dark="isDark"
      :commentSorting="data.commentSorting"
      :meta="data.meta"
      :requiredMeta="data.requiredMeta"
      :login="data.login"
      :wordLimit="data.wordLimit"
      :pageSize="data.pageSize"
      :imageUploader="data.imageUploader"
      :highlighter="data.highlighter"
      :texRenderer="data.texRenderer"
      :search="data.search"
      :noCopyright="data.noCopyright"
      :recaptchaV3Key="data.recaptchaV3Key"
      :turnstileKey="data.turnstileKey"
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
