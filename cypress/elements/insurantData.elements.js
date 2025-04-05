const insurantElements = {
    INPUT_PRIMEIRO_NOME: () => cy.get('#firstname'),
    INPUT_ULTIMO_NOME: () => cy.get('#lastname'),
    SELECT_DATA_NASCIMENTO: () => cy.get('#birthdate'),
    CLICK_GENERO_MASCULINO: () => cy.get('#gendermale'),
    CLICK_GENERO_FEMININO: () => cy.get('#genderfemale'),
    INPUT_ENDERECO: () => cy.get('#streetaddress'),
    SELECT_PAIS: () => cy.get('#country'),
    INPUT_CEP: () => cy.get('#zipcode'),
    INPUT_CIDADE: () => cy.get('#city'),
    SELECT_OCUPACAO: () => cy.get('#occupation'),
    CLICK_HOBBY_SPEEDING: () => cy.get('#speeding'),
    CLICK_HOBBY_BJUMPING: () => cy.get('#bungeejumping'),
    CLICK_HOBBY_CDIVING: () => cy.get('#cliffdiving'),
    CLICK_HOBBY_SDIVING: () => cy.get('#skydiving'),
    CLICK_HOBBY_OTHER: () => cy.get('#other'),
    INPUT_WSITE: () => cy.get('#website'),
    FILE_PICTURE: () => cy.get('#picturecontainer'),
    NUMERO_COUNTER: () => cy.get('.counter.zero'),
    BTN_NEXT: () => cy.get('#nextenterproductdata'),
}

export default insurantElements;