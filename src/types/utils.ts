import { useData, useRouter } from 'vitepress'

import {
  ComputedRef,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref
} from 'vue'

import type { Prelink, VideoProps } from './types'

/**
 * 提取 frontmatter 中 hero 配置的 `prelink` 属性。
 *
 * @returns 一个包含 `Prelink` 对象或 `undefined` 的计算属性。
 */
export const usePrelink = (): ComputedRef<Prelink | undefined> => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.prelink)
}

/** 正则表达式：匹配外部链接。 规则：以协议（如 http:, https:, mailto: 等）或 `//` 开头。 */
export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

/**
 * 判断给定路径是否为外部链接。
 *
 * 外部链接指以协议（如 `http:`, `mailto:`）或 `//` 开头的 URL。
 *
 * @param path - 要检测的链接路径字符串。
 * @returns 如果是外部链接返回 `true`，否则返回 `false`。
 */
export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}
/**
 * 初始化 Twikoo 评论系统（仅在浏览器中生效）。
 *
 * @param envId - Twikoo 的环境 ID。
 */
export const initTwikoo = async (envId: string): Promise<void> => {
  if (typeof window === 'undefined') return

  try {
    const twikoo = await import('twikoo')
    await nextTick()
    const el = document.querySelector('#twikoo')
    if (el) {
      twikoo.init({ envId, el: '#twikoo' })
    } else {
      console.error('未找到 Twikoo 元素。')
    }
  } catch (error) {
    console.error('初始化 Twikoo 失败：', error)
  }
}

/** 将 `#hero-text` 的 DOM 节点插入至 `.VPHero .text` 中，并在组件卸载时还原。 */
export const moveDomElements = (): void => {
  let sourceElement: Element | null = null
  let placeholder: Comment | null = null

  onMounted(() => {
    const target = document.querySelector('.VPHero .text')
    sourceElement = document.querySelector('#hero-text')

    if (target && sourceElement) {
      placeholder = document.createComment('hero-text-placeholder')
      sourceElement.before(placeholder)
      target.innerHTML = ''
      target.appendChild(sourceElement)
    }
  })

  onUnmounted(() => {
    placeholder?.parentNode?.replaceChild(sourceElement, placeholder)
  })
}

/**
 * 提供复制文本到剪贴板的功能，并显示复制状态。
 *
 * @returns 包含 `copied` 状态和 `copyLink` 函数的组合对象。
 */
export const useCopyLink = () => {
  const copied = ref(false)

  const copyLink = async (text: string) => {
    try {
      if (!navigator.clipboard) {
        alert('当前浏览器不支持自动复制，请手动复制。')
        return
      }
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => (copied.value = false), 2000)
    } catch (error) {
      console.error('复制失败:', error)
      alert('复制失败，请手动复制。')
    }
  }

  return { copied, copyLink }
}

/**
 * 支持的视频平台播放器配置。
 *
 * 每个平台提供一个 `src` 函数用于生成嵌入链接，以及播放器名称。
 */
export const video = {
  bilibili: {
    src: (id: VideoProps['id']) =>
      `https://player.bilibili.com/player.html?bvid=${id}&autoplay=0`,
    title: 'Bilibili video player'
  },
  tencent: {
    src: (id: VideoProps['id']) =>
      `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: 'Tencent Video player'
  },
  youku: {
    src: (id: VideoProps['id']) => `https://player.youku.com/embed/${id}`,
    title: 'Youku video player'
  },
  youtube: {
    src: (id: VideoProps['id']) =>
      `https://www.youtube-nocookie.com/embed/${id}`,
    title: 'YouTube video player'
  },
  vimeo: {
    src: (id: VideoProps['id']) => `https://player.vimeo.com/video/${id}`,
    title: 'Vimeo video player'
  }
}

/**
 * 获取对应视频平台的嵌入配置或自定义视频信息。
 *
 * @param props - 视频参数，包括平台标识 `is`、视频 ID、以及自定义 `src`。
 * @returns 视频播放器配置对象。
 */
export function getVideo(props: VideoProps) {
  if (props.is && props.id) return video[props.is]
  if (props.id) return video.youtube
  return { src: props.src || '', title: 'Custom video player' }
}

/**
 * 基于当前路由生成页面分享链接。
 *
 * @returns 当前页面完整的分享链接。
 */
export function useShareLink(): ComputedRef<string> {
  const router = useRouter()
  return computed(() => {
    if (typeof window === 'undefined') return ''
    return `${window.location.origin}${router.route.path}`
  })
}

/**
 * 处理预设链接点击事件：支持跳转或复制内容。
 *
 * @param event - 鼠标点击事件。
 * @param prelink - `Prelink` 对象，包含跳转链接、复制文本等字段。
 */
export function handleClick(
  event: MouseEvent,
  prelink: Prelink | undefined
): void {
  if (!prelink?.copy) return // 非复制操作，直接 return

  event.preventDefault()

  const textToCopy = prelink.install?.trim()
  if (!textToCopy) {
    alert('没有提供可复制的内容')
    return
  }

  if (!navigator.clipboard) {
    alert('当前浏览器不支持复制，请手动复制。')
    return
  }

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log('[Announcement] 已复制到剪贴板:', textToCopy)
    })
    .catch((err) => {
      console.error('[Announcement] 复制失败:', err)
    })
}
