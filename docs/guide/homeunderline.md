---
title: 首页下划线
head:
  - - meta
    - name: description
      content: 学习如何使用 @theojs/lumen 插件的 HomeUnderline 组件，为 VitePress 网站首页的英雄区标题文本添加美观的动态下划线效果。本指南包含组件引入和在首页布局中使用的简单步骤，增强视觉吸引力。
  - - meta
    - name: keywords
      content: VitePress 首页下划线 @theojs/lumen Lumen HomeUnderline 动态下划线 首页美化 标题效果 主题插件 theojs VitePress插件 Hero美化 文本装饰
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/homeunderline-light.webp
---

![首页下划线 - 效果图](https://i.theojs.cn/docs/homeunderline-light.webp#light '首页下划线 - 效果图')

![首页下划线 - 效果图](https://i.theojs.cn/docs/homeunderline-dark.webp#dark '首页下划线 - 效果图')

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { HomeUnderline } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('Home', HomeUnderline) // [!code ++]
  } // [!code ++]
  ...
}
```

## 使用

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced ' # [!code ++]
  textsuffix: 'Theme' # [!code ++]
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---
<Home /> # [!code ++]
```
