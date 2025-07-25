import type { MarkdownOptions } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { figure } from '@mdit/plugin-figure'
import { obsidianImgSize } from '@mdit/plugin-img-size'

export const markdown: MarkdownOptions = {
  theme: { light: 'one-light', dark: 'one-dark-pro' },
  config: (md) => {
    md.use(obsidianImgSize)
    md.use(groupIconMdPlugin, { titleBar: { includeSnippet: true } })
    md.use(figure)
  }
}
