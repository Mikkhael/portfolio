<script setup>

import { use_lang } from './common';

const props = defineProps({
    title: {type: String}
});

const [lang, strings] = use_lang({
  'en': {
    expand:   'Expand',
    collapse: 'Collapse',
  },
  'pl': {
    expand:   'Rozwiń',
    collapse: 'Zwiń',
  },
})

</script>

<template>
    <div class="portfolio_section">
        <h3 class="title">{{ props.title }} </h3>

        <section class="contents">
            <slot></slot>
        </section>
    </div>

</template>

<style scoped>

.portfolio_section {
  border: 1px dotted gold;
  border-left:  none;
  border-right: none;
  border-top:   none;
  margin: 1ch;
  justify-self: stretch;
}
    
.title {
  color: gold;
  font-size: 1.5em;
  margin-left: 4ch;
  /* text-decoration: underline; */
}

.contents {
  text-align: justify;
}

</style>