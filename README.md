<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Carta para Karen 💜</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Pacifico&display=swap" rel="stylesheet">

</head>
<body>

<div class="container">

<h1>Carta para Karen 💜</h1>

<div id="envelope" class="envelope">
💜
</div>

<p class="open-text">
Clique no envelope para abrir
</p>

<div id="letter" class="letter hidden">

<h2>Para Vossa Majestade 👑</h2>

<p>
Ultimamente, tenho gostado muito de conversar com essa belíssima dama.
Você torna meus dias e minhas noites muito melhores apenas com sua companhia e suas palavras.
</p>

<p>
Por esse motivo, gostaria de fazer um convite à Vossa Majestade:
que tal conceder a este mero plebeu a honra de sua presença em um encontro?
</p>

<p>
Então, minha bela dama, você aceitaria sair comigo?
</p>

<div class="buttons">

<button class="yes" onclick="showQuiz()">
😊 Sim
</button>

<button class="no" onclick="showNo()">
😢 Não
</button>

</div>

</div>

<div id="noScreen" class="card hidden">

<h2>Tem certeza? 🥺</h2>

<p>
Talvez a carta mereça mais uma chance...
</p>

<button onclick="backLetter()">
Voltar 💜
</button>

</div>

<div id="quiz" class="hidden">

<div class="question">

<h3>💜 Qual lugar você prefere?</h3>

<select id="lugar">
<option>Shopping</option>
<option>Restaurante</option>
<option>Evento</option>
</select>

</div>

<div class="question">

<h3>💜 Que tipo de comida você gostaria de comer?</h3>

<select id="comida">
<option>Mexicana</option>
<option>Japonesa</option>
<option>Francesa</option>
<option>Coreana</option>
</select>

</div>

<div class="question">

<h3>💜 Qual dia da semana você está disponível?</h3>

<select id="dia">
<option>Segunda</option>
<option>Sexta</option>
<option>Sábado</option>
<option>Domingo</option>
</select>

</div>

<div class="question">

<h3>💜 Qual horário você acha melhor?</h3>

<select id="hora">
<option>11:00</option>
<option>12:00</option>
<option>15:00</option>
<option>17:00</option>
</select>

</div>

<button class="finish" onclick="gerarConvite()">
Confirmar 💜
</button>

</div>

<div id="resultado" class="final-card hidden">

<h2>🌸 Convite Confirmado 🌸</h2>

<p id="textoFinal"></p>

<div class="footer-decoration">

🌷 💜 🌸 🇰🇷 🌸 💜 🌷

<br><br>

🐱 🍪 🍤 🍡 🌷 🌸

<br><br>

👘 Hanbok Coreano 👘

</div>

</div>

</div>

<script src="script.js"></script>

</body>
</html>
