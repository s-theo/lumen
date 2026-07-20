import type { AsideItem } from '@theojs/lumen'

export const Aside_Data: AsideItem = [
  {
    image: 'https://example.com/icon.webp',
    promo: '活动标题',
    info1: '简介',
    link: 'https://example.com/',
    i18n: {
      en: {
        promo: 'Promotion title',
        info1: 'Introduction'
      }
    }
  },
  {
    image: 'https://example.com/icon.webp',
    name: '普通链接',
    hide1: '悬停提示',
    link: 'https://example.com/',
    i18n: {
      en: {
        name: 'Link',
        hide1: 'Hover tip'
      }
    }
  }
]
