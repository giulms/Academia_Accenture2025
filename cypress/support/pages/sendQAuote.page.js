import { faker } from '@faker-js/faker';
import sendQAuotElements from '../../elements/sendQAuote.elements.js';

Cypress.Commands.add('preencherSendQAuote', () => {

    const envData = {
        email: faker.internet.email(),
        senha: faker.internet.password(6, false),
    }

    const telefone = faker.phone.number('##########').replace(/\D/g, '');
    const usuario = faker.internet.userName();
    const comentario = faker.lorem.paragraph(1);
    
    sendQAuotElements.INPUT_EMAIL().type(envData.email, {log: false});
    sendQAuotElements.INPUT_TELEFONE().type(telefone);
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