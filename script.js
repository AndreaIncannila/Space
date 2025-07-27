
function calcola() {
  const larghezza = parseFloat(document.getElementById("larghezza").value);
  const profondita = parseFloat(document.getElementById("profondita").value);
  const anteriore = parseFloat(document.getElementById("anteriore").value);
  const posteriore = parseFloat(document.getElementById("posteriore").value);
  const tettuccio = document.getElementById("tettuccio").value;
  const montaggio = document.getElementById("montaggio").value;

  if (isNaN(larghezza) || isNaN(profondita) || isNaN(anteriore) || isNaN(posteriore)) {
    document.getElementById("output").textContent = "Inserisci tutti i valori numerici in millimetri.";
    return;
  }

  let output = "";
  const risultati = {
    "Trave traverso anteriore": larghezza,
    "Trave traverso posteriore": larghezza,
    "Guida sinistra": Math.round(Math.sqrt(Math.pow(posteriore - anteriore, 2) + Math.pow(profondita - 32.5, 2))),
    "Guida destra": Math.round(Math.sqrt(Math.pow(posteriore - anteriore, 2) + Math.pow(profondita - 32.5, 2))),
    "Gambo sinistro": posteriore - 8.5,
    "Gambo destro": posteriore - 8.5,
    "Piatto inferiore guida": profondita - 32.5,
    "Rullo avvolgitore": larghezza - 120,
    "Terminale": larghezza - 137,
    "Barra frangivento": larghezza - 150,
    "Larghezza telo": larghezza - 140,
    "Altezza telo": profondita + 50,
    "Profondità tettuccio": tettuccio === "SI" ? 180 : 0,
    "Altezza montaggio a parete": montaggio === "parete" ? posteriore + 70 : posteriore,
    "Altezza montaggio a soffitto": montaggio === "soffitto" ? anteriore + 70 : anteriore,
    "Barra portante frontale": larghezza,
    "Barra portante posteriore": larghezza
  };

  for (const [etichetta, valore] of Object.entries(risultati)) {
    output += `${etichetta}: ${valore} mm\n`;
  }

  document.getElementById("output").textContent = output;
}
