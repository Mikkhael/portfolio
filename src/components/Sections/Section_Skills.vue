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
            <li>Doświadczenie z FPGA i podstawowe zaznajomienie z różnymi narzędziami EDA <b>${edas}</b></li>
            <li>Programowanie mikrokontrolerów <b>${mcs}</b></li>
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