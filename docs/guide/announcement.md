---
title: 首页公告栏组件 - Announcement
head:
  - - meta
    - name: description
      content: 了解如何使用 @theojs/lumen 插件，为你的 VitePress 网站首页添加一个引人注目的公告栏组件。轻松配置和展示活动信息、重要通知或快速安装命令，有效提升首页互动性和信息传递效率。
  - - meta
    - name: keywords
      content: VitePress 首页公告栏 公告栏 @theojs/lumen Lumen Vue组件 主题插件 网站首页 通知栏 活动推广 快速安装 theojs VitePress插件 首页定制
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
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
  prelink: # [!code ++]
    title: '🎉 活动不停歇，青云梯四周年双旦特惠' # [!code ++]
    content: '· 月/季/半年付85折 优惠码<span class="promo-text"> qyt85 </span></br>· 年付以及年付以上8折 优惠码<span class="promo-text"> qyt80</span></br>· 年付8折/2年付7折/3年付6折 配合优惠码折上折，最高可达<span class="promo-text"> 48 </span>折' # [!code ++]
    date: '2025年1月7日23时59分' # [!code ++]
    dateIcon: 'mdi:calendar-star' # [!code ++]
    dateText: '活动截止日期' # [!code ++]
    link: 'https://itheo.top/qyt' # [!code ++]
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
    copy: true # [!code ++]
    install: 'pnpm add @theojs/lumen' # [!code ++]
    title: '<iconify-icon class="i-mr" icon="fa6-solid:bolt" style="color:#63E6BE"></iconify-icon> 快速开始' # [!code ++]
    content: '<span class="promo-text">pnpm add @theojs/lumen</span>' # [!code ++]
---
```

## 数据接口说明

| 字段       | 类型      | 描述                                                                                                                                                                                                           | 是否必填              |
| ---------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `link`     | `string`  | 链接地址，点击后跳转的目标 URL。                                                                                                                                                                               | <Badge text="可选" /> |
| `title`    | `string`  | 链接显示的标题文本，突出展示的主要内容。                                                                                                                                                                       | <Badge text="必填" /> |
| `content`  | `string`  | 链接下方的补充描述内容，可用于详细说明或附加信息。                                                                                                                                                             | <Badge text="可选" /> |
| `date`     | `string`  | 活动截止日期或相关时间信息，通常用于提示有效期限。                                                                                                                                                             | <Badge text="可选" /> |
| `dateText` | `string`  | 活动时间的文字说明，默认为 `活动时间: 即日至`，可自定义显示文案。                                                                                                                                              | <Badge text="可选" /> |
| `dateIcon` | `string`  | 活动时间旁显示的图标，默认是日历图标（`line-md:calendar`），支持任意 <Pill name="iconify" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" /> 图标。 | <Badge text="可选" /> |
| `copy`     | `boolean` | 是否启用点击复制功能。若设置为 `true`，点击链接时将复制 `install` 字段内容，且链接不进行跳转。                                                                                                                 | <Badge text="可选" /> |
| `install`  | `string`  | 复制到剪贴板的文本内容，仅在 `copy` 为 `true` 时生效。                                                                                                                                                         | <Badge text="可选" /> |
| `alt`      | `string`  | 图标的替代文本，用于无障碍和 SEO 优化。                                                                                                                                                                        | <Badge text="可选" /> |
| `rel`      | `string`  | 链接的 `rel` 属性，用于控制链接的安全性和行为，如防止新窗口跳转时的安全风险（`noopener`）、避免搜索引擎跟踪（`nofollow`）等。                                                                                  | <Badge text="可选" /> |
