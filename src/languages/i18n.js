import { createI18n } from 'vue-i18n';
import en from './en.json'
import it from './it.json'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        it: it
    }
});

export default i18n;
