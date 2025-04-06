import { faker } from '@faker-js/faker';
import insurantElements from '../../elements/insurantData.elements.js';
import 'cypress-file-upload';


Cypress.Commands.add('preencherSeguradora', () => {
    const envData = {
        cep: faker.location.zipCode('#####'),
        endereco: faker.location.streetAddress(true)
    }

    function ultimoNomeSimples(tamanhoMaximo = 6) {
        let nome;
        do {
            nome = faker.person.lastName().replace(/[^a-zA-Z]/g, '');
        } while (nome.length > tamanhoMaximo);
        return nome;
    }

    const nome = faker.person.firstName();
    const ultimoNome = ultimoNomeSimples();
    const dataNascimento = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString('en-US', { timeZone: 'UTC' });
    const genero = faker.helpers.arrayElement(['masculino', 'feminino']);
    const cidade = faker.location.city();
    const ocupacao = faker.helpers.arrayElement(['Employee', 'Selfemployed', 'Unemployed', 'Farmer', 'Public Official']);
    const opcoesOcupacao = ['1', '2', '3', '4', '5'];
    const ocupacoes = faker.helpers.arrayElements(opcoesOcupacao, faker.number.int({ min: 1, max: 5 }));
    const website = faker.internet.url();
    const foto = 'Accenture.jpg';

    insurantElements.INPUT_PRIMEIRO_NOME().type(nome);
    insurantElements.INPUT_ULTIMO_NOME().type(ultimoNome);
    insurantElements.SELECT_DATA_NASCIMENTO().type(dataNascimento);
    if (genero === 'masculino') {
        insurantElements.CLICK_GENERO_MASCULINO().click({force: true});
    } else {insurantElements.CLICK_GENERO_FEMININO().click({ force: true });}
    insurantElements.INPUT_ENDERECO().type(envData.endereco, {log: false});
    insurantElements.SELECT_PAIS().then(select => { 
        const buscar = select.find('option')
        const paisAleatorio = Math.floor(Math.random() * (buscar.length - 1)) + 1;
        const pais = buscar[paisAleatorio].value;
        insurantElements.SELECT_PAIS().select(pais);
    })
    insurantElements.INPUT_CEP().type(envData.cep, {log: false});
    insurantElements.INPUT_CIDADE().type(cidade);
    insurantElements.SELECT_OCUPACAO().select(ocupacao);
    if (ocupacoes.includes('1')) { insurantElements.CLICK_HOBBY_SPEEDING().click({force: true}) }
    if (ocupacoes.includes('2')) { insurantElements.CLICK_HOBBY_BJUMPING().click({force: true}) }
    if (ocupacoes.includes('3')) { insurantElements.CLICK_HOBBY_CDIVING().click({force: true}) }
    if (ocupacoes.includes('4')) { insurantElements.CLICK_HOBBY_SDIVING().click({force: true}) }
    if (ocupacoes.includes('5')) { insurantElements.CLICK_HOBBY_OTHER().click({force: true}) }
    insurantElements.INPUT_WSITE().type(website);  
    insurantElements.FILE_PICTURE().attachFile(foto);
    insurantElements.NUMERO_COUNTER().should('have.text', '00');
    cy.log('Nenhum campo foi deixado em branco.');
    insurantElements.BTN_NEXT().click();

})