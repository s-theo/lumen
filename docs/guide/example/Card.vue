<Card
  grid
  :items="[
    // iconify 图标
    {
      name: 'iconify',
      link: 'https://iconify.design/',
      icon: {
        icon: 'line-md:iconify2-static',
        color: '#1769AA',
        alt: 'iconify icon'
      },
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。',
      rel: 'noopener noreferrer'
    },
    // 普通图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/alipay.webp',
      image: {
        src: 'https://i.theojs.cn/logo/alipay.svg',
        alt: 'alipay icon'
      },
      desc: '中国领先的第三方支付平台，支持转账、支付和理财服务。',
      rel: 'noopener noreferrer'
    },
    // 深浅模式图片
    {
      name: 'GitHub',
      link: 'https://github.com',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        alt: 'github icon'
      },
      desc: '全球最大代码托管平台，支持版本控制和协作开发。',
      rel: 'noopener noreferrer'
    },
    // 深浅模式 iconify 图标
    {
      name: 'Vercel',
      link: 'https://vercel.com/',
      icon: {
        light: 'ion:logo-vercel',
        dark: 'ion:logo-vercel',
        color: { light: '#000000', dark: '#FFFFFF' },
        alt: 'Vercel icon'
      },
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      rel: 'noopener noreferrer'
    },
    // 深浅模式 iconify 图标，无 color
    {
      link: 'https://vitejs.dev/',
      icon: {
        light: 'skill-icons:vite-light',
        dark: 'skill-icons:vite-dark',
        alt: 'Vite icon'
      },
      size: 128,
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      rel: 'noopener noreferrer'
    },
    {
      link: 'https://www.netlify.com/',
      icon: {
        light: 'skill-icons:netlify-light',
        dark: 'skill-icons:netlify-dark',
        alt: 'Netlify icon'
      },
      size: 128,
      desc: '提供 CI/CD、自动构建和无服务器函数的前端部署平台。',
      rel: 'noopener noreferrer'
    }
  ]"
/>
