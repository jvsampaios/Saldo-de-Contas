const validarEntradaDeDados = (lancamento) => {
   return null
}

const recuperarSaldosPorConta = (lancamentos) => {
   return []
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   return []
}

const recuperarMaioresSaldos = (lancamentos) => {
   const saldos = {};

// percorrer o array dos lançamentos e adicionar o saldo

   for (let i = 0; i < lancamentos.length; i++) {
     let cpf = lancamentos[i].cpf;
     let valor = lancamentos[i].valor;
 
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

  // ordena as médias do maior para o menor saldo médio
  medias.sort((a, b) => b.media - a.media);

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