---
title: 首页公告栏
---

![首页公告栏 - 效果图](https://i.theojs.cn/docs/202411071152313.png)

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import { Announcement } from '@theojs/lumen' // [!code ++]
import { h } from 'vue' // [!code ++]

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

修改`index.md`

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
    link: https://qytcc01.qingyunti.pro/register?aff=jjgD79Jd // [!code ++]
    target: _blank// [!code ++]
---
```

## 数据接口说明

|    字段    |   类型   | 描述                                                                                                                                                                                                                                                     |
| :--------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `link`   | `string` | 链接的 URL。                                                                                                                                                                                                                                             |
|  `target`  | `string` | <Badge type="tip" text="可选" /> 链接的目标。                                                                                                                                                                                                            |
|  `title`   | `string` | 链接的标题。                                                                                                                                                                                                                                             |
| `content`  | `string` | <Badge type="tip" text="可选" /> 链接的内容。                                                                                                                                                                                                            |
|   `date`   | `string` | <Badge type="tip" text="可选" /> 活动截止日期。                                                                                                                                                                                                          |
| `dateText` | `string` | <Badge type="tip" text="可选" /> 活动截止内容。默认为 `活动时间: 即日至;`                                                                                                                                                                                |
| `dateIcon` | `string` | <Badge type="tip" text="可选" /> 活动截止图标。默认为`line-md:calendar`<iconify-icon icon="line-md:calendar" ></iconify-icon>。支持 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> |
