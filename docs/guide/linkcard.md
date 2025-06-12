---
title: 链接卡片组件
description: 了解如何使用 @theojs/lumen 插件提供的多种链接卡片组件（Pill, Links, BoxCube）在 VitePress 站点中创建美观且信息丰富的链接展示。本指南包含各组件的引入、使用示例和参数说明，支持 Iconify 图标和明暗模式。
---

# 链接卡片组件

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Pill', DocPill) // [!code ++]
    app.component('Links', DocLinks) // [!code ++]
    app.component('BoxCube', DocBoxCube) // [!code ++]
  } // [!code ++]
}
```

## Pill

**输入**

<<< ./example/Pill.vue{vue-html}

**输出**

<!--@include: ./example/Pill.vue-->

### 参数说明

| 字段    | 类型            | 描述                                                                                                                                                                                                                                                                 | 是否必填              |
| ------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `name`  | `string`        | Pill 名称，作为显示文本。                                                                                                                                                                                                                                            | <Badge text="必填" /> |
| `link`  | `string`        | Pill 链接地址，可为外部 URL 或站内路径。                                                                                                                                                                                                                             | <Badge text="可选" /> |
| `icon`  | `IconImageType` | 链接前的图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，支持深浅色模式。如：`{ light: 'solar:book-bold', dark: 'solar:book-bold' }`。 **优先级高于 image**。 | <Badge text="可选" /> |
| `color` | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，也支持深浅色分别设置。如：`{ light: '#666', dark: '#ccc' }` 或 `'rgba(255, 87, 51, 1)'`。                                                                                                                                | <Badge text="可选" /> |
| `image` | `IconImageType` | 链接前的图片，支持普通图片地址或 `{ light, dark }` 模式。例如：`'https://example.com/icon.webp'` 或 `{ light: 'xxx-light.svg', dark: 'xxx-dark.svg' }`。                                                                                                             | <Badge text="可选" /> |
| `alt`   | `string`        | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                                                                                                                                               | <Badge text="可选" /> |
| `rel`   | `string`        | 链接的 `rel` 属性，常用于安全性或 SEO，如 `noopener noreferrer`。                                                                                                                                                                                                    | <Badge text="可选" /> |

## Links

**输入**
::: code-group
<<< ./example/Links.vue[单列.vue]
<<< ./example/Links-grid.vue[双列.vue]
:::

**输出**

<!--@include: ./example/Links.vue-->
<!--@include: ./example/Links-grid.vue-->

### 参数说明

| 字段    | 类型                | 描述                                                                                                                                                                                                                                                                | 是否必填              |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`  | `boolean \| number` | 是否使用网格布局。`true` 为两列，传入数字如 `3`、`4` 可指定多列。                                                                                                                                                                                                   | <Badge text="可选" /> |
| `name`  | `string`            | DocLinks 名称，作为显示文本。                                                                                                                                                                                                                                       | <Badge text="必填" /> |
| `desc`  | `string`            | DocLinks 描述文本，用于补充说明信息。                                                                                                                                                                                                                               | <Badge text="可选" /> |
| `link`  | `string`            | DocLinks 链接地址，支持站内路径或外部 URL。                                                                                                                                                                                                                         | <Badge text="必填" /> |
| `icon`  | `IconImageType`     | 链接前的图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，支持深浅色模式。如：`{ light: 'solar:book-bold', dark: 'solar:book-bold' }`。 **优先级高于image**。 | <Badge text="可选" /> |
| `color` | `IconImageType`     | 图标颜色或样式，支持十六进制或 rgba 颜色值，也支持深浅色分别设置。如：`{ light: '#666', dark: '#ccc' }` 或 `'rgba(255, 87, 51, 1)'`。                                                                                                                               | <Badge text="可选" /> |
| `image` | `IconImageType`     | 链接前的图片，支持普通图片地址或 `{ light, dark }` 模式。例如：`'https://example.com/icon.webp'` 或 `{ light: 'xxx-light.svg', dark: 'xxx-dark.svg' }`。                                                                                                            | <Badge text="可选" /> |
| `alt`   | `string`            | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                                                                                                                                              | <Badge text="可选" /> |
| `rel`   | `string`            | 链接的 `rel` 属性，常用于安全性或 SEO，如 `noopener noreferrer`。                                                                                                                                                                                                   | <Badge text="可选" /> |

## BoxCube

**输入**

<<< ./example/BoxCube.vue

**输出**

<!--@include: ./example/BoxCube.vue-->

## 参数说明

| 字段    | 类型            | 描述                                                                                                                                                                                                                                                                | 是否必填              |
| ------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`  | `number`        | 网格列数。默认为 `6` 列，传入数字如 `3`、`4` 可指定多列。                                                                                                                                                                                                           | <Badge text="可选" /> |
| `name`  | `string`        | BoxCube 名称，作为显示文本。                                                                                                                                                                                                                                        | <Badge text="必填" /> |
| `link`  | `string`        | BoxCube 链接地址，支持站内路径或外部 URL。                                                                                                                                                                                                                          | <Badge text="必填" /> |
| `icon`  | `IconImageType` | 链接前的图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，支持深浅色模式。如：`{ light: 'solar:book-bold', dark: 'solar:book-bold' }`。 **优先级高于image**。 | <Badge text="可选" /> |
| `color` | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，也支持深浅色分别设置。如：`{ light: '#666', dark: '#ccc' }` 或 `'rgba(255, 87, 51, 1)'`。                                                                                                                               | <Badge text="可选" /> |
| `image` | `IconImageType` | 链接前的图片，支持普通图片地址或 `{ light, dark }` 模式。例如：`'https://example.com/icon.webp'` 或 `{ light: 'xxx-light.svg', dark: 'xxx-dark.svg' }`。                                                                                                            | <Badge text="可选" /> |
| `alt`   | `string`        | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                                                                                                                                              | <Badge text="可选" /> |
| `rel`   | `string`        | 链接的 `rel` 属性，常用于安全性或 SEO，如 `noopener noreferrer`。                                                                                                                                                                                                   | <Badge text="可选" /> |
