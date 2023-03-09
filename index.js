const inputa = document.querySelector("#a");
const inputb = document.querySelector("#b");
const inputc = document.querySelector("#c");
let a = inputa.value, b = inputb.value, c = inputc.value;
const button = document.querySelector("#btn-calc");
const answer = document.querySelector(".final-answer");
atualizaTela();

inputa.addEventListener("change", (e) =>{
    a = e.target.value;
    atualizaTela();
})
inputb.addEventListener("change", (e) =>{
    b = e.target.value;
    atualizaTela();
})
inputc.addEventListener("change", (e) =>{
    c = e.target.value;
    atualizaTela();
})

function atualizaTela(){
    const funcInput = document.querySelector("#equation-shower");
    funcInput.innerHTML = `${a ? a : 'a'}x² ${b>=0 ? '+' : '-'} ${b ? b >= 0 ? b : b * -1 : 'b'}x ${c>=0 ? '+' : '-'} ${c ? c >= 0 ? c : c * -1 : 'c'} = 0`;
}

function getRaizes(delta){
    const raiz1 = (b * -1 + Math.sqrt(delta))/(2 * a);
    const raiz2 = (b * -1 - Math.sqrt(delta))/(2 * a);
    return {raiz1, raiz2};
}

function finish(isReduct, raiz1, raiz2){
    answer.innerHTML = `Esta função quadrática ${!isReduct ? 'não' : ''} é redutível <br>
     ${isReduct ? `e a sua função reduzida é:<br><strong> ${a}[x - (${raiz1.toFixed(2)})]*[x - (${raiz2.toFixed(2)})]` : ''}</strong>`
}

button.addEventListener("click", (e) =>{
    if(a == 0) {
         answer.innerHTML = "Esta equação não é quadrática"
         return
    }
    let isReduct = false;
    const delta = Math.pow(b, 2) - (4 * a * c);
    isReduct = delta >= 0;
    if(!isReduct) return finish(isReduct)
    const {raiz1, raiz2} = getRaizes(delta);
    finish(isReduct, raiz1, raiz2);
})

