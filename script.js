const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click",()=>{
letter.classList.remove("hidden");
envelope.style.display="none";
document.querySelector(".open-text").style.display="none";
});

function showQuiz(){
document.getElementById("letter").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");
}

function showNo(){
document.getElementById("letter").classList.add("hidden");
document.getElementById("noScreen").classList.remove("hidden");
}

function backLetter(){
document.getElementById("noScreen").classList.add("hidden");
document.getElementById("letter").classList.remove("hidden");
}

function gerarConvite(){

const lugar=document.getElementById("lugar").value;
const comida=document.getElementById("comida").value;
const dia=document.getElementById("dia").value;
const hora=document.getElementById("hora").value;

document.getElementById("quiz").classList.add("hidden");

document.getElementById("resultado").classList.remove("hidden");

document.getElementById("textoFinal").innerHTML=
`
💜 Fico feliz que tenha aceitado.

<br><br>

Espero você no <b>${lugar}</b>
para que possamos comer comida <b>${comida}</b>
neste(a) <b>${dia}</b>,
às <b>${hora}</b>,
para que eu possa ter um belo dia
com a Vossa Majestade.

<br><br>

🌸 Será uma honra compartilhar esse momento com você. 🌸
`;
}

function criarPetala(){

const petala=document.createElement("div");

petala.classList.add("petal");

petala.innerHTML="🌸";

petala.style.left=Math.random()*100+"vw";

petala.style.animationDuration=
(Math.random()*5+5)+"s";

document.body.appendChild(petala);

setTimeout(()=>{
petala.remove();
},10000);
}

setInterval(criarPetala,400);
