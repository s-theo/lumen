<script setup lang="ts">
import { computed } from 'vue'

import { VideoProps, getVideo } from '../types'

const props = defineProps<VideoProps>()

const Config = computed(() => getVideo(props))
</script>

<template>
  <div class="video-container">
    <iframe
      class="video-iframe"
      loading="lazy"
      v-bind="{
        'aria-label': Config.title,
        src:
          typeof Config.src === 'function' ? Config.src(props.id) : Config.src,
        title: Config.title,
        allow:
          'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;',
        allowfullscreen: true
      }"
    />
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
}

.video-iframe {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.5em;
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
