---
title: 首页公告栏组件 - Announcement
description: 了解如何使用 @theojs/lumen 插件，为你的 VitePress 网站首页添加一个引人注目的公告栏组件。轻松配置和展示活动信息、重要通知或快速安装命令，有效提升首页互动性和信息传递效率。
head:
  - - meta
    - property: og:image
      content: https://i.theojs.cn/docs/announcement-light.webp
---

# 首页公告栏组件 - Announcement

![首页公告栏 - 效果图|550x0](https://i.theojs.cn/docs/announcement-light.webp#light '首页公告栏 - 效果图')

![首页公告栏 - 效果图|550x0](https://i.theojs.cn/docs/announcement-dark.webp#dark '首页公告栏 - 效果图')

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { Announcement } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'home-hero-info-before': () => h(Announcement)
    }) // [!code ++]
  } // [!code ++]
}
```

## 配置公告栏

```yaml [.vitepress/index.md]
---
layout: home
hero:
  Announcement: # [!code ++]
    title: '🎉 活动不停歇，青云梯四周年双旦特惠' # [!code ++]
    desc: '· 月/季/半年付85折 优惠码<span class="promo-text"> qyt85 </span></br>· 年付以及年付以上8折 优惠码<span class="promo-text"> qyt80</span></br>· 年付8折/2年付7折/3年付6折 配合优惠码折上折，最高可达<span class="promo-text"> 48 </span>折' # [!code ++]
    date: '2025年1月7日23时59分' # [!code ++]
    dateIcon: 'mdi:calendar-star' # [!code ++]
    dateText: '活动截止日期' # [!code ++]
    link: 'https://itheo.top/qyt' # [!code ++]
---
```

## 数据接口说明

| 字段       | 类型         | 描述                                                                                                                                   | 是否必填              |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `link`     | `LinkType`   | 链接地址，点击后跳转的目标 URL。                                                                                                       | <Badge text="可选" /> |
| `rel`      | `RelType`    | 链接的 `rel` 属性，用于控制链接的安全性和行为，如防止新窗口跳转时的安全风险（`noopener`）、避免搜索引擎跟踪（`nofollow`）等。          | <Badge text="可选" /> |
| `target`   | `TargetType` | 链接的目标窗口。默认根据链接地址判断：外部链接默认在新标签页打开（`_blank`），内部链接无默认值（`即当前页打开`）。可自定义覆盖该行为。 | <Badge text="可选" /> |
| `title`    | `string`     | 链接显示的标题文本，突出展示的主要内容。                                                                                               | <Badge text="必填" /> |
| `desc`     | `string`     | 链接下方的补充描述内容，可用于详细说明或附加信息。                                                                                     | <Badge text="可选" /> |
| `date`     | `string`     | 活动截止日期或相关时间信息，通常用于提示有效期限。                                                                                     | <Badge text="可选" /> |
| `dateText` | `string`     | 活动时间的文字说明，默认为 `活动时间: 即日至`，可自定义显示文案。                                                                      | <Badge text="可选" /> |
| `dateIcon` | `IconType`   | 图标配置，支持字符串或对象，支持深浅色模式和颜色配置。详情查看 [IconType](#IconType)                                                   | <Badge text="可选" /> |
| `alt`      | `AltType`    | 图标的替代文本，用于无障碍和 SEO 优化。                                                                                                | <Badge text="可选" /> |

<!--@include: ./type.md{1,10}-->
