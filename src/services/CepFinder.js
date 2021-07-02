const btn=document.querySelector(".btn"); //transporte dos dados do form ao JS
const inputValue = document.querySelector(".inputValue");
const retornaValor = document.querySelector(".retornaValor");

btn.addEventListener("click", (e) => { //Ao clicar no botão....
  e.preventDefault();

  let newValueInput = inputValue.value; 

  newValueInput = newValueInput.replace(" ", ""); //REPLACE - Tira . e - do CEP deixando uma string de apenas números
  newValueInput = newValueInput.replace(".","");
  newValueInput = newValueInput.trim();

  //Chamada da API
  axios
  .get('https://viacep.com.br/ws/'+newValueInput+'/json/')
  .then(function (res) {
    console.log(res);
    retornaValor.innerHTML = ""; //retorno das informações
    createText("Logradouro: "+res.data.logradouro);
    createText("Localidade: "+res.data.localidade + "/" + res.data.uf);
    createText("Bairro: "+res.data.bairro);
    createText("Complemento: "+res.data.complemento);
    createText("DDD: "+res.data.ddd);
  }).catch(function() {
    retormaValor.innerHTML = "";
    createText("Ha algo errado.");
  });
});

function createText(responseCep) { // envio das informações para a tela de forma assíncrona
  let createEl = document.createElement("p");
  let createText = document.createTextNode(responseCep);

  createEl.appendChild(createText);
  retornaValor.appendChild(createEl);
}
