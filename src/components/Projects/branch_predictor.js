import ProjectContent from '../ProjectContent';

const content = new ProjectContent({
    title: {
        'en': "Branch Prediction Module for a RISC-V processor",
        'pl': "Moduł Predykcji Skoków dla procesora RISC-V"
    },
    subtitle: {
        'en': "Master's thesis",
        'pl': "Praca Magisterska",
    },
    tags: [
        "FPGA",
        "SystemVerilog",
        "QuestaSim",
        "RISC-V",
        "ASM",
        "C",
        "NodeJS",
        "HTML",
        "Makefile",
    ],
    links: [
        { type: 'thesis', href: '/pdfs/Michal_Gold_Praca_Magisterska_Predyktor.pdf'},
        { type: 'slides', href: '/pdfs/Prezentacja_Mgr.pdf'},
        { type: 'github', href: 'https://github.com/Mikkhael/polsl_riscv_mgr_stripped'},
    ],
    imgs: [
        { src:  '/imgs/pipeline_visualizer.png',
          desc: {
            'en': 'Sample fragment of pipline visualization\'u',
            'pl': 'Przykładowy fragment wizualizacji pipeline\'u',}},
        { src:  '/imgs/schemat_procesora.png',
          desc: {
            'en': 'Processor structure schematic',
            'pl': 'Schemat struktury procesora',}},
        { src:  '/imgs/schemat_interfejsu_predyktora.png',
          desc: {
            'en': 'Predictor module interface schematic',
            'pl': 'Schemat interfejsu modułu predykcji',}},
    ],
    content_short: {
        'en': /*html*/`
        The aim of the thesis was to <b>design, implement, test, and study the efficiency 
        of a branch prediction module for a microprocessor based on the RISC&#8209;V specification</b>. <br>
        `,
        'pl': /*html*/`
        Celem pracy było <b>zaprojektowanie, implementacja, przeprowadzenie testów, oraz zbadanie efektywności 
        modułu predykcji skoków dla mikroprocesora opartego o specyfikację RISC&#8209;V</b>. <br>
        `,
    },
    content: {
        'en': /*html*/`
        The model was <b>integrated with an existing CPU project</b>, created as part of other master's theses. <br>
        I devoted a significant part of my work not only to creating the predictor, but also to <b>analyzing and repairing the RISC&#8209;V processor project</b>,
        because it turned out to be <b>full of errors and inconsistencies with the provided documentation</b>. <br>
        In addition to the predictor itself, an <b>extensive test environment</b> was created,
        allowing for fully automated programs compilation, running simulations, and creating reports.
        The environment consists of <b>scripts (written in JavaScript) and a Makefile file</b>, allowing for the selection of configuration,
        with which variant of the predictor the project should be compiled, and which test programs to run. <br>
        Additionally, an <b>visualizer of processor internal signals</b> was created,
        presenting an insight into its operation using an <b>HTML file</b>, divided into cycles and pipeline stages. <br>
        `,
        'pl': /*html*/`
        Model <b>zintegrowano z istniejącym już projektem procesora</b>, stworzonym w ramach innych prac magisterskich. <br>
        Znaczną część pracy poświęciłem nie tylko na tworzenie predyktora, ale na <b>analizę i naprawę projektu procesora RISC&#8209;V</b>,
        gdyż okazał się on być <b>pełny błędów oraz niezgodności z dostarczoną dokumentacją</b>. <br>
        Oprócz samego predtktora, stworzone zostało <b>rozbudowane środowisko testowe</b>, 
        pozwalające na w pełni zautomatyzowaną kompilację programów, uruchamianie symulacji oraz tworzenie raportów. 
        Na środowisko składają się <b>skrypty (napisane w języku JavaScript) oraz plik Makefile</b>, pozwalający na wybór konfiguracji, 
        z jakim wariantem predyktora należy skompilować projekt, oraz który z programów testowych uruchomić. <br>
        Dodatkowo, stworzono <b>wizualizator sygnałów wewnętrznych procesora</b>, 
        prezentujący za pomocą <b>pliku HTML wgląd do jego działania</b>, z podziałem na cykle oraz etapy pipeline'u. <br>
        `,
    }

});

export default content;