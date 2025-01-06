<Box
  :items="[
    // iconify图标
    {
      name: 'iconify',
      link: '#',
      icon: 'line-md:iconify2-static',
      color: '#1769AA'
    },
    //深浅模式的iconify图标
    {
      name: 'Vercel',
      link: '#',
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
      color: { light: '#000000', dark: '#FFFFFF' }
    },
    {
      name: 'Vite',
      link: '#',
      icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark' }
    },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg'
      }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>
