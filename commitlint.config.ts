import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('bump deps')]
}

export default config
