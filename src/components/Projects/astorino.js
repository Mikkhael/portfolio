import ProjectContent from '../ProjectContent';

const content = new ProjectContent({
    title: {
        'en': "Laboratory station with the educational robot ASTORINO",
        'pl': "Stanowisko laboratoryjne z robotem edukacyjnym ASTORINO"
    },
    subtitle: {
        'en': "PBL Project",
        'pl': "Projekt PBL",
    },
    tags: [
        "ESP",
        "RaspberryPi",
        "I2C",
        "MQTT",
        "ModbusTCP",
        "C++",
        "NodeJS",
        "Robot",
        "PLC",
        "Breadboard",
    ],
    links: [
        { type: 'raport', href: '/pdfs/astorino_pbl.pdf'},
        { type: 'slides', href: '/pdfs/astorino_pbl_slides.pdf'},
        { type: 'github', href: 'https://github.com/Mikkhael/astorino_pbl'},
    ],
    imgs: [
        { src:  '/imgs/astorino_stand.png',
          desc: {
            'en': 'Laboratory station',
            'pl': 'Stanowisko laboratoryjne',}},
        { src:  '/imgs/astorino_web.png',
            desc: {
            'en': 'HTTP control interface',
            'pl': 'Interfejs kontrolny HTTP',}},
        { src:  '/imgs/astorino_io.png',
            desc: {
            'en': 'Robots\'s IO extension port',
            'pl': 'Port rozszerzeń IO robota',}},
        { src:  '/imgs/astorino_pbl_comms.png',
            desc: {
            'en': 'Diagram of the ESP <-> Robot communication protocol',
            'pl': 'Diagram protokołu komunikacji ESP <-> Robot',}},
        { src:  '/imgs/astorino_grabber.png',
            desc: {
            'en': 'Robot\'s pneumatic grabber',
            'pl': 'Chwytak pneumatyczny robota',}},
    ],
    ytembeds: ["https://www.youtube.com/embed/fm7KGnz30is?si=F3YU9HD9De6sSIGW"],
    content_short: {
        'en': /*html*/`
        <b>PBL</b> (project based learning) is an alternative type of university classes, where a group of students are assigned a complex project to create over the course of the semester. <br>
        The goal of the project was to create a station with the <b>ASTORINO educational robot, to showcase it's capabilities</b>.
        The group consisted of 6 students, with me as the de-facto leader. My task was to create the <b>HTTP interface on RaspberryPi, software for the robot, and the ESP8266 for managing robot's IO</b>
        `,
        'pl': /*html*/`

        <b>PBL</b> (project based learning) to alternatywny rodzaj zajęć uczelnianych, na których grupa studentów ma zrobić skomplikowany projekt, na przestrzeni całego semestru <br>
        Celem projektu było stworzenie stacji roboczej z wykorzystaniem edukacyjnego robota ASTORINO, aby zaprezentować jego możliwości.
        Grupa składała się z 6 studentów, z de-facto mną na czele. Moim zadaniem było stworzenie <b>interfejsu HTTP na RaspberryPi, oprogramowania robota, oraz ESP8266, zarządzającego portami IO robota</b>
        `,
    },
    content: {
        'en': /*html*/`

        The station consists of:
        <ul>
            <li>ASTORINO robot</li>
            <li>ESP8266 <span class="soft">(for interfacing between the robot and other components)</span></li>
            <li>HTTP control interface (on a RaspberryPi)</li>
            <li>Storage structure from aluminum profiles</li>
            <li>Collection of multicolored 3d-printed elements (bases and tops)</li>
            <li>Small rotary table, controlled by a PLC</li>
            <li>Collection of sensors (camera, distance, force and induction)</li>
        </ul>

        <b>The station operates as follows:</b>
        The user creates a request via the HTTP interface, to produce an element with parts of 2 specified colors.
        Then, the robot grabs the parts from the corresponding rails and inspects them with a distance sensor.
        The parts are put on the rotary table, and their color is checked by the camera.
        The robot screws the two parts together, and then outputs the complete element on the output rail (or throws the parts into the trash, if sensor inspection was negative).
        <br>
        <br>
        Throughout the entire process, the user can <b>preview the state of sensors and internal signals in the HTTP interface</b>.
        <br>
        <br>
        The robot communicates with ESP via the General Purpose Input and Output ports. 
        Because ESP has too few of those, to fully implement state preview and reliable communication, 
        it was required to use additional <b>port extenders, on a I2C bus</b>.
        The communication is done via a <b>custom made handshaking protocol</b>. The robot has a precoded set of possible actions, which are send serially from the ESP.
        <br>
        <br>
        The communication with other components (RaspberryPi and camera) is done via <b>MQTT protocol over WiFi</b>. The RaspberryPi acts as a MQTT Broker.
        The PLC controlling the rotary table had to be controlled via <b>ModbusTCP</b>.
        <br>
        <br>
        The ASTORINO robot used in the project was still in the alpha development stage. It made it so that, a lot of things were breaking all the time.
        For example, the most "fun" thing we encountered, was the robot reading an input pin as the inverse of it's actual state, once every 10000 or so polls, 
        which led to out of nowhere ramming into the table :&#41;.
        `,
        'pl': /*html*/`
        Stanowisko składa się z:
        <ul>
        <li>Robota ASTORINO</li>
        <li>ESP8266 <span class="soft">(do łączenia robota z innymi komponentami)</span></li>
        <li>Interfejsu sterowania przez HTTP (na RaspberryPi)</li>
        <li>Struktura magazynowa z profili aluminiowych</li>
        <li>Zbiór wielokolorowych elementów drukowanych w technologii 3D (podstawki i nakrętki)</li>
        <li>Mały stół obrotowy, sterowany przez PLC</li>
        <li>Zbiór czujników (kamera, odległości, siły i indukcyjny)</li>
        </ul>

        <b>Stanowisko działa w następujący sposób:</b>
        Użytkownik tworzy żądanie za pośrednictwem interfejsu HTTP, aby wyprodukować element z częściami o 2 określonych kolorach.
        Następnie robot chwyta części z odpowiednich szyn i sprawdza je za pomocą czujnika odległości.
        Części są umieszczane na stole obrotowym, a ich kolor jest sprawdzany przez kamerę.
        Robot skręca ze sobą obie części, a następnie odkłada cały element na szynę wyjściową (lub wyrzuca części do kosza, jeśli kontrola czujnikami była negatywna).
        <br>
        <br>
        Przez cały proces użytkownik może <b>podglądać stan wszystkich czujników i sygnałów wewnętrznych poprzez interfejs HTTP</b>.
        <br>
        <br>
        Robot komunikuje się z ESP za pośrednictwem portów wejściowych i wyjściowych ogólnego przeznaczenia.
        Ponieważ ESP ma ich zbyt mało, aby w pełni zaimplementować podgląd stanu i niezawodną komunikację,
        konieczne było użycie dodatkowych <b>rozszerzeń portów, na magistrali I2C</b>.
        Komunikacja odbywa się za pośrednictwem <b>customowego protokołu handshake</b>. Robot ma wstępnie zakodowany zestaw możliwych akcji, które są wysyłane szeregowo z ESP. <br>
        <br>
        Komunikacja z innymi komponentami (RaspberryPi i kamera) odbywa się za pośrednictwem <b>protokołu MQTT przez WiFi</b>. RaspberryPi działa jako broker MQTT.
        PLC sterujący stołem obrotowym musiał być kontrolowany za pośrednictwem <b>ModbusTCP</b>.
        <br>
        <br>
        Robot ASTORINO używany w projekcie był wciąż w fazie rozwoju alfa. Spowodowało to, że wiele rzeczy cały czas się psuło.
        Na przykład, najbardziej "zabawną” rzeczą, na jaką się natknęliśmy, był robot odczytujący pin wejściowy jako odwrotność jego rzeczywistego stanu, raz na około 10000 poll-ów,
        co doprowadziło do niespodziewanego uderzenia w stół :&#41;.
        `,
    }

});

export default content;