import type { UserConfig } from 'vitepress'

const baseUrl = 'https://lumen.theojs.cn'
const imgUrl = 'https://i.theojs.cn/logo/Lumen-Logo.webp'

export const transformPageData: UserConfig['transformPageData'] = (
  pageData
) => {
  // canonical URL
  const DynamicUrl = `${baseUrl}/${pageData.relativePath}`
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')

  pageData.frontmatter.head ??= []
  pageData.frontmatter.head.push([
    'link',
    { rel: 'canonical', href: DynamicUrl }
  ])

  // Json-LD
  const isHome = pageData.relativePath === 'index.md'
  const jsonLd = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: baseUrl + '/',
        inLanguage: 'zh-Hans',
        author: {
          '@type': 'Person',
          name: 'Theo',
          url: baseUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: {
            '@type': 'ImageObject',
            url: imgUrl
          }
        },
        description: '✨ 集成 Vue 功能组件和主题美化的 VitePress 插件',
        name: 'Lumen'
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: pageData.frontmatter.title || '',
        inLanguage: 'zh-Hans',
        author: {
          '@type': 'Person',
          name: 'Theo',
          url: baseUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: {
            '@type': 'ImageObject',
            url: imgUrl
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': DynamicUrl
        },
        description: pageData.description,
        url: DynamicUrl
      }

  pageData.frontmatter.head.push([
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(jsonLd)
  ])
}
