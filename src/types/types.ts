export interface IconImageMode {
  /** 浅色模式下的图标和图片 */
  light: string
  /** 深色模式下的图标和图片 */
  dark: string
}

/** DocBox 接口 */
export interface BoxItem {
  /** DocBox 名称。 */
  name: string
  /** DocBox 链接。 */
  link: string
  /** DocBox 标签。 */
  tag?: string
  /** 图标的颜色。 */
  color?: string | IconImageMode
  /** 图标名称（支持 iconify） */
  icon?: string | IconImageMode
  /** 图片路径（支持 light 和 dark 模式） */
  image?: string | IconImageMode
}

/** DocPill 接口 */
export interface Pill {
  /** Pill 名称。 */
  name: string
  /** Pill 链接。 */
  link?: string
  /** 图标名称（支持 iconify） */
  icon?: string | IconImageMode
  /** 图标的颜色。 */
  color?: string | IconImageMode
  /** 图片路径（支持 light 和 dark 模式） */
  image?: string | IconImageMode
}

/** DocLinks 接口 */
export interface LinkItem {
  /** DocLinks 名称。 */
  name: string
  /** DocLinks 描述。 */
  desc?: string
  /** DocLinks 链接。 */
  link: string
  /** 图标的颜色。 */
  color?: string | IconImageMode
  /** 图标名称（支持 iconify） */
  icon?: string | IconImageMode
  /** 图片路径（支持 light 和 dark 模式） */
  image?: string | IconImageMode
}

/** BoxCube 接口 */
export interface BoxCubeItem {
  /** BoxCube 名称。 */
  name: string
  /** BoxCube 链接。 */
  link: string
  /** BoxCube 描述。 */
  desc?: string
  /** BoxCube 标签。 */
  tag?: string
  /** 图标的颜色。 */
  color?: string | IconImageMode
  /** 图标名称（支持 iconify） */
  icon?: string | IconImageMode
  /** 图片路径（支持 light 和 dark 模式） */
  image?: string | IconImageMode
}

/** DocAsideLogo 接口 */
export interface AsideItem {
  /** 链接地址。 */
  link: string
  /** 图标的颜色。 */
  color?: string | IconImageMode
  /** 图标名称（支持 iconify） */
  icon?: string | IconImageMode
  /** 图片路径（支持 light 和 dark 模式） */
  image?: string | IconImageMode
  /** 名称。 */
  name?: string
  /** 活动名称。 */
  promo?: string
  /** 隐藏信息 1。 */
  hide1?: string
  /** 信息 1。 */
  info1?: string
  /** 隐藏信息 2。 */
  hide2?: string
  /** 信息 2。 */
  info2?: string
}

/** Announcement 接口 */
export interface Prelink {
  /** 链接的 URL。 */
  link?: string
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
  /** 复制开关 */
  copy?: boolean
  /** 复制的内容 */
  install?: string
}

/** Twikoo 配置数据类型接口。 */
export interface TwikooData {
  /** Twikoo 的环境 ID。 */
  envId: string
}

/** HomeFooter 接口 */
export interface FooterData {
  /** 链接分组数组。 */
  group?: Group[]
  /** 备案信息。 */
  beian?: Beian
  /** 作者信息。 */
  author?: Author
}

/** HomeFooter Group 接口 */
export interface Group {
  /** 图标名称（支持 iconify） */
  icon?: string
  /** 图标样式 */
  color?: string
  /** 分组标题 */
  title: string
  /** 链接数组 */
  links: Link[]
}

/** HomeFooter Beian 接口 */
export interface Beian {
  /** ICP 备案号 */
  icp?: string
  /** ICP 图标，@default 'fluent:globe-shield-48-filled' */
  icpIcon?: string
  /** 公安备案号 */
  police?: string
  /** 公安备案图标，@default 'fluent:shield-checkmark-48-filled' */
  policeIcon?: string
  /** 是否显示图标 */
  showIcon?: boolean
}

/** HomeFooter Author 接口 */
export interface Author {
  /** 作者姓名 */
  name?: string
  /** 作者链接 */
  link?: string
}

/** HomeFooter Link 接口 */
export interface Link {
  /** 链接图标 */
  icon?: string
  /** 链接样式 */
  color?: string
  /** 链接名称 */
  name: string
  /** 链接地址 */
  link: string
}

/** DocVideoLink 接口 */
export interface VideoProps {
  /** 可选的 id，当选择平台时需要使用 id */
  id?: string
  /** 可选的平台类型 */
  is?: 'youtube' | 'bilibili' | 'tencent' | 'youku' | 'vimeo' | 'xigua'
  /** 自定义视频链接，只有在 `is` 和`id` 不存在时才需要提供。 */
  src?: string
}

/** ShareButton 接口。 */
export interface ShareButtonItem {
  /** 按钮图标的类名，支持 Iconify 图标库。 @default 'solar:share-bold' */
  buttonIcon?: string

  /** 按钮显示的文本内容。@default '分享此页面' */
  buttonText?: string

  /** 复制成功后显示的图标的类名，支持 Iconify 图标库。 @default 'mdi:thumbs-up' */
  copiedIcon?: string

  /** 复制成功后显示的文本信息。@default '链接已复制!' */
  copiedText?: string
}
