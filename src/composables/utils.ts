import { useData } from 'vitepress'
import { type ComputedRef, computed, onMounted, onUnmounted, useTemplateRef } from 'vue'
import type { NoticeItem } from '../types'

/**
 * 提取 frontmatter 中 hero 配置的 `Notice` 属性。
 *
 * @returns 包含 `NoticeItem` 对象或 `undefined` 的计算属性
 */
export const useNotice = (): ComputedRef<NoticeItem | undefined> => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.Notice)
}

/** 匹配外部链接的正则：以协议（如 http:、https:、mailto:）或 `//` 开头 */
export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

/**
 * 判断给定路径是否为外部链接。
 *
 * @param path - 链接路径字符串
 * @returns 是外部链接返回 true，否则 false
 */
export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

/**
 * 将指定 refName 的 DOM 元素移动到目标容器，并在组件卸载时复原。
 *
 * @param refName - 需要移动的 ref 名称
 * @param targetSelector - 目标容器的选择器，默认为 '.VPHero .text'
 */
export function moveDomElements(refName: string, targetSelector = '.VPHero .text') {
  const elementRef = useTemplateRef<HTMLElement>(refName)
  let placeholder: Comment | null = null

  onMounted(() => {
    const target = document.querySelector(targetSelector)
    if (target && elementRef.value) {
      placeholder = document.createComment('moveDomElements-placeholder')
      elementRef.value.before(placeholder)
      target.innerHTML = ''
      target.appendChild(elementRef.value)
    }
  })

  onUnmounted(() => {
    elementRef.value && placeholder?.parentNode?.replaceChild(elementRef.value, placeholder)
  })
}

/**
 * 获取当前激活的 locale key（如 `root`、`en`）。
 *
 * @returns 当前激活的 locale key
 */
export function getLocaleKey() {
  const { localeIndex } = useData()
  return computed(() => localeIndex.value)
}
