<script setup>

import LangSelect from './components/LangSelect.vue';

import Section_Header from './components/Sections/Section_Header.vue';
import Section_OMnie from './components/Sections/Section_OMnie.vue';

import PortfolioProject from './components/PortfolioProject.vue';

import PortfolioProjectAuto from './components/PortfolioProjectAuto.vue';
import Projects from './components/Projects';


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

const ProjectContents = Projects.map(x => x[1].get_for_lang(lang));

</script>

<template>

<div class="app">

  <LangSelect />

  <Section_Header class="header" />
  <Section_OMnie />

  <h1 id="my_projects" class="subheader">
    {{ strings.my_projects }}
    <div class="inheader_button button" @click="extend_all_projects(!is_all_extended); is_all_extended = !is_all_extended">{{ extend_all_text }}</div>
  </h1>


  <!-- <Project_BranchPredictor /> -->
  <!-- <Project_Mastermind /> -->
  <PortfolioProjectAuto v-for="content in ProjectContents" :content="content" />

  <PortfolioProject
    title="Aplikacja do zarządzania bazą danych warsztatu samochodowego">
  </PortfolioProject>


</div>

</template>

<style scoped>

.app {
  display: grid;
  grid-template: auto / auto;
}

.subheader {
  color: gold;
  text-align: center;
  grid-column: 1 / -1;
  border: 2px dashed gold;
  border-left: none;
  border-right: none;
}

.inheader_button {
  font-size: 0.5em;
  font-weight: normal;
}


</style>
