---
title: 页面分享按钮组件 - ShareButton
head:
  - - meta
    - name: description
      content: 了解如何在 VitePress 站点中集成 @theojs/lumen 插件提供的页面分享按钮 (ShareButton)。本指南包括组件引入、自定义按钮图标与文本，以及参数说明，方便用户快速复制和分享页面链接。
  - - meta
    - name: keywords
      content: VitePress 页面分享 分享按钮 @theojs/lumen Lumen ShareButton 复制链接 剪贴板 Iconify theojs VitePress插件 社交分享 链接分享 用户体验
---

# 页面分享按钮组件 - ShareButton

## 功能概述

- 一键复制当前页面完整链接到剪贴板
- 复制成功时显示反馈状态（图标和文本切换）
- 支持自定义按钮图标、按钮文本及复制成功提示内容
- 使用 Iconify 图标库，方便替换任意图标
- 兼容现代浏览器，自动处理复制失败场景提示
- 可嵌入 VitePress 主题布局的任意位置

## 组件引入

在 `.vitepress/theme/index.ts` 中引入并注册组件，例如将分享按钮插入侧边栏大纲区域：

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme' // [!code ++]
import { h } from 'vue' // [!code ++]

import { ShareButton } from '@theojs/lumen'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'aside-outline-before': () => h(ShareButton) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 自定义按钮文本

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // [!code ++]

import { ShareButton } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'aside-outline-before': () => // [!code ++]
        h(ShareButton, { // [!code ++]
          buttonIcon: 'fa6-solid:share-nodes', // 自定义图标 // [!code ++]
          buttonText: '分享此页面', // 自定义按钮文本 // [!code ++]
          copiedIcon: 'mdi:thumbs-up', // 自定义复制成功后的图标 // [!code ++]
          copiedText: '链接已复制！' // 自定义复制成功后的文本 // [!code ++]
        }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 参数说明

|    参数名    |   类型   | 描述                                                                                                                                                                      |                                 默认值                                 |
| :----------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------: |
| `buttonIcon` | `string` | 按钮图标的类名，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" />。             | `solar:copy-bold` <iconify-icon icon="solar:copy-bold"></iconify-icon> |
| `buttonText` | `string` | 按钮显示的文本。                                                                                                                                                          |                             `复制页面链接`                             |
| `copiedIcon` | `string` | 复制成功后显示的图标的类名，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" />。 |   `mdi:thumbs-up` <iconify-icon icon="mdi:thumbs-up"></iconify-icon>   |
| `copiedText` | `string` | 复制成功后显示的文本。                                                                                                                                                    |                             `链接已复制!`                              |
