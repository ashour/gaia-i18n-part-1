interface I18nConfig {
    supportedLocales: {
        [key: string]: string;
    };

    fallbackLocale: string;
}

const i18nConfig: I18nConfig = {
    supportedLocales: {
        en: 'English',
        ar_EG: 'عربي',
        fr: 'Français',
    },

    fallbackLocale: 'fr',
};

export default i18nConfig;
