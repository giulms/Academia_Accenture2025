import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And ('seleciono o seguro desejado', () => {
    cy.selecionarSeguro()
})