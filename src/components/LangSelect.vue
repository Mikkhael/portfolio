<script setup>
import { use_lang } from './common';

const [lang] = use_lang();

const LANGS = ['en', 'pl'];
const default_language = 'pl';

</script> 

<template>

    <div class="lang_select_bar noprint">
        <a class="flag" v-for="flag in LANGS" :class="{chosen: flag === lang}" :href="'/'+(flag === default_language ? '' : flag+'/')">
            <img :src="'/flags/' + flag + '.svg'" :alt="flag">
        </a>
    </div>

</template>

<style scoped>

.lang_select_bar {
    display: flex;
    flex-direction: row;
}
.flag {
    border-bottom: 3px solid black;
    display: block;
    height: 3ch;
    margin: 1ch;
}
.flag img{
    height: 100%;
}
.flag.chosen {
    border-bottom: 3px solid var(--color-primary);
}

</style>