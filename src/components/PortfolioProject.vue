<script setup>
//@ts-check

import { ref } from 'vue';

import {window_event_listen, use_lang} from './common';

const [lang, strings] = use_lang({
  'en': {
    show_more: 'Show more',
    show_less: 'Show less',
  },
  'pl': {
    show_more: 'Pokaż więcej',
    show_less: 'Pokaż mniej',
  }
});

/**
 * @typedef {{href: string, name: string, print?: boolean}} LinkDef
 */

const props = defineProps({
    title:    {type: String},
    subtitle: {type: String},
    tags:     {type: Array},
    links:    {
      /**@type {import('vue').PropType<LinkDef[]>} */ 
      type: Array
    },
});

// const tags_html = computed(() => (props.tags ?? []).map(x => `<span>${x}</span>`).join(', '));

function extend(value) {
  extended.value = value;
}

window_event_listen('extend_all_projects', (e) => {
  extend(e.value);
});

const extended = ref(true);

</script>

<template>
    <div class="portfolio_project">
        <header>
          <section class="title">
            <h3>{{ props.title }}</h3>
            <h4>{{ props.subtitle }}</h4>
          </section>

          <section class="links">
            <a v-for="link in props.links" class="link" target="_blank" :href="link.href" :class="{noprint: !link.print}">
              <div class="name">🔗{{ link.name }}</div>
              <div class="url" >{{ link.href }}</div>
            </a>
          </section>

          <!-- <section class="tags" v-html="tags_html"></section> -->
          <section class="tags"> {{ props.tags?.join(', ') }} </section>

        </header>

        <section class="description">
            <slot name="description" ></slot>
        </section>

        <div class="extender button" @click="extend(!extended)" :class="{rolledup: extended}">{{ extended ? strings.show_less : strings.show_more }}...</div>

        <section class="contents noprint" :class="{rolledup: !extended}">
            <slot name="contents"></slot>
            <div class="extender button" @click="extend(false)">{{ strings.show_less }}...</div>
        </section>

    </div>

</template>

<style scoped>

.portfolio_project {
  border: 3px solid var(--color-primary);
  border-left: none;
  border-right: none;
  border-top: none;
  /* border-radius: 10px; */
  background-color: #262626;
  padding: 1ch;
  margin-bottom: 20px;
}

header {
  display: grid;
  grid-template-areas: 
    "header links"
    "tags   links";
}

@media screen and (max-width: 900px) {
  header {
  grid-template-areas: 
    "header"
    "tags  "
    "links ";
  }
}

.links {
  grid-area: links; 
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-self: stretch;
  flex-wrap: wrap;
  justify-content: space-around;
}
.link {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-wrap: nowrap;
  margin-top: 2px;
  padding: 4px;
  border: 1px solid var(--color-primary);
  border-right: none;
  border-left: none;
  text-decoration: none;
}
.link .name {
  color: white;
  user-select: none;
  font-size: 1.2em;
}
.link .url {
  font-size: 0.5em;
  text-decoration: underline;
}
@media print {
  .link .name {
    font-size: 0.8em;
  }
  .link .url {
    font-size: 0.9em;
  }
}

 
h3 {margin: 0px;}
h4 {margin: 0px;}
.title {
  font-size: 1.4em;
  padding: 1ch 2ch;
  padding-bottom: 0px;
  margin: 0px;
}
.title h3 {  
  color: var(--color-primary);
  text-decoration: underline;
}
.title h4 {  
  color: #bebebe;
}

.portfolio_project:nth-child(2n+1) .alternate {
  text-align: right;
}

.tags {
  color: var(--color-secondary);
  font-style: italic;
  font-weight: bold;
  padding: 0.5ch;
  padding-top: 0px;
  padding-bottom: 2ch;
}

.description {
  font-size: 1.1em;
  text-align: center;
}

.contents {
  text-align: justify;
  margin-top: 5px;
  border-top: 1px dashed var(--color-primary);
  /* overflow-y: hidden; */
  /* max-height: 1000000px; */
  /* transition: max-height 1s; */
}

.rolledup {
  display: none;
  /* max-height: 0px; */
}

</style>