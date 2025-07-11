---
title: 配置主题
description: 了解如何配置和自定义 @theojs/lumen VitePress 主题。本指南包括主题CSS导入（全部或部分）、Iconify图标支持配置、CSS变量覆盖方法，并展示了容器、徽章和明暗模式图片等内置样式示例。
---

# 配置主题

## 主题样式导入

::: code-group

```ts [全量导入]
// .vitepress/theme/index.ts
import '@theojs/lumen/style'
```

```ts [按需导入]
// .vitepress/theme/index.ts
/* 徽章样式 */
import '@theojs/lumen/badge'
/* 按钮 */
import '@theojs/lumen/button'
/* 主题配色 */
import '@theojs/lumen/colors'
/* 文档基础样式 */
import '@theojs/lumen/doc'
/* 容器样式（警告、提示块等） */
import '@theojs/lumen/doc-blocks'
/* 首页样式 */
import '@theojs/lumen/home'
/* 首页按钮 */
import '@theojs/lumen/home-blocks'
/* 图标样式 */
import '@theojs/lumen/icon'
/* 图片样式 */
import '@theojs/lumen/pic'
```

:::

## 图标支持 <Pill name="查看图标库" link="https://icon-sets.iconify.design/" :icon="{ icon: 'line-md:iconify2-static', color: '#1769AA' }" />

### 示例

```vue
<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:locomotive" height="36"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>
```

<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:locomotive" height="36"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>

## 自定义组件 CSS

默认使用 CSS 变量来管理样式。你可以通过覆盖根级 CSS 变量，轻松实现主题颜色及样式的个性化定制。

### 在主题入口导入自定义变量文件

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import '@theojs/lumen/style'
// [!code ++]
import './var.css'

export default DefaultTheme
```

### 在 `var.css` 中覆盖变量

```css
/* .vitepress/theme/var.css */
:root {
  --notice-bg: var(--vp-button-alt-bg);
  --notice-bg-hover: var(--vp-c-brand-soft);
}
```

查看<Pill name="默认组件 CSS 变量" link="https://github.com/Theo-Messi/lumen/blob/main/src/style/components-var.css" icon="unjs:theme-colors" />
文件中查看所有可用变量，方便针对性覆盖。

## 内置样式示例

### 1. 容器

容器用于显示信息提示、警告、注意事项等内容，支持多种内置类型：

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

### 2. 自定义容器

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

### 3. GitHub 风格容器

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

### 4. Badge 组件

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

### 图片的浅色和深色模式支持

**输入**

```md
![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)
```

**输出**

![浅色模式](https://i.theojs.cn/logo/github.svg){.light-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg){.dark-only}

![深色模式](https://i.theojs.cn/logo/github-dark.svg#dark)

![浅色模式](https://i.theojs.cn/logo/github.svg#light)

## 报错解决

### 导入主题时报错: `does not provide an export named 'load'`

查看 [解决方式](./comment.md##安装依赖)

### 使用 `iconify-icon` 时报错: `[Vue warn]: Failed to resolve component: iconify-icon`

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // [!code ++]
  vue: {
    // [!code ++]
    template: {
      // [!code ++]
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    } // [!code ++]
  } // [!code ++]
})
```
