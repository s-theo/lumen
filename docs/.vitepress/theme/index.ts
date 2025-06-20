/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import {
  Announcement,
  DocAsideLogo,
  DocBoxCube,
  DocCard,
  DocLinks,
  DocPill,
  DocVideoLink,
  HomeFooter,
  HomeUnderline,
  Waline,
  umamiAnalytics
} from '@theojs/lumen'
import '@theojs/lumen/theme'
import { Aside_Data, Footer_Data, Waline_Data } from '../data'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Waline, { Waline_Data })
    })
  },
  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'lumen.theojs.cn'
    })
    app.component('Pill', DocPill)
    app.component('Links', DocLinks)
    app.component('Card', DocCard)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
    app.component('Waline', Waline)
  }
}
