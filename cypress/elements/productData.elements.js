const productElements = {
    DATE_DATA_INICIO: () => cy.get('#openstartdatecalender'),
    SELECT_SOMA_SEGURO: () => cy.get('#insurancesum'),
    SELECT_CLASSIFICACAO_MERITO: () => cy.get('#meritrating'),
    SELECT_SEGURO_DANOS: () => cy.get('#damageinsurance'),
    CLICK_OPCIONAL_PROTECTION: () => cy.get('#EuroProtection'),
    CLICK_OPTIONAL_DEFENSE: () => cy.get('#LegalDefenseInsurance'),
    SELECT_CORTESIA: () => cy.get('#courtesycar'),
    NUMERO_COUNTER: () => cy.get('.counter.zero'),
    BTN_NEXT: () => cy.get('#nextselectpriceoption'),
}

export default productElements