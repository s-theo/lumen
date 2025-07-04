<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, onMounted, ref } from 'vue'
import { Icon, Link } from './common'
import { FooterData, getLocaleKey, isExternal } from '../types'

const props = defineProps<{ Footer_Data: FooterData }>()

const localeKey = getLocaleKey()

const footer = computed(() => {
  return props.Footer_Data.i18n?.[localeKey.value] ?? props.Footer_Data
})

const Year = ref('')
onMounted(() => {
  Year.value = new Date().getFullYear().toString()
})

const { frontmatter } = useData()
const isHome = computed(() => {
  return !!(frontmatter.value.isHome ?? frontmatter.value.layout === 'home')
})
</script>

<template>
  <footer v-if="isHome" class="footer">
    <div v-if="footer.group?.length" class="list-container">
      <section v-for="(section, index) in footer.group" :key="section.title + index">
        <h3 class="list-title">
          <Icon v-if="section.icon" class="icon-space" :icon="section.icon" :alt="section.alt" size="12" />
          {{ section.title }}
        </h3>
        <ul>
          <li v-for="(link, idx) in section.links" :key="link.link + idx" class="list-links">
            <Icon v-if="link.icon" class="icon-space" :icon="link.icon" :alt="link.alt" size="12" />
            <Link
              :href="link.link"
              :rel="link.rel"
              :target="link.target"
              :no-icon="footer.noIcon || section.noIcon || link.noIcon || !isExternal(link.link)"
            >
              {{ link.name }}
            </Link>
          </li>
        </ul>
      </section>
    </div>

    <div class="footer-info">
      <span v-if="footer.beian?.icp || footer.beian?.police">
        <p v-if="footer.beian?.icp?.number" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon icon-space"
            :icon="footer.beian.icp.icon || 'fluent:globe-shield-48-filled'"
            :alt="footer.beian.icp.alt"
            size="12"
          />
          <Link
            :href="footer.beian.icp.link || 'https://beian.miit.gov.cn/#/Integrated/index'"
            :rel="footer.beian.icp.rel"
            :target="footer.beian.icp.target"
            no-icon
          >
            {{ footer.beian.icp.number }}
          </Link>
        </p>

        <span class="info-spacing"></span>

        <p v-if="footer.beian?.police?.number" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon icon-space"
            :icon="footer.beian.police.icon || 'fluent:shield-checkmark-48-filled'"
            :alt="footer.beian.police.alt"
            size="12"
          />
          <Link
            :href="footer.beian.police.link || 'https://beian.mps.gov.cn/'"
            :rel="footer.beian.police.rel"
            :target="footer.beian.police.target"
            no-icon
          >
            {{ footer.beian.police.number }}
          </Link>
        </p>
      </span>

      <span class="info-spacing-copyright"></span>

      <span v-if="footer.author?.name">
        <p class="footer-infotext">
          <Icon
            class="info-icon icon-space"
            :icon="footer.author.icon || 'ri:copyright-line'"
            :alt="footer.author.alt"
            size="12"
          />
          <Link
            :href="footer.author.link || `https://github.com/${footer.author.name}`"
            :rel="footer.author.rel"
            :target="footer.author.target"
            no-icon
          >
            {{ Year }} {{ footer.author.name }} {{ footer.author.text || 'All Rights Reserved.' }}
          </Link>
        </p>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--Footer-bg);
  width: 100%;
}

.footer a {
  position: relative;
  transition:
    color 0.25s,
    text-decoration-color 0.25s;
}

.footer a:hover {
  color: var(--Footer-link-hover);
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
  opacity: 0.9;
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
  font-size: 0.75em;
}

.info-spacing,
.info-spacing-copyright {
  margin-left: 1em;
}

.info-icon {
  display: inline-block;
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
