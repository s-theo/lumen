<script setup lang="ts">
import { Icon, usePrelink, handleClick } from '../types'
import { Link } from '../composables'

const prelink = usePrelink()
</script>

<template>
  <Link
    v-if="prelink"
    :classes="['prelink', prelink.copy ? 'copy-mode' : '']"
    :href="prelink.copy ? undefined : prelink.link"
    :rel="prelink.rel"
    @click="(e) => handleClick(e, prelink)"
  >
    <div class="prelink-content">
      <span class="title" v-html="prelink.title"></span>
      <p v-if="prelink.content" class="content" v-html="prelink.content"></p>
      <div v-if="prelink.date" class="time-info">
        <Icon
          class="iconify"
          :icon="prelink.dateIcon || 'line-md:calendar'"
          :ssr="true"
          :inline="true"
          :aria-label="prelink.alt || 'date'"
        />
        <time v-html="prelink.dateText || '活动时间: 即日至'"> </time>
        <time class="date">{{ prelink.date }}</time>
      </div>
    </div>
  </Link>
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

.prelink.copy-mode {
  cursor: pointer;
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
