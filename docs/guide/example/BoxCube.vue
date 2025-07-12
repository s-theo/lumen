<BoxCube
  :grid="6"
  :items="[
    // 普通 iconify 图标
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      name: 'iconify',
      link: 'https://iconify.design/'
    },
    // 深浅色模式的 iconify 图标
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: 'Vercel',
      link: 'https://vercel.com/'
    },
    // 深浅色模式 iconify 图标（无 color）
    {
      icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark' },
      name: 'Vite',
      link: 'https://vitejs.dev/'
    },
    // 普通图片
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
