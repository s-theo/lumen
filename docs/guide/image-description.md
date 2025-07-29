---
title: 图片描述 - Markdown 图片标题
description: 了解如何在 VitePress 中为图片添加描述或figcaption。本指南将引导你安装和配置 @mdit/plugin-figure 插件，并应用 @theojs/lumen 的样式，以支持图片标题和在明暗模式下显示不同的图片。
---

# 图片描述 - Markdown 图片标题

![效果图|200x0](https://i.theojs.cn/logo/lumen-logo-large.svg '效果图')

## 安装 `@mdit/plugin-figure` 插件

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
// [!code ++]
import { figure } from '@mdit/plugin-figure'

export default defineConfig({
  // [!code ++]
  markdown: {
    // [!code ++]
    config: (md) => {
      // [!code ++]
      md.use(figure)
    } // [!code ++]
  } // [!code ++]
})
```

## 导入主题

::: code-group

```ts [全量导入]
// theme/index.ts
import '@theojs/lumen/style'
```

```ts [单独导入]
// theme/index.ts
import '@theojs/lumen/pic'
```

:::

### 也可以单独添加样式

<<< @/../src/style/picture.css

## 使用示例

```md
![效果图](https://i.theojs.cn/logo/lumen-logo-mini.svg)

![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
```

![效果图](https://i.theojs.cn/logo/lumen-logo-mini.svg)

![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
