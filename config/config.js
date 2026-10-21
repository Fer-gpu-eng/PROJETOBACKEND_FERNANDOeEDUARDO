const traducoes = {
    'pt-br': {
        navHome: '/HOME',
        navConfig: '/CONFIG',
        navAbout: '/SOBRE NÓS',
        navContact: '/CONTATO',
        heroTitle: 'Configurações do Sistema',
        heroSubtitle: 'Personalize sua experiência de navegação e preferências do Amusing.',
        langTitle: 'Idioma da Página',
        langDesc: 'Altere o idioma de exibição do site. Esta preferência será aplicada em todas as páginas do sistema.',
        themeTitle: 'Tema Visual',
        themeDark: 'Escuro',
        themeLight: 'Claro',
        themeDesc: 'Escolha entre o modo escuro padrão ou o modo claro para ajustar a iluminação da interface.',
        contrastTitle: 'Modo de Alto Contraste',
        contrastDesc: 'Aumente o contraste visual das bordas e textos para melhorar a legibilidade. Funciona perfeitamente tanto no modo claro quanto no modo escuro.',
        devBy: 'Desenvolvido por',
        and: 'e',
        footerApi: 'Documentação API',
        footerTerms: 'Termos e Privacidade',
        footerStatus: 'Status do Servidor'
    },
    'en-us': {
        navHome: '/HOME',
        navConfig: '/SETTINGS',
        navAbout: '/ABOUT US',
        navContact: '/CONTACT',
        heroTitle: 'System Settings',
        heroSubtitle: 'Customize your browsing experience and preferences on Amusing.',
        langTitle: 'Page Language',
        langDesc: 'Change the display language of the site. This preference will apply to all pages.',
        themeTitle: 'Visual Theme',
        themeDark: 'Dark',
        themeLight: 'Light',
        themeDesc: 'Choose between default dark mode or light mode to adjust interface lighting.',
        contrastTitle: 'High Contrast Mode',
        contrastDesc: 'Increase visual contrast on borders and text to improve readability. Works on both light and dark themes.',
        devBy: 'Developed by',
        and: 'and',
        footerApi: 'API Documentation',
        footerTerms: 'Terms & Privacy',
        footerStatus: 'Server Status'
    },
    'es-mx': {
        navHome: '/INICIO',
        navConfig: '/CONFIG',
        navAbout: '/NOSOTROS',
        navContact: '/CONTACTO',
        heroTitle: 'Configuración del Sistema',
        heroSubtitle: 'Personaliza tu experiencia de navegación y preferencias en Amusing.',
        langTitle: 'Idioma de la Página',
        langDesc: 'Cambia el idioma de visualización del sitio en todas las páginas.',
        themeTitle: 'Tema Visual',
        themeDark: 'Oscuro',
        themeLight: 'Claro',
        themeDesc: 'Elige entre modo oscuro o claro para ajustar la iluminación de la interfaz.',
        contrastTitle: 'Modo de Alto Contraste',
        contrastDesc: 'Aumenta el contraste de bordes y texto para mejorar la legibilidad.',
        devBy: 'Desarrollado por',
        and: 'y',
        footerApi: 'Documentación API',
        footerTerms: 'Términos y Privacidad',
        footerStatus: 'Estado del Servidor'
    }
};

const selectIdioma = document.getElementById('language-select');
const radioDark = document.getElementById('radio-dark');
const radioLight = document.getElementById('radio-light');
const toggleContraste = document.getElementById('contrast-toggle');

selectIdioma.addEventListener('change', (e) => {
    const lang = e.target.value;
    aplicarIdioma(lang);
    localStorage.setItem('amusing_lang', lang);
});

function aplicarIdioma(lang) {
    const dicionario = traducoes[lang] || traducoes['pt-br'];
    document.querySelectorAll('[data-key]').forEach(elem => {
        const chave = elem.getAttribute('data-key');
        if (dicionario[chave]) {
            elem.textContent = dicionario[chave];
        }
    });
}

[radioDark, radioLight].forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'light') {
            document.body.classList.add('light-theme');
            localStorage.setItem('amusing_theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('amusing_theme', 'dark');
        }
    });
});

toggleContraste.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('high-contrast');
        localStorage.setItem('amusing_contrast', 'enabled');
    } else {
        document.body.classList.remove('high-contrast');
        localStorage.setItem('amusing_contrast', 'disabled');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const langSalvo = localStorage.getItem('amusing_lang') || 'pt-br';
    selectIdioma.value = langSalvo;
    aplicarIdioma(langSalvo);

    const temaSalvo = localStorage.getItem('amusing_theme') || 'dark';
    if (temaSalvo === 'light') {
        document.body.classList.add('light-theme');
        radioLight.checked = true;
    } else {
        radioDark.checked = true;
    }

    const contrasteSalvo = localStorage.getItem('amusing_contrast');
    if (contrasteSalvo === 'enabled') {
        document.body.classList.add('high-contrast');
        toggleContraste.checked = true;
    }
});