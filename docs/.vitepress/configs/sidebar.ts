import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

export const sidebar: DefaultTheme.SidebarMulti = {
  '/guide/': guide()
}

export function guide(): SidebarItem[] {
  return [
    {
      // text: '快速开始',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch" style="color:#20c997"></iconify-icon>快速开始',
          link: '/guide/getting-started'
        }
      ]
    },
    {
      text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver" style="color:#3498db"></iconify-icon>配置',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece" style="color:#ff9800"></iconify-icon>导入主题',
          link: '/guide/theme'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:megaphone" style="color:#e74c3c"></iconify-icon>首页公告栏',
          link: '/guide/notice'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:paint-brush" style="color:#3498db"></iconify-icon>首页下划线',
          link: '/guide/underline'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:template" style="color:#2ecc71"></iconify-icon>页脚配置',
          link: '/guide/footer'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:bars-3" style="color:#9b59b6"></iconify-icon>侧边栏链接',
          link: '/guide/aside'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:rectangle-group" style="color:#1abc9c"></iconify-icon>链接卡片',
          link: '/guide/linkcard'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:photo" style="color:#2ecc71"></iconify-icon>图片描述',
          link: '/guide/image-description'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:chat" style="color:#3498db"></iconify-icon>集成评论',
          link: '/guide/comment'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square" style="color:#007bff"></iconify-icon>站点统计',
          link: '/guide/analytics'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-outline:clipboard-copy" style="color:#20c997"></iconify-icon>复制按钮',
          link: '/guide/copy-text'
        }
      ]
    }
  ]
}
