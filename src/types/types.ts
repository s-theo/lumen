import type { WalineProps } from '@waline/client/full'

/** 图标和图片的类型 */
export type IconImageType = string | IconImageMode
/** Alt 文本类型 */
export type AltType = string | undefined
/** 宽度类型 */
export type WidthType = string | undefined
/** 高度类型 */
export type HeightType = string | undefined
/** 链接类型 */
export type LinkType = string | undefined
/** Rel 属性类型 */
export type RelType = string | undefined
/** 样式类类型 */
export type ClassesType = string | string[]

export interface IconImageMode {
  /** 浅色模式下的图标和图片 */
  light: string
  /** 深色模式下的图标和图片 */
  dark: string
}

/** DocPill 接口 */
export interface Pill {
  /** Pill 名称。 */
  name: string
  /** Pill 链接。 */
  link?: LinkType
  /** 图标名称（支持 iconify） */
  icon?: IconImageType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 图片路径（支持 light 和 dark 模式） */
  image?: IconImageType
  /** 图片的 alt 文本 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** DocLinks 接口 */
export interface LinkItem {
  /** DocLinks 名称。 */
  name: string
  /** DocLinks 描述。 */
  desc?: string
  /** DocLinks 链接。 */
  link: LinkType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 图标名称（支持 iconify） */
  icon?: IconImageType
  /** 图片路径（支持 light 和 dark 模式） */
  image?: IconImageType
  /** 图片的 alt 文本 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** BoxCube 接口 */
export interface BoxCubeItem {
  /** BoxCube 名称。 */
  name: string
  /** BoxCube 链接。 */
  link: LinkType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 图标名称（支持 iconify） */
  icon?: IconImageType
  /** 图片路径（支持 light 和 dark 模式） */
  image?: IconImageType
  /** 图片的 alt 文本 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** Promo 类型：表示一个具有活动性质的推广项 */
export interface Promo {
  /** 活动标题 */
  promo: string
  /** 跳转链接 */
  link: LinkType
  /** 图标（支持 iconify 或 image 的 light/dark） */
  icon?: IconImageType
  /** 图标颜色（支持 light/dark） */
  color?: IconImageType
  /** 图片资源（支持 light/dark） */
  image?: IconImageType
  /** 附加信息1 */
  info1?: string
  /** 附加信息2 */
  info2?: string
  /** 图标/图片的替代文本 */
  alt?: AltType
  /** 链接的 rel 属性 */
  rel?: RelType
}

/** Normal 类型：表示普通链接项 */
export interface Normal {
  /** 名称标题 */
  name: string
  /** 跳转链接 */
  link: LinkType
  /** 图标（可选） */
  icon?: IconImageType
  /** 图标颜色（可选） */
  color?: IconImageType
  /** 图片资源（可选） */
  image?: IconImageType
  /** 隐藏信息1（可用于鼠标悬停显示） */
  hide1?: string
  /** 隐藏信息2 */
  hide2?: string
  /** 图标/图片的替代文本 */
  alt?: AltType
  /** 链接的 rel 属性 */
  rel?: RelType
}

/** AsidePromo 类型：继承 Promo，同时支持 i18n 局部多语言（排除递归） */
export type AsidePromo = Promo & {
  /** 可选的多语言翻译字段，键为语言代码 */
  i18n?: Partial<Record<string, Omit<AsidePromo, 'i18n'>>>
}

/** AsideNormal 类型：继承 Normal，同时支持 i18n 局部多语言（排除递归） */
export type AsideNormal = Normal & {
  /** 可选的多语言翻译字段，键为语言代码 */
  i18n?: Partial<Record<string, Omit<AsideNormal, 'i18n'>>>
}

/** AsideAll 类型：联合类型，允许是 Promo 或 Normal */
export type AsideAll = AsidePromo | AsideNormal

/**
 * AsideItem 类型：支持两种结构
 *
 * - 单语言：直接是 AsideAll[] 数组
 * - 多语言：包裹在 i18n 对象中，按语言划分不同的 AsideAll[] 内容
 */
export type AsideItem =
  | AsideAll[] // 单语言结构
  | {
      i18n: Record<string, AsideAll[]> // 多语言结构，键为语言代码，如 'root' | 'en' 等
    }

/**
 * AsideDataWrapper 类型：最终使用的封装结构
 *
 * - 可以是直接的 AsideAll[]（单语言）
 * - 或是 { i18n: Record<string, AsideAll[]> } 的对象（多语言）
 */
export type AsideDataWrapper = AsideAll[] | { i18n: Record<string, AsideAll[]> }

/** Announcement 接口 */
export interface Prelink {
  /** 链接的 URL。 */
  link?: LinkType
  /** 链接的标题。 */
  title: string
  /** 链接的内容。 */
  content?: string
  /** 日期 */
  date?: string
  /** 日期文本 */
  dateText?: string
  /** 日期图标 */
  dateIcon?: string
  /** 图片的 alt 文本 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** Waline 配置数据类型接口。 */
export interface WalineData {
  serverURL: WalineProps['serverURL']
  path?: string
  lang?: WalineProps['lang']
  locale?: WalineProps['locale']
  emoji?: WalineProps['emoji']
  commentSorting?: WalineProps['commentSorting']
  meta?: WalineProps['meta']
  requiredMeta?: WalineProps['requiredMeta']
  login?: WalineProps['login']
  wordLimit?: WalineProps['wordLimit']
  pageSize?: WalineProps['pageSize']
  imageUploader?: WalineProps['imageUploader']
  highlighter?: WalineProps['highlighter']
  texRenderer?: WalineProps['texRenderer']
  search?: WalineProps['search']
  noCopyright?: WalineProps['noCopyright']
  recaptchaV3Key?: WalineProps['recaptchaV3Key']
  turnstileKey?: WalineProps['turnstileKey']
  reaction?: WalineProps['reaction']
}

/** HomeFooter 接口 */
export interface FooterData {
  i18n?: Record<string, Partial<Omit<FooterData, 'i18n'>>>
  /** 链接分组数组。 */
  group?: Group[]
  /** 备案信息。 */
  beian?: Beian
  /** 作者信息。 */
  author?: Author
  /** 外部链接图标开关 */
  noIcon?: boolean
}

/** HomeFooter Group 接口 */
export interface Group {
  /** 图标名称（支持 iconify） */
  icon?: IconImageType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 图标样式 */
  color?: IconImageType
  /** 分组标题 */
  title: string
  /** 链接数组 */
  links: Link[]
  /** 无障碍描述 */
  alt?: AltType
}

/** HomeFooter Beian 接口 */
export interface Beian {
  /** ICP 备案 */
  icp?: Icp
  /** 公安备案 */
  police?: Police
  /** 是否显示图标 */
  showIcon?: boolean
}

/** HomeFooter Beian 接口 */
export interface Icp {
  /** ICP 备案号 */
  number?: string
  /** ICP 图标，@default 'fluent:globe-shield-48-filled' */
  icon?: IconImageType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 无障碍描述 */
  alt?: string
  /** Rel 属性 */
  rel?: RelType
}

/** HomeFooter Beian 接口 */
export interface Police {
  /** 公安备案号 */
  number?: string
  /** 公安备案图标，@default 'fluent:shield-checkmark-48-filled' */
  icon?: IconImageType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 无障碍描述 */
  alt?: string
  /** Rel 属性 */
  rel?: RelType
}

/** HomeFooter Author 接口 */
export interface Author {
  /** 作者姓名 */
  name?: string
  /** 作者链接 */
  link?: LinkType
  /** 版权图标图标 */
  icon?: IconImageType
  /** 图标的颜色。 */
  color?: IconImageType
  /** 无障碍描述 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** HomeFooter Link 接口 */
export interface Link {
  /** 链接图标 */
  icon?: IconImageType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 链接样式 */
  color?: IconImageType
  /** 链接名称 */
  name: string
  /** 链接地址 */
  link: LinkType
  /** 无障碍描述 */
  alt?: AltType
  /** Rel 属性 */
  rel?: RelType
}

/** DocVideoLink 接口 */
export interface VideoProps {
  /** 可选的 id，当选择平台时需要使用 id */
  id?: string
  /** 可选的平台类型 */
  is?: 'youtube' | 'bilibili' | 'tencent' | 'youku' | 'vimeo'
  /** 自定义视频链接，只有在 `is` 和`id` 不存在时才需要提供。 */
  src?: string
}
