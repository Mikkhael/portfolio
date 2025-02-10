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
import LANG from "/src/langs/common.json";

export function use_lang() {
    const lang = inject('lang');
    return LANG[lang];
}
