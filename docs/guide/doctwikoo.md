---
title: Twikoo 评论组件 - Twikoo
head:
  - - meta
    - name: description
      content: 了解如何通过 @theojs/lumen 插件将 Twikoo 评论系统集成到你的 VitePress 网站中。本指南包括数据配置、组件引入以及在文档页和首页启用评论功能的步骤，帮助你轻松为站点添加互动评论区。
  - - meta
    - name: keywords
      content: VitePress Twikoo 评论系统 @theojs/lumen Lumen Vue组件 主题插件 静态网站评论 博客评论 theojs VitePress插件 评论集成 互动评论
---

# Twikoo 评论组件 - Twikoo

<Links
  :items="[
    {
      name: '如何部署请查看 Twikoo 文档',
      image: 'https://twikoo.js.org/twikoo-logo-home.png',
      desc: '一个简洁、安全、免费的静态网站评论系统。',
      link: 'https://twikoo.js.org/quick-start.html',
      alt: 'twikoo icon'
    }
  ]"
/>

## 创建数据

在 `.vitepress/data/Twikoo.ts` 文件中创建评论配置：

```ts [.vitepress/data/Twikoo.ts]
import type { TwikooData } from '@theojs/lumen'

export const Twikoo_Data: TwikooData = {
  envId: 'https://xxxxxx' // 替换为你的 Twikoo 服务地址
}
```

## `TwikooData` 接口说明

| 字段    | 类型     | 描述                                   | 是否必填              |
| ------- | -------- | -------------------------------------- | --------------------- |
| `envId` | `string` | Twikoo 的环境 ID，通常是你的服务地址。 | <Badge text="必填" /> |

## 引入评论组件

### 文档页面使用

在 `.vitepress/theme/index.ts` 中注册组件并插入评论区域

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue' // [!code ++]
import { Twikoo } from '@theojs/lumen' // [!code ++]
import { Twikoo_Data } from '../data' // [!code ++] 或指定你存放数据的路径

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'doc-after': () => h(Twikoo, { Twikoo_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

### 在首页使用

你也可以在首页直接挂载 `Twikoo` 组件：

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // [!code ++]

import { Twikoo } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('Twikoo', Twikoo) // [!code ++]
  } // [!code ++]
  ...
}
```

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---

# 修改成部署的Twikoo地址
<Twikoo :Twikoo_Data="{ envId: 'https://xxxxxx'  }" />
```
