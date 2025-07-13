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
