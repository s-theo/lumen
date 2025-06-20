## IconType

```ts
export type IconImageMode = string | { light: string; dark: string }

export type IconType =
  | string
  | { icon: string; color?: IconImageMode; alt?: AltType }
  | { light: string; dark: string; color?: IconImageMode; alt?: AltType }
```

## ImageType

```ts
export type ImageType =
  | string
  | { src: string; crop?: CropType; alt?: AltType }
  | { light: string; dark: string; crop?: CropType; alt?: AltType }
```
