
/**
 * @typedef {'pl' | 'en'} Lang
 */

/**
 * @template T
 * @typedef {{[k in Lang]?: T}} LangSpecyfic
 */

/**
 * @typedef {{src: string, desc: LangSpecyfic<string>}} ImgDef
*/

/**
 * @typedef {{href: string, type: 'github' | 'thesis' | 'slides' | 'tslides' | 'raport'}} LinkDef
 */

/**
 * @typedef {{
 *  tags?:     string[],
 *  ytembeds?: string[],
 *  title:          LangSpecyfic<string>,
 *  subtitle?:      LangSpecyfic<string>,
 *  content_short:  LangSpecyfic<string>,
 *  content:        LangSpecyfic<string>,
 *  links: LinkDef[],
 *  imgs:  ImgDef[],
 * }} ContentDef
 */

/**
 * @template T
 * @param {LangSpecyfic<T> | undefined | string} value
 * @param {Lang} lang 
 */
function get_lang(value, lang = 'en') {
    if(typeof value !== 'object' ) return value;
    return value[lang] ?? value['en'];
}

class ProjectContent {
    constructor(/**@type {ContentDef} */ content_def) {
        this.content_def = content_def;
    }

    /**
     * @param {Lang} lang 
     */
    get_links_for_lang(lang = 'en') {
        return this.content_def.links.map(x => {
            return {
                href: x.href,
                name: 
                    x.type === 'thesis'  ? (lang === 'pl' ? 'Praca Dyplomowa'   : 'Thesis') :
                    x.type === 'tslides' ? (lang === 'pl' ? 'Slajdy do p. dyp.' : 'Slides for thesis')  :
                    x.type === 'slides'  ? (lang === 'pl' ? 'Slajdy' : 'Slides')  :
                    x.type === 'raport'  ? (lang === 'pl' ? 'Sprawozdanie' : 'Raport')  :
                                        "GitHub"
            }
        });
    }

    /**
     * @param {Lang} lang
     */
    get_imgs_for_lang(lang = 'en') {
        return this.content_def.imgs.map(x => {
            return {
                src: x.src,
                desc: get_lang(x.desc, lang) ?? ''
            }
        });
    }

    /**
     * @param {Lang} lang 
     */
    get_for_lang(lang = 'en') {
        return {
            tags:      this.content_def.tags ?? [],
            ytembeds:  this.content_def.ytembeds ?? [],
    
            title:          get_lang(this.content_def.title,         lang) ?? '',
            subtitle:       get_lang(this.content_def.subtitle,      lang),
            content_short:  get_lang(this.content_def.content_short, lang) ?? '',
            content:        get_lang(this.content_def.content,       lang) ?? '',

            links: this.get_links_for_lang(lang) ?? [],
            imgs:  this.get_imgs_for_lang(lang)  ?? [],
        }
    }
}

/**
 * @typedef {ReturnType<ProjectContent['get_for_lang']>} ParsedContent
 */

export default ProjectContent;