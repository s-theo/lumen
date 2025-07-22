import { defineAsyncComponent } from 'vue'

export { default as Notice } from './LmNotice.vue'
export { default as Aside } from './LmAside.vue'
export { default as Pill } from './LmPill.vue'
export { default as BoxCube } from './LmBoxCube.vue'
export { default as Card } from './LmCard.vue'
export { default as Links } from './LmLinks.vue'
export { default as Footer } from './LmFooter.vue'
export { default as Underline } from './LmUnderline.vue'
export { default as CopyText } from './LmCopyText.vue'

export const Waline = defineAsyncComponent(() => import('./LmWaline.vue'))
