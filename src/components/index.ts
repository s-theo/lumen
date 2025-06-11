import { defineAsyncComponent } from 'vue'

export { default as Announcement } from './Announcement.vue'
export { default as DocAsideLogo } from './DocAsideLogo.vue'
export { default as DocBox } from './DocBox.vue'
export { default as DocPill } from './DocPill.vue'
export { default as DocBoxCube } from './DocBoxCube.vue'
export { default as DocLinks } from './DocLinks.vue'
export { default as DocVideoLink } from './DocVideoLink.vue'
export { default as HomeFooter } from './HomeFooter.vue'
export { default as HomeUnderline } from './HomeUnderline.vue'

export const Waline = defineAsyncComponent(() => import('./DocWaline.vue'))
