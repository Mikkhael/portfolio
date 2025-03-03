import CatSectionContent from "../CatSectionContent";

const content = new CatSectionContent({
    title: {'en': 'Work Experience',
            'pl': 'Doświadczenie Zawodowe',
    },
    elems: [
{
    over:  {'en': '18.04.2017 - 18.05.2017 (1 month)',
            'pl': '18 kwietnia 2017 - 18 maja 2017 (1 miesiąc)',
    },
    title: {'en': 'GONG Creative Agency',
            'pl': 'Agencja Kreatywna GONG',
    },
    desc:  {'en': 'Internship as Front-End Developer',
            'pl': 'praktyki na stanowisku Front-End Developera',
    },
},
{
    over:  {'en': '11.07.2022 - 11.07.2022 (1 month)',
            'pl': '11 lipca 2022 - 11 sierpnia 2022 (1 miesiąc)',
    },
    title: {'en': 'I-CON',
            'pl': 'I-CON',
    },
    desc:  {'en': 'Internship as PLC and Industrial Robot programmer',
            'pl': 'praktyki na stanowisku programisty sterowników PLC i robotów',
    },
},
]});

export default content;