import React from 'react';

interface I18nConfig {
    supportedLocales: {
        [key: string]: string;
    };
}

const i18nConfig: I18nConfig = {
    supportedLocales: {
        en: 'English',
        ar: 'عربي',
        fr: 'Français',
    },
}

function renderOption(value: string, label: string) {
    return (<option key={value} value={value}>{label}</option>);
}

interface SelectLanuageProps {
    value: string;
    onChange(value: string): void;
}

function SelectLanguage(props: SelectLanuageProps) {
    return (
        <select
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        >
            {
                Object.keys(i18nConfig.supportedLocales).map((key) => {
                    return renderOption(key, i18nConfig.supportedLocales[key]);
                })
            }
        </select>
    );
}

export default SelectLanguage;
