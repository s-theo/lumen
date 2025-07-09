## IconType

```ts
export type IconImageMode = string | { light: string; dark: string }

export type IconType =
  | string
  | { icon: string; color?: IconImageMode }
  | { light: string; dark: string; color?: IconImageMode }
```

## ImageType

```ts
export type ImageType =
  | string
  | { src: string; crop?: boolean; alt?: AltType; [prop: string]: any }
  | { light: string; dark: string; crop?: boolean; alt?: AltType; [prop: string]: any }
```
