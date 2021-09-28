const bt_start = document.getElementById("start");
const crono = document.getElementById("tempo");
var atividade = document.getElementById("atv");
const lista_concluida = document.getElementById("concluidas");


let min = 25;
let seg = 0;
let lista_atv = [];

function returnData(input) {
    return input < 10 ? `0${input}` : input;
};
function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

bt_start.addEventListener("click", () => {
    console.log(atividade.value);
    bt_start.disabled = true;
    //if (atividade.textContent =='') { break;}

    var contador = setInterval(() => {

        console.log(min, seg);
        atividade.disabled = true;
        seg -= 1;
        if (seg < 0) {
            seg = 59;
            min = min - 1;
            min = returnData(min);
        };
        seg = returnData(seg);
        crono.innerHTML = `${min}:${seg}`;

        if (min == 0 && seg == 00) {
            playSound("alerta.mp3");
            crono.innerHTML = "Finalizado";
            clearInterval(contador);
            //alert("Parabéns!");
            bt_start.disabled = false;
            crono.innerHTML = "25:00";
            min = 25;
            seg = 0;
            lista_atv.push(atividade.value);
            let filha = document.createElement("li");
            filha.innerText = atividade.value;
            lista_concluida.appendChild(filha);
            atividade.value = "";
            atividade.disabled = false;
            console.log(lista_atv);

        }
    }, 1000);

})