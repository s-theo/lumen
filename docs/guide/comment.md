---
title: 评论组件 - Waline
description: 了解如何通过 @theojs/lumen 插件将 Waline 评论系统集成到你的 VitePress 网站中。本指南包括数据配置、组件引入以及在文档页和首页启用评论功能的步骤，帮助你轻松为站点添加互动评论区。
---

# 评论组件 - Waline

## waline评论

<Links
  :grid="2"
  :items="[
    {
      name: '如何部署请查看 waline 文档',
      image: { src: 'https://waline.js.org/logo.png', alt: 'waline icon' },
      desc: '一款简洁、安全的评论系统。',
      link: 'https://waline.js.org/guide/get-started/'
    }
  ]"
/>

## 安装依赖

::: code-group

```sh [pnpm]
pnpm add recaptcha-v3
```

```sh [npm]
npm install recaptcha-v3
```

```sh [yarn]
yarn add recaptcha-v3
```

:::
然后在 `.vitepress/config.mts`中添加以下内容

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // [!code ++]
  vite: {
    // [!code ++]
    optimizeDeps: {
      // [!code ++]
      include: ['recaptcha-v3']
    } // [!code ++]
  } // [!code ++]
})
```

### 创建数据

在 `.vitepress/data/Waline.ts` 文件中创建评论配置：

```ts [.vitepress/data/Waline.ts]
import type { WalineData } from '@theojs/lumen'

export const Waline_Data: WalineData = {
  serverURL: 'https://xxxxxx', // 替换为你的 waline 服务地址     [!code ++]
  lang: 'zh-CN'
  //其他选项...
}
```

### 接口说明 <Pill name="查看 waline 接口说明文档"  link="https://waline.js.org/reference/client/props.html" image="https://waline.js.org/logo.png" alt='waline icon'/>

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
  tagline: ✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库
---

# 修改成部署的 Waline 地址  [!code ++]
<Waline :Waline_Data="{  serverURL: 'https://xxxxxx', ...其他选项  }" />

```

### CSS 变量

已预设 <Pill name="部分 CSS 变量" link="https://github.com/Theo-Messi/lumen/blob/main/src/style/components-var.css" icon="unjs:theme-colors" />，如需进一步自定义，可参考 <Pill name="Waline 官方文档" link="https://waline.js.org/reference/client/style.html" image="https://waline.js.org/logo.png" alt="waline icon" /> 通过覆盖样式实现个性化调整。
