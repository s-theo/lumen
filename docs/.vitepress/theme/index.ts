import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import {
  Announcement,
  DocAsideLogo,
  DocBox,
  DocBoxCube,
  DocLinks,
  DocPill,
  DocVideoLink,
  HomeFooter,
  HomeUnderline,
  ShareButton,
  Twikoo,
  umamiAnalytics
} from '@theojs/lumen'
import '@theojs/lumen/theme'

import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'

import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'aside-outline-before': () => h(ShareButton),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Twikoo, { Twikoo_Data })
    })
  },
  enhanceApp: ({ app }) => {
    if ((import.meta as any).env.PROD) {
      umamiAnalytics({
        id: (import.meta as any).env.VITE_UMAMI_ID,
        src: (import.meta as any).env.VITE_UMAMI_SRC
      })
    }
    app.component('Box', DocBox)
    app.component('Pill', DocPill)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
    app.component('Twikoo', Twikoo)
  }
}
