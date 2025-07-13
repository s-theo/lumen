<BoxCube
  :grid="6"
  :items="[
    // 图片
    {
      image: { src: 'https://i.theojs.cn/logo/alipay.svg', alt: 'alipay icon' },
      name: '支付宝',
      link: 'https://i.theojs.cn/alipay.webp'
    },
    // 深浅色模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        alt: 'github icon',
        crop: true
      },
      size: 48,
      name: 'GitHub',
      link: 'https://github.com'
    }
  ]"
/>
