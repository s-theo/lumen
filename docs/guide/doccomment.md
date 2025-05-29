---
title: 评论组件 - Twikoo/Waline
head:
  - - meta
    - name: description
      content: 了解如何通过 @theojs/lumen 插件将 Twikoo/Waline 评论系统集成到你的 VitePress 网站中。本指南包括数据配置、组件引入以及在文档页和首页启用评论功能的步骤，帮助你轻松为站点添加互动评论区。
  - - meta
    - name: keywords
      content: VitePress Twikoo Waline 评论系统 @theojs/lumen Lumen Vue组件 主题插件 静态网站评论 博客评论 theojs VitePress插件 评论集成 互动评论
---

# 评论组件 - Twikoo/Waline

支持 [Twikoo](#twikoo-评论)/[Waline](#waline-评论) 评论系统，用户可自由选择喜欢的方案。

## Twikoo 评论

<Links
  :items="[
    {
      name: '如何部署请查看 Twikoo 文档',
      image: 'https://twikoo.js.org/twikoo-logo-home.png',
      desc: '一个简洁、安全、免费的静态网站评论系统。',
      link: 'https://twikoo.js.org/quick-start.html',
      alt: 'twikoo icon'
    }
  ]"
/>

### 创建数据

在 `.vitepress/data/Twikoo.ts` 文件中创建评论配置：

```ts [.vitepress/data/Twikoo.ts]
import type { TwikooData } from '@theojs/lumen'

export const Twikoo_Data: TwikooData = {
  envId: 'https://xxxxxx' // 替换为你的 Twikoo 服务地址 [!code ++]
}
```

### `TwikooData` 接口说明

| 字段    | 类型     | 描述                                   | 是否必填              |
| ------- | -------- | -------------------------------------- | --------------------- |
| `envId` | `string` | Twikoo 的环境 ID，通常是你的服务地址。 | <Badge text="必填" /> |

### 引入评论组件

#### 文档页面使用

在 `.vitepress/theme/index.ts` 中注册组件并插入评论区域

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { Twikoo } from '@theojs/lumen'

// [!code ++]或指定你存放数据的路径
import { Twikoo_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'doc-after': () => h(Twikoo, { Twikoo_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
}
```

#### 在首页使用

你也可以在首页直接挂载 `Twikoo` 组件：

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { Twikoo } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    app.component('Twikoo', Twikoo) // [!code ++]
  } // [!code ++]
}
```

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---

# 修改成部署的Twikoo地址
<Twikoo :Twikoo_Data="{ envId: 'https://xxxxxx'  }" />
```

## waline评论

<Links
  :items="[
    {
      name: '如何部署请查看 waline 文档',
      image: 'https://waline.js.org/logo.png',
      desc: '一款简洁、安全的评论系统。',
      link: 'https://waline.js.org/guide/get-started/',
      alt: 'waline icon'
    }
  ]"
/>

### 创建数据

在 `.vitepress/data/Waline.ts` 文件中创建评论配置：

```ts [.vitepress/data/Waline.ts]
import type { WalineData } from '@theojs/lumen'

export const Waline_Data: WalineData = {
  serverURL: 'https://xxxxxx', // 替换为你的 waline 服务地址     [!code ++]
  lang: 'zh-CN'
}
```

### 接口说明 <Pill name="查看 waline 接口说明文档"  link="https://waline.js.org/reference/client/props.html" image="https://waline.js.org/logo.png"   alt='waline icon'/>

::: tip
`path` 属性已通过 **VitePress** 提供的 `useRoute()` 自动获取，一般无需手动设置；**如有特殊需求，也可以自行覆盖**。
:::

### 引入评论组件

#### 在文档页使用

在 `.vitepress/theme/index.ts` 中注册组件并插入评论区域

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { Waline } from '@theojs/lumen'

// [!code ++]
import { Waline_Data } from '../data'

export default {
  extends: DefaultTheme,
  // [!code ++]
  Layout() {
    // [!code ++]
    return h(DefaultTheme.Layout, null, {
      // [!code ++]
      'doc-after': () => h(Waline, { Waline_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
}
```

#### 在首页使用

你也可以在首页直接挂载 `Waline` 组件：

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { h } from 'vue'

// [!code ++]
import { Waline } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    app.component('Waline', Waline)
    // [!code ++]
  }
}
```

```yaml [.vitepress/index.md]
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---

# 修改成部署的Twikoo地址  [!code ++]
<Waline :Waline_Data="{  serverURL: 'https://xxxxxx'  }" />

```
