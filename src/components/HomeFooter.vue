<script setup lang="ts">
import { FooterData, Icon, isExternal } from '../types'
import { Link } from '../composables'
import { ref, onMounted } from 'vue'

// 使用 defineProps 定义属性
const props = defineProps<{ Footer_Data: FooterData }>()
const footer = props.Footer_Data

// 获取当前年份
const Year = ref('')

onMounted(() => {
  Year.value = new Date().getFullYear().toString()
})
</script>

<template>
  <footer class="footer">
    <div v-if="footer.group" class="list-container">
      <div
        v-for="(section, index) in footer.group || []"
        :key="section.title + index"
      >
        <span class="list-title">
          <template v-if="section.icon">
            <Icon
              class="iconify"
              :icon="section.icon"
              :color="section.color"
              :ssr="true"
              :inline="true"
              :aria-label="section.alt"
              width="14"
              height="14"
            />&nbsp;
          </template>
          {{ section.title }}
        </span>
        <div
          v-for="(link, idx) in section.links"
          :key="link.name + idx"
          class="list-links"
        >
          <template v-if="link.icon">
            <Icon
              :icon="link.icon"
              :color="link.color"
              :ssr="true"
              :inline="true"
              :aria-label="link.alt"
              width="14"
              height="14"
            />&nbsp;</template
          >
          <Link :href="link.link" :rel="link.rel"
            >{{ link.name
            }}<Icon
              v-if="isExternal(link.link)"
              class="external-link-icon"
              icon="basil:arrow-up-outline"
              :ssr="true"
              :inline="true"
              aria-label="External Link Icon"
              width="14"
              height="14"
            />
          </Link>
        </div>
      </div>
    </div>

    <div class="footer-info">
      <span v-if="footer.beian?.icp || footer.beian?.police" class="info-item">
        <p v-if="footer.beian?.icp" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            :aria-label="footer.beian.icpalt"
            :icon="footer.beian.icpIcon || 'fluent:globe-shield-48-filled'"
            :ssr="true"
            :inline="true"
            width="12"
            height="12"
          />&nbsp;<Link
            href="https://beian.miit.gov.cn/#/Integrated/index"
            title="ICP备案"
            target="_blank"
            rel="noreferrer"
          >
            {{ footer.beian.icp }}
          </Link>
        </p>
        <span class="info-spacing"></span>
        <p v-if="footer.beian?.police" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            :aria-label="footer.beian.policealt"
            :icon="
              footer.beian.policeIcon || 'fluent:shield-checkmark-48-filled'
            "
            :ssr="true"
            :inline="true"
            width="12"
            height="12"
          />&nbsp;<Link
            href="https://beian.mps.gov.cn/"
            title="公安备案"
            target="_blank"
            rel="noreferrer"
          >
            {{ footer.beian.police }}
          </Link>
        </p>
      </span>

      <span class="info-spacing-copyright"></span>

      <span v-if="footer.author?.name" class="info-item">
        <p class="footer-infotext">
          <Icon
            class="info-icon"
            :aria-label="footer.author.alt"
            icon="ri:copyright-line"
            :ssr="true"
            :inline="true"
            width="12"
            height="12"
          />&nbsp;{{ Year }}
          <Link
            :href="footer.author?.link"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            itemprop="author"
            >{{ footer.author?.name }}</Link
          >.&nbsp;All Rights Reserved.
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
