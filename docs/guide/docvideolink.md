---
title: 视频组件 - DocVideoLink
head:
  - - meta
    - name: description
      content: 了解如何使用 @theojs/lumen 插件提供的视频组件 (Vid)，轻松在 VitePress 页面中嵌入来自 YouTube、Bilibili、腾讯视频、优酷等多个主流平台或自定义链接的视频。该组件支持响应式设计，配置简单易用，提升用户观看体验。
  - - meta
    - name: keywords
      content: VitePress 视频组件 @theojs/lumen Lumen DocVideoLink Vid 嵌入视频 YouTube Bilibili 腾讯视频 优酷 Vimeo 响应式视频 theojs VitePress插件 多平台视频 自定义视频
---

# 视频组件 - DocVideoLink

该组件支持多种主流视频平台的视频嵌入，并允许通过自定义链接插入任意视频源。通过简洁的属性配置，可以轻松集成 YouTube、Bilibili、腾讯视频、优酷、Vimeo 等平台的视频，保证响应式设计和优质的观看体验。

- **支持多平台**：内置支持 <Pill name="YouTube" icon="logos:youtube-icon" link="https://www.youtube.com/" alt="youtube icon" />
  <Pill name="Bilibili" icon="simple-icons:bilibili" color="#00A1D6" link="https://www.bilibili.com/" alt="bilibili icon" />
  <Pill name="腾讯视频" image="https://v.qq.com/favicon.ico" link="https://v.qq.com/" alt="腾讯视频 icon" />
  <Pill name="优酷视频" image="https://img.alicdn.com/imgextra/i2/O1CN01BeAcgL1ywY0G5nSn8_!!6000000006643-2-tps-195-195.png" link="https://www.youku.com/" alt="优酷视频 icon" />
  <Pill name="Vimeo" icon="logos:vimeo-icon" link="https://vimeo.com" alt="vimeo icon"/>，只需提供对应平台标识 `is` 和视频 ID `id` 即可。
- **自定义视频链接**：也可直接通过 `src` 属性插入自定义视频链接，适用于 MP4 文件或其他视频源。
- **响应式设计**：自动适配不同屏幕尺寸，兼容移动端与桌面端，保证视频比例和显示效果。
- **使用简便**：清晰的属性接口，无需额外配置，快速嵌入视频。

## 组件引入示例

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
只需传入平台标识 `is` 和视频 ID `id` 即可实现视频嵌入。未传 `is` 默认使用 YouTube。
:::

```vue
<!-- YouTube 视频 -->
<Vid id="dQw4w9WgXcQ" />
<!-- 指定平台 -->
<Vid is="youtube" id="dQw4w9WgXcQ" />

<!-- Bilibili 视频 -->
<Vid is="bilibili" id="BV1if421Q7mL" />

<!-- 腾讯视频 -->
<Vid is="tencent" id="y0035f2sc4s" />

<!-- 优酷视频 -->
<Vid is="youku" id="XNTE5NTc3NjIwMA==" />

<!-- Vimeo 视频 -->
<Vid is="vimeo" id="76979871" />
```

### 自定义视频链接示例

```vue-html
<!-- 其他视频平台嵌入 -->
<Vid src="https://geo.dailymotion.com/player.html?video=x7z0ovx" />

<!-- 直接嵌入 MP4 视频 -->
<Vid src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" />
```

## 数据接口说明

| 属性  | 类型                                                         | 说明                                                    |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `id`  | `string`                                                     | 视频唯一标识符，仅在指定 `is` 时必需，表示平台视频 ID。 |
| `is`  | `'youtube' \| 'bilibili' \| 'tencent' \| 'youku' \| 'vimeo'` | 视频平台类型，默认使用 YouTube。                        |
| `src` | `string`                                                     | 自定义视频链接，未指定 `is` 和 `id` 时使用。            |
