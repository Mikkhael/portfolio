<script setup>
import PortfolioProject from './PortfolioProject.vue';
import Gallery from './Gallery.vue';
import YTEmbed from './YTEmbed.vue';

import { use_lang } from './common';

const props = defineProps({
    content: {
        /**@type {import('vue').PropType<import('./ProjectContent').ParsedContent>} */
        //@ts-ignore
        type: Object, 
        required: true
    },
});

const content = props.content;

</script>
<template>
<PortfolioProject
  :title="content.title"
  :subtitle="content.subtitle"
  :tags="content.tags"
  :links="content.links">

    <template v-slot:description>
        <div v-html="content.content_short" ></div>
    </template>

    <template v-slot:contents>
        <div v-html="content.content"></div>
        <br>
        <YTEmbed v-for="embed in content.ytembeds" :url="embed"/>
        <Gallery v-if="content.imgs && content.imgs.length > 0" :imgs="content.imgs" />
    </template>
</PortfolioProject>
</template>