import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/webp',
      href: 'https://i.theojs.cn/logo/Lumen-Logo.webp'
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96'
    }
  ],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Lumen' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  [
    'meta',
    {
      name: 'description',
      content: '✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库'
    }
  ],
  [
    'meta',
    { name: 'keywords', content: 'Vue, VitePress, 插件, 功能组件, 主题美化' }
  ],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Lumen' }],
  ['meta', { property: 'og:title', content: 'Lumen - VitePress 插件库' }],
  ['meta', { property: 'og:url', content: 'https://lumen.theojs.cn/' }],
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://i.theojs.cn/logo/Lumen-og.webp'
    }
  ],
  ['meta', { property: 'og:image:alt', content: 'Lumen Logo' }],
  [
    'meta',
    {
      property: 'og:description',
      content: '✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库'
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Lumen - VitePress 插件库' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content: '✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库'
    }
  ],
  [
    'meta',
    {
      name: 'twitter:image',
      content: 'https://i.theojs.cn/logo/Lumen-og.webp'
    }
  ],
  ['meta', { name: 'twitter:image:alt', content: 'Lumen Logo' }],
  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI'
    }
  ],
  [
    'meta',
    {
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
]
