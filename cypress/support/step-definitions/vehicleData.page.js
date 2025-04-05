import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso a página Automobile Insegurance', () => {
    cy.visit(Cypress.config('baseUrl'))
})

And('preencho a página Vehicle Data com informações válidas', () => {
    cy.preencherVeiculo()
})