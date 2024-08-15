import { createApp } from "vue"
import { i18n } from "./internationalization.js"

import App from "./App.vue"



createApp(App).use(i18n).mount("#app")