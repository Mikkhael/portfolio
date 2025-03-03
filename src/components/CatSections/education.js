import CatSectionContent from "../CatSectionContent";

const polsl_prefix_pl = "Politechnika Śląska &mdash; kierunek ";
const polsl_prefix_en = "Silesian University of Technology &mdash; major ";

function get_grades(avg, dyp) {
    return {
        'pl': `Średnia ze studiów: <b>${avg}</b> | Ocena pracy dyplomowej: <b>${dyp}</b>`,
        'en': `Average total grade: <b>${avg}</b> | Thesis grade: <b>${dyp}</b>`,
    }
}


const content = new CatSectionContent({
    title: {'en': 'Education',
            'pl': 'Wykształcenie',
    },
    elems: [
{
    over:  {'en': '1.10.2019 - 22.02.2023 (7 semesters)',
            'pl': '1 październik 2019 - 22 lutego 2023 (7 semestrów)',
    },
    title: {'en': polsl_prefix_en + '"Automatic Control & Robotics"',
            'pl': polsl_prefix_pl + '"Automatyka i Robotyka"',
    },
    sub:   {'en': 'Bachelor\'s',
            'pl': 'stopień 1 (inżynier)',
    },
    desc:  get_grades('4,79', '4,75'),
},
{
    over:  {'en': '1.05.2023 - 8.07.2024 (3 semesters)',
            'pl': '1 maja 2023 - 8 lipca 2024 (3 semestry)',
    },
    title: {'en': polsl_prefix_en + '"Microinformatics of Embedded Systems"',
            'pl': polsl_prefix_pl + '“Mikroinformatyka Systemów Cyfrowych”',
    },
    sub:   {'en': 'Master\'s',
            'pl': 'stopień 2 (magister inżynier)',
    },
    desc:  get_grades('4,92', '5'),
},
]});

export default content;