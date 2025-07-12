import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    showIcon: true,
    icp: {
      icon: {
        light: 'fluent:globe-shield-48-filled',
        dark: 'fluent:globe-shield-48-filled',
        color: { light: 'rgba(20, 150, 255, 1)', dark: 'rgba(100, 200, 255, 1)' }
      },
      number: '粤ICP备12345678号',
      rel: 'noopener noreferrer'
    },
    police: {
      icon: {
        light: 'fluent:shield-checkmark-48-filled',
        dark: 'fluent:shield-checkmark-48-filled',
        color: { light: 'rgba(20, 255, 150, 1)', dark: 'rgba(100, 255, 200, 1)' }
      },
      number: '粤公网安备12345678号',
      rel: 'noopener noreferrer'
    }
  },
  author: {
    icon: {
      light: 'mdi:copyright',
      dark: 'mdi:copyright',
      color: { light: '#999', dark: '#ccc' }
    },
    name: 'Theo',
    link: 'https://theojs.cn',
    rel: 'noopener noreferrer'
  },
  group: [
    {
      icon: {
        light: 'bx:link',
        dark: 'bx:link',
        color: { light: 'rgba(255, 87, 51, 1)', dark: 'rgba(255, 130, 100, 1)' }
      },
      title: '外部链接',
      links: [
        {
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold',
            color: { light: 'rgba(200, 100, 50, 1)', dark: 'rgba(255, 150, 100, 1)' }
          },
          name: '示例1',
          link: 'https://example1.com',
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
      icon: {
        light: 'bx:link',
        dark: 'bx:link',
        color: { light: 'rgba(255, 87, 51, 1)', dark: 'rgba(255, 130, 100, 1)' }
      },
      title: '内部链接',
      links: [
        {
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold',
            color: { light: 'rgba(200, 100, 50, 1)', dark: 'rgba(255, 150, 100, 1)' }
          },
          name: '示例1',
          link: '/docs',
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
