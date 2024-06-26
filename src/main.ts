import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { optionsLanguages } from './i18n/en/global';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';

const languages = {
    optionsLanguages: optionsLanguages,
};

const i18n = createI18n({
    locale: 'optionsLanguages',
    messages: languages
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
