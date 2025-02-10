import { inject, onMounted, onUnmounted } from "vue";


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
