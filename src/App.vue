<script setup>
import Section_Header from './components/Sections/Section_Header.vue';
import Section_OMnie from './components/Sections/Section_OMnie.vue';

import Project_BranchPredictor from './components/Sections/Project_BranchPredictor.vue';
import Project_Mastermind from './components/Sections/Project_Mastermind.vue';

import PortfolioProject from './components/PortfolioProject.vue';


import {extend_all_projects} from './components/common';
import { computed, ref } from 'vue';


import './styles/main.css'


const is_all_extended = ref(false);
const extend_all_text = computed(() => {
  if(is_all_extended.value) return "Zwiń wszystkie...";
  else return "Rozwiń wszystkie...";
});

</script>

<template>

<div class="app">

  <Section_Header class="header" />
  <Section_OMnie />

  <h1 id="my_projects" class="subheader">
    Moje Projekty
    <div class="inheader_button button" @click="extend_all_projects(!is_all_extended); is_all_extended = !is_all_extended">{{ extend_all_text }}</div>
  </h1>


  <Project_BranchPredictor />
  <Project_Mastermind />

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
