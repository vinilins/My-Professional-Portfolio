import { createI18n } from "vue-i18n"

import {pt_BR} from "./languages/pt_BR.js"
import {en} from "./languages/en.js"

const languages = {
    pt_BR,
    en    
}

export const i18n = createI18n({
    locale: "eng",
    fallbackLocale: "en",
    messages: languages
})