import { inject, onMounted, onUnmounted } from "vue";


/**
 * @typedef {'en' | 'pl'} Lang
 */

/**
 * @template T
 * @typedef {{[k in Lang]?: T}} LangSpecyfic
 */


/**
 * @template T
 * @param {LangSpecyfic<T> | undefined | string } value
 * @param {Lang} lang 
 */
export function get_lang(value, lang = 'en') {
    if(typeof value !== 'object' ) return value;
    return value[lang] ?? value['en'];
}

export function extend_all_projects(value = true) {
    const event = Object.assign(new Event('extend_all_projects'), {value});
    window.dispatchEvent(event);
}

export function window_event_listen(name, handler) {
    onMounted(() => {
        window.addEventListener(name, handler);
    });
    onUnmounted(() => {
        window.removeEventListener(name, handler);
    })
}

//@ts-ignore
// import LANG from "/src/langs/common.json";

/**
 * @template T
 * @param {import("./ProjectContent").LangSpecyfic<T>} [strings] 
 * @returns {[import("./ProjectContent").Lang, T]}
 */
export function use_lang(strings) {
    const lang = inject('lang') ?? 'en';
    // return LANG[lang];
    if(strings !== undefined) {
        const res_strings = strings[lang] ?? strings['en'];
        return [lang, res_strings];
    }
    //@ts-ignore
    return [lang, undefined];
}
