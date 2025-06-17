---
title: 视频组件 - DocVideoLink
description: 了解如何使用 @theojs/lumen 插件提供的视频组件 (Vid)，轻松在 VitePress 页面中嵌入来自 YouTube、Bilibili、腾讯视频、优酷等多个主流平台或自定义链接的视频。该组件支持响应式设计，配置简单易用，提升用户观看体验。
---

# 视频组件 - DocVideoLink

该组件支持多种主流视频平台的视频嵌入，并允许通过自定义链接插入任意视频源。通过简洁直观的属性配置，可轻松集成 YouTube、Bilibili、腾讯视频、优酷、Vimeo 等平台，确保响应式布局与良好的观看体验。

- **支持多平台**：内置支持 <Pill name="YouTube" link="https://www.youtube.com/" :icon="{ icon: 'logos:youtube-icon', alt: 'youtube icon' }" /><Pill name="Bilibili" link="https://www.bilibili.com/" :icon="{ icon: 'simple-icons:bilibili', color: '#00A1D6', alt: 'bilibili icon' }" /><Pill name="腾讯视频" link="https://v.qq.com/" :image="{ src: 'https://v.qq.com/favicon.ico', alt: '腾讯视频 icon' }" /><Pill name="优酷视频" link="https://www.youku.com/" :image="{ src: 'https://img.alicdn.com/imgextra/i2/O1CN01BeAcgL1ywY0G5nSn8_!!6000000006643-2-tps-195-195.png', alt: '优酷视频 icon' }" /><Pill name="Vimeo" link="https://vimeo.com" :icon="{ icon: 'logos:vimeo-icon', alt: 'vimeo icon' }" />，只需提供对应平台标识 `is` 和视频 ID `id` 即可。
- **自定义视频链接**：也可直接通过 `src` 属性插入自定义视频链接，适用于 MP4 文件或其他视频源。
- **响应式设计**：自动适配不同屏幕尺寸，兼容移动端与桌面端，保证视频比例和显示效果。
- **使用简便**：清晰的属性接口，无需额外配置，快速嵌入视频。

## 组件引入示例

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

// [!code ++]
import { DocVideoLink } from '@theojs/lumen'

export default {
  extends: DefaultTheme,
  // [!code ++]
  enhanceApp: ({ app }) => {
    // [!code ++]
    app.component('Vid', DocVideoLink)
  } // [!code ++]
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
<Vid id="dQw4w9WgXcQ" is="youtube" />

<!-- Bilibili 视频 -->
<Vid id="BV1if421Q7mL" is="bilibili" />

<!-- 腾讯视频 -->
<Vid id="y0035f2sc4s" is="tencent" />

<!-- 优酷视频 -->
<Vid id="XNTE5NTc3NjIwMA==" is="youku" />

<!-- Vimeo 视频 -->
<Vid id="76979871" is="vimeo" />
```

### 自定义视频链接示例

```vue
<!-- 其他视频平台嵌入 -->
<Vid src="https://geo.dailymotion.com/player.html?video=x7z0ovx" />

<!-- 直接嵌入 MP4 视频 -->
<Vid src="https://media.w3.org/2010/05/sintel/trailer.mp4" />
```

## 数据接口说明

| 属性  | 类型                                                         | 说明                                                    |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------- |
| `id`  | `string`                                                     | 视频唯一标识符，仅在指定 `is` 时必需，表示平台视频 ID。 |
| `is`  | `'youtube' \| 'bilibili' \| 'tencent' \| 'youku' \| 'vimeo'` | 视频平台类型，默认使用 YouTube。                        |
| `src` | `string`                                                     | 自定义视频链接，未指定 `is` 和 `id` 时使用。            |
