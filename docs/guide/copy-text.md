---
title: 复制按钮组件 - CopyText
description: 了解如何使用 @theojs/lumen 的 CopyText 组件来实现点击复制文本功能。该组件支持自定义图标、提示信息和位置，适用于各种场景，如代码片段、链接等。
---

# 复制按钮组件 - CopyText

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
// [!code ++]
import { CopyText } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Copy', CopyText) // [!code ++]
  } // [!code ++]
}
```

## 使用示例

**输入**

<<< ./example/CopyText.vue{vue-html}

**输出**

<!--@include: ./example/CopyText.vue-->

## 数据接口说明

|   字段   | 类型                                     | 说明                                                                                  | 是否必填              |
| :------: | ---------------------------------------- | ------------------------------------------------------------------------------------- | --------------------- |
|  `text`  | `string`                                 | 要复制的文本内容                                                                      | <Badge text="必填" /> |
|  `tip`   | `string`                                 | 复制成功后显示的提示文本，默认值：`已复制`                                            | <Badge text="可选" /> |
| `noIcon` | `boolean`                                | 是否不显示图标，默认值：`false`                                                       | <Badge text="可选" /> |
|  `icon`  | `IconType`                               | 按钮的图标，默认值：`heroicons-solid:clipboard-copy` 。详情查看 [IconType](#IconType) | <Badge text="可选" /> |
| `image`  | `ImageType`                              | 按钮的图片 。详情查看 [ImageType](#ImageType)                                         | <Badge text="可选" /> |
| `tipPos` | `'top' \| 'bottom' \| 'left' \| 'right'` | 提示显示的位置，默认值：`top`                                                         | <Badge text="可选" /> |

<!--@include: ./type.md-->
