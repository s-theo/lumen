## IconType

```ts
/** 颜色模式类型，可为单一颜色字符串，或包含 light 和 dark 两种模式颜色的对象。 */
export type IconImageMode = string | { light: string; dark: string }

export type IconType =
  | string
  | {
      icon: string // 图标名称（如 'ion:logo-vercel'）
      color?: IconImageMode // 可选颜色，支持单色或深浅色模式
      alt?: AltType // 可选无障碍描述文本（aria-label）
    }
  | {
      light: string // 浅色模式图标名称
      dark: string // 深色模式图标名称
      color?: IconImageMode // 可选颜色，支持深浅色
      alt?: AltType // 可选无障碍描述文本（aria-label）
    }
```

## ImageType

```ts
export type ImageType =
  | string // 图片 URL 地址，例如 'https://example.com/icon.webp'
  | {
      src: string // 图片地址
      crop?: CropType // 是否裁剪为正方形，默认 false
      alt?: AltType // 图片的 alt 文本（无障碍描述）
    }
  | {
      light: string // 浅色模式图片地址
      dark: string // 深色模式图片地址
      crop?: CropType // 是否裁剪为正方形
      alt?: AltType // 图片的 alt 文本
    }
```
