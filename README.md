# Saldo de Contas
 Projeto criado para o processo seletivo do programa de estágio do "Elo Group", em que consiste em lançar CPF's e adicionar valor a eles sem usar banco de dados.
 
 Utilizei de Javascript e HTML para completar o desafio.
 
 O site irá manipular os dados inseridos, fazendo as seguintes funções:
 
 1) <b>validarEntradaDeDados</b>
 
  Esta função recebe um objeto (lancamento) contendo os valores digitados pelo usuário. Esses valores deverão ser analisados conforme as regras abaixo. Caso uma ou mais regras não sejam atendidas, uma mensagem de validação informando quais regras não foram atendidas deverá ser retornada na função. Se todas as regras forem atendidas a função deverá retornar null.
  * CPF deve conter apenas caracteres numéricos.
* Os dígitos verificadores do CPF devem ser válido.
* Valor deve ser numérico.
* Valor não pode ser superior a 15000,00.
* Valor não pode ser inferior a -2000,00.

2) <b>recuperarSaldosPorConta</b>

  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo em cada linha um CPF e o valor do respectivo saldo, ordenados na sequência em foram adicionados pelo usuário. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.
  
3) <b>recuperarMaiorMenorLancamentos</b>

 Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, dois registros, sendo um deles com o maior e outro com o menor valor lançado para o CPF recebido como parâmetro, ordenados do menor para o maior valor. Havendo menos de dois lançamentos registrados para o respectivo CPF, os dois registros (maior e menor) contidos no array de retorno deverão ser idênticos. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.
 
 4) <b>recuperarMaioresSaldos</b>
 
 Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos, ordenados do maior para o menor valor. Para cada lançamento deverá ser exibido o saldo do respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possíveis. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.
 
 5) <b>recuperarMaioresMedias</b>
 
 Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos médios, ordenados do maior para o menor valor. O saldo médio deve corresponder à "MÉDIA" dos valores registros para o respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possível. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.
