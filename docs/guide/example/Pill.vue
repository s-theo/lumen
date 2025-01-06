<!-- iconify图标 -->
<Pill name="Iconify" link="#" icon="line-md:iconify2-static" color="#1769AA" />
<Pill name="Vue" link="#" icon="vscode-icons:file-type-vue" />

<!-- 深浅模式的iconify图标 -->
<Pill
  name="Vercel"
  link="#"
  :icon="{ light: 'ion:logo-vercel', dark: 'ion:logo-vercel' }"
  :color="{ light: '#000000', dark: '#FFFFFF' }"
/>
<Pill
  name="Vite"
  link="#"
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
/>

<!-- 图片 -->
<Pill
  name="支付宝"
  link="https://i.theojs.cn/docs/202405201752089.jpg"
  image="https://i.theojs.cn/logo/alipay.svg"
/>

<!-- 深浅模式的图片 -->
<Pill
  name="GitHub"
  link="#"
  :image="{
    light: 'https://i.theojs.cn/logo/github.svg',
    dark: 'https://i.theojs.cn/logo/github-dark.svg'
  }"
/>
