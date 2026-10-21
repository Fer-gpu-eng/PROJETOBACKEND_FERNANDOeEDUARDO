const traducoesSobre = {
    'pt-br': {
        navHome: '/HOME',
        navConfig: '/CONFIG',
        navAbout: '/SOBRE NÓS',
        navContact: '/CONTATO',
        aboutHeroTitle: 'Sobre o Amusing',
        aboutHeroSubtitle: 'Conheça a história, a missão e a equipe por trás do projeto.',
        missionTitle: 'Nossa Missão',
        missionDesc: 'O Amusing nasceu com o propósito de conectar pessoas a novas experiências sonoras. Utilizando um algoritmo interativo de sugestões por gênero, nosso objetivo é ajudar ouvintes a descobrirem músicas marcantes de forma rápida, simples e acessível.',
        teamTitle: 'Desenvolvedores',
        devRole1: 'Desenvolvedor Full Stack & Algoritmos',
        devBio1: 'Responsável pela estrutura lógica de recomendação, integração da API e arquitetura do projeto.',
        devRole2: 'Desenvolvedor Frontend & UI/UX',
        devBio2: 'Focado na criação da interface visual, acessibilidade, temas e experiência do usuário no site.',
        techTitle: 'Tecnologias Utilizadas',
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
        aboutHeroTitle: 'About Amusing',
        aboutHeroSubtitle: 'Learn about the history, mission, and team behind the project.',
        missionTitle: 'Our Mission',
        missionDesc: 'Amusing was created to connect people with new sound experiences. Using an interactive genre suggestion algorithm, our goal is to help listeners discover great music quickly and easily.',
        teamTitle: 'Developers',
        devRole1: 'Full Stack Developer & Algorithms',
        devBio1: 'Responsible for recommendation logic, API integration, and project architecture.',
        devRole2: 'Frontend Developer & UI/UX',
        devBio2: 'Focused on visual interface creation, accessibility, themes, and user experience.',
        techTitle: 'Technologies Used',
        devBy: 'Developed by',
        and: 'and',
        footerApi: 'API Documentation',
        footerTerms: 'Terms & Privacy',
        footerStatus: 'Server Status'
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const langSalvo = localStorage.getItem('amusing_lang') || 'pt-br';
    const dicionario = traducoesSobre[langSalvo] || traducoesSobre['pt-br'];

    document.querySelectorAll('[data-key]').forEach(elem => {
        const chave = elem.getAttribute('data-key');
        if (dicionario[chave]) {
            elem.textContent = dicionario[chave];
        }
    });

    const temaSalvo = localStorage.getItem('amusing_theme') || 'dark';
    if (temaSalvo === 'light') document.body.classList.add('light-theme');

    const contrasteSalvo = localStorage.getItem('amusing_contrast');
    if (contrasteSalvo === 'enabled') document.body.classList.add('high-contrast');
});