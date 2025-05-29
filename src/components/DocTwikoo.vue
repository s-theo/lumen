<script setup lang="ts">
import { useRoute } from 'vitepress'

import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { TwikooData } from '../types'

const props = defineProps<{
  Twikoo_Data: TwikooData
}>()

const twikooScript = ref<HTMLScriptElement | null>(null)

function loadTwikooScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).twikoo?.init) {
      resolve()
      return
    }
    if (!twikooScript.value) {
      reject(new Error('未找到 Twikoo 脚本元素'))
      return
    }
    twikooScript.value.onload = () => {
      if ((window as any).twikoo?.init) resolve()
      else reject(new Error('Twikoo 脚本已加载，但未找到 window.twikoo.init'))
    }
    twikooScript.value.onerror = () => reject(new Error('加载 Twikoo 脚本失败'))
  })
}

async function initTwikoo() {
  try {
    await loadTwikooScript()
    const el = document.querySelector('#twikoo')
    if (!el) {
      console.error('未找到 #twikoo 元素')
      return
    }
    ;(window as any).twikoo.init({
      envId: props.Twikoo_Data.envId,
      el: '#twikoo'
    })
  } catch (err) {
    console.error('初始化 Twikoo 评论系统失败：', err)
  }
}

onMounted(() => initTwikoo())

onBeforeUnmount(() => {
  const el = document.querySelector('#twikoo')
  if (el) el.innerHTML = ''
})

const route = useRoute()
watch(
  () => route.path,
  () => {
    const el = document.querySelector('#twikoo')
    if (el) el.innerHTML = ''
    initTwikoo()
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
