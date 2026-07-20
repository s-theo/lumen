## IconType

```ts
export type IconMode = string | { light: string; dark: string }

export type IconType =
  | string
  | { icon: string; color?: IconMode }
  | { light: string; dark: string; color?: IconMode }
  | { svg: IconMode }
```

## ImageType

```ts
export type ImageType =
  | string
  | { src: string; crop?: boolean; [prop: string]: any }
  | { light: string; dark: string; crop?: boolean; [prop: string]: any }
```

## 其他公共类型

```ts
export type SizeType = null | string | number
export type LinkType = string | undefined
export type RelType = string | undefined
export type TargetType = string | undefined
```
