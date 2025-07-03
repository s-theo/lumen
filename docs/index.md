---
layout: home

hero:
  name: Lumen
  text: Enhanced
  textsuffix: Theme
  tagline: ✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库

  image:
    src: 'https://i.theojs.cn/logo/Lumen-Logo.webp'
    alt: '@theojs/lumen'
    loading: eager
    fetchpriority: high
    width: 320
    height: 320

  Notice:
    title: '<iconify-icon icon="streamline-emojis:wrapped-gift-2" ></iconify-icon> <span class="promo-title"> 青云梯 最具性价比IPLC专线!</span>'
    # desc: '
    # · 月/季/半年付 <span class="promo-text">85折: wuyi85</span><br>
    # · 年付以上 <span class="promo-text">64折: wuyi80</span><br>
    # '
    # date: '6月30号23点59分'
    # dateText: '活动截止至'
    link: https://itheo.top/qyt
    rel: sponsored

  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started

    - theme: alt
      text: 账号合租
      link: https://doc.theojs.cn/serve/sharing/account-sharing-guide

    - theme: alt
      text: 专线推荐
      link: https://doc.theojs.cn/serve/airport/flyingbird

    - theme: brand
      text: ❤️ 成为赞助商
      link: https://i.theojs.cn/sponsor.webp

    - theme: custom-alt
      text: Theo-Docs
      link: https://doc.theojs.cn

    - theme: custom-alt
      text: 玄学宝典
      link: https://xx.theojs.cn

features:
  - title: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece-solid" style="color:#ff9800"></iconify-icon>开箱即用的主题配色'
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/guide/theme'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:megaphone" style="color:#e74c3c"></iconify-icon>首页公告栏'
    details: 在首页展示重要通知或动态信息，吸引用户关注，提升站点的互动性。
    link: '/guide/notice'

  - title: '<iconify-icon class="i-mr" icon="heroicons:paint-brush-solid" style="color:#3498db"></iconify-icon>首页下划线'
    details: 实现首页副标题元素的下划线动画，增加视觉层次感和动感效果。
    link: '/guide/underline'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:template" style="color:#2ecc71"></iconify-icon>页脚配置'
    details: 灵活自定义页脚内容，展示版权信息、链接分组等，增强站点的专业感。
    link: '/guide/footer'

  - title: '<iconify-icon class="i-mr" icon="heroicons:bars-3-16-solid" style="color:#9b59b6"></iconify-icon>侧边栏链接'
    details: 在侧边栏中展示常用链接，提升用户导航体验，快速访问相关内容。
    link: '/guide/aside'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:video-camera" style="color:#f39c12"></iconify-icon>视频组件'
    details: 支持嵌入视频内容，提供更加丰富的多媒体展示形式，增强用户互动体验。
    link: '/guide/vid'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:rectangle-group" style="color:#1abc9c"></iconify-icon>链接卡片'
    details: 设计美观的链接卡片，直观展示外部资源或推荐内容，提升页面内容的吸引力。
    link: '/guide/linkcard'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:photo" style="color:#2ecc71"></iconify-icon>图片描述'
    details: 为图片添加说明文字，增强内容语义表达，提高无障碍访问体验，同时有助于SEO。
    link: '/guide/image-description'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:chat" style="color:#3498db"></iconify-icon>集成评论'
    details: 集成 waline 评论，提升用户互动体验，增强站点的社交功能。
    link: '/guide/comment'

  - title: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square-solid" style="color:#007bff"></iconify-icon>站点统计'
    details: 集成 Google、Baidu、Umami 分析工具，追踪访问数据。
    link: '/guide/analytics'

  - title: '<iconify-icon class="i-mr" icon="line-md:iconify2-static" style="color:#1769AA"></iconify-icon>图标集成'
    details: 轻松集成 Iconify 图标库，提供上千种矢量图标，支持多种平台，丰富站点的视觉表现和交互体验。
    link: '/guide/theme#图标支持'
---

<Home />

<style>
:root {
  --vp-home-hero-image-background-image: none !important;
}
</style>

<!-- <Waline :Waline_Data="{  serverURL: 'https://waline-lumen.netlify.app/.netlify/functions/comment/'   ,lang: 'zh-CN',
  noCopyright: true,
  reaction: true }" /> -->
