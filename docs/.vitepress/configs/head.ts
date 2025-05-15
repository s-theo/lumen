import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/webp', href: '/Logo.webp' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'description',
      content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  [
    'meta',
    { name: 'keywords', content: 'Vue, VitePress, 插件, 功能组件, 主题美化' }
  ],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-CN' }],
  ['meta', { property: 'og:site_name', content: 'Lumen' }],
  ['meta', { property: 'og:title', content: 'Lumen - VitePress 插件库' }],
  ['meta', { property: 'og:url', content: 'https://lumen.theojs.cn/' }],
  [
    'meta',
    { property: 'og:image', content: 'https://lumen.theojs.cn/Logo.webp' }
  ],
  ['meta', { property: 'og:image:alt', content: 'Lumen Logo' }],
  [
    'meta',
    {
      property: 'og:description',
      content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Lumen - VitePress 插件库' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://lumen.theojs.cn/Logo.webp' }
  ],
  ['meta', { name: 'twitter:image:alt', content: 'Lumen Logo' }],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://lumen.theojs.cn/',
        name: '@theojs/lumen',
        description: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件',
        author: { '@type': 'Person', name: 'Theo-Messi' },
        image: 'https://lumen.theojs.cn/Logo.webp',
        publisher: {
          '@type': 'Organization',
          name: 'Theo-Messi',
          logo: {
            '@type': 'ImageObject',
            url: 'https://lumen.theojs.cn/Logo.webp'
          }
        }
      })
    }
  ]
]
