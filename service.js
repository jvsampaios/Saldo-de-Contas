const validarEntradaDeDados = (lancamento) => {
 
// Verifica se o CPF é válido

if (lancamento.cpf.length != 11 ||
  isNaN(lancamento.cpf) != false || // verifica se o valor não é um número
  (/^(\d)\1+$/.test(lancamento.cpf)) // verifica se um mesmo número é repetido várias vezes
  
  )
  return "Esse CPF não possui valor válido";

// Calcula os dígitos verificadores do CPF

   var soma = 0;
   var resto;
   
   for (i=1; i<=9; i++)
      soma = soma + parseInt(lancamento.cpf.substring(i-1, i)) * (11 - i);

   resto = (soma * 10) % 11

   if ((resto == 10) || (resto == 11)) 
      resto = 0

   if (resto != parseInt(lancamento.cpf.substring(9, 10)) )
      return "Esse CPF não possui valor válido";

   soma = 0

   for (i = 1; i <= 10; i++)
      soma = soma + parseInt(lancamento.cpf.substring(i-1, i)) * (12 - i)

   resto = (soma * 10) % 11

   if ((resto == 10) || (resto == 11)) 
      resto = 0

   if (resto != parseInt(lancamento.cpf.substring(10, 11) ) )
      return "Esse CPF não possui valor válido";

// Verifica se o valor é válido

   else if (lancamento.valor == null || 
      lancamento.valor > 15000 || 
      lancamento.valor < -2000 ||
      isNaN(lancamento.valor) != false
       ){
      return "Esse valor não é válido";
   }

// Retorna nulo caso não haja erros

   else{
      console.log(lancamento);
      return null;
   }
     
}

const recuperarSaldosPorConta = (lancamentos) => {

  var saldos = {};

// percorrer todo o array de lançamentos e adicionar o saldo de cada CPF

  for (var i = 0; i < lancamentos.length; i++) {
    var lancamento = lancamentos[i];
    if (!saldos.hasOwnProperty(lancamento.cpf)) {
      saldos[lancamento.cpf] = 0;
    }
    saldos[lancamento.cpf] += lancamento.valor;
  }

// criar um novo array

  var resultado = [];
  for (var cpf in saldos) {
   resultado.push({cpf:cpf,valor:saldos[cpf]})
}

// ordenar o array

   resultado.sort(function(a, b) {
   return a[0] - b[0];
 });

 // Retorna o novo array

  return resultado;
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
  
  var saldos = {};
  var ultimoCPF = '';
  var resultado = [];

// percorre os lançamentos e soma os valores de cada CPF
  for (var i = 0; i < lancamentos.length; i++) {
    var cpf = lancamentos[i].cpf;
    var valor = lancamentos[i].valor;
    if (!saldos[cpf]) {
      saldos[cpf] = [valor, valor];
    } else {
       if (valor > saldos[cpf][0]) {
        saldos[cpf][0] = valor;
       } else if (valor < saldos[cpf][1]) {
        saldos[cpf][1] = valor;
       }
     }
     
     ultimoCPF = cpf; // atualiza o último CPF utilizado
    
  }

 
// percorre o objeto de saldos adicionando os maiores e menores valores
  for (var cpf in saldos) {
    resultado.push({cpf:ultimoCPF,valor:saldos[cpf][0]});
    resultado.push({cpf:ultimoCPF,valor:saldos[cpf][1]});
  }

 
// ordena o resultado
  resultado.sort(function(a, b) {
    return a.valor - b.valor;
   });

   resultado = resultado.slice(0, 2);
 
  return resultado;
}

const recuperarMaioresSaldos = (lancamentos) => {
   const saldos = {};

// percorrer o array lançamentos e adiciona o saldo

   for (let lancamento of lancamentos) {
    let cpf = lancamento.cpf;
    let valor = lancamento.valor;
 
     if (saldos[cpf]) {
      saldos[cpf] += valor;
     } else {
      saldos[cpf] = valor;
     }
   }
 
// mostrar os maiores saldos 

  let maioresSaldos = Object.entries(saldos)
    .sort((a, b) => b[1] - a[1]) // ordenar os elementos do array
    .slice(0, 3)  // divide o array para pegar apenas os 3 primeiros
    .map((item) => ({ cpf: item[0], valor: item[1] })); // cria um novo array com os resultados apresentados
 
  return maioresSaldos;
}

const recuperarMaioresMedias = (lancamentos) => {
  let saldos = {};
  let medias = [];
  
// percorre o array de lançamentos para calcular o saldo de cada CPF
  for (let lancamento of lancamentos) {
    let cpf = lancamento.cpf;
    let valor = lancamento.valor;
    if (saldos[cpf] === undefined) {
      saldos[cpf] = 0;
    }
    saldos[cpf] += valor;
  }

// percorre o objeto de saldos para calcular a média de cada CPF
  for (let cpf in saldos) {
    let media = saldos[cpf] / lancamentos.filter(l => l.cpf === cpf).length;
    medias.push({cpf: cpf, media: media});
  }

  medias.sort((a, b) => b.media - a.media); // ordena as médias do maior para o menor saldo médio

// cria um array com os três CPFs com maiores saldos médios
  let maioresSaldosMedios = [];
  for (let i = 0; i < 3 && i < medias.length; i++) {
    maioresSaldosMedios.push({
      cpf: medias[i].cpf,
      valor: medias[i].media.toFixed(2)
    });
  }

  return maioresSaldosMedios;
}