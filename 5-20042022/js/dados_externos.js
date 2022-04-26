//Script para carregar dados em formato json e
//publicar em um arquivo html.

//fazer uma referencia do body do documento.
const body = window.document.body;

//vamos criar um elemento html para inserir no body e exibir
//o titulo da página
const h1 = document.createElement("h1");
h1.setAttribute("class", "titulo");
h1.innerHTML = "Dados On-Line";

//adicionar o h1 ao body do documento
body.appendChild(h1);

const geral = document.createElement("div");
geral.setAttribute("id", "geral");

const itens = document.createElement("div");
itens.setAttribute("class", "itens");

//Vamos usar o comando fetch(buscar) para realizar
//o carregamento dos dados da url.
//Com o fetch temos 3 elementos: then, catch e finally, onde
//then é quando temos um resultado favorável, catch quando
//temos algum erro e finally quando precisamos encerrar algo
//que passou por then ou catch.
//fetch é uma promisse(Promessa) que pode se concretizar com then
//ou não com o catch.

fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json")
  .then((response) => response.json())
  .then((dados) => {
    dados.data.stations.map((info, ix) => {
      var h2 = document.createElement("h2");
      var p = document.createElement("p");
      h2.innerHTML = info.name;
      p.innerHTML = info.station_type;
      itens.appendChild(h2);
      itens.appendChild(p);
    });
  })
  .catch((erro) =>
    console.error(`Erro ao tentar carregar os dados -> ${erro}`)
  );

geral.appendChild(itens);
body.appendChild(geral);
