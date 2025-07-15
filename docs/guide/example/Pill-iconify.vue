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
  name="<em>Vercel</em>"
  link="https://vercel.com/"
/>

<Pill
  :icon="{ light: 'skill-icons:vite-dark', dark: 'skill-icons:vite-light' }"
  name="Vite"
  link="https://vitejs.dev/"
/>
