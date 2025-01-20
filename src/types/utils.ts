import { useData, useRouter } from 'vitepress'

import { ComputedRef, computed, nextTick, onMounted, ref } from 'vue'

import { Prelink, VideoProps } from './types'

/**
 * 从 `frontmatter` 中提取 `prelink` 信息。
 *
 * @returns 返回 `frontmatter` 中 `hero` 对象的 `prelink` 属性值，如果不存在则返回 `undefined`。
 */
export const usePrelink = (): ComputedRef<Prelink | undefined> => {
  const { frontmatter } = useData()
  return computed(() => frontmatter.value.hero?.prelink)
}

/**
 * 检查链接是否为外部链接。
 *
 * @param link - 要判断的链接字符串。
 * @returns 如果链接是外部链接，则返回 `true`，否则返回 `false`。
 */
export const isExternal = (link: string): boolean =>
  /^(?:[a-z]+:|\/\/)/i.test(link)

/**
 * 初始化 Twikoo 评论系统。
 *
 * 动态加载 Twikoo 并初始化评论系统。
 *
 * @param envId - Twikoo 的环境 ID。
 * @returns 无返回值的 Promise。
 */
export const initTwikoo = async (envId: string): Promise<void> => {
  try {
    const twikoo = await import('twikoo')
    console.log('Twikoo 加载成功')
    if (typeof window !== 'undefined') {
      await nextTick() // 等待 DOM 更新
      const twikooElement = document.querySelector('#twikoo')
      if (twikooElement) {
        twikoo.init({
          envId,
          el: '#twikoo'
        })
      } else {
        console.error('未找到 Twikoo 元素。')
      }
    }
  } catch (error) {
    console.error('初始化 Twikoo 失败：', error)
  }
}

/**
 * 将指定的 DOM 元素移动到目标位置。
 *
 * 当组件挂载时，将 `.VPHero .text` 内部的内容替换为 `#hero-text` 的内容。
 */
export const moveDomElements = () => {
  onMounted(() => {
    const targetElement = document.querySelector('.VPHero .text')
    const sourceElement = document.querySelector('#hero-text')

    if (targetElement && sourceElement) {
      targetElement.innerHTML = ''
      targetElement.appendChild(sourceElement)
    }
  })
}

/**
 * 创建一个用于复制链接的功能。
 *
 * @returns 包含 `copied` 状态和 `copyLink` 函数的对象。
 */
export const useCopyLink = () => {
  const copied = ref(false)

  const copyLink = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (error) {
      console.error('复制链接失败：', error)
      alert('复制链接失败，请手动复制。')
    }
  }

  return { copied, copyLink }
}

/**
 * 视频平台配置 每个平台包含以下属性：
 *
 * - `src`: 返回视频嵌入链接的函数，接受视频的唯一标识符 `id` 作为参数。
 * - `title`: 视频播放器的名称。
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
  },
  xigua: {
    src: (id: VideoProps['id']) => `https://www.ixigua.com/iframe/${id}`,
    title: 'XiGua video player'
  }
}

/**
 * 动态返回对应的视频配置或自定义链接。
 *
 * @param VideoProps - 视频相关参数。
 * @returns 视频配置对象，包括 `src` 和 `title`。
 */
export const getVideo = (props: VideoProps) => {
  /** 如果同时传递了 `is` 和 `id`，返回对应视频平台的配置。 */
  if (props.is && props.id) return video[props.is]

  /** 如果只有 `id` 存在，则返回默认的 YouTube 视频配置。 */
  if (props.id) return video.youtube

  /** 如果没有 `is` 和 `id`，且提供了自定义的 `src`，返回自定义视频配置。 如果 `src` 为空，则返回空链接。 */
  return { src: props.src || '', title: 'Custom video player' }
}

/**
 * 用于生成当前 VitePress 页面分享链接的工具函数。
 *
 * 使用 VitePress 的 `useRouter` 获取当前路由，并根据路径生成完整的分享链接。
 *
 * @returns 当前页面的分享链接。
 */
export function useShareLink(): ComputedRef<string> {
  const router = useRouter()
  return computed(() => {
    return `${window.location.origin}${router.route.path}`
  })
}

/**
 * 处理点击事件，执行复制操作或者跳转。
 *
 * 当 `prelink.copy` 为 `true` 时，阻止默认行为并将 `prelink.install` 的内容复制到剪贴板。
 * 如果复制操作成功，则在控制台打印成功消息。如果失败，则打印错误信息。 如果 `prelink.copy` 为 `false`
 * 或未设置，函数不会执行复制操作，而是按正常流程进行跳转。
 *
 * @param event - 触发事件的鼠标事件对象。
 * @param prelink - 包含链接信息的 `Prelink` 对象。它包含了跳转链接、复制内容等信息。
 * @returns Void
 */
export function handleClick(
  event: MouseEvent,
  prelink: Prelink | undefined
): void {
  if (!prelink) return

  const textToCopy = prelink.install || '没有提供可复制的内容'

  if (prelink.copy) {
    event.preventDefault()
    navigator.clipboard
      .writeText(prelink.install)
      .then(() => {
        console.log('已复制到剪贴板:', textToCopy)
      })
      .catch((err) => {
        console.error('复制失败', err)
      })
  }
}
