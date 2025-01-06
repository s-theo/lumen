<script setup lang="ts">
import { FooterData, Icon } from '../types'

import dayjs from 'dayjs/esm'

// 使用 defineProps 定义属性
const props = defineProps<{ Footer_Data: FooterData }>()
const footer = props.Footer_Data

// 使用 dayjs 获取当前年份
const Year = dayjs().year()
</script>

<template>
  <footer class="footer">
    <div v-if="footer.group" class="list-container">
      <div
        v-for="(section, index) in footer.group || []"
        :key="section.title + index"
        class="list-item"
      >
        <div class="list-title">
          <template v-if="section.icon">
            <Icon
              class="iconify"
              :icon="section.icon"
              :color="section.color"
              :ssr="true"
              :inline="true"
              :alt="section.title"
              aria-hidden="true"
            />&nbsp;
          </template>
          {{ section.title }}
        </div>
        <ul class="list-links">
          <li v-for="(link, idx) in section.links" :key="link.name + idx">
            <template v-if="link.icon">
              <Icon
                :icon="link.icon"
                :color="link.color"
                :ssr="true"
                :inline="true"
                :alt="link.name"
                aria-hidden="true"
              />&nbsp;</template
            >
            <a
              :name="link.name"
              :href="link.href"
              :title="link.name"
              :aria-label="link.name"
              :target="link.target || section.target || '_blank'"
              rel="noopener noreferrer"
              :aria-describedby="link.name ? link.name : null"
              >{{ link.name
              }}<Icon
                v-if="(link.target || section.target || '_blank') === '_blank'"
                icon="heroicons-outline:arrow-sm-up"
                style="
                  color: var(--vp-c-text-3);
                  transform: rotate(45deg);
                  font-size: 1em;
                "
                :ssr="true"
                :inline="true"
                alt="External Link"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-info">
      <div v-if="footer.beian?.icp || footer.beian?.police" class="info-item">
        <span v-if="footer.beian?.icp">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            alt="ICP备案"
            :icon="footer.beian.icpIcon || 'fluent:globe-shield-48-filled'"
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;<a
            href="https://beian.miit.gov.cn/"
            title="ICP备案"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ICP备案"
          >
            {{ footer.beian.icp }}
          </a>
        </span>
        <span class="info-spacing"></span>
        <span v-if="footer.beian?.police">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            alt="公安备案"
            :icon="
              footer.beian.policeIcon || 'fluent:shield-checkmark-48-filled'
            "
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;<a
            href="https://beian.mps.gov.cn/"
            title="公安备案"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="公安备案"
          >
            {{ footer.beian.police }}
          </a>
        </span>
      </div>
      <span class="info-spacing-copyright"></span>
      <div v-if="footer.author?.name" class="info-item">
        <span>
          <Icon
            class="info-icon"
            alt="版权"
            icon="ri:copyright-line"
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;{{ Year }}
          <a
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            :href="footer.author?.link"
            aria-label="GitHub"
            >{{ footer.author?.name }}</a
          >.&nbsp;All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--HomeFooter-bg);
  width: 100%;
  font-size: 0.75rem;
}

.footer a {
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
  margin: 1.25rem 10% 1.25rem 18%;
}

.list-item {
  flex-grow: 0.15;
}

.list-title {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.list-links {
  opacity: 0.9;
  line-height: 1.7rem;
}

.iconify {
  display: inline-block;
  font-size: 1.2em;
}

.footer-info {
  margin: 1.25rem 0 1.25rem 0;
  text-align: center;
}

.info-item {
  display: inline-block;
}

.info-spacing {
  margin-left: 1rem;
}

.info-spacing-copyright {
  margin-left: 1rem;
}

.info-icon {
  display: inline-block;
  font-size: 1em;
}

@media (max-width: 768px) {
  .list-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .list-title {
    font-size: 0.875rem;
  }

  .info-spacing-copyright {
    margin-left: -1rem;
  }
}
</style>
