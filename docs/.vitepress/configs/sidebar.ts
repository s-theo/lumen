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
          text: '<iconify-icon icon="heroicons:rocket-launch-solid" style="margin-right:0.25em;color:#20c997;"></iconify-icon>快速开始',
          link: 'getting-started'
        }
      ]
    },
    {
      text: '<iconify-icon icon="heroicons:wrench-screwdriver-solid" style="margin-right:0.25em;color:#3498db;"></iconify-icon>配置',
      items: [
        {
          text: '<iconify-icon icon="heroicons:puzzle-piece-solid" style="margin-right:0.25em;color:#ff9800;"></iconify-icon>导入主题',
          link: 'theme'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:megaphone" style="margin-right:0.25em;color:#e74c3c;"></iconify-icon>首页公告栏',
          link: 'announcement'
        },
        {
          text: '<iconify-icon icon="heroicons:paint-brush-solid" style="margin-right:0.25em;color:#3498db;"></iconify-icon>首页下划线',
          link: 'homeunderline'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:template" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>页脚配置',
          link: 'homefooter'
        },
        {
          text: '<iconify-icon icon="heroicons:bars-3-16-solid" style="margin-right:0.25em;color:#9b59b6;"></iconify-icon>侧边栏链接',
          link: 'docasidelogo'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:video-camera" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>视频组件',
          link: 'docvideolink'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:rectangle-group" style="margin-right:0.25em;color:#1abc9c;"></iconify-icon>链接卡片',
          link: 'linkcard'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:share" style="margin-right:0.25em;color:#007bff;"></iconify-icon>页面分享按钮',
          link: 'sharebutton'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:photo" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>图片描述',
          link: 'image-description'
        },
        {
          text: '<iconify-icon icon="heroicons-solid:chat" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Twikoo 评论',
          link: 'doctwikoo'
        },
        {
          text: '<iconify-icon icon="heroicons:chart-bar-square-solid" style="margin-right:0.25em;color:#007bff;"></iconify-icon>站点统计',
          link: 'analytics'
        }
      ]
    }
  ]
}
