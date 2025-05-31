import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  i18n: {
    root: {
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
        }
      }
      // ...其他项省略
    },
    en: {
      beian: {
        showIcon: true,
        icp: {
          number: 'ICP 12345678',
          icon: {
            light: 'fluent:globe-shield-48-filled',
            dark: 'fluent:globe-shield-48-filled'
          },
          color: {
            light: 'rgba(20, 150, 255, 1)',
            dark: 'rgba(100, 200, 255, 1)'
          },
          alt: 'ICP License Icon',
          rel: 'noopener noreferrer'
        }
      }
      // ...其他项省略
    }
  }
}
