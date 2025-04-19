---
title: 首页公告栏
---

![首页公告栏 - 效果图](https://i.theojs.cn/docs/202411071152313.webp)

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme' // [!code ++]

import { h } from 'vue'

import { Announcement } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]

    return h(DefaultTheme.Layout, null, { // [!code ++]
      'home-hero-info-before': () => h(Announcement) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 配置公告栏

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
  prelink:// [!code ++]
    title: '🎉 活动不停歇，青云梯四周年双旦特惠'// [!code ++]
    content: '· 月/季/半年付85折 优惠码<span style="color: var(--vp-c-brand-3); font-weight: bold;"> qyt85 </span></br>· 年付以及年付以上8折 优惠码<span style="color: var(--vp-c-brand-3); font-weight: bold;"> qyt80</span></br>· 年付8折/2年付7折/3年付6折 配合优惠码折上折，最高可达<span style="color: var(--vp-c-brand-3); font-weight: bold;"> 48 </span>折'// [!code ++]
    date: '2025年1月7日23时59分'// [!code ++]
    dateIcon: 'mdi:calendar-star' // [!code ++]
    dateText: '活动截止日期'// [!code ++]
    link: https://sho.theojs.cn/qyt // [!code ++]
---
```

### 复制安装命令

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
  prelink:
    copy: true // [!code ++]
    install: 'pnpm add @theojs/lumen' // [!code ++]
    title: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon> 快速开始' // [!code ++]
    content: '<span style="color: var(--vp-c-brand-3); font-weight: bold;">pnpm add @theojs/lumen</span>' // [!code ++]
---
```

## 数据接口说明

|    字段    |   类型    | 描述                                                                                                                                                                                                                                         |
| :--------: | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `link`   | `string`  | <Badge text="可选" /> 链接的 URL。                                                                                                                                                                                                           |
|  `title`   | `string`  | 链接的标题。                                                                                                                                                                                                                                 |
| `content`  | `string`  | <Badge text="可选" /> 链接的内容。                                                                                                                                                                                                           |
|   `date`   | `string`  | <Badge text="可选" /> 活动截止日期。                                                                                                                                                                                                         |
| `dateText` | `string`  | <Badge text="可选" /> 活动截止内容。默认为 `活动时间: 即日至;`                                                                                                                                                                               |
| `dateIcon` | `string`  | <Badge text="可选" /> 活动截止图标。默认为`line-md:calendar`<iconify-icon icon="line-md:calendar" ></iconify-icon>。支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> |
|   `copy`   | `boolean` | <Badge text="可选" /> 复制开关，默认为 `false`，设置为 `true` 时，点击链接将复制 `install` 字段中的内容，**并且链接将无任何跳转行为**                                                                                                        |
| `install`  | `string`  | <Badge text="可选" /> 复制的内容，当 `copy` 为 `true` 时，点击链接将复制该内容到剪贴板。                                                                                                                                                     |
