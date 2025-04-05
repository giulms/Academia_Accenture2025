import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And ('preencho a página Insurant Data com informações válidas', () => {
    cy.preencherSeguradora()
})