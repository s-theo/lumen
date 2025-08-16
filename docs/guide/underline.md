---
title: 首页下划线组件 - Underline
description: 学习如何使用 @theojs/lumen 插件的 Underline 组件，为 VitePress 网站首页的hero区域标题文本添加美观的动态下划线效果。本指南包含组件引入、属性配置及在首页布局中使用的详细步骤，提升首页视觉吸引力和用户体验。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/homeunderline-light.webp
---

# 首页下划线组件 - Underline

![首页下划线 - 效果图|688x0](https://i.theojs.cn/docs/homeunderline-light.webp#light '首页下划线 - 效果图')

![首页下划线 - 效果图|688x0](https://i.theojs.cn/docs/homeunderline-dark.webp#dark '首页下划线 - 效果图')

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { Underline } from '@theojs/lumen'

export default {
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    app.component('Home', Underline)
  } // [!code ++]
}
```

## 使用示例

在首页的 Markdown 文件（如 `.vitepress/index.md`）中，通过设置 `layout: home` 使用首页布局，并在 `hero` 区域中配置标题文本，同时在页面内容中插入 `<Home />` 组件渲染带有动态下划线效果的标题

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: Enhanced # [!code ++] 副标题文本前半部分，下划线会作用于这里
  textsuffix: Theme # [!code ++] 副标题文本后半部分
  tagline: ✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库
---
<Home /> # [!code ++]
```

## 接口数据说明

| 属性名       | 说明                                 |
| ------------ | ------------------------------------ |
| `text`       | 副标题文本的前半部分（**带下划线**） |
| `textsuffix` | 副标题文本的后半部分                 |
