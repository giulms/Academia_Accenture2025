import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('envio as informações de QAuote', () => {
    cy.preencherSendQAuote()
})

Then('valido o envio do e-mail', () => {
    cy.validarEmail()
})

When('insiro um e-mail inválido', () => {
    cy.preencherEmailInvalido()
})
Then('valido a mensagem de erro', () => {
    cy.validarErroEmail()
})