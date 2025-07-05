<script setup lang="ts">
import { Icon, Link } from './common'
import { useNotice } from '../types'

const notice = useNotice()
</script>

<template>
  <Link v-if="notice" class="notice" :href="notice.link" :rel="notice.rel" :target="notice.target" no-icon>
    <div class="content">
      <span class="title" v-html="notice.title"></span>
      <p v-if="notice.desc" class="desc" v-html="notice.desc"></p>
      <div v-if="notice.date" class="time-info">
        <Icon :icon="notice.dateIcon || 'line-md:calendar'" :alt="notice.alt || 'date'" size="14" />
        <time v-html="notice.dateText || '活动时间: 即日至'"></time>
        <time class="date">{{ notice.date }}</time>
      </div>
    </div>
  </Link>
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
  border: 1px solid var(--Notice-border);
  border-radius: 0.5em;
  background-color: var(--Notice-bg);
  padding: 0.15em 1em;
}

.notice:hover {
  transform: var(--Notice-transform-hover);
  border-color: var(--Notice-border-hover);
  background-color: var(--Notice-bg-hover);
}

.notice:active {
  transform: var(--Notice-transform-active);
}

.content {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 0.8em;
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
  color: var(--Notice-data);
  font-weight: bold;
}

@media (max-width: 768px) {
  .time-info {
    justify-content: center;
  }
}
</style>
