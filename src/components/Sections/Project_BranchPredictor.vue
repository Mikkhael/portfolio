<script setup>
import PortfolioProject from '../PortfolioProject.vue';
import Gallery from '../Gallery.vue';

const tags = [
  "FPGA",
  "SystemVerilog",
  "QuestaSim",
  "RISC-V",
  "ASM",
  "C",
  "NodeJS",
  "HTML",
  "Makefile",
];

const links = [
    {
        type: 'thesis',
        href: '/pdfs/Michal_Gold_Praca_Magisterska_Predyktor.pdf'
    },
    {
        type: 'slides',
        href: '/pdfs/Prezentacja_Mgr.pdf'
    },
    {
        type: 'github',
        href: 'https://github.com/Mikkhael/polsl_riscv_mgr_stripped'
    }
]

const imgs = [
    {
        src:  '/imgs/pipeline_visualizer.png',
        desc: 'Przykładowy fragment wizualizacji pipeline\'u'
    },
    {
        src:  '/imgs/schemat_procesora.png',
        desc: 'Poglądowy schemat struktury procesora\'u'
    },
    {
        src:  '/imgs/schemat_interfejsu_predyktora.png',
        desc: 'Poglądowy schemat interfejsu modułu predyktora\'u'
    },
]

</script>
<template>


<PortfolioProject
  title="Moduł Predykcji Skoków dla procesora RISC-V"
  subtitle="Projekt Magisterski"
  :tags="tags"
  :links="links">

    <template v-slot:description>
        Celem pracy było <b>zaprojektowanie, implementacja, przeprowadzenie testów, oraz zbadanie efektywności modułu predykcji skoków dla mikroprocesora opartego o specyfikację RISC&#8209;V</b>. <br>
    </template>

    <template v-slot:contents>
        Model <b>zintegrowano z istniejącym już projektem procesora</b>, stworzonym w ramach innych prac magisterskich. <br>
        Znaczną część pracy poświęciłem nie tylko na tworzenie predyktora, ale na <b>analizę i naprawę projektu procesora RISC&#8209;V</b>, gdyż okazał się on być <b>pełny błędów oraz niezgodności z dostarczoną dokumentacją</b>. <br>
        Oprócz samego predtktora, stworzone zostało <b>rozbudowane środowisko testowe</b>, pozwalające na w pełni zautomatyzowaną kompilację plików, uruchamianie symulacji oraz tworzenie raportów. Na środowisko składają się <b>skrypty (napisane w języku JavaScript) oraz plik Makefile</b>, pozwalający na wybór konfiguracji, z jakim wariantem predyktora należy skompilować projekt, oraz który z programów testowych uruchomić. <br>
        Dodatkowo, stworzono <b>wizualizator sygnałów wewnętrznych procesora</b>, prezentujący za pomocą <b>pliku HTML wgląd do jego działania</b>, z podziałem na cykle oraz etapy pipeline'u. <br>

        <Gallery :imgs="imgs" />
    </template>
</PortfolioProject>

</template>

<style scoped>
.section {
    font-size: 0.8em;
    justify-self: center;
}
</style>