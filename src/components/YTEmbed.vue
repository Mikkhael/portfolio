<script setup>
//@ts-check

import { ref } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  url: {type: String},
  w: {type: Number, default: 560},
  h: {type: Number, default: 315},
})

// https://www.youtube.com/embed/hEE8SGype0c?si=2C-V52_fa0VAW6Ar
// width="560" height="315"

const container = ref();

const aspect = computed(() => props.w / props.h);


</script>

<template>

<div class="yt_embed noprint" ref="container">
  <iframe  :src="url" :style="{aspectRatio: aspect, maxWidth: props.w + 'px'}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</template>

<style scoped>

.yt_embed {
  text-align: center;
}

iframe {
  width: 100%;
}

</style>