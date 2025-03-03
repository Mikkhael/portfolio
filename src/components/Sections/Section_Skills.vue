<script setup>
import PortfolioSection from '../PortfolioSection.vue';
import { use_lang } from '../common';

const plangs_adv = `C/C++, JavaScript (Vanilla, NodeJS, Vue), SystemVerilog`;
const plangs_bas = `Python, C#, Rust (Tauri framework)`;

const edas = `(Quartus, Questa, VCS, Verdi, FusionCompiler)`;

const mcs = `(Arduino, ESP9266, ESP32)`;


const [lang, strings] = use_lang({
    'en':{
        title: 'Skills',
        content: /*html*/`
        <ul>
            <li>Known programming languages:</li>
            <ul>
                <li>advanced: <b>${plangs_adv}</b></li>
                <li>basic: <b>${plangs_bas}</b></li>
            </ul>
            <li>Experience working with <b>FPGA</b> and various EDA tools <b>${edas}</b></li>
            <li>Programming micro-controllers <b>${mcs}</b></li>
            <li>Familiarity with <b>GIT</b></li>
            <li>Familiarity with <b>Matlab</b></li>
            <li>Familiarity with relational databases - especially <b>SQLite</b></li>
            <li>Basic knowledge of programming <b>PLCs</b> and <b>industrial robots</b></li>
            <li>Native language - Polish</li>
            <li>Advanced knowledge of English</li>
        </ul>
        `,
    },
    'pl':{
        title: 'Umiejętności',
        content: /*html*/`
        <ul>
            <li>Znane języki programowania:</li>
            <ul>
                <li>poziom zaawansowany: <b>${plangs_adv}</b></li>
                <li>poziom podstawowy: <b>${plangs_bas}</b></li>
            </ul>
            <li>Doświadczenie z <b>FPGA</b> i podstawowe zaznajomienie z różnymi narzędziami EDA <b>${edas}</b></li>
            <li>Programowanie mikro-kontrolerów <b>${mcs}</b></li>
            <li>Zaznajomienie z narzędziem <b>GIT</b></li>
            <li>Znajomość środowiska <b>Matlab</b></li>
            <li>Doświadczenie z relacyjnymi bazami danych - głównie <b>SQLite</b></li>
            <li>Podstawowa zaznajomienie z programowaniem sterowników <b>PLC</b> oraz <b>robotów przemysłowych</b></li>
            <li>Zaawansowana znajomość języka Angielskiego</li>
        </ul>
        `,
    }
});

</script>
<template>


<PortfolioSection :title="strings.title" class="section">
    <div v-html="strings.content"></div>
</PortfolioSection>

</template>

<style scoped>
.section {
    font-size: 0.9em;
}
</style>