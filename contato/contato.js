const traducoesContato = {
    'pt-br': {
        navHome: '/HOME',
        navConfig: '/CONFIG',
        navAbout: '/SOBRE NÓS',
        navContact: '/CONTATO',
        contactHeroTitle: 'Entre em Contato',
        contactHeroSubtitle: 'Dúvidas, sugestões ou feedbacks? Envie uma mensagem para nossa equipe.',
        formHeader: 'Formulário de Mensagem',
        labelName: 'Seu Nome',
        labelEmail: 'Seu E-mail',
        labelSubject: 'Assunto',
        optQuestion: 'Dúvida sobre Recomendação',
        optBug: 'Reportar um Problema/Bug',
        optSuggestion: 'Sugestão de Funcionalidade',
        optOther: 'Outro Assunto',
        labelMessage: 'Sua Mensagem',
        btnSend: 'Enviar Mensagem',
        msgSuccess: 'Obrigado! Sua mensagem foi enviada com sucesso.',
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
        contactHeroTitle: 'Contact Us',
        contactHeroSubtitle: 'Questions, suggestions, or feedback? Send a message to our team.',
        formHeader: 'Message Form',
        labelName: 'Your Name',
        labelEmail: 'Your Email',
        labelSubject: 'Subject',
        optQuestion: 'Question about Recommendation',
        optBug: 'Report a Bug/Issue',
        optSuggestion: 'Feature Suggestion',
        optOther: 'Other Topic',
        labelMessage: 'Your Message',
        btnSend: 'Send Message',
        msgSuccess: 'Thank you! Your message has been sent successfully.',
        devBy: 'Developed by',
        and: 'and',
        footerApi: 'API Documentation',
        footerTerms: 'Terms & Privacy',
        footerStatus: 'Server Status'
    }
};

let idiomaAtual = 'pt-br';

window.addEventListener('DOMContentLoaded', () => {
    idiomaAtual = localStorage.getItem('amusing_lang') || 'pt-br';
    const dicionario = traducoesContato[idiomaAtual] || traducoesContato['pt-br'];

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

const formContato = document.getElementById('contact-form');
const feedbackContainer = document.getElementById('form-feedback');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    const dicionario = traducoesContato[idiomaAtual] || traducoesContato['pt-br'];

    feedbackContainer.textContent = dicionario.msgSuccess;
    feedbackContainer.className = 'form-feedback success';
    formContato.reset();
});
