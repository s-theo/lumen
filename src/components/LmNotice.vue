<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import { useNotice } from '../composables'

const notice = useNotice()
</script>

<template>
  <LmLink
    v-if="notice"
    :key="
      (notice.link ?? '') + (notice.rel ?? '') + (notice.target ?? '') || notice.title || notice.desc || notice.date
    "
    class="notice"
    :tag="notice.link ? 'a' : 'div'"
    :href="notice.link"
    :rel="notice.rel"
    :target="notice.target"
    no-icon
  >
    <div class="content">
      <span class="title" v-html="notice.title"></span>
      <p v-if="notice.desc" class="desc" v-html="notice.desc"></p>
      <div v-if="notice.date" class="time-info">
        <LmIcon v-if="notice.dateIcon" :icon="notice.dateIcon" size="14" />
        <LmImage v-else-if="notice.dateImage" :image="notice.dateImage" size="14" />
        <LmIcon v-else icon="heroicons:calendar-days" size="14" style="transform: translateY(-0.5px)" />
        <time v-html="notice.dateText || '活动时间: 即日至'"></time>
        <time class="date">{{ notice.date }}</time>
      </div>
    </div>
  </LmLink>
</template>

<style scoped>
.notice {
  display: inline-flex;
  flex-direction: column;
  transition:
    transform 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin-bottom: 1em;
  border: 1px solid var(--lm-Notice-border);
  border-radius: 0.5em;
  background-color: var(--lm-Notice-bg);
  padding: 0.15em 1em;
}

.notice.lm-link:hover {
  transform: var(--lm-Notice-transform-hover);
  border-color: var(--lm-Notice-border-hover);
  background-color: var(--lm-Notice-bg-hover);
}

.notice.lm-link:active {
  transform: var(--lm-Notice-transform-active);
}

.content {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 0.75em;
}

.desc {
  font-weight: 500;
  font-size: 0.75em;
  white-space: pre-wrap;
}

.time-info {
  display: flex;
  align-items: center;
  gap: 0.25em;
  font-weight: 500;
  font-size: 0.75em;
}

.date {
  color: var(--lm-Notice-data);
  font-weight: bold;
}

@media (max-width: 768px) {
  .time-info {
    justify-content: center;
  }
}
</style>
