<BoxCube
  :grid="5"
  :items="[
    // 普通 iconify 图标
    {
      name: 'iconify',
      link: 'https://iconify.design/',
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA', alt: 'iconify icon' },
      rel: 'noopener noreferrer'
    },
    // 深浅色模式的 iconify 图标
    {
      name: 'Vercel',
      link: 'https://vercel.com/',
      icon: {
        light: 'ion:logo-vercel',
        dark: 'ion:logo-vercel',
        color: { light: '#000000', dark: '#FFFFFF' },
        alt: 'Vercel icon'
      },
      rel: 'noopener noreferrer'
    },
    // 深浅色模式 iconify 图标（无 color）
    {
      name: 'Vite',
      link: 'https://vitejs.dev/',
      icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark', alt: 'Vite icon' },
      rel: 'noopener noreferrer'
    },
    // 普通图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/alipay.webp',
      image: 'https://i.theojs.cn/logo/alipay.svg',
      alt: 'alipay icon',
      rel: 'noopener noreferrer'
    },
    // 深浅色模式图片
    {
      name: 'GitHub',
      link: 'https://github.com',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        alt: 'github icon',
        crop: true
      },
      size: 48,
      rel: 'noopener noreferrer'
    }
  ]"
/>
