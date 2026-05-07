const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const typesDir = path.join(root, 'types')

if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true })
}

const indexDts = `export * from '../components'
export * from '../composables'
export * from './types'
`

const shimsDts = `declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.sass' {
  const content: Record<string, string>
  export default content
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'iconify-icon' {}

declare module '@theojs/lumen/*' {
  const content: any
  export default content
}
`

const styleDts = `declare module '@theojs/lumen/style' {}
declare module '@theojs/lumen/icon' {}
declare module '@theojs/lumen/button' {}
declare module '@theojs/lumen/colors' {}
declare module '@theojs/lumen/doc' {}
declare module '@theojs/lumen/doc-blocks' {}
declare module '@theojs/lumen/home' {}
declare module '@theojs/lumen/pic' {}
declare module '@theojs/lumen/badge' {}
declare module '@theojs/lumen/components-var' {}
`

fs.writeFileSync(path.join(typesDir, 'index.d.ts'), indexDts, 'utf8')
fs.writeFileSync(path.join(typesDir, 'shims.d.ts'), shimsDts, 'utf8')
fs.writeFileSync(path.join(typesDir, 'style.d.ts'), styleDts, 'utf8')

console.log('Generated src/types/index.d.ts, src/types/shims.d.ts, src/types/style.d.ts')
