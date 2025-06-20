<script setup lang="ts">
import { Icon, Link } from './common'
import { useAnnouncement } from '../types'

const ann = useAnnouncement()
</script>

<template>
  <Link v-if="ann" class="ann" :href="ann.link" :rel="ann.rel" :target="ann.target">
    <div class="content">
      <span class="title" v-html="ann.title"></span>
      <p v-if="ann.desc" class="desc" v-html="ann.desc"></p>
      <div v-if="ann.date" class="time-info">
        <Icon :icon="ann.dateIcon || 'line-md:calendar'" :alt="ann.alt || 'date'" size="14" />
        <time v-html="ann.dateText || '活动时间: 即日至'"></time>
        <time class="date">{{ ann.date }}</time>
      </div>
    </div>
  </Link>
</template>

<style scoped>
.ann {
  display: inline-flex;
  flex-direction: column;
  transition:
    transform 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin-bottom: 1em;
  border: 1px solid var(--Announcement-border);
  border-radius: 0.5em;
  background-color: var(--Announcement-bg);
  padding: 0.15em 1em;
}

.ann:hover {
  transform: var(--Announcement-transform-hover);
  border-color: var(--Announcement-border-hover);
  background-color: var(--Announcement-bg-hover);
}

.ann:active {
  transform: var(--Announcement-transform-active);
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
}

.time-info {
  display: flex;
  align-items: center;
  gap: 0.25em;
  font-weight: 500;
  font-size: 0.75em;
}

.date {
  color: var(--Announcement-data);
  font-weight: bold;
}

@media (max-width: 768px) {
  .time-info {
    justify-content: center;
  }
}
</style>
