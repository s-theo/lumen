---
title: 页脚组件 - Footer
description: 了解如何使用 @theojs/lumen 插件的 Footer 组件自定义 VitePress 网站的页脚。本指南包含数据配置（链接分组、备案信息、作者）和组件集成步骤，助你打造个性化且信息丰富的网站底部。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/homefooter-desktop-light.webp
---

# 页脚组件 - Footer

## 创建数据 (点击打开查看)

::: details 在`.vitepress`目录下新建`data/FooterData.ts`文件，并添加以下内容：
<<< ../demo/FooterData.ts[.vitepress/data/FooterData.ts]
:::

::: details 或者支持 `i18n`
<<< ../demo/FooterData_i18n.ts[.vitepress/data/FooterData_i18n.ts]
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
import { Footer } from '@theojs/lumen'
// [!code ++]
import { Footer_Data } from '../data/footerData'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'layout-bottom': () => h(Footer, { Footer_Data })
    }) // [!code ++]
  } // [!code ++]
}
```

## 数据接口说明

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

| 字段     | 类型        | 描述                                                                                                     | 是否必填              |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------- | --------------------- |
| `noIcon` | `boolean`   | 是否隐藏该分组下所有外部链接的外链图标                                                                   | <Badge text="可选" /> |
| `icon`   | `IconType`  | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。与 `image` 互斥。详情查看 [IconType](#IconType)    | <Badge text="可选" /> |
| `image`  | `ImageType` | 图片配置，支持字符串或对象，支持深浅色模式和裁剪配置。与 `icon` 互斥，。详情查看 [ImageType](#ImageType) | <Badge text="可选" /> |
| `title`  | `string`    | 分组标题，将展示为该链接组的名称。                                                                       | <Badge text="必填" /> |
| `links`  | `Link[]`    | 分组内的链接数组，参考下方 [Link 接口](#link-接口)。                                                     | <Badge text="必填" /> |

### `Link` 接口

`Link` 接口用于描述具体的链接信息，包括链接的图标、样式、名称、地址及其打开方式。

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `noIcon` | `boolean`    | 是否隐藏该链接的外部链接图标                                                                                                           | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。与 `image` 互斥。详情查看 [IconType](#IconType)                                  | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪配置。与 `icon` 互斥。详情查看 [ImageType](#ImageType)                                 | <Badge text="可选" /> |
| `name`   | `string`     | 链接显示的文本。                                                                                                                       | <Badge text="必填" /> |
| `link`   | `string`     | 链接地址，可为外部 URL 或内部路径，如 `/docs`。                                                                                        | <Badge text="必填" /> |
| `rel`    | `RelType`    | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                           | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |

### `Beian` 接口

`Beian` 接口用于表示备案信息，包括 ICP 备案号、公安备案号以及是否显示备案图标。

| 字段       | 类型      | 描述                                                                 | 是否必填              |
| ---------- | --------- | -------------------------------------------------------------------- | --------------------- |
| `icp`      | `Icp`     | ICP 备案信息配置。                                                   | <Badge text="可选" /> |
| `police`   | `Police`  | 公安备案信息配置。                                                   | <Badge text="可选" /> |
| `showIcon` | `boolean` | 是否显示ICP和公安备案图标，默认值为 `false`，开启后将渲染图标/图片。 | <Badge text="可选" /> |

#### `Icp` 接口

`Icp` 接口表示 ICP 备案信息。

| 字段     | 类型                  | 描述                                                                                                                                                                                                    | 是否必填              |
| -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`              | ICP 备案号文本，例如 `粤ICP备88888888号`，也可用于其他类似用途的自定义文本。                                                                                                                            | <Badge text="可选" /> |
| `link`   | `LinkType`            | 指向工信部网站备案系统的链接，默认为:`https://beian.miit.gov.cn/`，支持自定义                                                                                                                           | <Badge text="可选" /> |
| `icon`   | `IconType`            | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。与 `image` 互斥。两者都未设置时将显示默认图标。详情查看 [IconType](#IconType)                                                                     | <Badge text="可选" /> |
| `image`  | `ImageType`           | 图片配置，支持字符串或对象，支持深浅色模式和裁剪配置。与 `icon` 互斥。两者都未设置时将显示默认图标。详情查看 [ImageType](#ImageType)                                                                    | <Badge text="可选" /> |
| `rel`    | `RelType`\|`nofollow` | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。(由于默认链接为`https://beian.miit.gov.cn/` 但该站点存在 `HTTP 521` 错误，因此默认设置为`nofollow` 以规避潜在的 SEO 风险。) | <Badge text="可选" /> |
| `target` | `TargetType`          | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。                                                                  | <Badge text="可选" /> |

#### `Police` 接口

`Police` 接口表示公安备案信息。

| 字段     | 类型         | 描述                                                                                                                                   | 是否必填              |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `number` | `string`     | 公安备案号文本，例如 `粤公网安备 88888888888888 号`，用于展示公安机关备案信息，也可用于其他类似用途的自定义文本。                      | <Badge text="可选" /> |
| `link`   | `LinkType`   | 公安备案号对应的查询链接，默认为:`https://beian.mps.gov.cn/`，支持自定义                                                               | <Badge text="可选" /> |
| `icon`   | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。与 `image` 互斥。两者都未设置时将显示默认图标。详情查看 [IconType](#IconType)    | <Badge text="可选" /> |
| `image`  | `ImageType`  | 图片配置，支持字符串或对象，支持深浅色模式和裁剪配置。与 `icon` 互斥。两者都未设置时将显示默认图标。详情查看 [ImageType](#ImageType)   | <Badge text="可选" /> |
| `rel`    | `RelType`    | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                           | <Badge text="可选" /> |
| `target` | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |

### `Author` 接口

`Author` 接口表示作者信息，包括作者姓名和链接。

| 字段        | 类型         | 描述                                                                                                                                     | 是否必填              |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `icon`      | `IconType`   | 版权图标配置，支持字符串或对象，支持深浅色模式和颜色配置。与 `image` 互斥。两者都未设置时将显示默认图标。详情查看 [IconType](#IconType)  | <Badge text="可选" /> |
| `image`     | `ImageType`  | 版权图片配置，支持字符串或对象，支持深浅色模式和裁剪配置。与 `icon` 互斥。两者都未设置时将显示默认图标。详情查看 [ImageType](#ImageType) | <Badge text="可选" /> |
| `startYear` | `number`     | 版权的起始年份，表示作者首次拥有版权的年份或版权开始生效的年份。如果未提供，则不显示年份范围。                                           | <Badge text="可选" /> |
| `name`      | `string`     | 作者或站点拥有者的名称，将展示在页脚中。                                                                                                 | <Badge text="可选" /> |
| `link`      | `LinkType`   | 作者链接地址，若未填写，则默认拼接为 `https://github.com/${name}`。                                                                      | <Badge text="可选" /> |
| `rel`       | `RelType`    | 设置链接的 `rel` 属性，常见如 `noopener noreferrer`，用于安全性或 SEO 考虑。                                                             | <Badge text="可选" /> |
| `target`    | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。   | <Badge text="可选" /> |
| `text`      | `string`     | 版权声明尾句，显示在作者名称后。可自定义该文本，默认值为 `All Rights Reserved.`。                                                        | <Badge text="可选" /> |

<!--@include: ../demo/type.md-->
