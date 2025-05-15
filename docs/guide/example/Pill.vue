<!-- iconify图标 -->
<Pill
  name="Iconify"
  link="https://iconify.design/"
  icon="line-md:iconify2-static"
  color="#1769AA"
  alt="iconify icon"
/>
<Pill
  name="Vue"
  link="https://vuejs.org/"
  icon="vscode-icons:file-type-vue"
  alt="vue icon"
/>

<!-- 深浅模式的iconify图标 -->
<Pill
  name="Vercel"
  link="https://vercel.com/"
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel' }"
  :color="{ light: '#000000', dark: '#FFFFFF' }"
  alt="vercel icon"
/>
<Pill
  name="Vite"
  link="https://vitejs.dev/"
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
  alt="vite icon"
/>

<!-- 图片 -->
<Pill
  name="支付宝"
  link="https://i.theojs.cn/alipay.webp"
  image="https://i.theojs.cn/logo/alipay.svg"
  alt="alipay icon"
/>

<!-- 深浅模式的图片 -->
<Pill
  name="GitHub"
  link="https://github.com"
  :image="{
    light: 'https://i.theojs.cn/logo/github.svg',
    dark: 'https://i.theojs.cn/logo/github-dark.svg'
  }"
  alt="github icon"
/>
