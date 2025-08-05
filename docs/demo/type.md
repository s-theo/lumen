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
