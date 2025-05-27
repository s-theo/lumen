---
title: 页脚组件 - HomeFooter
head:
  - - meta
    - name: description
      content: 了解如何使用 @theojs/lumen 插件的 HomeFooter 组件自定义 VitePress 网站的页脚。本指南包含数据配置（链接分组、备案信息、作者）和组件集成步骤，助你打造个性化且信息丰富的网站底部。
  - - meta
    - name: keywords
      content: VitePress 页脚配置 @theojs/lumen Lumen HomeFooter 自定义页脚 备案信息 作者信息 链接分组 网站底部 theojs VitePress插件 Iconify 网站信息
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

```ts [.vitepress/data/footerData.ts]
import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    showIcon: true,
    icp: {
      number: '粤ICP备12345678号',
      icon: {
        light: 'fluent:globe-shield-48-filled',
        dark: 'fluent:globe-shield-48-filled'
      },
      color: {
        light: 'rgba(20, 150, 255, 1)',
        dark: 'rgba(100, 200, 255, 1)'
      },
      alt: 'ICP 备案图标',
      rel: 'noopener noreferrer'
    },
    police: {
      number: '粤公网安备12345678号',
      icon: {
        light: 'fluent:shield-checkmark-48-filled',
        dark: 'fluent:shield-checkmark-48-filled'
      },
      color: {
        light: 'rgba(20, 255, 150, 1)',
        dark: 'rgba(100, 255, 200, 1)'
      },
      alt: '公安备案图标',
      rel: 'noopener noreferrer'
    }
  },
  author: {
    name: 'Theo',
    link: 'https://theojs.cn',
    icon: {
      light: 'mdi:copyright',
      dark: 'mdi:copyright'
    },
    color: {
      light: '#999',
      dark: '#ccc'
    },
    alt: '版权图标',
    rel: 'noopener noreferrer'
  },
  group: [
    {
      title: '外部链接',
      icon: {
        light: 'bx:link',
        dark: 'bx:link'
      },
      color: {
        light: 'rgba(255, 87, 51, 1)',
        dark: 'rgba(255, 130, 100, 1)'
      },
      links: [
        {
          name: '示例1',
          link: 'https://example1.com',
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold'
          },
          color: {
            light: 'rgba(200, 100, 50, 1)',
            dark: 'rgba(255, 150, 100, 1)'
          },
          alt: '示例1图标',
          rel: 'noopener noreferrer'
        },
        {
          name: '示例2',
          link: 'https://example2.com'
          // icon 和 color 可省略
        }
      ]
    },
    {
      title: '内部链接',
      icon: {
        light: 'bx:link',
        dark: 'bx:link'
      },
      color: {
        light: 'rgba(255, 87, 51, 1)',
        dark: 'rgba(255, 130, 100, 1)'
      },
      links: [
        {
          name: '示例1',
          link: '/docs',
          icon: {
            light: 'solar:book-bold',
            dark: 'solar:book-bold'
          },
          color: {
            light: 'rgba(200, 100, 50, 1)',
            dark: 'rgba(255, 150, 100, 1)'
          },
          alt: '文档链接图标',
          rel: 'noopener noreferrer'
        },
        {
          name: '示例2',
          link: '/page'
          // icon 和 color 可省略
        }
      ]
    }
  ]
}
```

## 引入组件

::: tip
`.. /data/footerData` 可替换为存放数据的路径
:::

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue' // [!code ++]
import { HomeFooter } from '@theojs/lumen' // [!code ++]
import { Footer_Data } from '../data/footerData' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'layout-bottom': () => h(HomeFooter, { Footer_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
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

|   字段   |   类型    |       是否必填        | 描述                         |
| :------: | :-------: | :-------------------: | ---------------------------- |
| `group`  | `Group[]` | <Badge text="可选" /> | 链接分组数组，包含多个分组。 |
| `beian`  |  `Beian`  | <Badge text="可选" /> | 包含 ICP 和公安备案信息      |
| `author` | `Author`  | <Badge text="可选" /> | 包含作者姓名和链接           |

### `Group` 接口

`Group` 接口定义了一个链接分组，包括分组的图标、标题及其下的多个链接。

|  字段   |      类型       |       是否必填        | 描述                                      |
| :-----: | :-------------: | :-------------------: | ----------------------------------------- |
| `icon`  | `IconImageType` | <Badge text="可选" /> | 分组图标名称（支持 iconify 或多模式图标） |
| `color` | `IconImageType` | <Badge text="可选" /> | 图标颜色或样式                            |
| `title` |    `string`     | <Badge text="必填" /> | 分组标题                                  |
| `links` |    `Link[]`     | <Badge text="必填" /> | 该分组包含的[链接数组](#link-接口)        |
|  `alt`  |    `string`     | <Badge text="可选" /> | 图标的无障碍描述文本（alt）               |

### `Link` 接口

`Link` 接口用于描述具体的链接信息，包括链接的图标、样式、名称、地址及其打开方式。

|  字段   |      类型       |       是否必填        | 描述                        |
| :-----: | :-------------: | :-------------------: | --------------------------- |
| `icon`  | `IconImageType` | <Badge text="可选" /> | 链接图标                    |
| `color` | `IconImageType` | <Badge text="可选" /> | 链接颜色                    |
| `name`  |    `string`     | <Badge text="必填" /> | 链接名称                    |
| `link`  |    `string`     | <Badge text="必填" /> | 链接地址                    |
|  `alt`  |    `string`     | <Badge text="可选" /> | 图标的无障碍描述文本（alt） |
|  `rel`  |    `string`     | <Badge text="可选" /> | 链接的 rel 属性             |

### `Beian` 接口

`Beian` 接口用于表示备案信息，包括 ICP 备案号、公安备案号以及是否显示备案图标。

|    字段    |   类型    |       是否必填        | 描述                           |
| :--------: | :-------: | :-------------------: | ------------------------------ |
|   `icp`    |   `Icp`   | <Badge text="可选" /> | ICP 备案信息                   |
|  `police`  | `Police`  | <Badge text="可选" /> | 公安备案信息                   |
| `showIcon` | `boolean` | <Badge text="可选" /> | 是否显示备案图标，默认 `false` |

#### `Icp` 接口

`Icp` 接口表示 ICP 备案信息。

|   字段   |      类型       |       是否必填        | 描述                                             |
| :------: | :-------------: | :-------------------: | ------------------------------------------------ |
| `number` |    `string`     | <Badge text="可选" /> | ICP 备案号                                       |
|  `icon`  | `IconImageType` | <Badge text="可选" /> | ICP 图标，默认 `'fluent:globe-shield-48-filled'` |
| `color`  | `IconImageType` | <Badge text="可选" /> | 图标颜色                                         |
|  `alt`   |    `string`     | <Badge text="可选" /> | 图标的无障碍描述文本（alt）                      |
|  `rel`   |    `string`     | <Badge text="可选" /> | 链接的 rel 属性                                  |

#### `Police` 接口

`Police` 接口表示公安备案信息。

|   字段   |      类型       |       是否必填        | 描述                                                     |
| :------: | :-------------: | :-------------------: | -------------------------------------------------------- |
| `number` |    `string`     | <Badge text="可选" /> | 公安备案号                                               |
|  `icon`  | `IconImageType` | <Badge text="可选" /> | 公安备案图标，默认 `'fluent:shield-checkmark-48-filled'` |
| `color`  | `IconImageType` | <Badge text="可选" /> | 图标颜色                                                 |
|  `alt`   |    `string`     | <Badge text="可选" /> | 图标的无障碍描述文本（alt）                              |
|  `rel`   |    `string`     | <Badge text="可选" /> | 链接的 rel 属性                                          |

### `Author` 接口

`Author` 接口表示作者信息，包括作者姓名和链接。

|  字段   |      类型       |       是否必填        | 描述                        |
| :-----: | :-------------: | :-------------------: | --------------------------- |
| `name`  |    `string`     | <Badge text="可选" /> | 作者姓名                    |
| `link`  |    `string`     | <Badge text="可选" /> | 作者链接                    |
| `icon`  | `IconImageType` | <Badge text="可选" /> | 版权图标                    |
| `color` | `IconImageType` | <Badge text="可选" /> | 图标颜色                    |
|  `alt`  |    `string`     | <Badge text="可选" /> | 图标的无障碍描述文本（alt） |
|  `rel`  |    `string`     | <Badge text="可选" /> | 链接的 rel 属性             |
