import ProjectContent from '../ProjectContent';

const content = new ProjectContent({
    title: {
        'en': "Master Mind video game on a FPGA",
        'pl': "Gra Master Mind na FPGA"
    },
    subtitle: {
        'en': "Bachelor's thesis",
        'pl': "Praca Inżynierska",
    },
    tags: [
        "FPGA",
        "SystemVerilog",
        "QuestaSim",
        "Quartus",
        "VGA",
        "HDMI",
        "Breadboard",
    ],
    links: [
        { type: 'thesis',  href: '/pdfs/Praca_Inżynierska_MichałGold_FPGA_Mastermind.pdf'},
        { type: 'tslides', href: '/pdfs/Prezentacja_Inz.pdf'},
        { type: 'github',  href: 'https://github.com/Mikkhael/FPGA_MasterMind'},
    ],
    imgs: [
        { src:  '/imgs/mastermind_hardware.png',
          desc: {
            'en': 'FPGA Development board with connected controller',
            'pl': 'Płytka rozwojowa FPGA wraz z podłączonym kontrolerem',}},
        { src:  '/imgs/mastermind_screen.png',
          desc: {
            'en': 'Sample gameplay screenshot',
            'pl': 'Przykładowy moment z przebiegu rozgrywki',}},
    ],
    ytembeds: ["https://www.youtube.com/embed/hEE8SGype0c?si=2C-V52_fa0VAW6Ar"],
    content_short: {
        'en': /*html*/`
        The aim of the thesis was to <b>design and create the logic game "Master Mind" based on a FPGA system.</b>
        The device is controlled using <b>buttons on the breadboard</b>, and the image is displayed using <b>VGA or HDMI</b>.
        `,
        'pl': /*html*/`
        Celem pracy było <b>zaprojektowanie i wykonanie gry logicznej "Mistrz intelektu" (ang. "Master Mind") w oparciu o układ FPGA.</b>
        Urządzenie kontrolowane jest za pomocą <b>przycisków na płytce stykowej</b>, a obraz wyświetlany jest za pomocą <b>VGA lub HDMI</b>.
        `,
    },
    content: {
        'en': /*html*/`
        The Master Mind game consists of guessing a certain sequence of colors (set randomly by the device or by another player).
        With each guess, the device determines and displays hints as to how many colors are correct and how many of them are in the correct position.
        <br>
        <br>
        The game was created entirely in the hardware description language <b>SystemVerilog</b>. This approach requires a different way of thinking than in the case of programming in a regular programming language (such as C++).
        Since the entire logic <b>was designed in hardware</b>, it was not possible to simply define a sequence of instructions to be executed - there is no processor to execute them.
        Data is processed <b>much more concurrently than if a CPU were used</b>, which required some <b>creativity, especially when implementing the logic calculating the hints</b>.
        <br>
        <br>
        The designed system displays the game image on a <b>monitor with a VGA and/or HDMI interface</b>.
        Control is performed via buttons on a separate <b>breadboard connected to the device</b>.
        The project is also equipped with a <b>speaker</b> that can play simple melodies.
        The user is able to <b>configure many game parameters</b>, such as the number of available colors, the size of the board and the number of allowed attempts to guess the hidden sequence.
        It is also possible to set the size of the font displayed on the screen and the color palette used to draw many elements.
        `,

        'pl': /*html*/`
        Gra Master Mind polega na odgadnięciu pewnej sekwencji kolorów (ustawionej losowo przez urządzenie lub przez innego gracza).
        Wraz z każdą próbą odgadnięcia, urządzenie wyznacza i wyświetla podpowiedzi, co do tego ile kolorów jest poprawnych, i ile z nich jest na poprawnej pozycji.
        <br>
        <br>
        Grę stworzono w całości w języku opisu sprzętu <b>SystemVerilog</b>. Takie podejście wymaga innego myślenia, niż jak w przypadku zwyczajnego języka programowania (jak np. C++).
        Ponieważ całą logikę <b>zaprojektowano sprzętowo</b> (na hardware'że), nie można było po prostu zdefiniować sekwencji instrukcji do wykonania - nie ma procesora, który by je wykonywał.
        Dane przetwarzane są w sposób <b>znacznie bardziej współbieżny, niż gdyby zastosowano CPU</b>, co wymagało trochę <b>kreatywności, szczególnie przy implementacji logiki wyliczającej podpowiedzi</b>.
        <br>
        <br>
        Zaprojektowany układ wyświetla obraz gry na <b>monitorze z interfejsem VGA i/lub HDMI</b>.
        Sterowanie odbywa się poprzez przyciski obecne na osobnej <b>płytce stykowej podłączonej do urządzenia</b>.
        Projekt wyposażony jest również w <b>głośnik</b>, potrafiący odtwarzać proste melodie.
        Użytkownik jest w stanie <b>konfigurować wiele parametrów gry</b>, takich jak ilość dostępnych kolorów, rozmiar planszy oraz liczba dozwolonych prób odgadnięcia ukrytej sekwencji.
        Możliwe jest też ustawienie rozmiaru czcionki wyświetlanej na ekranie oraz palety barw, jaka jest wykorzystywana do rysowania wielu elementów. 
        `,
    }

});

export default content;