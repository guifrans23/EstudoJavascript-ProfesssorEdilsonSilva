//Objetos e coleções
//vamos criar uma coleção de nomes
var nomes = ["Paula", "Henrique", "Vanessa"];

//usando
for (var i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

/*
outra forma de ler coleções é usando iteradores,
neste caso, você pode usar foreach ou map
*/
//nomes.forEach()...
//nomes.map()...
nomes.forEach(saida);

function saida(valor, indice) {
  console.log("Do foreach -> " + valor);
}

//variação do foreach com a função dentro da estrutura
nomes.forEach(function (valor, indice) {
  console.log(valor);
});

//variação do foreach com arrow function
nomes.forEach((valor, indice) => {
  console.log("Arrow Function ->" + valor);
});

// ------------------Map--------------------------

nomes.map((valor, indice) => {
  console.log("Posição :" + indice + " Nome: " + valor);
});

//Vamos criar um objeto chamado cliente
//para a definição dos dados do cliente é importante
//que estes fiquem entre chaves.
//Esta estrutura é do tipo chave - valor.

const endereco = {
  tipo: "Rua",
  logradouro: "Soldado Fernandes",
  numero: "73",
  complemento: "Casa dos fundos",
  bairro: "Jardim Novo",
};

const cliente = {
  id: 1,
  nome: "Paula de Oliveira",
  idade: 25,
  cpf: "22015478",
  endereco: endereco,
};

const prodCalca = {
  id: 1,
  nome: "Calça Jeans",
  preco: "R$ 150.00",
};

const prodBlusa = {
  id: 2,
  nome: "Blusa de algodão",
  preco: "R$ 50.00",
};
const prodTenis = {
  id: 3,
  nome: "Tênis",
  preco: "R$ 250.00",
};

const pedido = {
  id: 5514,
  data: "20/04/2022",
  hora: "15:00",
  cliente: cliente,
  produtos: [prodCalca, prodBlusa, prodTenis],
  entrega: endereco,
};

console.log("Saída do objeto cliente");
console.log(pedido);

const out = document.getElementById("output");
out.innerHTML += `Id do Pedido ${pedido.id}`;
out.innerHTML += `<br>Nome do Cliente: ${pedido.cliente.nome}`;

pedido.produtos.map((pr, ix) => {
  out.innerHTML += `<br>Pedido do Cliente: ${pr.nome}`;
});

out.innerHTML += `<br>Entregar em : ${pedido.entrega.logradouro}`;
