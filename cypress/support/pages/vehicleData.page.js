import { faker } from '@faker-js/faker';
import dataElements from '../../elements/vehicleData.elements.js';

const dadoMarca = faker.helpers.arrayElement(['Audi', 'BMW', 'Ford', 'Honda', 'Mazda', 'Mercedes Benz', 'Nissan', 'Opel', 'Porsche', 'Skoda', 'Suzuki', 'Renault', 'Toyota', 'Volkswagen', 'Volvo']);
const dadoModelo = faker.helpers.arrayElement(['Scooter', 'Three-Wheeler', 'Moped', 'Motorcycle'])
const capacidadeCilindrica = faker.number.int({ min: 1, max: 2000 });
const motor = faker.number.int({ min: 1, max: 2000 });
const dataFabricacao = faker.date.past({ years: 10 }).toLocaleDateString('en-US', { timeZone: 'UTC' });
const numeroAssentos = faker.number.int({ min: 1, max: 9 });
const aleatorio = faker.helpers.arrayElement(['1', '2']);
const numeroAssentosMoto = faker.number.int({ min: 1, max: 3 });
const tipoCombustivel = faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other']);
const capacidadeCarga = faker.number.int({ min: 1, max: 1000 });
const peso = faker.number.int({ min: 100, max: 50000 });
const precoTabela = faker.number.int({ min: 500, max: 100000 });
const placa = faker.vehicle.vrm();
const kmAnual = faker.number.int({ min: 100, max: 100000 });


Cypress.Commands.add('preencherVeiculo', () => {
    dataElements.SELECT_MARCA().select(dadoMarca)
    dataElements.SELECT_MODELO().select(dadoModelo)
    dataElements.INPUT_CAPACIDADE_CILINDRICA().type(capacidadeCilindrica)
    dataElements.INPUT_MOTOR().type(motor)
    dataElements.DATE_DATA_FABRICACAO().type(dataFabricacao)
    dataElements.SELECT_NUMERO_ASSENTOS().select(numeroAssentos)
    if(aleatorio === '1') {
        dataElements.CLICK_DIRECAO_YES().click({force: true})
    }else{dataElements.CLICK_DIRECAO_NO().click({force: true})}
    dataElements.SELECT_NUMERO_ASSENTOS_MOTO().select(numeroAssentosMoto)
    dataElements.SELECT_TIPO_COMBUSTIVEL().select(tipoCombustivel)
    dataElements.INPUT_CARGA().type(capacidadeCarga)
    dataElements.INPUT_PESO().type(peso)
    dataElements.INPUT_PRECO_TABELA().type(precoTabela)
    dataElements.INPUT_PLACA().type(placa)
    dataElements.INPUT_KM_ANUAL().type(kmAnual)
    dataElements.BTN_NEXT().click()
    dataElements.NUMERO_COUNTER().should('have.text', '0')
    cy.log('Nenhum campo foi deixado em branco.')
})
