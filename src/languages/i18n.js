import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en', // se non disponibile it
    messages: {
        en: {
            welcome: 'Welcome',
            new: 'New',
            edit: 'Edit',
            delete: 'Delete',
            username: 'Username',
            email: 'Email',
            phone: 'phone',
            userId: 'User Id',
        },
        it: {
            welcome : 'Benvenuto',
            new: 'Nuovo',
            edit: 'Modifica',
            delete: 'Elimina',
            username: 'Nome utente',
            email: 'Email',
            phone: 'Cellulare',
            userId: 'ID Utente',
        }
    }
});

export default i18n;
