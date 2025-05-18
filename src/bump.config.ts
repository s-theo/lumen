import { defineConfig } from 'bumpp'

export default defineConfig({
  tag: 'v%s',
  commit: 'chore: release v%s',
  sign: true
})
