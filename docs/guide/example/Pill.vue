<!-- iconify 图标 -->
<Pill
  :icon="{ icon: 'line-md:iconify2-static', color: '#1769AA' }"
  size="16"
  name="Iconify"
  link="https://iconify.design/"
/>

<Pill icon="vscode-icons:file-type-vue" name="Vue" link="https://vuejs.org/" />

<!-- 深浅模式的 iconify 图标 -->
<Pill
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel', color: { light: '#000000', dark: '#FFFFFF' } }"
  name="Vercel"
  link="https://vercel.com/"
/>

<Pill
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
  name="Vite"
  link="https://vitejs.dev/"
/>

<!-- 图片 -->
<Pill
  :image="{ src: 'https://i.theojs.cn/logo/alipay.svg', alt: 'github icon' }"
  name="支付宝"
  link="https://i.theojs.cn/alipay.webp"
/>

<!-- 深浅模式的图片 -->
<Pill
  :image="{
    light: 'https://i.theojs.cn/logo/github.svg',
    dark: 'https://i.theojs.cn/logo/github-dark.svg',
    alt: 'github icon',
    crop: true
  }"
  name="GitHub"
  link="https://github.com/"
/>
