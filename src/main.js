import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';


// icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faS } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
// icon

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// link icon
app.component('fa',FontAwesomeIcon)
// 
app.use(createPinia())
app.use(router)
app.use(router);
app.mount('#app')
