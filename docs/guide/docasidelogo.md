---
title: 侧边栏链接组件 - DocAsideLogo
head:
  - - meta
    - name: description
      content: 学习如何使用 @theojs/lumen 插件的 DocAsideLogo 组件，在 VitePress 站点的侧边栏添加自定义链接、推广信息或品牌Logo。本指南将引导你配置数据并集成组件，以丰富侧边栏内容和提升用户体验。
  - - meta
    - name: keywords
      content: VitePress 侧边栏 侧边栏链接 自定义链接 DocAsideLogo @theojs/lumen Lumen Vue组件 主题插件 网站定制 推广信息 品牌Logo theojs VitePress插件 Iconify light/dark模式
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/docasidelogo-light.webp
---

# 侧边栏链接组件 - DocAsideLogo

![侧边栏 - 效果图|300x0](https://i.theojs.cn/docs/docasidelogo-light.webp#light '侧边栏 - 效果图')

![侧边栏 - 效果图|300x0](https://i.theojs.cn/docs/docasidelogo-dark.webp#dark '侧边栏 - 效果图')

## 创建数据

在 `.vitepress` 目录下新建 `data/AsideData.ts` 文件，并添加以下内容：

```ts [.vitepress/data/AsideData.ts]
import type { AsideItem } from '@theojs/lumen'

export const Aside_Data: AsideItem[] = [
  {
    link: 'https://example.com/',
    image: 'https://example.com/icon.webp',
    promo: '活动标题',
    info1: '简介1',
    info2: '简介2'
  },
  {
    link: 'https://example.com/',
    image: 'https://example.com/icon.webp',
    name: '标题',
    hide1: '隐藏信息1',
    hide2: '隐藏信息2'
  },
  {
    link: 'https://example.com/',
    icon: 'twemoji:red-heart',
    name: '使用iconify图标'
  },
  {
    link: 'https://example.com/',
    icon: { light: 'simple-icons:netflix', dark: 'simple-icons:youtube' },
    color: { light: '#E50914', dark: '#FF0000' },
    name: 'iconify图标的 light/dark 模式'
  },
  {
    link: 'https://xx.theojs.cn/',
    image: {
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg'
    },
    name: '图片的 light/dark 模式'
  }
]
```

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue' // [!code ++]

import { DocAsideLogo } from '@theojs/lumen' // [!code ++]

import { Aside_Data } from '../data/AsideData' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
 ...
}
```

## 数据接口说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                     |
| :-----: | :-------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `link`  |                   `string`                    | 链接地址                                                                                                                                                                                                 |
| `color` | `string` \| `{ light: string; dark: string }` | 图标的颜色，可为单一颜色字符串，也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                |
| `icon`  | `string` \| `{ light: string; dark: string }` | 图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | 图片地址或包含 `light` 和 `dark` 模式的对象                                                                                                                                                              |
| `name`  |                   `string`                    | <Badge text="可选" /> 名称                                                                                                                                                                               |
| `promo` |                   `string`                    | <Badge text="可选" /> 活动名称                                                                                                                                                                           |
| `hide1` |                   `string`                    | <Badge text="可选" /> 隐藏信息1                                                                                                                                                                          |
| `info1` |                   `string`                    | <Badge text="可选" /> 信息1                                                                                                                                                                              |
| `hide2` |                   `string`                    | <Badge text="可选" /> 隐藏信息2                                                                                                                                                                          |
| `info2` |                   `string`                    | <Badge text="可选" /> 信息2                                                                                                                                                                              |
|  `alt`  |                   `string`                    | <Badge text="可选" /> 图片/图标的 `alt` 文本                                                                                                                                                             |
|  `rel`  |                   `string`                    | <Badge text="可选" /> 链接的 `rel` 属性。                                                                                                                                                                |
