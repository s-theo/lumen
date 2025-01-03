---
title: 链接卡片
---

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('Box', DocBox) // [!code ++]
    app.component('Pill', DocPill) // [!code ++]
    app.component('Links', DocLinks) // [!code ++]
    app.component('BoxCube', DocBoxCube) // [!code ++]
  } // [!code ++]
  ...
}
```

## Box

**输入**

```vue
<Box
  :items="[
    //iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>
```

**输出**

<Box
  :items="[
    //iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                                     |
| :-----: | :-------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`  |                   `string`                    | DocBox 名称。                                                                                                                                                                                                            |
| `link`  |                   `string`                    | DocBox 链接。                                                                                                                                                                                                            |
|  `tag`  |                   `string`                    | <Badge type="tip" text="可选" /> DocBox 标签。                                                                                                                                                                           |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标的颜色。 也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                  |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标名称，支持 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> 可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                           |

## Pill

**输入**

```vue-html
//iconify图标
<Pill name="Iconify" link="#" icon="line-md:iconify2-static" color="#1769AA" />
<Pill name="Vue" link="#" icon="vscode-icons:file-type-vue" />
//深浅模式的iconify图标
<Pill
  name="Vercel"
  link="#"
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel' }"
  :color="{ light: '#000000', dark: '#FFFFFF' }"
/>
<Pill
  name="Vite"
  link="#"
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
/>
//图片
<Pill
  name="支付宝"
  link="https://i.theojs.cn/docs/202405201752089.jpg"
  image="https://i.theojs.cn/logo/alipay.svg"
/>
//深浅模式的图片
<Pill
  name="GitHub"
  link="#"
  :image="{
    light: 'https://i.theojs.cn/logo/github.svg',
    dark: 'https://i.theojs.cn/logo/github-dark.svg'
  }"
/>
```

**输出**

<Pill name="Iconify" link="#" icon="line-md:iconify2-static" color="#1769AA" />  
<Pill name="Vue" link="#" icon="vscode-icons:file-type-vue" />  
<Pill name="Vercel" link="#" :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel' }" :color="{ light: '#000000', dark: '#FFFFFF' }" />  
<Pill name="Vite" link="#" :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }" />  
<Pill name="支付宝" link="https://i.theojs.cn/docs/202405201752089.jpg" image="https://i.theojs.cn/logo/alipay.svg" />  
<Pill
  name="GitHub"
  link="#"
  :image="{ light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }"
/>

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                                     |
| :-----: | :-------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`  |                   `string`                    | Pill 名称。                                                                                                                                                                                                              |
| `link`  |                   `string`                    | Pill 链接。                                                                                                                                                                                                              |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                   |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标名称，支持 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> 可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                           |

## Links

**输入**

```vue
<Links
  :items="[
    // iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    // 使用图标 + 描述
    {
      name: 'VitePress',
      link: 'https://www.google.com',
      image: 'https://vitepress.dev/vitepress-logo-large.webp',
      desc: 'VitePress 是一个由 Vue 团队开发的静态网站生成器，基于 Vite 和 Vue 3，专注于文档、博客和轻量网站的构建。它支持 Markdown 和 Vue 组件，提供简洁的默认主题和灵活的自定义能力，适合快速创建高性能的技术文档和个人博客。'
    },
    // 不使用图标 + 描述
    {
      name: 'Google',
      link: 'https://www.google.com',
      desc: '全球最大的搜索引擎'
    }
  ]"
/>
```

**输出**

<Links
  :items="[
    // iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    // 使用图标 + 描述
    {
      name: 'VitePress',
      link: 'https://www.google.com',
      image: 'https://vitepress.dev/vitepress-logo-large.webp',
      desc: 'VitePress 是一个由 Vue 团队开发的静态网站生成器，基于 Vite 和 Vue 3，专注于文档、博客和轻量网站的构建。它支持 Markdown 和 Vue 组件，提供简洁的默认主题和灵活的自定义能力，适合快速创建高性能的技术文档和个人博客。'
    },
    // 不使用图标 + 描述
    {
      name: 'Google',
      link: 'https://www.google.com',
      desc: '全球最大的搜索引擎'
    }
  ]"
/>

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                                    |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | DocLinks 名称。                                                                                                                                                                                                         |
| `desc`  |                   `string`                    | <Badge type="tip" text="可选" /> DocLinks 描述信息。                                                                                                                                                                    |
| `link`  |                   `string`                    | DocLinks 链接。                                                                                                                                                                                                         |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                  |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标名称，支持 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 支持单一图片地址或包含 `light` 和 `dark` 两种模式的对象。                                                                                                                              |

## BoxCube

**输入**

```vue
<BoxCube
  :items="[
    //iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //描述
    { name: 'Vue.js', link: '#', icon: 'devicon:vuejs', desc: 'v3.4.31' }
  ]"
/>
```

**输出**

<BoxCube
  :items="[
    //iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //描述
    { name: 'Vue.js', link: '#', icon: 'devicon:vuejs', desc: 'v3.4.31' }
  ]"
/>

## 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                                    |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | BoxCube 名称。                                                                                                                                                                                                          |
| `link`  |                   `string`                    | BoxCube 链接。                                                                                                                                                                                                          |
| `desc`  |                   `string`                    | <Badge type="tip" text="可选" /> BoxCube 描述。                                                                                                                                                                         |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                  |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图标名称，支持 <Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 支持单一图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                  |
