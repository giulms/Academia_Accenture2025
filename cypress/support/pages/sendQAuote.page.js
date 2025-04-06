import { faker } from '@faker-js/faker';
import sendQAuotElements from '../../elements/sendQAuote.elements.js';

Cypress.Commands.add('preencherSendQAuote', () => {

    const envData = {
        email: faker.internet.email(),
        senha: gerarSenha(),
    }

    function gerarTelefone(min = 8, max = 15) {
        let telefone;
        do {
            telefone = faker.phone.number('###############').replace(/\D/g, '');
        } while (telefone.length < min || telefone.length > max);
        return telefone;
    }

    function gerarUsername(min = 5, max = 15) {
        let username;
        do {
            username = faker.internet.userName().replace(/[^a-zA-Z0-9]/g, '');
        } while (username.length < min || username.length > max);
        return username;
    }

    function gerarSenha() {
        let senha;
        const validacao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        do {
            senha = faker.internet.password(10, false, /[A-Za-z0-9]/);
        } while (!validacao.test(senha));
        return senha;
    }

    const numeroValido = gerarTelefone();
    const usuario = gerarUsername();
    const comentario = faker.lorem.paragraph(1);
    
    sendQAuotElements.INPUT_EMAIL().type(envData.email, {log: false});
    sendQAuotElements.INPUT_TELEFONE().type(numeroValido);
    sendQAuotElements.INPUT_USUARIO().type(usuario);
    sendQAuotElements.INPUT_SENHA().type(envData.senha,  {log: false});
    sendQAuotElements.INPUT_CONFIRM_SENHA().type(envData.senha, {log: false});
    sendQAuotElements.INPUT_COMENTARIO().type(comentario);
    sendQAuotElements.NUMERO_COUNTER().should('have.text', '00000');
    cy.log('Nenhum campo foi deixado em branco.');
    sendQAuotElements.BTN_ENVIAR().click();
    cy.wait(5000);
})

Cypress.Commands.add('validarEmail', () => {
    sendQAuotElements.ALERT_SUCESSO().should('be.visible')
    cy.log('Email enviado com sucesso.')
})

Cypress.Commands.add('preencherEmailInvalido', () => {
    sendQAuotElements.INPUT_EMAIL().type(Cypress.env('emailInvalido'), {log: false});
    sendQAuotElements.INPUT_TELEFONE().type(Cypress.env('telefone'));
    sendQAuotElements.INPUT_USUARIO().type(Cypress.env('usuario'));
    sendQAuotElements.INPUT_SENHA().type(Cypress.env('senha'),  {log: false});
    sendQAuotElements.INPUT_CONFIRM_SENHA().type(Cypress.env('senha'), {log: false});
    sendQAuotElements.INPUT_COMENTARIO().type(Cypress.env('comentario'));
    sendQAuotElements.BTN_ENVIAR().click();
})

Cypress.Commands.add('validarErroEmail', () => {
    sendQAuotElements.ALERT_ERRO().should('be.visible')
    sendQAuotElements.ALERT_ERRO().should('have.text', 'There is still some data missing!')
    cy.log('E-mail inválido.')
})
