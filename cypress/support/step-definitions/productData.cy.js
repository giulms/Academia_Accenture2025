import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('preencho a página Product Data com informações válidas', () => {
    cy.preencherProduto()
})