<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { FooterData, getLocaleKey, isExternal } from '../types'
import { Icon, Link } from './common'

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
          <Icon
            v-if="section.icon"
            class="iconify icon-space"
            :icon="section.icon"
            :color="section.color"
            :alt="section.alt"
            width="14"
            height="14"
          />
          {{ section.title }}
        </h3>
        <ul>
          <li v-for="(link, idx) in section.links" :key="link.link + idx" class="list-links">
            <Icon
              v-if="link.icon"
              class="iconify icon-space"
              :icon="link.icon"
              :color="link.color"
              :alt="link.alt"
              width="14"
              height="14"
            />
            <Link :href="link.link" :rel="link.rel">
              {{ link.name }}
              <Icon
                v-if="isExternal(link.link)"
                class="external-link-icon"
                icon="basil:arrow-up-outline"
                alt="External Link Icon"
                width="14"
                height="14"
              />
            </Link>
          </li>
        </ul>
      </section>
    </div>

    <div class="footer-info">
      <span v-if="footer.beian?.icp || footer.beian?.police" class="info-item">
        <p v-if="footer.beian?.icp?.number" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon icon-space"
            :icon="footer.beian.icp.icon || 'fluent:globe-shield-48-filled'"
            :color="footer.beian.icp.color"
            :alt="footer.beian.icp.alt"
            width="12"
            height="12"
          />
          <Link :rel="footer.beian.icp.rel" href="https://beian.miit.gov.cn/#/Integrated/index">
            {{ footer.beian.icp.number }}
          </Link>
        </p>

        <span class="info-spacing"></span>

        <p v-if="footer.beian?.police?.number" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon icon-space"
            :icon="footer.beian.police.icon || 'fluent:shield-checkmark-48-filled'"
            :color="footer.beian.police.color"
            :alt="footer.beian.police.alt"
            width="12"
            height="12"
          />
          <Link :rel="footer.beian.police.rel" href="https://beian.mps.gov.cn/">
            {{ footer.beian.police.number }}
          </Link>
        </p>
      </span>

      <span class="info-spacing-copyright"></span>

      <span v-if="footer.author?.name" class="info-item">
        <p class="footer-infotext">
          <Icon
            class="info-icon"
            :icon="footer.author.icon || 'ri:copyright-line'"
            :color="footer.author.color"
            :alt="footer.author.alt"
            width="12"
            height="12"
          />
          {{ Year }}
          <Link :rel="footer.author.rel" :href="footer.author.link"> {{ footer.author.name }}. </Link>
          All Rights Reserved.
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  text-align: center;
}

.footer-infotext {
  display: inline-block;
  margin: 0;
  font-size: 0.75em;
}

.info-item {
  display: inline-block;
  letter-spacing: 0.025em;
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
