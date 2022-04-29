function carregarFilmes() {
  //fazer o carregadomento da url com filmes
  //vamos usar o comando fetch para localizar e
  //carregar os filmes e exibir em página html
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados.results);
      var saida = "<div id=filme>";
      dados.map((item, ix) => {
        saida += `
            <div>
            <img src=${item.image_link}>
            <p class=voto>${item.vote_average}</p>
            <h2>${item.name}</h2>
            <p class=data>${item.brand}</p>
            <p class=data>R$ ${item.price}</p>
            </div>
        `;
      });
      saida += "</div>";
      document.body.innerHTML += saida;
    })
    .catch((erro) => console.error(`Erro ao tentar executar a api -> ${erro}`));
}
