<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, onMounted, ref } from 'vue'
import { LmIcon, LmImage, LmLink } from './common'
import { getLocaleKey, isExternal } from '../composables'
import type { FooterData } from '../types'

const props = defineProps<{ Footer_Data: FooterData }>()

const localeKey = getLocaleKey()

const footer = computed(() => {
  return props.Footer_Data.i18n?.[localeKey.value] ?? props.Footer_Data
})

const currentYear = ref('')
onMounted(() => (currentYear.value = new Date().getFullYear().toString()))

const { frontmatter } = useData()
const isHome = computed(() => {
  return !!(frontmatter.value.isHome ?? frontmatter.value.layout === 'home')
})
</script>

<template>
  <footer v-if="isHome" class="footer">
    <div v-if="footer.group?.length" class="list-container">
      <section v-for="(section, i) in footer.group" :key="section.title + i">
        <h3 class="list-title">
          <LmIcon v-if="section.icon" class="icon-space" :icon="section.icon" size="12" />
          <LmImage v-else-if="section.image" class="image-inline" :image="section.image" size="12" />
          {{ section.title }}
        </h3>
        <ul class="list-links">
          <li v-for="(link, i) in section.links" :key="link.name + i">
            <LmIcon v-if="link.icon" class="icon-space" :icon="link.icon" size="12" />
            <LmImage v-else-if="link.image" class="image-inline" :image="link.image" size="12" />
            <LmLink
              :href="link.link"
              :rel="link.rel"
              :target="link.target"
              :no-icon="footer.noIcon || section.noIcon || link.noIcon || !isExternal(link.link ?? '')"
            >
              {{ link.name }}
            </LmLink>
          </li>
        </ul>
      </section>
    </div>

    <div v-if="footer.beian?.icp || footer.beian?.police || footer.author" class="footer-info">
      <template v-if="footer.beian?.icp || footer.beian?.police">
        <span v-if="footer.beian?.icp?.number" class="footer-infotext">
          <template v-if="footer.beian?.showIcon">
            <LmIcon v-if="footer.beian.icp.icon" class="icon-space" :icon="footer.beian.icp.icon" size="12" />
            <LmImage
              v-else-if="footer.beian.icp.image"
              class="image-inline"
              :image="footer.beian.icp.image"
              size="12"
            />
            <LmImage v-else class="image-inline" image="https://i.theojs.cn/logo/icp.webp" size="12" loading="eager" />
          </template>
          <LmLink
            :href="footer.beian.icp.link || 'https://beian.miit.gov.cn/'"
            :rel="footer.beian.icp.rel || 'nofollow'"
            :target="footer.beian.icp.target"
            no-icon
          >
            {{ footer.beian.icp.number }}
          </LmLink>
        </span>

        <span class="info-spacing"></span>

        <span v-if="footer.beian?.police?.number" class="footer-infotext">
          <template v-if="footer.beian?.showIcon">
            <LmIcon v-if="footer.beian.police.icon" class="icon-space" :icon="footer.beian.police.icon" size="12" />
            <LmImage
              v-else-if="footer.beian.police.image"
              class="image-inline"
              :image="footer.beian.police.image"
              size="12"
            />
            <LmImage v-else class="image-inline" image="https://i.theojs.cn/logo/ga.webp" size="12" loading="eager" />
          </template>
          <LmLink
            :href="footer.beian.police.link || 'https://beian.mps.gov.cn/'"
            :rel="footer.beian.police.rel"
            :target="footer.beian.police.target"
            no-icon
          >
            {{ footer.beian.police.number }}
          </LmLink>
        </span>
      </template>

      <span class="info-spacing-copyright"></span>

      <span v-if="footer.author?.name" class="footer-infotext">
        <LmIcon v-if="footer.author.icon" class="icon-space" :icon="footer.author.icon" size="12" />
        <LmImage v-else-if="footer.author.image" class="image-inline" :image="footer.author.image" size="12" />
        <LmIcon v-else class="icon-space" :icon="'ri:copyright-line'" size="12" />
        <LmLink
          :href="footer.author.link || `https://github.com/${footer.author.name}`"
          :rel="footer.author.rel"
          :target="footer.author.target"
          no-icon
        >
          {{ footer.author.startYear ? footer.author.startYear + ' - ' : '' }}{{ currentYear }}
          {{ footer.author.name }}
          {{ footer.author.text || 'All Rights Reserved.' }}
        </LmLink>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--lm-Footer-bg);
  width: 100%;
}

.footer a {
  position: relative;
  transition:
    color 0.25s,
    text-decoration-color 0.25s;
}

.footer a:hover {
  color: var(--lm-Footer-link-hover);
  -webkit-text-decoration: underline solid;
  text-decoration: underline solid;
  text-underline-offset: 4px;
}

.list-container {
  display: flex;
  justify-content: space-evenly;
  margin: 1.25em auto;
  max-width: 75%;
}

.list-title {
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 0.75em;
  line-height: 1.5;
}

.list-links {
  opacity: 0.75;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 2.4;
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
}

.icon-space {
  margin-right: 0.3em;
}

.footer-info {
  margin: 0.875em 0;
  text-align: center;
}

.footer-infotext {
  display: inline-block;
  margin: 0;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.6;
}

.info-spacing,
.info-spacing-copyright {
  margin-left: 1em;
}

.image-inline {
  display: inline-block;
  vertical-align: -0.125em;
  margin-right: 0.3em;
}

@media (max-width: 768px) {
  .list-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25em;
    justify-items: center;
  }

  .info-spacing-copyright {
    margin-left: -1em;
  }
}
</style>
