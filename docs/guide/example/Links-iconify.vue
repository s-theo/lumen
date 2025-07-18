<!-- iconify 图标 + 无链接 -->
<Links
  :items="[
    {
      icon: { icon: 'line-md:iconify2-static', color: '#1769AA' },
      size: 48,
      name: 'iconify',
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。它允许开发者轻松地在项目中使用各种图标，并且支持深浅模式切换。'
    }
  ]"
/>

<Links
  :grid="3"
  :items="[
    // 深浅色模式的 iconify 图标 + v-html 渲染
    {
      icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } },
      name: `<p style='margin:0; font-style: italic;'>Vercel</p>`,
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      link: 'https://vercel.com/'
    },
    // 深浅模式 iconify 图标，无 color
    {
      icon: { light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' },
      name: 'Vite',
      desc: '极速的现代前端构建工具，支持热更新与按需加载。',
      link: 'https://vitejs.dev/'
    },
    // 无图标
    {
      name: 'MDN Web Docs',
      desc: '权威的 Web 技术文档库，涵盖 HTML、CSS 和 JavaScript。',
      link: 'https://developer.mozilla.org/'
    }
  ]"
/>
