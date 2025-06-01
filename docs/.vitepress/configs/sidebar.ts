import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

export const sidebar: DefaultTheme.SidebarMulti = {
  '/guide/': { base: '/guide/', items: guide() }
}

export function guide(): SidebarItem[] {
  return [
    {
      // text: '快速开始',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch-solid" style="color:#20c997"></iconify-icon>快速开始',
          link: 'getting-started'
        }
      ]
    },
    {
      text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver-solid" style="color:#3498db"></iconify-icon>配置',
      items: [
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece-solid" style="color:#ff9800"></iconify-icon>导入主题',
          link: 'theme'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:megaphone" style="color:#e74c3c"></iconify-icon>首页公告栏',
          link: 'announcement'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:paint-brush-solid" style="color:#3498db"></iconify-icon>首页下划线',
          link: 'homeunderline'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:template" style="color:#2ecc71"></iconify-icon>页脚配置',
          link: 'homefooter'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:bars-3-16-solid" style="color:#9b59b6"></iconify-icon>侧边栏链接',
          link: 'docasidelogo'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:video-camera" style="color:#f39c12"></iconify-icon>视频组件',
          link: 'docvideolink'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:rectangle-group" style="color:#1abc9c"></iconify-icon>链接卡片',
          link: 'linkcard'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:photo" style="color:#2ecc71"></iconify-icon>图片描述',
          link: 'image-description'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons-solid:chat" style="color:#3498db"></iconify-icon>集成评论',
          link: 'doccomment'
        },
        {
          text: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square-solid" style="color:#007bff"></iconify-icon>站点统计',
          link: 'analytics'
        }
      ]
    }
  ]
}
