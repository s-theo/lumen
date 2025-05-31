import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    showIcon: true,
    icp: {
      number: '粤ICP备12345678号',
      icon: {
        light: 'fluent:globe-shield-48-filled',
        dark: 'fluent:globe-shield-48-filled'
      },
      color: {
        light: 'rgba(20, 150, 255, 1)',
        dark: 'rgba(100, 200, 255, 1)'
      },
      alt: 'ICP 备案图标',
      rel: 'noopener noreferrer'
    },
    police: {
      number: '粤公网安备12345678号',
      icon: {
        light: 'fluent:shield-checkmark-48-filled',
        dark: 'fluent:shield-checkmark-48-filled'
      },
      color: {
        light: 'rgba(20, 255, 150, 1)',
        dark: 'rgba(100, 255, 200, 1)'
      },
      alt: '公安备案图标',
      rel: 'noopener noreferrer'
    }
  },
  author: {
    name: 'Theo',
    link: 'https://theojs.cn',
    icon: {
      light: 'mdi:copyright',
      dark: 'mdi:copyright'
    },
    color: {
      light: '#999',
      dark: '#ccc'
    },
    alt: '版权图标',
    rel: 'noopener noreferrer'
  },
  group: [
    {
      title: '外部链接',
      icon: {
        light: 'bx:link',
        dark: 'bx:link'
      },
      color: {
        light: 'rgba(255, 87, 51, 1)',
        dark: 'rgba(255, 130, 100, 1)'
      },
      links: [
        {
          name: '示例1',
          link: 'https://example1.com',
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold'
          },
          color: {
            light: 'rgba(200, 100, 50, 1)',
            dark: 'rgba(255, 150, 100, 1)'
          },
          alt: '示例1图标',
          rel: 'noopener noreferrer'
        },
        {
          name: '示例2',
          link: 'https://example2.com'
          // icon 和 color 可省略
        }
      ]
    },
    {
      title: '内部链接',
      icon: {
        light: 'bx:link',
        dark: 'bx:link'
      },
      color: {
        light: 'rgba(255, 87, 51, 1)',
        dark: 'rgba(255, 130, 100, 1)'
      },
      links: [
        {
          name: '示例1',
          link: '/docs',
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold'
          },
          color: {
            light: 'rgba(200, 100, 50, 1)',
            dark: 'rgba(255, 150, 100, 1)'
          },
          alt: '文档链接图标',
          rel: 'noopener noreferrer'
        },
        {
          name: '示例2',
          link: '/page'
          // icon 和 color 可省略
        }
      ]
    }
  ]
}
