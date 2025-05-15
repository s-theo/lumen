import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true,
    icpalt: 'ICP备案',
    policealt: '公安备案'
  },
  author: {
    name: 'Theo-Messi',
    link: 'https://github.com/Theo-Messi',
    alt: '版权'
  },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      alt: 'github icon',
      links: [
        {
          name: 'Theo-Docs',
          link: 'https://github.com/Theo-Messi/Theo-Docs'
        },
        {
          name: '玄学宝典',
          link: 'https://github.com/Theo-Messi/xx.theojs.cn'
        },
        {
          name: '常用配置文件',
          link: 'https://github.com/Theo-Messi/dotfiles'
        },
        {
          name: 'Lumen',
          link: 'https://github.com/Theo-Messi/lumen'
        }
      ]
    },
    {
      title: '合作伙伴',
      icon: 'heroicons:user-group-solid',
      alt: '合作伙伴 icon',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          color: '#FF5733',
          link: 'https://itheo.top/qyt'
        },
        { name: 'Totoro Cloud - 龙猫云', link: 'https://itheo.top/totoro' },
        { name: 'TNT Cloud', link: 'https://itheo.top/tnt' },
        { name: 'FlyingBird', link: 'https://itheo.top/flyingbird' },
        { name: '飞兔云', link: 'https://itheo.top/feitu' },
        { name: '银河录像局', link: 'https://itheo.top/yh' },
        { name: '奈飞小铺', link: 'https://itheo.top/ihezu' },
        { name: '蜜糖商店', link: 'https://itheo.top/metshop' },
        { name: 'SMS-Activate', link: 'https://itheo.top/sms' }
      ]
    },
    {
      title: '观影指南',
      icon: 'heroicons:film-16-solid',
      alt: '观影 icon',
      links: [
        {
          name: 'Netflix',
          link: 'https://doc.theojs.cn/streaming/Netflix-guide'
        },
        {
          name: 'Disney+',
          link: 'https://doc.theojs.cn/streaming/Disney-introduce'
        },
        {
          name: 'Spotify Premium',
          link: 'https://doc.theojs.cn/streaming/Spotify'
        },
        {
          name: 'YouTube Premium',
          link: 'https://doc.theojs.cn/streaming/YouTube'
        },
        { name: 'Hulu', link: 'https://doc.theojs.cn/streaming/Hulu' },
        { name: 'HBO Max', link: 'https://doc.theojs.cn/streaming/HBO-Max' }
      ]
    },
    {
      title: '相关链接',
      icon: 'heroicons:link-16-solid',
      alt: '链接 icon',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.cn/' },
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' }
      ]
    }
  ]
}
