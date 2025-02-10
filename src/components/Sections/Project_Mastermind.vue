<script setup>
import PortfolioProject from '../PortfolioProject.vue';
import Gallery from '../Gallery.vue';
import YTEmbed from '../YTEmbed.vue';

const tags = [
  "FPGA",
  "SystemVerilog",
  "QuestaSim",
  "Quartus",
  "VGA",
  "HDMI",
  "Breadboard",
];

const links = [
    {
        type: 'thesis',
        href: '/pdfs/Praca_Inżynierska_MichałGold_FPGA_Mastermind.pdf'
    },
    {
        type: 'slides',
        href: '/pdfs/Prezentacja_Inz.pdf'
    },
    {
        type: 'github',
        href: 'https://github.com/Mikkhael/FPGA_MasterMind'
    }
]

const imgs = [
    {
        src:  '/imgs/mastermind_hardware.png',
        desc: 'Płytka rozwojowa FPGA wraz z podłączonym kontrolerem'
    },
    {
        src:  '/imgs/mastermind_screen.png',
        desc: 'Przykładowy moment z przebiegu rozgrywki'
    }
]

</script>
<template>


<PortfolioProject
  title="Gra Master Mind na FPGA"
  subtitle="Projekt Inżynierski"
  :tags="tags"
  :links="links">

    <template v-slot:description>
        Celem pracy było <b>zaprojektowanie i wykonanie układu realizującego grę logiczną "Mistrz intelektu" (ang. "Master Mind") w oparciu układ FPGA.</b>
        Urządzenie kontrolowane jest za pomocą <b>przycisków na płytce stykowej</b>, a obraz wyświetlany jest za pomocą <b>VGA lub HDMI</b>.
    </template>

    <template v-slot:contents>
        Gra Master Mind polega na odgadnięciu pewnej sekwencji kolorów (ustawionej losowo przez urządzenie lub przez innego gracza).
        Wraz z każdą próbą odgadnięcia, urządzenie wyznacza i wyświetla podpowiedzi, co do tego ile kolorów jest poprawnych, i ile z nich jest na poprawnej pozycji.
        <br>
        <br>
        Grę stworzono w całości w języku opisu sprzętu <b>SystemVerilog</b>. Takie podejście wymaga innego myślenia, niż jak w przypadku programowania w zwyczajnym języku programowanie (jak np. C++).
        Ponieważ całą logikę <b>zaprojektowano sprzętowo</b> (na hardware'że), nie można było po prostu zdefiniować sekwencji instrukcji do wykonania.
        Dane przetwarzane są w sposób <b>znacznie bardziej współbierzny, niż gdyby zastosowano CPU</b>, co wymagało trochę <b>kreatywności, szczególnie przy implementacji logiki wyliczającej podpowiedzi</b>.
        <br>
        <br>
        Zaprojektowany układ wyświetla obraz gry na <b>monitorze z interfejsem VGA i/lub HDMI</b>.
        Sterowanie odbywa się poprzez przyciski obecne na osobnej <b>płytce stykowej podłączonej do urządzenia</b>.
        Projekt wyposażony jest również w <b>głośnik</b>, potrafiący odtwarzać proste melodie.
        Użytkownik jest w stanie <b>konfigurować wiele parametrów gry</b>, takich jak ilość dostępnych kolorów, rozmiar planszy oraz liczba dozwolonych prób odgadnięcia ukrytej sekwencji.
        Możliwe jest też ustawienie rozmiaru czcionki wyświetlanej na ekranie oraz palety barw, jaka jest wykorzystywana do rysowania wielu elementów. 

        <br>

        <YTEmbed url="https://www.youtube.com/embed/hEE8SGype0c?si=2C-V52_fa0VAW6Ar"/>

        <Gallery :imgs="imgs" />
    </template>
</PortfolioProject>

</template>

<style scoped>
.section {
    font-size: 0.8em;
    justify-self: center;
}
.center {
    text-align: center;
}
</style>