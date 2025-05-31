import type { AsideItem } from '@theojs/lumen'

export const Aside_Data: AsideItem = {
  i18n: {
    root: [
      {
        link: 'https://example.com/',
        image: 'https://example.com/icon.webp',
        promo: '活动标题',
        info1: '简介1',
        info2: '简介2'
      },
      {
        link: 'https://example.com/',
        image: 'https://example.com/icon.webp',
        name: '标题',
        hide1: '隐藏信息1',
        hide2: '隐藏信息2'
      },
      {
        link: 'https://example.com/',
        icon: 'twemoji:red-heart',
        name: '使用iconify图标'
      },
      {
        link: 'https://example.com/',
        icon: { light: 'simple-icons:netflix', dark: 'simple-icons:youtube' },
        color: { light: '#E50914', dark: '#FF0000' },
        name: 'iconify图标的 light/dark 模式'
      },
      {
        link: 'https://xx.theojs.cn/',
        image: {
          light: 'https://i.theojs.cn/logo/github.svg',
          dark: 'https://i.theojs.cn/logo/github-dark.svg'
        },
        name: '图片的 light/dark 模式'
      }
    ],
    en: [
      {
        link: 'https://example.com/',
        image: 'https://example.com/icon.webp',
        promo: 'Promotion Title',
        info1: 'Introduction 1',
        info2: 'Introduction 2'
      },
      {
        link: 'https://example.com/',
        image: 'https://example.com/icon.webp',
        name: 'Title',
        hide1: 'Hidden Info 1',
        hide2: 'Hidden Info 2'
      },
      {
        link: 'https://example.com/',
        icon: 'twemoji:red-heart',
        name: 'Using iconify icon'
      },
      {
        link: 'https://example.com/',
        icon: { light: 'simple-icons:netflix', dark: 'simple-icons:youtube' },
        color: { light: '#E50914', dark: '#FF0000' },
        name: 'Iconify icon with light/dark mode'
      },
      {
        link: 'https://xx.theojs.cn/',
        image: {
          light: 'https://i.theojs.cn/logo/github.svg',
          dark: 'https://i.theojs.cn/logo/github-dark.svg'
        },
        name: 'Image with light/dark mode'
      }
    ]
  }
}
