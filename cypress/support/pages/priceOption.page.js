import { faker } from '@faker-js/faker';
import priceElements from '../../elements/priceOption.elements.js';

Cypress.Commands.add('selecionarSeguro', () => {
    const aleatorio = faker.helpers.arrayElement([1, 2, 3, 4]);

    switch (aleatorio) {
        case 1:
            priceElements.BTN_SILVER().click({force: true});
            priceElements.NUMERO_COUNTER().should('have.text', '0000')
            cy.log('Nenhum campo foi deixado em branco.')
            priceElements.BTN_PDF().should('be.visible')
            cy.log('PDF gerado com sucesso.')
            priceElements.BTN_DOWNLOAD_PDF().should('be.visible')
            cy.log('Download do PDF disponível.')
            priceElements.BTN_NEXT().click();
            break;
        case 2:
            priceElements.BTN_GOLD().click({force: true});
            priceElements.NUMERO_COUNTER().should('have.text', '0000')
            cy.log('Nenhum campo foi deixado em branco.')
            priceElements.BTN_PDF().should('be.visible')
            cy.log('PDF gerado com sucesso.')
            priceElements.BTN_DOWNLOAD_PDF().should('be.visible')
            cy.log('Download do PDF disponível.')
            priceElements.BTN_NEXT().click();
            break;
        case 3:
            priceElements.BTN_PLATINUM().click({force: true});
            priceElements.NUMERO_COUNTER().should('have.text', '0000')
            cy.log('Nenhum campo foi deixado em branco.')
            priceElements.BTN_PDF().should('be.visible')
            cy.log('PDF gerado com sucesso.')
            priceElements.BTN_DOWNLOAD_PDF().should('be.visible')
            cy.log('Download do PDF disponível.')
            priceElements.BTN_NEXT().click();
            break;
        case 4:
            priceElements.BTN_ULTIMATE().click({force: true});
            priceElements.NUMERO_COUNTER().should('have.text', '0000')
            cy.log('Nenhum campo foi deixado em branco.')
            priceElements.BTN_PDF().should('be.visible')
            cy.log('PDF gerado com sucesso.')
            priceElements.BTN_DOWNLOAD_PDF().should('be.visible')
            cy.log('Download do PDF disponível.')
            priceElements.BTN_NEXT().click();
            break;
    }
})