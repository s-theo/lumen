<Card
  :grid="4"
  :items="[
    // 普通图片
    {
      image: 'https://i.theojs.cn/logo/alipay.svg',
      name: '支付宝',
      desc: '移动支付平台，提供便捷的在线支付和转账服务',
      link: 'https://i.theojs.cn/alipay.webp'
    },
    // 深浅模式图片
    {
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        crop: true
      },
      name: 'GitHub',
      desc: '全球最大代码托管平台，支持版本控制和协作开发。',
      link: 'https://github.com/'
    }
  ]"
/>
