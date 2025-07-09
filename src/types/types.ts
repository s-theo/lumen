import type { WalineProps } from '@waline/client/full'

/** 图标和图片的类型 */
export type IconImageMode = string | { light: string; dark: string }
/** Alt 文本类型 */
export type AltType = string | undefined
/** 尺寸类型 */
export type SizeType = null | string | number
/** 链接类型 */
export type LinkType = string | undefined
/** Rel 属性类型 */
export type RelType = string | undefined
/** 目标类型 */
export type TargetType = string | undefined

export type IconType =
  | string
  | { icon: string; color?: IconImageMode }
  | { light: string; dark: string; color?: IconImageMode }

export type ImageType =
  | string
  | { src: string; crop?: boolean; alt?: AltType }
  | { light: string; dark: string; crop?: boolean; alt?: AltType }

/** DocPill 接口 */
export interface PillItem {
  /** Pill 名称。 */
  name: string
  /** Pill 链接。 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
}

/** DocLinks 接口 */
export interface LinkItem {
  /** DocLinks 名称。 */
  name: string
  /** DocLinks 描述。 */
  desc?: string
  /** DocLinks 链接。 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
}

/** BoxCube 接口 */
export interface BoxCubeItem {
  /** BoxCube 名称。 */
  name: string
  /** BoxCube 链接。 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
}

/** DocCard 接口 */
export interface CardItem {
  /** DocCard 名称。 */
  name?: string
  /** DocCard 描述。 */
  desc?: string
  /** DocCard 链接。 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
}

/** Promo 类型：表示一个具有活动性质的推广项 */
export interface Promo {
  /** 活动标题 */
  promo: string
  /** 跳转链接 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 附加信息1 */
  info1?: string
  /** 附加信息2 */
  info2?: string
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
}

/** Normal 类型：表示普通链接项 */
export interface Normal {
  /** 名称标题 */
  name: string
  /** 跳转链接 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 隐藏信息1（可用于鼠标悬停显示） */
  hide1?: string
  /** 隐藏信息2 */
  hide2?: string
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 */
  size?: SizeType
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
export type AsideItem = AsideAll[] | { i18n: Record<string, AsideAll[]> }

/** Notice 接口 */
export interface NoticeItem {
  /** 链接的 URL。 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 链接的标题。 */
  title: string
  /** 链接的内容。 */
  desc?: string
  /** 日期 */
  date?: string
  /** 日期文本 */
  dateText?: string
  /** 日期图标 */
  dateIcon?: IconType
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

/** Footer 接口 */
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

/** Footer Group 接口 */
export interface Group {
  /** 图标配置 */
  icon?: IconType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 分组标题 */
  title: string
  /** 链接数组 */
  links: Link[]
}

/** Footer Beian 接口 */
export interface Beian {
  /** ICP 备案 */
  icp?: Icp
  /** 公安备案 */
  police?: Police
  /** 是否显示图标 */
  showIcon?: boolean
}

/** Footer Beian 接口 */
export interface Icp {
  /** ICP 备案号 */
  number?: string
  /** ICP 图标，@default 'fluent:globe-shield-48-filled' */
  icon?: IconType
  /** ICP网站或自定义链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
}

/** Footer Beian 接口 */
export interface Police {
  /** 公安备案号 */
  number?: string
  /** 公安备案图标，@default 'fluent:shield-checkmark-48-filled' */
  icon?: IconType
  /** 公安备案网站或自定义链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
}

/** Footer Author 接口 */
export interface Author {
  /** 作者姓名 */
  name?: string
  /** 作者链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
  /** 版权图标图标 */
  icon?: IconType
  /** 版权文本 */
  text?: string
}

/** Footer Link 接口 */
export interface Link {
  /** 链接图标 */
  icon?: IconType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 链接名称 */
  name: string
  /** 链接地址 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标（可选） */
  target?: TargetType
}

/** Vid 接口 */
export interface VidItem {
  /** 可选的 id，当选择平台时需要使用 id */
  id?: string
  /** 可选的平台类型 */
  is?: 'youtube' | 'bilibili' | 'tencent' | 'youku' | 'vimeo'
  /** 自定义视频链接，只有在 `is` 和`id` 不存在时才需要提供。 */
  src?: string
}
