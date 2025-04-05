const dataElements = {
    SELECT_MARCA: () => cy.get('#make'),
    SELECT_MODELO: () => cy.get('#model'),
    INPUT_CAPACIDADE_CILINDRICA: () => cy.get('#cylindercapacity'),
    INPUT_MOTOR: () => cy.get('#engineperformance'),
    DATE_DATA_FABRICACAO: () => cy.get('#opendateofmanufacturecalender'),
    SELECT_NUMERO_ASSENTOS: () => cy.get('#numberofseats'),
    CLICK_DIRECAO_YES: () => cy.get('#righthanddriveyes'),
    CLICK_DIRECAO_NO: () => cy.get('#righthanddriveno'),
    SELECT_NUMERO_ASSENTOS_MOTO: () => cy.get('#numberofseatsmotorcycle'),
    SELECT_TIPO_COMBUSTIVEL: () => cy.get('#fuel'),
    INPUT_CARGA: () => cy.get('#payload'),
    INPUT_PESO: () => cy.get('#totalweight'),
    INPUT_PRECO_TABELA: () => cy.get('#listprice'),
    INPUT_PLACA: () => cy.get('#licenseplatenumber'),
    INPUT_KM_ANUAL: () => cy.get('#annualmileage'),
    NUMERO_COUNTER: () => cy.get('.counter.zero'),
    BTN_NEXT: () => cy.get('#nextenterinsurantdata'),
}

export default dataElements;