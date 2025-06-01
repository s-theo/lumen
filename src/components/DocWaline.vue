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
</template>
