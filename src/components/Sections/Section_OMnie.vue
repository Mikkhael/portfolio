<script setup>
import PortfolioSection from '../PortfolioSection.vue';
import { use_lang } from '../common';

const [lang, strings] = use_lang({
    'en':{
        title: 'About me',
        content: /*html*/`
        <p>
            <b>Programming enthusiast</b> - mainly <b>C++</b> and <b>JavaScript</b>
            <span class="soft"> (completely unrelated languages, but that's how it turned out)</span>. <br>
            My first contact with programming was in middle school, and I've been writing code ever since. <br>
            I treat programming as a very complex logical puzzle <span class="soft"> (and <b>I love logical puzzles</b>)</span>. <br>
            From time to time I solve tasks related to <b>algorithmics</b>, on sites such as
            <b>CodeWars</b> <a class="noprint" target="_blank" href="https://www.codewars.com/users/Mikkael">[my profile]</a>
            or <b>LeetCode</b>. <br>
            I also find <b>Maths</b> to be very fun.
        </p>
        <p>
            I also had a lot to do with <b>FPGA's</b> and <b>SystemVerilog</b>, which were the core of my Bachelor's and Master's thesis. <br>
            I also created several smaller projects using <b>Arduino</b> and <b>ESP32</b>.
        </p>
        <p>
            <b>Diligent student</b> - mostly A's, both in high school and university:&#41;
        </p>
        <p>
            <b>I like to learn</b> <span class="soft">(in my free time I like to watch e.g. recordings from <b>CppCon</b> conferences; I follow several blogs about programming)</span>. <br>
            I am willing to learn any technology if it is required of me. <b>I am not afraid to read documentation</b>. </p>
        <p>
            On the more non-engeenering side: I'm loosely interested in linguistics and Japanese culture.
        </p>
        `,
    },
    'pl':{
        title: 'O mnie',
        content: /*html*/`
        <p>
            <b>Pasjonat programowania</b> - głównie <b>C++</b> oraz <b>JavaScript</b> 
            <span class="soft"> (kompletnie niezwiązane ze sobą języki, ale tak wyszło)</span>. <br>
            Pierwszą styczność miałem z programowaniem w gimnazjum, i od tamtego czasu ciągle się rozwijam. <br>
            Traktuję programowanie jako bardzo rozbudowaną zagadkę logiczną <span class="soft">(a <b>uwielbiam zagadki logiczne</b>)</span>. <br>
            Od czasu do czasu rozwiązuję zadania związane z <b>algorytmiką</b>, na takich stronach jak np.
            <b>CodeWars</b> <a class="noprint" target="_blank" href="https://www.codewars.com/users/Mikkael">[mój profil]</a> 
            czy <b>LeetCode</b>. <br>
            <b>Matematyka</b> mi w niczym nie straszna.
        </p>
        <p>
            Miałem również dużo do czynienia z <b>FPGA</b> i <b>SystemVerilog</b>, które to były trzonem mojej pracy Inżynierskiej i Magisterskiej. <br>
            Również stworzyłem kilka mniejszych projektów wykorzystujących <b>Arduino</b> oraz <b>ESP32</b>.
        </p>
        <p>
            <b>Piątkowy uczeń</b> - zarówno w szkole średniej, jak i na studiach :&#41;
        </p>
        <p>
            <b>Lubię się uczyć</b> <span class="soft">(w wolnym czasie lubię np. oglądać nagrania z konferencji <b>CppCon</b>; śledzę kilka blogów dotyczących programowania)</span>. <br>
            Jestem skłonny poznać dowolną technologię, jeśli będzie ode mnie wymagana. <b>Nie boję się czytać dokumentacji</b>.
        </p>
        <p>
            Z zagadnień bardziej humanistycznych: luźno interesuję się lingwistyką oraz kulturą japońską.
        </p>
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