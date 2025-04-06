const qauotElements = {
    INPUT_EMAIL: () => cy.get('#email'),
    INPUT_TELEFONE: () => cy.get('#phone'),
    INPUT_USUARIO: () => cy.get('#username'),
    INPUT_SENHA: () => cy.get('#password'),
    INPUT_CONFIRM_SENHA: () => cy.get('#confirmpassword'),
    INPUT_COMENTARIO: () => cy.get('#Comments'),
    NUMERO_COUNTER: () => cy.get('.counter.zero'),
    BTN_ENVIAR: () => cy.get('button[name="Send E-Mail"]'),
    ALERT_SUCESSO: () => cy.get('.sweet-alert'),
    ALERT_ERRO: () => cy.get('p[style="display: block;"]'),
}

export default qauotElements;