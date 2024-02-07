<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proyecto V</title>
</head>
<body>

<div id="countdown"></div>
<input type="text" id="inputGuess" placeholder="¿Qué será?">
<button onclick="checkGuess()">Comprobar</button>
<div id="message"></div>

<script>
const targetDate = new Date('2024-02-14T22:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById('countdown').innerHTML = "¡Tiempo terminado!";
    document.getElementById('inputGuess').style.display = 'block';
  }
}

function checkGuess() {
  const guess = document.getElementById('inputGuess').value;

  if (guess === '151023') {
    document.getElementById('message').innerHTML = "¡Todavía no está la sorpresa!";
    document.getElementById('countdown').style.display = 'none';
  } else {
    const confirmMessage = confirm("¿Estás segura?");
    if (confirmMessage) {
      document.getElementById('message').innerHTML = "¡Mensaje de confirmación!";
    } else {
      document.getElementById('message').innerHTML = "¡Error de confirmación!";
    }
  }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Actualizar el contador al cargar la página
updateCountdown();
</script>

</body>
</html>
