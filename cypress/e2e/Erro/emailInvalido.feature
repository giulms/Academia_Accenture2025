#utf-8
#language: pt

Funcionalidade: emailInvalido - Adição de informações inválidas na página
    Cenário: Validação do preenchimento das abas com email inválido
        Dado que acesso a página Automobile Insegurance
        E preencho a página Vehicle Data com informações válidas
        E preencho a página Insurant Data com informações válidas
        E preencho a página Product Data com informações válidas
        E seleciono o seguro desejado
        Quando insiro um e-mail inválido
        Entao valido a mensagem de erro