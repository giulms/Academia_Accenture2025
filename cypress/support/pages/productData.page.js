import { faker } from '@faker-js/faker';
import productElements from '../../elements/productData.elements';

Cypress.Commands.add('preencherProduto', () => {
    const dataInicio = faker.date.future({ years: 3 }).toLocaleDateString('en-US', { timeZone: 'UTC' });
    const somaSeguro = faker.helpers.arrayElement(['3.000.000,00','5.000.000,00','7.000.000,00', '10.000.000,00', '15.000.000,00', '20.000.000,00', '25.000.000,00', '30.000.000,00']);
    const classificacaoMerito = faker.helpers.arrayElement(['Super Bonus', 'Bonus 1', 'Bonus 2', 'Bonus 3', 'Bonus 4', 'Bonus 5', 'Bonus 6', 'Bonus 7', 'Bonus 8', 'Bonus 9', 'Malus 10', 'Malus 11', 'Malus 12', 'Malus 13', 'Malus 14', 'Malus 15', 'Malus 16', 'Malus 17']);
    const danoCoberto = faker.helpers.arrayElement(['No Coverage', 'Partial Coverage', 'Full Coverage']);
    const aleatorioOpcional = faker.helpers.arrayElement(['1', '2']);
    const aleatorioCortesia = faker.helpers.arrayElement(['Yes', 'No']);

    productElements.DATE_DATA_INICIO().type(dataInicio);
    productElements.SELECT_SOMA_SEGURO().select(somaSeguro);
    productElements.SELECT_CLASSIFICACAO_MERITO().select(classificacaoMerito);
    productElements.SELECT_SEGURO_DANOS().select(danoCoberto);
    if (aleatorioOpcional === '1') {
        productElements.CLICK_OPCIONAL_PROTECTION().click({force: true});
    } else {productElements.CLICK_OPTIONAL_DEFENSE().click({force: true});}
    if (aleatorioCortesia === 'Yes') {
        productElements.SELECT_CORTESIA().select(aleatorioCortesia);
    } else {productElements.SELECT_CORTESIA().select('No');}
    productElements.NUMERO_COUNTER().should('have.text', '000');
    cy.log('Nenhum campo foi deixado em branco.');
    cy.log(cy.get('#priceTable > thead > tr > :nth-child(2)'))
    productElements.BTN_NEXT().click();
})