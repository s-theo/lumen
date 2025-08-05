---
title: 链接卡片组件
description: 了解如何使用 @theojs/lumen 插件提供的多种链接卡片组件（ BoxCube, Card, Links, Pill ）在 VitePress 站点中创建美观且信息丰富的链接展示。本指南包含各组件的引入、使用示例和参数说明，支持 Iconify 图标和明暗模式。
---

# 链接卡片组件

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Pill', Pill) // [!code ++]
    app.component('Links', Links) // [!code ++]
    app.component('Card', Card) // [!code ++]
    app.component('BoxCube', BoxCube) // [!code ++]
  } // [!code ++]
}
```

## Pill

**输入**
::: code-group
<<< ../demo/Pill.vue#iconify{vue-html}[Iconify]
<<< ../demo/Pill.vue#svg{vue-html}[svg]
<<< ../demo/Pill.vue#image{vue-html}[image]
:::
**输出**

<!--@include: ../demo/Pill.vue#iconify-->

<!--@include: ../demo/Pill.vue#svg-->

<!--@include: ../demo/Pill.vue#image-->

### 参数说明

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `name`   | `string`     | 名称，作为显示文本。                                                                                                                   | <Badge text="必填" /> |
| `link`   | `LinkType`   | 链接地址，可为外部 URL 或站内路径。                                                                                                    | <Badge text="可选" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `size`   | `SizeType`   | 控制图片或者图标的`width`和`height` 默认值为 `14`                                                                                      | <Badge text="可选" /> |

## Links

**输入**
::: code-group
<<< ../demo/Links.vue#iconify{vue-html}[Iconify]
<<< ../demo/Links.vue#svg{vue-html}[svg]
<<< ../demo/Links.vue#image{vue-html}[image]
:::

**输出**

<!--@include: ../demo/Links.vue#iconify-->
<!--@include: ../demo/Links.vue#svg-->
<!--@include: ../demo/Links.vue#image-->

### 参数说明

| 字段       | 类型         | 描述                                                                                                                                   | 是否必填              |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`     | `number`     | 网格列数。默认为单列，传入数字如 `3`、`4` 可指定多列。                                                                                 | <Badge text="可选" /> |
| `name`     | `string`     | 名称，作为显示文本。                                                                                                                   | <Badge text="必填" /> |
| `desc`     | `string`     | 描述文本，用于补充说明信息。                                                                                                           | <Badge text="可选" /> |
| `link`     | `LinkType`   | 链接地址，支持站内路径或外部 URL。                                                                                                     | <Badge text="可选" /> |
| `linkText` | `string`     | 链接地址的描述文本                                                                                                                     | <Badge text="可选" /> |
| `rel`      | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target`   | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`     | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`    | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `size`     | `SizeType`   | 控制图片或者图标的`width`和`height` 默认值为 `32`                                                                                      | <Badge text="可选" /> |

## BoxCube

**输入**
::: code-group
<<< ../demo/BoxCube.vue#iconify{vue-html}[Iconify]
<<< ../demo/BoxCube.vue#svg{vue-html}[svg]
<<< ../demo/BoxCube.vue#image{vue-html}[image]
:::

**输出**

<!--@include: ../demo/BoxCube.vue#iconify-->
<!--@include: ../demo/BoxCube.vue#svg-->
<!--@include: ../demo/BoxCube.vue#image-->

### 参数说明

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`   | `number`     | 网格列数。默认为 `6` 列，传入数字如 `3`、`4` 可指定多列。                                                                              | <Badge text="可选" /> |
| `name`   | `string`     | 名称，作为显示文本。                                                                                                                   | <Badge text="必填" /> |
| `link`   | `LinkType`   | 链接地址，支持站内路径或外部 URL。                                                                                                     | <Badge text="可选" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `size`   | `SizeType`   | 控制图片或者图标的`width`和`height` 默认值为 `32`                                                                                      | <Badge text="可选" /> |

## Card

**输入**

::: code-group
<<< ../demo/Card.vue#iconify{vue-html}[Iconify]
<<< ../demo/Card.vue#svg{vue-html}[svg]
<<< ../demo/Card.vue#image{vue-html}[image]
:::
**输出**

<!--@include: ../demo/Card.vue#iconify-->
<!--@include: ../demo/Card.vue#svg-->
<!--@include: ../demo/Card.vue#image-->

### 参数说明

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `grid`   | `number`     | 网格列数。默认为 `4` 列，传入数字如 `2`、`3` 可指定多列。                                                                              | <Badge text="可选" /> |
| `name`   | `string`     | 名称，作为显示文本。                                                                                                                   | <Badge text="可选" /> |
| `desc`   | `string`     | 描述文本，用于补充说明信息。                                                                                                           | <Badge text="可选" /> |
| `link`   | `LinkType`   | 链接地址，支持站内路径或外部 URL。                                                                                                     | <Badge text="可选" /> |
| `rel`    | `RelType`    | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪。详情查看 [ImageType](#ImageType)                                                     | <Badge text="可选" /> |
| `size`   | `SizeType`   | 控制图片或者图标的`width`和`height` 默认值为 `48`                                                                                      | <Badge text="可选" /> |

<!--@include: ../demo/type.md-->
