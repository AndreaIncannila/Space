
document.querySelectorAll("input, select").forEach(input => {
  input.addEventListener("input", calcola);
});
document.getElementById("modello").addEventListener("change", calcola);

function calcola() {
  const modello = document.getElementById("modello").value;
  const larghezza = parseFloat(document.getElementById("larghezza").value);
  const profondita = parseFloat(document.getElementById("profondita").value);
  const anteriore = parseFloat(document.getElementById("anteriore").value);
  const posteriore = parseFloat(document.getElementById("posteriore").value);
  const tettuccio = document.getElementById("tettuccio").value;
  const montaggio = document.getElementById("montaggio").value;

  if (isNaN(larghezza) || isNaN(profondita) || isNaN(anteriore) || isNaN(posteriore)) {
    document.getElementById("output").textContent = "Inserisci tutti i valori numerici.";
    return;
  }

  const inclinazione = Math.sqrt(Math.pow(posteriore - anteriore, 2) + Math.pow(profondita, 2));

  document.getElementById("output").textContent = `
Modello: ${modello}
Larghezza: ${larghezza} cm
Profondità: ${profondita} cm
Altezza anteriore: ${anteriore} cm
Altezza posteriore: ${posteriore} cm
Tettuccio: ${tettuccio}
Montaggio: ${montaggio}

Profondità guida (calcolata): ${inclinazione.toFixed(2)} cm
(Le altre formule saranno aggiunte)
  `;
}
