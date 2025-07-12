<Card
  :items="[
    // iconify 图标
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。',
      link: 'https://iconify.design/'
    },
    // 普通图片
    {
      image: { src: 'https://i.theojs.cn/logo/alipay.svg', alt: 'alipay icon' },
      name: '支付宝',
      desc: '中国领先的第三方支付平台，支持转账、支付和理财服务。',
      link: 'https://i.theojs.cn/alipay.webp'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        alt: 'github icon'
      },
      name: 'GitHub',
      desc: '全球最大代码托管平台，支持版本控制和协作开发。',
      link: 'https://github.com/'
    },
    // 深浅模式 iconify 图标
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: 'Vercel',
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    }
  ]"
/>
