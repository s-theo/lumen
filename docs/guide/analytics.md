---
title: 站点统计组件 - Analytics
description: 探索如何使用 @theojs/lumen 插件，在你的 VitePress 站点中无缝集成谷歌分析 (Google Analytics)、百度统计 (Baidu Analytics) 及 Umami Analytics。本指南将帮助你快速配置和管理站点统计，有效追踪和分析网站数据。
---

# 站点统计组件

该插件集成了三种常见的站点统计工具：**谷歌分析 (Google Analytics)**、**百度统计 (Baidu Analytics)** 和 **Umami Analytics**，让你可以轻松地在 VitePress 网站中集成并管理这些分析工具。无论是谷歌分析的强大功能，还是百度统计对中国市场的适配，或者是 Umami 的隐私友好型方案，都可以通过这个插件快速集成并使用。

## 谷歌分析 - googleAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { googleAnalytics } from '@theojs/lumen'

export default {
  ...DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-******' }) // [!code ++]
  }
}
```

### 获取 Google Analytics ID

1. 访问<Pill name="Google Analytics" link="https://analytics.google.com/" icon="logos:google-analytics" alt="Google Analytics icon" />网站。
2. 登录到你的 Google Analytics 帐号。
3. 创建一个新的 Google Analytics 账户，或者选择已有的账户。
4. 在左下角点击 `Admin`（管理）。
5. 在 `Account`（账户）列下，选择你的账户。
6. 在 `Property`（属性）列下，选择你的站点，或者创建一个新的站点。
7. 在 `Property Settings`（属性设置）中，找到 `Tracking Info`（跟踪信息）。
8. 点击 `Tracking Code`（跟踪代码），你会看到类似 `G-XXXXXXX` 的 ID。

**详细操作见官方文档：** <Pill name="Google Analytics 帮助文档" link="https://support.google.com/analytics/answer/9304153?hl=zh-Hans" icon="logos:google-analytics" alt="Google Analytics icon" />

## 百度统计 - baiduAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { baiduAnalytics, trackPageview } from '@theojs/lumen'

export default {
  ...DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    baiduAnalytics({ baiduId: '******' }) // [!code ++]
    // [!code ++]
    if (typeof window !== 'undefined') {
      trackPageview('******', window.location.href) // [!code ++]
    } // [!code ++]
  }
}
```

### 获取 Baidu Analytics ID

1. 访问 <Pill name="百度统计" link="https://tongji.baidu.com/" :icon="{ icon: 'ri:baidu-fill', color: '#2932E1', alt: '百度统计图标' }" /> 网站。
2. 使用百度账号登录或注册一个新账号。
3. 登录后，点击页面上方的 `我的报告`-`使用设置`-`网站列表`。
4. 添加你的网站，选择分类并保存
5. 获取统计代码，复制链接中 `hm.js?******` 的 ID 部分。

**详细操作见官方文档：** <Pill name="百度统计官方文档" link="https://tongji.baidu.com/web/help/article?id=175&type=0" :icon="{ icon: 'ri:baidu-fill', color: '#2932E1', alt: '百度统计图标' }" />

## Umami - umamiAnalytics

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { umamiAnalytics } from '@theojs/lumen'

export default {
  ...DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    umamiAnalytics({
      id: '***-***-***-***', // [!code ++]
      src: 'https://*******', // [!code ++]
      domains: 'your.domain.com' // [!code ++] 可选，参考官方配置 https://umami.is/docs/tracker-configuration#data-domains
    }) // [!code ++]
  }
}
```

### 获取 Umami Analytics ID

#### 自建 Umami

1. 参考 <Pill name="Umami 文档" link="https://umami.is/docs/guides/hosting" :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' }, alt: 'umami图标' }" /> 搭建 Umami 服务器。
2. 登录 Umami 仪表盘，创建新站点。
3. 复制该站点的 ID 用于配置。

#### 使用公共 Umami 服务

1. 使用第三方 Umami 公共实例。
2. 获取公共实例分配的站点 ID。

> 你的 Umami ID 应该类似于：`123abc456def`

**官方文档及资源：** <Pill name="Umami 文档" link="https://umami.is/docs/guides/hosting" :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' }, alt: 'umami图标' }" /> <Pill name="Umami 公共服务" link="https://umami.is/" :icon="{ icon: 'simple-icons:umami', color: { light: '#000000', dark: '#ffffff' }, alt: 'umami图标' }" />
