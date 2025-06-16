---
title: 侧边栏链接组件 - DocAsideLogo
description: 学习如何使用 @theojs/lumen 插件的 DocAsideLogo 组件，在 VitePress 站点的侧边栏添加自定义链接、推广信息或品牌Logo。本指南将引导你配置数据并集成组件，以丰富侧边栏内容和提升用户体验。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/docasidelogo-light.webp
---

# 侧边栏链接组件 - DocAsideLogo

![侧边栏 - 效果图|300x0](https://i.theojs.cn/docs/docasidelogo-light.webp#light '侧边栏 - 效果图')

![侧边栏 - 效果图|300x0](https://i.theojs.cn/docs/docasidelogo-dark.webp#dark '侧边栏 - 效果图')

## 创建数据

在 `.vitepress` 目录下新建 `data/AsideData.ts` 文件，并添加以下内容：
::: details 点开查看
<<< ./example/AsideData.ts
:::
或者支持 `i18n`
::: details 点开查看
<<< ./example/AsideData_i18n.ts
:::

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { DocAsideLogo } from '@theojs/lumen'

// [!code ++]
import { Aside_Data } from '../data/AsideData'

export default {
  extends: DefaultTheme,
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data })
    }) // [!code ++]
  } // [!code ++]
}
```

## 数据接口说明

### Promo

| 字段     | 类型            | 描述                                                                                                                                   | 是否必填              |
| -------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `promo`  | `string`        | 活动标题，例如：`"限时折扣"`。                                                                                                         | <Badge text="必填" /> |
| `link`   | `LinkType`      | 跳转链接，支持外部或内部地址。                                                                                                         | <Badge text="必填" /> |
| `rel`    | `RelType`       | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconImageType` | 图标（支持 iconify，或深浅模式图标）。                                                                                                 | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色（支持纯色字符串或 `{ light, dark }` 格式）。                                                                                  | <Badge text="可选" /> |
| `image`  | `IconImageType` | 图片资源（支持普通地址或 `{ light, dark }` 图像）。                                                                                    | <Badge text="可选" /> |
| `crop`   | `CropType`      | 图片是否裁剪为正方形。为 `true` 时图片将使用 `aspect-ratio: 1 / 1` 和 `object-fit: cover` 裁剪显示。                                   | <Badge text="可选" /> |
| `info1`  | `string`        | 附加信息 1，例如：`"新用户立减 5 元"`。                                                                                                | <Badge text="可选" /> |
| `info2`  | `string`        | 附加信息 2，例如：`"优惠截止至 6 月 30 日"`。                                                                                          | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图片或图标的替代文本，有助于无障碍访问。                                                                                               | <Badge text="可选" /> |

### Normal

| 字段     | 类型            | 描述                                                                                                                                   | 是否必填              |
| -------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `name`   | `string`        | 显示名称，例如：`"哔哩哔哩"`。                                                                                                         | <Badge text="必填" /> |
| `link`   | `LinkType`      | 跳转链接，支持外部或内部地址。                                                                                                         | <Badge text="必填" /> |
| `rel`    | `RelType`       | 链接的 `rel` 属性，建议设置为 `noopener noreferrer` 以增强安全性。                                                                     | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `icon`   | `IconImageType` | 图标（支持 iconify，或深浅模式图标）。                                                                                                 | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色（支持纯色字符串或 `{ light, dark }` 格式）。                                                                                  | <Badge text="可选" /> |
| `image`  | `IconImageType` | 图片资源（支持普通地址或 `{ light, dark }` 图像）。                                                                                    | <Badge text="可选" /> |
| `crop`   | `CropType`      | 图片是否裁剪为正方形。为 `true` 时图片将使用 `aspect-ratio: 1 / 1` 和 `object-fit: cover` 裁剪显示。                                   | <Badge text="可选" /> |
| `hide1`  | `string`        | 隐藏信息 1，悬停时显示。例如：`"仅限中国大陆用户"`。                                                                                   | <Badge text="可选" /> |
| `hide2`  | `string`        | 隐藏信息 2，用于补充额外提示。例如：`"每日限量 500 名"`。                                                                              | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图片或图标的替代文本，有助于无障碍访问。                                                                                               | <Badge text="可选" /> |

### AsidePromo

| 字段   | 类型                                                | 描述                                                                    | 是否必填              |
| ------ | --------------------------------------------------- | ----------------------------------------------------------------------- | --------------------- |
| ...    | 同 `Promo` 接口                                     | 同上，字段不再赘述。                                                    | -                     |
| `i18n` | `Partial<Record<string, Omit<AsidePromo, 'i18n'>>>` | 可选的多语言翻译字段（键为语言代码，如 `zh`、`en`），排除自身递归结构。 | <Badge text="可选" /> |

### AsideNormal

| 字段   | 类型                                                 | 描述                                                                    | 是否必填              |
| ------ | ---------------------------------------------------- | ----------------------------------------------------------------------- | --------------------- |
| ...    | 同 `Normal` 接口                                     | 同上，字段不再赘述。                                                    | -                     |
| `i18n` | `Partial<Record<string, Omit<AsideNormal, 'i18n'>>>` | 可选的多语言翻译字段（键为语言代码，如 `zh`、`en`），排除自身递归结构。 | <Badge text="可选" /> |

### AsideAll

| 类型          | 描述                                                     |
| ------------- | -------------------------------------------------------- |
| `AsidePromo`  | 表示带有推广性质的活动类型，含 `promo`、`info1` 等字段。 |
| `AsideNormal` | 表示普通展示项，仅有 `name`、`link` 等基本信息字段。     |

### AsideItem

| 结构形式   | 类型                                   | 描述                                                                                |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| 单语言结构 | `AsideAll[]`                           | 直接使用 `AsidePromo` 或 `AsideNormal` 组成的数组。                                 |
| 多语言结构 | `{ i18n: Record<string, AsideAll[]> }` | 使用 `i18n` 包裹的对象，不同语言对应不同数组，如 `{ i18n: { root: [], en: [] } }`。 |
