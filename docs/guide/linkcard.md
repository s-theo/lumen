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

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `name`   | `string`     | Pill 名称，作为显示文本。                                                                                                              | <Badge text="必填" /> |
| `link`   | `LinkType`   | Pill 链接地址，可为外部 URL 或站内路径。                                                                                               | <Badge text="可选" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `alt`    | `AltType`    | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                 | <Badge text="可选" /> |

## Links

**输入**
::: code-group
<<< ./example/Links.vue[默认]
<<< ./example/Links-grid-2.vue[自定义 2 列]
<<< ./example/Links-grid-3.vue[自定义 3 列]
:::

**输出**

<!--@include: ./example/Links.vue-->
<!--@include: ./example/Links-grid-2.vue-->
<!--@include: ./example/Links-grid-3.vue-->

### 参数说明

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`   | `number`     | 网格列数。默认为单列，传入数字如 `3`、`4` 可指定多列。                                                                                 | <Badge text="可选" /> |
| `name`   | `string`     | DocLinks 名称，作为显示文本。                                                                                                          | <Badge text="必填" /> |
| `desc`   | `string`     | DocLinks 描述文本，用于补充说明信息。                                                                                                  | <Badge text="可选" /> |
| `link`   | `LinkType`   | DocLinks 链接地址，支持站内路径或外部 URL。                                                                                            | <Badge text="必填" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `alt`    | `AltType`    | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                 | <Badge text="可选" /> |

## BoxCube

**输入**

<<< ./example/BoxCube.vue

**输出**

<!--@include: ./example/BoxCube.vue-->

## 参数说明

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`   | `number`     | 网格列数。默认为 `6` 列，传入数字如 `3`、`4` 可指定多列。                                                                              | <Badge text="可选" /> |
| `name`   | `string`     | BoxCube 名称，作为显示文本。                                                                                                           | <Badge text="必填" /> |
| `link`   | `LinkType`   | BoxCube 链接地址，支持站内路径或外部 URL。                                                                                             | <Badge text="必填" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `alt`    | `AltType`    | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                 | <Badge text="可选" /> |

## Card

**输入**

::: code-group
<<< ./example/Card.vue[默认]
<<< ./example/Card-grid-2.vue[自定义 2 列]
:::
**输出**

<!--@include: ./example/Card.vue-->
<!--@include: ./example/Card-grid-2.vue-->

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`   | `number`     | 网格列数。默认为 `4` 列，传入数字如 `2`、`3` 可指定多列。                                                                              | <Badge text="可选" /> |
| `name`   | `string`     | DocCard 名称，作为显示文本。                                                                                                           | <Badge text="必填" /> |
| `desc`   | `string`     | DocCard 描述文本，用于补充说明信息。                                                                                                   | <Badge text="可选" /> |
| `link`   | `LinkType`   | DocCard 链接地址，支持站内路径或外部 URL。                                                                                             | <Badge text="必填" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `size`   | `SizeType`   | 控制图片或者图标的的尺寸 默认为 `width="64" height="64"       `                                                                        |                       |
| `alt`    | `AltType`    | 图标或图片的无障碍文本描述，建议提供以支持屏幕阅读器。                                                                                 | <Badge text="可选" /> |

<!--@include: ./type.md-->
