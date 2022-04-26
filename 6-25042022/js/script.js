function carregarFilmes() {
  //fazer o carregadomento da url com filmes
  //vamos usar o comando fetch para localizar e
  //carregar os filmes e exibir em página html
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR-US&page=1"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados.results);
      var saida = "<div id=filme>";
      dados.results.map((item, ix) => {
        saida += `
            <div>
            <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
            <p class=voto>${item.vote_average}</p>
            <h2>${item.title}</h2>
            <p class=data>${item.release_date}</p>
            </div>
        `;
      });
      saida += "</div>";
      document.body.innerHTML += saida;
    })
    .catch((erro) => console.error(`Erro ao tentar executar a api -> ${erro}`));
}
