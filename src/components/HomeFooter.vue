<script setup lang="ts">
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
</script>

<template>
  <footer class="footer">
    <div v-if="footer.group?.length" class="list-container">
      <section v-for="(section, index) in footer.group" :key="section.title + index">
        <h3 class="list-title">
          <Icon v-if="section.icon" class="icon-space" :icon="section.icon" :alt="section.alt" size="12" />
          {{ section.title }}
        </h3>
        <ul>
          <li v-for="(link, idx) in section.links" :key="link.link + idx" class="list-links">
            <Icon v-if="link.icon" class="icon-space" :icon="link.icon" :alt="link.alt" size="12" />
            <Link :href="link.link" :rel="link.rel" :target="link.target">
              {{ link.name }}
              <Icon
                v-if="isExternal(link.link) && !(footer.noIcon || section.noIcon || link.noIcon)"
                class="external-link-icon"
                icon="basil:arrow-up-outline"
                alt="External Link Icon"
                size="14"
              />
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
  background: var(--HomeFooter-bg);
  width: 100%;
}

.footer a {
  position: relative;
  transition:
    color 0.25s,
    text-decoration-color 0.25s;
}

.footer a:hover {
  color: var(--HomeFooter-link-hover);
  -webkit-text-decoration: underline solid;
  text-decoration: underline solid;
  text-underline-offset: 4px;
}

.has-sidebar ~ .footer {
  display: none;
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
  letter-spacing: 0.05em;
}

.list-links {
  opacity: 0.9;
  font-size: 0.75em;
  line-height: 2.4;
  letter-spacing: 0.025em;
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
  letter-spacing: 0.025em;
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

.external-link-icon {
  position: absolute;
  top: 0;
  flex-shrink: 0;
  transform: rotate(45deg);
  color: var(--vp-c-text-3);
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
