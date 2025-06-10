import type { WalineData } from '@theojs/lumen'

export const Waline_Data: WalineData = {
  serverURL: 'https://waline-lumen.netlify.app/.netlify/functions/comment/',
  lang: 'zh-CN',
  noCopyright: true,
  reaction: [
    'https://unpkg.com/@waline/emojis@latest/tw/1f44d.png',
    'https://unpkg.com/@waline/emojis@latest/tw-emoji/1f602.png',
    'https://unpkg.com/@waline/emojis@latest/tw-emoji/1f60d.png',
    'https://unpkg.com/@waline/emojis@latest/tw-emoji/1f609.png',
    'https://unpkg.com/@waline/emojis@latest/tw-emoji/1f60e.png',
    'https://unpkg.com/@waline/emojis@latest/tw-emoji/1f612.png'
  ],
  locale: {
    reactionTitle: '已到达文章底部，欢迎留下你的评论与表情~',
    reaction0: '点赞支持',
    reaction1: '哈哈大笑',
    reaction2: '爱死这个了',
    reaction3: '眨个眼',
    reaction4: '酷到爆',
    reaction5: '无语了'
  },
  emoji: [
    'https://unpkg.com/@waline/emojis@latest/alus',
    'https://unpkg.com/@waline/emojis@latest/bilibili',
    'https://unpkg.com/@waline/emojis@latest/bmoji',
    'https://unpkg.com/@waline/emojis@latest/qq',
    'https://unpkg.com/@waline/emojis@latest/tieba',
    'https://unpkg.com/@waline/emojis@latest/tw',
    'https://unpkg.com/@waline/emojis@latest/weibo',
    'https://unpkg.com/@waline/emojis@latest/soul-emoji'
  ],
  imageUploader: async (file) => {
    const formData = new FormData()
    formData.append('image', file)

    const { success, data, message } = await (
      await fetch(import.meta.env.VITE_IMGBB_URL, {
        method: 'POST',
        body: formData
      })
    ).json()

    if (success) return data.url
    throw new Error(`上传失败: ${message}`)
  }
}
