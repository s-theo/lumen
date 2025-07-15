<Card
  :items="[
    // iconify 图标
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。',
      link: 'https://iconify.design/'
    },
    // 深浅模式 iconify 图标
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: 'Vercel',
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    },
    // 深浅色模式 iconify 图标（无 color）
    {
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      link: 'https://vitejs.dev/'
    }
  ]"
/>
