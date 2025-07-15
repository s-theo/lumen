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
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      link: 'https://vitejs.dev/'
    }
  ]"
/>
