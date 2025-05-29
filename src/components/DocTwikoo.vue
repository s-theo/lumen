<script setup lang="ts">
import { useRoute } from 'vitepress'

import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { TwikooData, initTwikoo, clearTwikoo } from '../types'

const props = defineProps<{
  Twikoo_Data: TwikooData
}>()

const twikooScript = ref<HTMLScriptElement | null>(null)

onMounted(() => {
  initTwikoo(props.Twikoo_Data.envId, twikooScript.value)
})

onBeforeUnmount(() => {
  clearTwikoo()
})

const route = useRoute()
watch(
  () => route.path,
  () => {
    clearTwikoo()
    initTwikoo(props.Twikoo_Data.envId, twikooScript.value)
  }
)
</script>

<template>
  <div class="vp-raw">
    <div id="twikoo">
      <span class="visually-hidden">评论区</span>
    </div>
    <component
      :is="'script'"
      ref="twikooScript"
      src="https://fastly.jsdelivr.net/npm/twikoo@latest/dist/twikoo.min.js"
      crossorigin="anonymous"
    />
  </div>
</template>

<style scoped>
.visually-hidden {
  position: absolute !important;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
  white-space: nowrap;
}
</style>
