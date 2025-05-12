<script setup lang="ts">
import { Icon, usePrelink, handleClick, isExternal } from '../types'

const prelink = usePrelink()
</script>

<template>
  <a
    v-if="prelink"
    class="prelink"
    :href="prelink.copy ? 'javascript:void(0)' : prelink.link"
    :target="isExternal(prelink.link) ? '_blank' : '_self'"
    :title="prelink.title"
    :aria-label="prelink.title"
    rel="noopener noreferrer"
    @click="handleClick($event, prelink)"
  >
    <article ref="root" class="prelink-content">
      <span class="title" v-html="prelink.title"></span>
      <p v-if="prelink.content" class="content" v-html="prelink.content"></p>
      <div v-if="prelink.date" class="time-info">
        <Icon
          class="iconify"
          :icon="prelink.dateIcon || 'line-md:calendar'"
          :ssr="true"
          :inline="true"
          alt="Icon"
        />
        <time v-html="prelink.dateText || '活动时间: 即日至'"> </time>
        <time class="date" :aria-label="prelink.date">{{ prelink.date }}</time>
      </div>
    </article>
  </a>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  flex-direction: column;
  transition: all 0.5s ease;
  margin-bottom: 1em;
  border: 1px solid var(--Announcement-border);
  border-radius: 0.8em;
  background-color: var(--Announcement-bg);
  padding: 0.3em 1.5em;
}

.prelink:hover {
  transform: var(--Announcement-transform-hover);
  border-color: var(--Announcement-border-hover);
  background-color: var(--Announcement-bg-hover);
}

.prelink:active {
  transform: var(--Announcement-transform-active);
}

.prelink-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 0.8em;
}

.content {
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

.iconify {
  font-size: 1.2em;
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
