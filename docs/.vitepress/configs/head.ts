import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // ——— 基础图标与浏览器支持 ———
  ['link', { rel: 'icon', type: 'image/webp', href: 'https://i.theojs.cn/logo/Lumen-Logo.webp' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Lumen' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],

  // ——— 页面基础信息 ———
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],

  // ——— Open Graph 社交信息 ———
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Lumen' }],

  // ——— Twitter Cards ———
  ['meta', { name: 'twitter:card', content: 'summary' }],

  // ——— SEO 辅助 ———
  ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
  ['meta', { name: 'google-site-verification', content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI' }]
]
