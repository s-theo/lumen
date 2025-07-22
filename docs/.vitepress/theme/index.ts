/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import {
  Aside,
  BoxCube,
  Card,
  CopyText,
  Footer,
  Links,
  Notice,
  Pill,
  Underline,
  Waline,
  umamiAnalytics
} from '@theojs/lumen'
import '@theojs/lumen/style'
import { Aside_Data, Footer_Data, Waline_Data } from '../data'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
      'aside-ads-before': () => h(Aside, { Aside_Data }),
      'layout-bottom': () => h(Footer, { Footer_Data }),
      'doc-after': () => h(Waline, { Waline_Data })
    })
  },
  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'lumen.theojs.cn'
    })
    app.component('Pill', Pill)
    app.component('Links', Links)
    app.component('Card', Card)
    app.component('Copy', CopyText)
    app.component('BoxCube', BoxCube)
    app.component('Home', Underline)
    app.component('Waline', Waline)
  }
}
