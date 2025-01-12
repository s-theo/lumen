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
    <div class="prelink-content">
      <h1 class="title" v-html="prelink.title"></h1>
      <p v-if="prelink.content" class="content" v-html="prelink.content"></p>
      <span v-if="prelink.date" class="time-info">
        <Icon
          class="iconify"
          :icon="prelink.dateIcon || 'line-md:calendar'"
          :ssr="true"
          :inline="true"
          alt="Icon"
          aria-hidden="true"
        ></Icon>
        <p
          aria-hidden="true"
          v-html="prelink.dateText || '活动时间: 即日至'"
        ></p>
        <p class="date" :aria-label="prelink.date">{{ prelink.date }}</p>
      </span>
    </div>
  </a>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  flex-direction: column;
  transition: all 0.5s ease;
  margin-bottom: 1rem;
  border: 1px solid var(--Announcement-border);
  border-radius: 0.8rem;
  background-color: var(--Announcement-bg);
  padding: 0.3rem 1.5rem;
}

.prelink:hover {
  transform: translateY(-1px);
  border-color: var(--Announcement-border-hover);
  background-color: var(--Announcement-bg-hover);
}

.prelink:active {
  transform: scale(0.98);
}

.prelink-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 0.8rem;
}

.content {
  font-weight: 500;
  font-size: 0.75rem;
}

.time-info {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  font-size: 0.75rem;
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
