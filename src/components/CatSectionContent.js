import { get_lang } from './common';


/**
 * @typedef {import('./common').Lang} Lang
 */
/**
 * @template T
 * @typedef {import('./common').LangSpecyfic<T>} LangSpecyfic
 */

/**
 * @typedef {{
 *  title?: LangSpecyfic<string>,
 *  over?: LangSpecyfic<string>,
 *  sub?: LangSpecyfic<string>,
 *  desc?: LangSpecyfic<string>,
 * }} CatElemDef
 */

/**
 * @typedef {{
 * title: LangSpecyfic<string>,
 * elems: CatElemDef[]
 * }} ContentDef
 *  */



class CatSectionContent {
    constructor(/**@type {ContentDef} */ content_def) {
        this.content_def = content_def;
    }


    /**
     * @param {Lang} lang 
     */
    get_for_lang(lang = 'en') {
        return {
            title: get_lang(this.content_def.title, lang) ?? '',
            elems: this.content_def.elems.map(elem_def => {
                return {
                    title: get_lang(elem_def.title, lang) ?? '',
                    over:  get_lang(elem_def.over,  lang) ?? '',
                    sub:   get_lang(elem_def.sub,   lang) ?? '',
                    desc:  get_lang(elem_def.desc,  lang) ?? '',
                }
            }),
        };
    }
}

/**
 * @typedef {ReturnType<CatSectionContent['get_for_lang']>} ParsedContent
 */

export default CatSectionContent;