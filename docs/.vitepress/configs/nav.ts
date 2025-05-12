import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch-solid" style="color:#20c997"></iconify-icon>快速开始',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver-solid" style="color:#3498db"></iconify-icon>配置',
    link: '/guide/theme'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons-solid:chat-bubble-left-right" style="color:#e74c3c"></iconify-icon>提交反馈',
    link: 'https://github.com/Theo-Messi/lumen/issues'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons-solid:document-magnifying-glass" style="color:#f39c12"></iconify-icon>变更日志',
    link: `https://github.com/Theo-Messi/lumen/releases`
  }
]
