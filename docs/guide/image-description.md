---
title: 图片描述
head:
  - - meta
    - name: description
      content: 了解如何在 VitePress 中为图片添加描述或figcaption。本指南将引导你安装和配置 @mdit/plugin-figure 插件，并应用 @theojs/lumen 的样式，以支持图片标题和在明暗模式下显示不同的图片。
  - - meta
    - name: keywords
      content: VitePress 图片描述 Markdown 图片标题 figcaption @mdit/plugin-figure @theojs/lumen 图片样式 CSS light/dark模式 明暗模式 图片配置 theojs VitePress插件 图片注解
---

![效果图|300x0](/Logo.webp '效果图')

## 安装 @mdit/plugin-figure 插件

::: code-group

```sh [pnpm]
pnpm add -D @mdit/plugin-figure
```

```sh [npm]
npm install -D @mdit/plugin-figure

```

```sh [yarn]
yarn add -D @mdit/plugin-figure
```

:::

## 配置插件选项

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

import { figure } from '@mdit/plugin-figure' // [!code ++]

export default defineConfig({
  markdown: { // [!code ++]
    config: (md) => { // [!code ++]
      md.use(figure) // [!code ++]
    } // [!code ++]
  } // [!code ++]
  ...
})
```

## 导入主题

::: code-group

```ts [所有主题]
// theme/index.ts
import '@theojs/lumen/theme'
```

```ts [单独导入]
// theme/index.ts
import '@theojs/lumen/pic'
```

:::

### 也可以单独添加样式

<<< @/../src/theme/picture.css

## 使用

```md
![效果图](/Logo.webp)

![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

![效果图](/Logo.webp)

![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
