---
title: 快速开始
description: 快速了解如何安装和开始使用 @theojs/lumen 插件。本指南提供 pnpm、npm 和 yarn 安装命令，并概述主题导入、首页定制和内容组件等核心功能模块。
---

# 快速开始

## 安装

你可以通过以下三种包管理器安装 `@theojs/lumen` 插件，选择你熟悉的方式即可

::: code-group

```sh [pnpm]
pnpm add @theojs/lumen
```

```sh [npm]
npm install @theojs/lumen
```

```sh [yarn]
yarn add @theojs/lumen
```

:::

## 最小配置

在 `.vitepress/theme/index.ts` 中继承 VitePress 默认主题、导入 Lumen 样式，并注册需要使用的组件：

```ts [.vitepress/theme/index.ts]
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Pill } from '@theojs/lumen'
import '@theojs/lumen/style'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('Pill', Pill)
  }
}
```

注册后即可在任意 Markdown 页面中使用：

```vue-html
<Pill icon="simple-icons:vitepress" name="VitePress" link="https://vitepress.dev/" />
```

::: warning 仅传入可信内容
部分组件的 `name`、`desc`、`title`、`label` 等字段以及 `IconType.svg` 会作为 HTML 渲染。请只传入可信的静态配置；若内容来自用户或外部接口，请先进行安全过滤，避免 XSS 风险。
:::

## 主要功能模块导航

以下是 `@theojs/lumen` 插件的核心功能模块入口，点击即可查看详细配置和用法

<BoxCube
  :items="[
    { icon: { icon: 'heroicons:puzzle-piece', color: '#ff9800' }, name: '导入主题', link: '/guide/theme' },
    { icon: { icon: 'heroicons:megaphone', color: '#e74c3c' }, name: '首页公告栏', link: '/guide/notice' },
    { icon: { icon: 'heroicons:paint-brush', color: '#3498db' }, name: '首页下划线', link: '/guide/underline' },
    { icon: { icon: 'heroicons-outline:template', color: '#2ecc71' }, name: '页脚配置', link: '/guide/footer' },
    { icon: { icon: 'heroicons:bars-3', color: '#9b59b6' }, name: '侧边栏链接', link: '/guide/aside' },
    { icon: { icon: 'heroicons:rectangle-group', color: '#1abc9c' }, name: '链接卡片', link: '/guide/linkcard' },
    { icon: { icon: 'heroicons:photo', color: '#2ecc71' }, name: '图片描述', link: '/guide/image-description' },
    { icon: { icon: 'heroicons:chart-bar-square', color: '#007bff' }, name: '站点统计', link: '/guide/analytics' },
    { icon: { icon: 'heroicons-outline:clipboard-copy', color: '#20c997' }, name: '复制按钮', link: '/guide/copy-text' }
  ]"
/>
