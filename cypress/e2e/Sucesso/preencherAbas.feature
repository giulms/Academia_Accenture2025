#utf-8
#language: pt

Funcionalidade: preencherAbas-01 - Adição de informações válidas nas páginas
    Cenário: Validação do preenchimento das abas com informações válidas
        Dado que acesso a página Automobile Insegurance
        E preencho a página Vehicle Data com informações válidas
        E preencho a página Insurant Data com informações válidas
        E preencho a página Product Data com informações válidas
        E seleciono o seguro desejado
        Quando envio as informações de  QAuote
        Entao valido o envio do e-mail