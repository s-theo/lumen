import type { DefaultTheme } from 'vitepress'

// 社交链接设置

export const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: 'https://github.com/Theo-Messi/lumen',
    ariaLabel: 'Github'
  },
  {
    icon: 'gmail',
    link: 'mailto:fanxiaobin422@gmail.com',
    ariaLabel: 'Gmail'
  },
  {
    icon: 'npm',
    link: 'https://www.npmjs.com/package/@theojs/lumen',
    ariaLabel: 'npm'
  },
  {
    icon: {
      svg: '<iconify-icon icon="twemoji:red-heart" style="font-size:1.2em" alt="Github Sponsors"></iconify-icon>'
    },
    link: 'https://i.theojs.cn/sponsor.webp',
    ariaLabel: 'Github Sponsors'
  }
]
