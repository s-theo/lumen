/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import * as lm from '@theojs/lumen'
import '@theojs/lumen/style'
import './style/home-image.css'
import { Aside_Data, Footer_Data, Waline_Data } from '../data'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(lm.Notice),
      'aside-ads-before': () => h(lm.Aside, { Aside_Data }),
      'layout-bottom': () => h(lm.Footer, { Footer_Data }),
      'doc-after': () => h(lm.Waline, { Waline_Data })
    })
  },
  enhanceApp: ({ app }) => {
    lm.umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'lumen.theojs.cn'
    })
    app.component('Pill', lm.Pill)
    app.component('Links', lm.Links)
    app.component('Card', lm.Card)
    app.component('Copy', lm.CopyText)
    app.component('BoxCube', lm.BoxCube)
    app.component('Home', lm.Underline)
    app.component('Waline', lm.Waline)
  }
}
