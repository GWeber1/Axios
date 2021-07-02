const btn=document.querySelector(".btn");
const inputValueDmy = document.querySelector(".dmy");
const retornaValor = document.querySelector(".retornaValor");
const inputValueMoeda = document.querySelector(".moeda");

btn.addEventListener("click", (e) =>{
  e.preventDefault();

  let newValueInputDmy = inputValueDmy.value;
  let newValueInputMoeda = inputValueMoeda.value;

  newValueInputDmy = newValueInputDmy.split('-').join('/')
  axios
  .get('https://www.mercadobitcoin.net/api/'+newValueInputMoeda+'/day-summary/'+newValueInputDmy+'/')
  .then(function(res) {
    retornaValor.innerHTML="";
    createText("Moeda: "+newValueInputMoeda);
    createText("Abriu em: R$ "+res.data.opening);
    createText("Fechou em: R$ "+res.data.closing);
    createText("Baixa: R$ "+res.data.lowest);
    createText("Alta: R$ "+res.data.highest);
  }).catch(function() {
    retornaValor.innerHTML="";
    createText("Há algo errado.");
  });
});

function createText(responseDia) {
  let createEl = document.createElement("p");
  let createText = document.createTextNode(responseDia);

  createEl.appendChild(createText);
  retornaValor.appendChild(createEl);
}
