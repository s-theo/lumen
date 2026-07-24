import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: { name: 'Theo', link: 'https://github.com/s-theo' },
  group: [
    {
      icon: 'heroicons:link-16-solid',
      title: '相关链接',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.net/' },
        { name: '玄学宝典', link: 'https://xx.theojs.net/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' }
      ]
    }
  ]
}
