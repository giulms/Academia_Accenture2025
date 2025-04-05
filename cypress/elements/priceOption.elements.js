const priceElements = {
    BTN_SILVER: () => cy.get('#selectsilver'), 
    BTN_GOLD: () => cy.get('#selectgold'),
    BTN_PLATINUM: () => cy.get('#selectplatinum'),
    BTN_ULTIMATE: () => cy.get('#selectultimate'),
    NUMERO_COUNTER: () => cy.get('.counter.zero'),
    BTN_PDF: () => cy.get('#viewquote'),
    BTN_DOWNLOAD_PDF: () => cy.get('#downloadquote'),
    BTN_NEXT: () => cy.get('#nextsendquote'),
}

export default priceElements;