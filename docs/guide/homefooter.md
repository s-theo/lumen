---
title: 页脚组件 - HomeFooter
description: 了解如何使用 @theojs/lumen 插件的 HomeFooter 组件自定义 VitePress 网站的页脚。本指南包含数据配置（链接分组、备案信息、作者）和组件集成步骤，助你打造个性化且信息丰富的网站底部。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/homefooter-desktop-light.webp
---

# 页脚组件 - HomeFooter

![桌面端效果图](https://i.theojs.cn/docs/homefooter-desktop-light.webp#light '桌面端效果图')

![桌面端效果图](https://i.theojs.cn/docs/homefooter-desktop-dark.webp#dark '桌面端效果图')

![移动端效果图|300x0](https://i.theojs.cn/docs/homefooter-mobile-light.webp#light '移动端效果图')

![移动端效果图|300x0](https://i.theojs.cn/docs/homefooter-mobile-dark.webp#dark '移动端效果图')

## 创建数据

在`.vitepress`目录下新建`data/footerData.ts`文件，并添加以下内容：
::: details 点开查看
<<< ./example/FooterData.ts
:::
或者支持 `i18n`
::: details 点开查看
<<< ./example/FooterData_i18n.ts
:::

## 引入组件

::: tip
`.. /data/footerData` 可替换为存放数据的路径
:::

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { HomeFooter } from '@theojs/lumen'

// [!code ++]
import { Footer_Data } from '../data/footerData'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    }) // [!code ++]
  } // [!code ++]
}
```

## 数据接口说明

:::details `IconImageType` 类型说明

```ts
export type IconImageType = string | IconImageMode

export interface IconImageMode {
  /** 浅色模式下的图标和图片 */
  light: string
  /** 深色模式下的图标和图片 */
  dark: string
}
```

`IconImageType` 支持：

- 字符串形式（如 `mdi:home`）
- 对象形式，用于浅色和深色模式的图标或图片分别设置：

```ts
const icon: IconImageType = {
  light: 'mdi:home-outline',
  dark: 'mdi:home'
}
```

:::

### `FooterData` 接口

`FooterData` 是所有组件的顶层接口，包含了以下几个字段：

| 字段     | 类型                                                | 描述                                                                 | 是否必填              |
| -------- | --------------------------------------------------- | -------------------------------------------------------------------- | --------------------- |
| `i18n`   | `Record<string, Partial<Omit<FooterData, 'i18n'>>>` | 多语言数据配置                                                       | <Badge text="可选" /> |
| `group`  | `Group[]`                                           | 链接分组数组，支持多个分组配置，每个分组包含标题、图标、链接等信息。 | <Badge text="可选" /> |
| `beian`  | `Beian`                                             | ICP 备案与公安备案配置，用于展示网站备案合规信息。                   | <Badge text="可选" /> |
| `author` | `Author`                                            | 作者信息展示，包含作者名称、链接与版权图标，常用于页脚归属标识。     | <Badge text="可选" /> |
| `noIcon` | `boolean`                                           | 是否隐藏所有外部链接的外链图标                                       | <Badge text="可选" /> |

### `Group` 接口

`Group` 接口定义了一个链接分组，包括分组的图标、标题及其下的多个链接。

| 字段     | 类型            | 描述                                                                                                                                                                                                                                          | 是否必填              |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `icon`   | `IconImageType` | 分组图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，亦可设置深浅色模式。例如：`icon: { light: 'mdi:home-outline', dark: 'mdi:home' }` | <Badge text="可选" /> |
| `noIcon` | `boolean`       | 是否隐藏该分组下所有外部链接的外链图标                                                                                                                                                                                                        | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，亦可分别设置深浅色。例如：`color: { light: '#666', dark: '#ccc' }` 或 `color: 'rgba(255, 87, 51, 1)'`                                                                                             | <Badge text="可选" /> |
| `title`  | `string`        | 分组标题，将展示为该链接组的名称。                                                                                                                                                                                                            | <Badge text="必填" /> |
| `links`  | `Link[]`        | 分组内的链接数组，参考下方 [Link 接口](#link-接口)。                                                                                                                                                                                          | <Badge text="必填" /> |
| `alt`    | `AltType`       | 图标的无障碍文本描述，供屏幕阅读器使用，建议提供。                                                                                                                                                                                            | <Badge text="可选" /> |

### `Link` 接口

`Link` 接口用于描述具体的链接信息，包括链接的图标、样式、名称、地址及其打开方式。

| 字段     | 类型            | 描述                                                                                                                                                                                                                                                | 是否必填              |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `icon`   | `IconImageType` | 链接前的图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，支持深浅色模式。例如：`icon: { light: 'solar:book-bold', dark: 'solar:book-bold' }` | <Badge text="可选" /> |
| `noIcon` | `boolean`       | 是否隐藏该链接的外部链接图标                                                                                                                                                                                                                        | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，亦可分别设置深浅色。例如：`color: { light: '#666', dark: '#ccc' }` 或 `color: 'rgba(255, 87, 51, 1)'`                                                                                                   | <Badge text="可选" /> |
| `name`   | `string`        | 链接显示的文本。                                                                                                                                                                                                                                    | <Badge text="必填" /> |
| `link`   | `string`        | 链接地址，可为外部 URL 或内部路径，如 `/docs`。                                                                                                                                                                                                     | <Badge text="必填" /> |
| `rel`    | `RelType`       | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                                                                                                                                        | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。                                                                                                              | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图标的无障碍文本描述，供屏幕阅读器使用，建议提供。                                                                                                                                                                                                  | <Badge text="可选" /> |

### `Beian` 接口

`Beian` 接口用于表示备案信息，包括 ICP 备案号、公安备案号以及是否显示备案图标。

| 字段       | 类型      | 描述                                                            | 是否必填              |
| ---------- | --------- | --------------------------------------------------------------- | --------------------- |
| `icp`      | `Icp`     | ICP 备案信息配置。                                              | <Badge text="可选" /> |
| `police`   | `Police`  | 公安备案信息配置。                                              | <Badge text="可选" /> |
| `showIcon` | `boolean` | 是否显示备案图标，默认值为 `false`，开启后将渲染 iconify 图标。 | <Badge text="可选" /> |

#### `Icp` 接口

`Icp` 接口表示 ICP 备案信息。

| 字段     | 类型            | 描述                                                                                                                                                                                                                                                                                    | 是否必填              |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`        | ICP 备案号文本，例如 `粤ICP备88888888号`。                                                                                                                                                                                                                                              | <Badge text="可选" /> |
| `icon`   | `IconImageType` | 图标名称，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，默认 `'fluent:globe-shield-48-filled'`。支持深浅色模式。例如：`icon: { light: 'solar:book-bold', dark: 'solar:book-bold' }` | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，亦可分别设置深浅色。例如：`color: { light: '#666', dark: '#ccc' }` 或 `color: 'rgba(255, 87, 51, 1)'`                                                                                                                                       | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图标的无障碍文本描述，供屏幕阅读器使用，建议提供。                                                                                                                                                                                                                                      | <Badge text="可选" /> |
| `rel`    | `RelType`       | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                                                                                                                                                                            | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。                                                                                                                                                  | <Badge text="可选" /> |

#### `Police` 接口

`Police` 接口表示公安备案信息。

| 字段     | 类型            | 描述                                                                                                                                                                                                                                                                                        | 是否必填              |
| -------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`        | 公安备案号文本，例如 `粤公网安备 88888888888888 号`。                                                                                                                                                                                                                                       | <Badge text="可选" /> |
| `icon`   | `IconImageType` | 图标名称，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，默认 `'fluent:shield-checkmark-48-filled'`，支持深浅色模式。例如：`icon: { light: 'solar:book-bold', dark: 'solar:book-bold' }` | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，亦可分别设置深浅色。例如：`color: { light: '#666', dark: '#ccc' }` 或 `color: 'rgba(255, 87, 51, 1)'`                                                                                                                                           | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图标的无障碍文本描述，供屏幕阅读器使用，建议提供。                                                                                                                                                                                                                                          | <Badge text="可选" /> |
| `rel`    | `RelType`       | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                                                                                                                                                                                | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。                                                                                                                                                      | <Badge text="可选" /> |

### `Author` 接口

`Author` 接口表示作者信息，包括作者姓名和链接。

| 字段     | 类型            | 描述                                                                                                                                                                                                      | 是否必填              |
| -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `name`   | `string`        | 作者或站点拥有者的名称，将展示在页脚中。                                                                                                                                                                  | <Badge text="可选" /> |
| `link`   | `LinkType`      | 作者名称的链接地址，一般为个人主页或项目主页。                                                                                                                                                            | <Badge text="可选" /> |
| `rel`    | `RelType`       | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                                                                                              | <Badge text="可选" /> |
| `target` | `TargetType`    | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。                                                                    | <Badge text="可选" /> |
| `icon`   | `IconImageType` | 版权图标，支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标，支持深浅色模式。例如：`icon: 'mdi:copyright'` | <Badge text="可选" /> |
| `color`  | `IconImageType` | 图标颜色或样式，支持十六进制或 rgba 颜色值，亦可分别设置深浅色。例如：`color: { light: '#666', dark: '#ccc' }` 或 `color: 'rgba(255, 87, 51, 1)'`                                                         | <Badge text="可选" /> |
| `alt`    | `AltType`       | 图标的无障碍文本描述，供屏幕阅读器使用，建议提供。                                                                                                                                                        | <Badge text="可选" /> |
