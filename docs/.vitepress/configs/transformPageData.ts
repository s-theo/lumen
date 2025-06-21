import type { UserConfig } from 'vitepress'

const baseUrl = 'https://lumen.theojs.cn'
const imgUrl = 'https://i.theojs.cn/logo/Lumen-Logo.webp'
const defaultOgImage = 'https://i.theojs.cn/logo/Lumen-og.webp'

export const transformPageData: UserConfig['transformPageData'] = (pageData) => {
  // canonical URL
  const DynamicUrl = `${baseUrl}/${pageData.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')

  pageData.frontmatter.head ??= []

  // 过滤掉已有的 canonical 和 JSON-LD script，避免重复
  pageData.frontmatter.head = pageData.frontmatter.head.filter(
    (item) =>
      !(
        (item[0] === 'link' && item[1]?.rel === 'canonical') ||
        (item[0] === 'script' && item[1]?.type === 'application/ld+json')
      )
  )

  // 添加 canonical 链接
  pageData.frontmatter.head.push(['link', { rel: 'canonical', href: DynamicUrl }])

  // 提取 og:image，没有则用默认
  const ogImageEntry = pageData.frontmatter.head.find((item) => item[0] === 'meta' && item[1]?.property === 'og:image')
  const ogImage = ogImageEntry?.[1]?.content || defaultOgImage

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
        description: '✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库',
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
        mainEntityOfPage: DynamicUrl,
        description: pageData.description || '',
        url: DynamicUrl,
        image: ogImage
      }

  // 添加 JSON-LD
  pageData.frontmatter.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)])
}
