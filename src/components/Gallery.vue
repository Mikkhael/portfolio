<script setup>
//@ts-check

import { ref } from 'vue';
import { computed } from 'vue';

/**
 * @typedef {{src: string, desc?: string}} ImgDef
 */

const props = defineProps({
    imgs: {type: Array},
});

const zoomed = ref(/**@type {boolean[]} */ ([]));



</script>

<template>

<div class="gallery">

  <div class="gallery_elem" v-for="(img, i) in /**@type {ImgDef[]} */ (props.imgs)">
    <img :src="img.src" @click="zoomed[i] = !zoomed[i]" :class="{zoomed: zoomed[i]}" />
    <div class="desc">{{ img.desc }}</div>
  </div>

</div>

</template>

<style scoped>

.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gallery_elem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
img {
  max-width: 300px;
  cursor: zoom-in;
  transition: max-width 0.1s;
}
img.zoomed {
  cursor: zoom-out;
  max-width: 100%;
}
.desc {
  font-size: 0.8em;
  color: #dadada;
  font-style: italic;
  text-align: center;
}

</style>