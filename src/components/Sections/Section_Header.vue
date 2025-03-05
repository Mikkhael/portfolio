<script setup>

import { use_lang, get_lang } from '../common';

//@ts-ignore
const aux_header_json = import.meta.glob('./aux_header.json', {eager: true})['./aux_header.json']?.default ?? [];

const [lang, strings] = use_lang({
  'en': {
    bday: 'Birthday',
    city: ['City', 'Gliwice, Poland'],

  },
  'pl': {
    bday: 'Urodziny',
    city: ['Miasto', 'Gliwice, Polska'],
  }
});

/**@type {[string, string][]} */
const aux_infos = aux_header_json.map(x => get_lang(x, lang));

</script>


<template>

<header class="header">
  <h1 class="gold">Michał Gold</h1>
  <div class="main_img">
    <img src="/imgs/ja.jpg">
  </div>
  <div class="info_grid">
    <!-- <div class="label">Telefon        </div> <div class="value">***REMOVED***                 </div> -->
    <div class="label">{{ strings.bday }}     </div> <div class="value"> 30.11.1999 </div>
    <div class="label">{{ strings.city[0] }} </div> <div class="value">{{ strings.city[1] }}</div>
    
    <template v-for="aux_info in aux_infos">
      <div class="label">{{ aux_info[0] }} </div> <div class="value">{{ aux_info[1] }}</div>
    </template>

    <div class="label">E-mail </div> <div class="value"><a href="mailto:mikkael.gold@gmail.com">mikkael.gold@gmail.com</a></div>
    <div class="label">GitHub </div> <div class="value"><a href="https://github.com/Mikkhael">github.com/Mikkhael</a></div>
  </div>
</header>

</template>

<style scoped>

.header {
  display: grid;
  grid-template: auto / auto auto;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  font-size: 1.3em;
  border: 1px solid var(--color-primary);
  border-left:  none;
  border-right: none;
  padding: 5px;
  background-color: #f1ed1409;
}

@media screen and (max-width: 640px) {
  .header {
    grid-template: auto / auto;
  }
}
@media print {
  .header {
    background-color: none;
    border: none;
  }
}

.gold {
  color: var(--color-primary);
  text-shadow: 2px 2px var(--color-secondary);
  font-family: sans-serif;
  font-size: 3em;
  margin: 0px;
  padding: 0px;
  justify-self: right;
}
.main_img {
  grid-row: span 2;
  align-self: stretch;
  text-align: center;
}
.main_img > img {
  height: 100%;
  max-height: 300px;
}

.info_grid {
  display: grid;
  column-gap: 1ch;
  grid-template: auto / auto auto;
}
.info_grid > .label {
  color: var(--color-primary);
  text-align: right;
}

</style>