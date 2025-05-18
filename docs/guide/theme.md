---
title: 主题配置文件
head:
  - - meta
    - name: description
      content: 了解如何配置和自定义 @theojs/lumen VitePress 主题。本指南包括主题CSS导入（全部或部分）、Iconify图标支持配置、CSS变量覆盖方法，并展示了容器、徽章和明暗模式图片等内置样式示例。
  - - meta
    - name: keywords
      content: VitePress 主题配置 @theojs/lumen Lumen CSS导入 Iconify 自定义CSS CSS变量 容器样式 徽章 明暗模式 light/dark模式 theojs VitePress插件 主题美化 UI组件 样式定制
---

::: code-group

```ts [所有主题]
// theme/index.ts
import '@theojs/lumen/theme'
```

```ts [部分主题]
// theme/index.ts
/* 徽章样式 */
import '@theojs/lumen/badge'
/* 按钮 */
import '@theojs/lumen/button'
/* 配色 */
import '@theojs/lumen/colors'
/* 文档样式 */
import '@theojs/lumen/doc'
/* 容器样式 */
import '@theojs/lumen/doc-blocks'
/* 首页样式 */
import '@theojs/lumen/home'
/* 首页按钮 */
import '@theojs/lumen/home-blocks'
/* 图标 */
import '@theojs/lumen/icon'
/* 图片样式 */
import '@theojs/lumen/pic'
```

:::

## 图标支持

:::details 使用 `iconify-icon` 时报错 `[Vue warn]: Failed to resolve component: iconify-icon`

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  vue: { // [!code ++]
    template: { // [!code ++]
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' } // [!code ++]
    } // [!code ++]
  } // [!code ++]
  ...
})
```

:::
<Pill name="使用方法查看: https://iconify.design/docs/iconify-icon/" link="https://iconify.design/docs/iconify-icon/" icon="line-md:iconify2-static" color="#1769AA" alt="iconify icon" />

```vue-html
<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:locomotive" height="36"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>
<iconify-icon icon="cil:truck" style="font-size: 18px" height="2em"></iconify-icon>
```

<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:locomotive" height="36"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>
<iconify-icon icon="cil:truck" style="font-size: 18px" height="2em"></iconify-icon>

## 自定义组件 CSS

可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS：

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import '@theojs/lumen/theme'
import './var.css' // [!code ++]

export default DefaultTheme
..
```

```css
/* .vitepress/theme/var.css */
:root {
  --Announcement-bg: var(--vp-button-alt-bg);
  --Announcement-bg-hover: var(--vp-c-brand-soft);
}
```

查看<Pill name="默认组件 CSS 变量" link="https://github.com/Theo-Messi/lumen/blob/main/src/theme/components-var.css" icon="unjs:theme-colors" alt="iconify icon" />内容来获取可以被覆盖的变量。

## 示例

### 容器

**输入**

```md
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::
```

**输出**

> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

### 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

### GitHub 风格容器

**输入**

```md
> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字
```

**输出**

> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

### 徽章

```vue
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>
```

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

### 图片浅色与深色模式

**输入**

```md [深浅模式图片]
<!-- 浅色模式 -->

![](https://i.theojs.cn/logo/github.svg){.light-only}

<!-- 深色模式 -->

![](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

<!-- 深色模式 -->

![](https://i.theojs.cn/logo/github-dark.svg#dark)

<!-- 浅色模式 -->

![](https://i.theojs.cn/logo/github.svg#light)
```

**输出**

<!-- 浅色模式 -->

![](https://i.theojs.cn/logo/github.svg){.light-only}

<!-- 深色模式 -->

![](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

<!-- 深色模式 -->

![](https://i.theojs.cn/logo/github-dark.svg#dark)

<!-- 浅色模式 -->

![](https://i.theojs.cn/logo/github.svg#light)

<!-- 浅色模式 -->

```md [带描述的深浅模式图片]
![浅色模式{.light-only}](https://i.theojs.cn/logo/github.svg)

![深色模式{.dark-only}](https://i.theojs.cn/logo/github-dark.svg)

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
```

**输出**

![浅色模式{.light-only}](https://i.theojs.cn/logo/github.svg)

![深色模式{.dark-only}](https://i.theojs.cn/logo/github-dark.svg)

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
