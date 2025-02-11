<script setup>

import LangSelect from './components/LangSelect.vue';

import Section_Header from './components/Sections/Section_Header.vue';
import Section_OMnie from './components/Sections/Section_OMnie.vue';
import Section_Skills from './components/Sections/Section_Skills.vue';

import PortfolioProjectAuto from './components/PortfolioProjectAuto.vue';
import Projects from './components/Projects';

import CategoryElements from './components/CategoryElements.vue';
import CatSections from './components/CatSections';

import {extend_all_projects, use_lang} from './components/common';
import { computed, ref } from 'vue';


import './styles/main.css'


const [lang, strings] = use_lang({
  'en': {
    my_projects:  'My Projects',
    collapse_all: 'Collapse all',
    expand_all:   'Expand all',
  },
  'pl': {
    my_projects:  'Moje Projekty',
    collapse_all: 'Zwiń wszystkie',
    expand_all:   'Rozwiń wszystkie',
  }
});

const is_all_extended = ref(true);
const extend_all_text = computed(() => {
  if(is_all_extended.value) return strings.collapse_all + '...';
  else return strings.expand_all + '...';
});

const ProjectContents    = Projects.map(x => x[1].get_for_lang(lang));
const CatSectionContents = CatSections.map(x => x[1].get_for_lang(lang));

</script>

<template>

<div class="app">

  <LangSelect />

  <Section_Header class="header" />

  <section class="subsection">
    <Section_OMnie />
    <Section_Skills />
  </section>
  
  <div class="pagebreak"></div>


  <CategoryElements v-for="section in CatSectionContents" :title="section.title" :elems="section.elems"/>

  <div class="pagebreak"></div>

  <h1 id="my_projects" class="subheader">
    {{ strings.my_projects }}
    <div class="inheader_button button" @click="extend_all_projects(!is_all_extended); is_all_extended = !is_all_extended">{{ extend_all_text }}</div>
  </h1>

  <PortfolioProjectAuto v-for="content in ProjectContents" :content="content" />

</div>

</template>

<style scoped>

.app {
  display: grid;
  grid-template: auto / auto;
}

.subheader {
  color: var(--color-primary);
  text-align: center;
  grid-column: 1 / -1;
  border: 2px dashed var(--color-primary);
  border-left: none;
  border-right: none;
}

.subsection {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
@media screen and (max-width: 700px) {
  .subsection {
    flex-wrap: wrap;
  }
}

.inheader_button {
  font-size: 0.5em;
  font-weight: normal;
}

@media print {
  .subsection {
    flex-wrap: wrap;
  }
}


</style>
