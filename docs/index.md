---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件

  image:
    src: '/Logo.webp'
    alt: '@theojs/lumen'

  prelink:
    # content: '<span class="promo-text" style="display: inline-flex; align-items: center"><img src="https://i.theojs.cn/logo/qyt.webp" style="height:0.65em; "/>IPLC纯专线内网传输线路 最高2.5Gbps速率!</span>'
    title: '🎉 TNT 五一特惠来了-低至48折起！'
    content: '
    · 全套餐 <span class="promo-text"> 8折 </span>优惠码 <span class="promo-text"> MayDay80 </span></br>
    · <span class="promo-text">3年付</span> 更可享受<span class="promo-text"> 4.8折优惠 </span>，非常划算哦</br>'
    date: '2025年5月10号23点59分'
    # dateIcon: 'mdi:calendar-star'
    dateText: '活动截止日期'
    link: https://itheo.top/tnt

  # prelink:
  #   copy: true
  #   install: 'pnpm add @theojs/lumen'
  #   title: '<iconify-icon class="i-mr" icon="fa6-solid:bolt" style="color:#63E6BE"></iconify-icon> 快速开始'
  #   content: '<span class="promo-text">pnpm add @theojs/lumen</span>'

  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started

    - theme: alt
      text: 账号合租
      link: https://doc.theojs.cn/serve/sharing/account-sharing-guide

    - theme: alt
      text: 专线推荐
      link: https://doc.theojs.cn/serve/airport/qingyunti

    - theme: sponsor
      text: ✨ 成为赞助商
      link: https://i.theojs.cn/sponsor.webp

    - theme: custom-alt
      text: 玄学宝典
      link: https://xx.theojs.cn

features:
  - title: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece-solid" style="color:#ff9800"></iconify-icon>开箱即用的主题配色'
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/guide/theme'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:megaphone" style="color:#e74c3c"></iconify-icon>首页公告栏'
    details: 在首页展示重要通知或动态信息，吸引用户关注，提升站点的互动性。
    link: '/guide/announcement'

  - title: '<iconify-icon class="i-mr" icon="heroicons:paint-brush-solid" style="color:#3498db"></iconify-icon>首页下划线'
    details: 实现页面元素的下划线动画，增加视觉层次感和动感效果。
    link: '/guide/homeUnderline'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:template" style="color:#2ecc71"></iconify-icon>页脚配置'
    details: 灵活自定义页脚内容，展示版权信息、链接分组等，增强站点的专业感。
    link: '/guide/homefooter'

  - title: '<iconify-icon class="i-mr" icon="heroicons:bars-3-16-solid" style="color:#9b59b6"></iconify-icon>侧边栏链接'
    details: 在侧边栏中展示常用链接，提升用户导航体验，快速访问相关内容。
    link: '/guide/docasidelogo'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:video-camera" style="color:#f39c12"></iconify-icon>视频组件'
    details: 支持嵌入视频内容，提供更加丰富的多媒体展示形式，增强用户互动体验。
    link: '/guide/docvideolink'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:rectangle-group" style="color:#1abc9c"></iconify-icon>链接卡片'
    details: 设计美观的链接卡片，直观展示外部资源或推荐内容，提升页面内容的吸引力。
    link: '/guide/linkcard'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:share" style="color:#007bff"></iconify-icon>页面分享按钮'
    details: 为每个页面提供便捷的分享功能，方便用户分享内容，提高站点的曝光率。
    link: '/guide/sharebutton'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:photo" style="color:#2ecc71"></iconify-icon>图片描述'
    details: 为图片添加说明文字，增强内容语义表达，提高无障碍访问体验，同时有助于SEO。
    link: '/guide/image-description'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:chat" style="color:#3498db"></iconify-icon>Twikoo 评论系统'
    details: 集成 Twikoo 评论系统，提升用户互动体验，增强站点的社交功能。
    link: '/guide/doctwikoo'

  - title: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square-solid" style="color:#007bff"></iconify-icon>站点统计'
    details: 提供站点数据统计功能，方便监控和分析访问情况，帮助优化站点性能。
    link: '/guide/analytics'

  - title: '<iconify-icon class="i-mr" icon="line-md:iconify2-static" style="color:#1769AA"></iconify-icon>Iconify 图标集成'
    details: 轻松集成 Iconify 图标库，提供上千种矢量图标，支持多种平台，丰富站点的视觉表现和交互体验。
    link: '/guide/theme#图标支持'

---

<Home />
<style>
  :root {
    --vp-home-hero-image-background-image: none !important;
  }
</style>

<!-- <Twikoo :Twikoo_Data="{ envId: 'https://share-twikoo.netlify.app/.netlify/functions/twikoo' }" /> -->
