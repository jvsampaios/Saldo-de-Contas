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
   let saldos = {};

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
    return []
}