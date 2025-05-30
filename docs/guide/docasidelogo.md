---
title: 侧边栏链接组件 - DocAsideLogo
description: 学习如何使用 @theojs/lumen 插件的 DocAsideLogo 组件，在 VitePress 站点的侧边栏添加自定义链接、推广信息或品牌Logo。本指南将引导你配置数据并集成组件，以丰富侧边栏内容和提升用户体验。
head:
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

| 字段    | 类型            | 描述                                                                                                                                                                                                                                | 是否必填              |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `link`  | `LinkType`      | 链接地址，点击后跳转目标页面，支持外部或内部链接。例如：`'https://example.com'`。                                                                                                                                                   | <Badge text="必填" /> |
| `icon`  | `IconImageType` | 图标，支持任意 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" />，也支持深浅色模式。例如：`{ light: 'mdi:home-outline', dark: 'mdi:home' }`。 | <Badge text="可选" /> |
| `color` | `IconImageType` | 图标颜色，可为字符串或深浅色对象。例如：`'#E50914'` 或 `{ light: '#E50914', dark: '#FF0000' }`。                                                                                                                                    | <Badge text="可选" /> |
| `image` | `IconImageType` | 图片，支持普通图片地址或 `{ light, dark }` 模式。例如：`'https://example.com/icon.webp'` 或 `{ light: 'xxx-light.svg', dark: 'xxx-dark.svg' }`。                                                                                    | <Badge text="可选" /> |
| `name`  | `string`        | 名称文本，常用于品牌、平台名称。例如：`'哔哩哔哩'`。                                                                                                                                                                                | <Badge text="可选" /> |
| `promo` | `string`        | 活动标题，显示为高亮推广信息。例如：`'限时折扣'`。                                                                                                                                                                                  | <Badge text="可选" /> |
| `info1` | `string`        | 活动描述，可用于介绍当前推广或产品。例如：`'新人注册即送 5 元红包'`。                                                                                                                                                               | <Badge text="可选" /> |
| `info2` | `string`        | 附加活动描述，补充额外信息。例如：`'优惠截止至 5 月 30 日'`。                                                                                                                                                                       | <Badge text="可选" /> |
| `hide1` | `string`        | 默认隐藏的信息块，鼠标悬停时显示。例如：`'仅限中国大陆用户'`。                                                                                                                                                                      | <Badge text="可选" /> |
| `hide2` | `string`        | 第二个隐藏的信息块，用于额外补充。例如：`'每日限量 500 名用户参与'`。                                                                                                                                                               | <Badge text="可选" /> |
| `alt`   | `string`        | 图片或图标的无障碍文本描述，有助于屏幕阅读器识别。例如：`'哔哩哔哩标志'`。                                                                                                                                                          | <Badge text="可选" /> |
| `rel`   | `string`        | 链接的 `rel` 属性，建议使用如 `noopener noreferrer` 提升安全性。例如：`'nofollow'`。                                                                                                                                                | <Badge text="可选" /> |
