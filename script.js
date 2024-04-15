// Para trazer os dados do servidor necessários nesse projeto, foi usado o site openweathermap.org

// Dentro desse site, ir em API, clicar na API.doc do Current Weather Data e usar o código que aparece, é o endereço onde o JavaScript buscará e trará os dados. Tem que trocar os campos laranjas pelos dados corretos.

// Uma das informações que preciso passar é a API_Key. Para eu ter a minha chave, preciso clicar na API_Key em laranja, vai ser gerada a chave para substituir em {API_Key}, mas o Rodolfo disponibilizou a chave dele.

let chave = "406d9e496ad69f05330bd982d578b48e";

function clicarNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

/*
Clica no BOTÃO
  -> CHAMA A FUNÇÃO cliqueiNoBotao()
  -> Vai no INPUT e pega o que está lá dentro
  -> PASSAR a cidade para o servidor

  Math.floor -> Ferramenta do JavaScript para arredondar valores
*/

async function buscarCidade(cidade) {
  // Essa é uma função que acessa um servidor, então tenho que colocar o async antes de function

  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=406d9e496ad69f05330bd982d578b48e&units=metric" /* Essa parte do &units=metric que vai depois da chave, isso serve para trazer a temperatura em graus Celsius. */
  ).then((resposta) => resposta.json());

  // await = ESPERE

  // fetch -> Ferramenta do JavaScript para acessar servidores.

  // then -> ENTÃO
  // JSON -> JavaScript Object Notation (O FORMATO que o JavaScript entende).

  colocarNaTela(dados);
}

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";

  document.querySelector(".icone").src = "https://openweathermap.org/img/wn/"+ dados.weather[0].icon +".png";

  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}
