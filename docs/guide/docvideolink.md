---
title: 视频组件
head:
  - - meta
    - name: description
      content: 了解如何使用 @theojs/lumen 插件提供的视频组件 (Vid)，轻松在 VitePress 页面中嵌入来自 YouTube、Bilibili、腾讯视频、优酷等多个主流平台或自定义链接的视频。该组件支持响应式设计，配置简单易用，提升用户观看体验。
  - - meta
    - name: keywords
      content: VitePress 视频组件 @theojs/lumen Lumen DocVideoLink Vid 嵌入视频 YouTube Bilibili 腾讯视频 优酷 西瓜视频 Vimeo 响应式视频 theojs VitePress插件 多平台视频 自定义视频
---

支持多种主流视频平台，还允许用户通过自定义链接嵌入其他视频源。通过简单的配置，可以轻松将各种视频嵌入到您的页面中，提升用户的观看体验。

- **支持多平台**：内置对 <Pill name="YouTube" icon="logos:youtube-icon" link="https://www.youtube.com/" alt="youtube icon" />
  <Pill name="Bilibili" icon="simple-icons:bilibili" color="#00A1D6" link="https://www.bilibili.com/" alt="bilibili icon" />
  <Pill name="腾讯视频" image="https://v.qq.com/favicon.ico" link="https://v.qq.com/" alt="腾讯视频 icon" />
  <Pill name="优酷视频" image="https://img.alicdn.com/imgextra/i2/O1CN01BeAcgL1ywY0G5nSn8_!!6000000006643-2-tps-195-195.png" link="https://www.youku.com/" alt="优酷视频 icon" />
  <Pill name="西瓜视频" icon="icon-park-solid:xigua" color="#F4464B" link="https://www.ixigua.com/" alt="西瓜视频 icon" />
  <Pill name="Vimeo" icon="logos:vimeo-icon" link="https://vimeo.com" alt="vimeo icon"/>的支持，只需要提供平台标识符和视频 ID 即可。
- **自定义视频链接**：除了主流视频平台外，Vid 还支持直接嵌入 MP4 或其他格式的视频链接。
- **响应式设计**：该组件自动适应不同屏幕尺寸，确保在桌面和移动设备上都能流畅播放。
- **简便易用**：通过简单的配置项，您可以快速将视频内容集成到页面中，无需复杂的代码。

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { DocVideoLink } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('Vid', DocVideoLink) // [!code ++]
  } // [!code ++]
  ...
}
```

## 使用示例

:::tip
只需要提供平台名称(`is`)和视频 ID（`id`），即可实现视频的嵌入。

当没有传递 `is` 时，默认会使用 YouTube 平台。例如：
:::

```vue
YouTube 视频
<Vid id="dQw4w9WgXcQ" />
<!-- 或者 -->
<Vid is="youtube" id="dQw4w9WgXcQ" />

Bilibili 视频
<Vid is="bilibili" id="BV1if421Q7mL" />

腾讯视频
<Vid is="tencent" id="y0035f2sc4s" />

优酷视频
<Vid is="youku" id="XNTE5NTc3NjIwMA==" />

vimeo 视频
<Vid is="vimeo" id="76979871" />

西瓜视频
<Vid is="xigua" id="7421926380926927399" />
```

### 其他平台视频

```vue
<Vid src="https://geo.dailymotion.com/player.html?video=x7z0ovx" />
<Vid
  src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4"
/>
```

## 数据接口说明

| 属性名 | 类型                                                                  | 说明                                                                                     |
| ------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`   | `string`                                                              | 视频的唯一标识符，只有在选择平台时才需要使用 `id`。                                      |
| `is`   | `'youtube' \| 'bilibili' \| 'tencent' \| 'youku'\| 'xigua' \|'vimeo'` | 视频平台类型，值为 `youtube`、`bilibili`、`tencent` 、`youku` 、`xigua`或 `vimeo` 之一。 |
| `src`  | `string`                                                              | 自定义视频链接，只有在 `is` 和`id` 不存在时才需要提供。                                  |
