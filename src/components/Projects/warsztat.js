import ProjectContent from '../ProjectContent';

const content = new ProjectContent({
    title: {
        'en': "Database Management App for a car workshop",
        'pl': "Aplikacja do zarządzania bazą danych dla warsztatu samochodowego"
    },
    subtitle: {
        'en': "",
        'pl': "",
    },
    tags: [
        "Database",
        "SQLite",
        "Tauri",
        "Rust",
        "JavaScript",
        "Vue",
        "PDF generation",
        "Migration from MSAccess",
    ],
    links: [
        { type: 'github', href: 'https://github.com/Mikkhael/warsztat-gold'},
    ],
    imgs: [
        { src:  '/imgs/warsztat_screen.png',
          desc: {
            'en': 'Sample app screenshot',
            'pl': 'Przykładowy zrzut ekranu z aplikacji',}},
        { src:  '/imgs/warsztat_print.png',
            desc: {
            'en': 'Preview for order\'s invoice print',
            'pl': 'Podgląd wydruku faktury do zlecenia',}},
    ],
    content_short: {
        'en': /*html*/`
        <b>My first commercially used product.</b> <br>
        One of my relatives was using an old <b>Microsoft Access 97 (!)</b> database at their company. <b>My app was made to replace it.</b>
        App allows for managing customers, orders, and car parts, automatic migration (to and from) MS Access 97, and performs automatic backups
        `,
        'pl': /*html*/`
        <b>Mój pierwszy komercyjnie używany produkt.</b> <br>
        Jeden z moich bliskich używał starej bazy danych <b>Microsoft Access 97 (!)</b> w swojej firmie. <b>Moja aplikacja ma na celu ją zastąpić.</b>
        Aplikacja pozwala na zarządzanie klientami, zleceniami i częściami, automatyczną migrację (z i do) MS Access 97, oraz wykonuje automatyczne kopie zapasowe
        `,
    },
    content: {
        'en': /*html*/`
        The original application in MS Access was ridden with custom macros, that made it impossible to simply import it to a newer version of Access, 
        and had to be run on a Windows XP virtual machine, and was unwieldy to use altogether.
        <br>
        I decided to build a new app from the ground up.
        It made it much simpler to add new custom features,
        than if I were to use another Access-like program. I opted for the <b>SQLite database</b>.
        <br>
        <br>
        The app was created with the <b>Tauri framework</b>. Tauri allows to use the operating system's built-in WebViewAPI,
        which enables my app to use all the features as a Web Browser (most importantly HTML, CSS, and JS for layouts),
        while not bundling an entire NodeJS runtime, like with Electron.
        <br>
        <br>
        Tauri's backend is written in <b>Rust</b>. All the interfacing with the SQLite and managing the files is handled by Rust.
        The user interface is created with the use of the <b>Vue framerowk</b>.
        The user can add and edit clients, registered cars, car parts, and orders. They can also filter the views based on many parameters.
        For each order, an invoice's PDF can be generated and printed automatically.
        <br>
        <br>
        As a safety net, my app is able to import and export its current state to or from the original MS Access app, using CSV files as intermediate.
        I also created a couple of scripts in NodeJS, which can <b>automatically convert the original MS Access db structure into a SQLite one</b>.
        The app also performs <b>regular configurable backups</b> of the database.
        `,
        'pl': /*html*/`
        Oryginalna aplikacja w MS Access była pełna makr, co uniemożliwiało jej proste zaimportowanie do nowszej wersji Access'a,
        i musiała być uruchamiana na maszynie wirtualnej Windows XP, a ogólnie była nieporęczna w użyciu.
        <br>
        Postanowiłem zbudować nową aplikację od podstaw.
        Pozwoliło to na znacznie łatwiejsze dodawanie nowych niestandardowych funkcji,
        niż gdybym miał używać innego programu podobnego do Access'a. Skorzystałem z <b>bazę danych SQLite</b>.
        <br>
        <br>
        Aplikacja została stworzona przy użyciu <b>framework'a Tauri</b>. Tauri pozwala na korzystanie z wbudowanego w system operacyjny WebViewAPI,
        co umożliwia mojej aplikacji korzystanie ze wszystkich funkcji przeglądarki internetowej (przede wszystkim HTML, CSS i JS dla interfejsu graficznego),
        bez dołączania całego runtime'u NodeJS, jak w przypadku framework'a Electron.
        <br>
        <br>
        Backend Tauri został napisany w <b>Rust</b>. Cały interfejs z SQLite i zarządzanie plikami jest obsługiwane przez Rust.
        Interfejs użytkownika jest tworzony przy użyciu <b>Vue framerowk</b>.
        Użytkownik może dodawać i edytować klientów, zarejestrowane samochody, części samochodowe i zamówienia. Może również filtrować widoki na podstawie wielu parametrów.
        Dla każdego zamówienia można automatycznie wygenerować i wydrukować fakturę w formacie PDF.
        <br>
        <br>
        Jako dodatkowe zabezpiecznie, moja aplikacja może importować i eksportować swój bieżący stan do lub z oryginalnej aplikacji MS Access, z  pśrednim użyciem plików CSV.
        Utworzyłem również kilka skryptów w NodeJS, które mogą <b>automatycznie konwertować oryginalną strukturę bazy danych MS Access na strukturę SQLite</b>.
        Aplikacja wykonuje również <b>regularne konfigurowalne kopie zapasowe</b> bazy danych.
        `,
    }

});

export default content;