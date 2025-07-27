
document.getElementById("calcolaBtn").addEventListener("click", calcola);

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

  let risultati = "";
  risultati += `Modello: ${modello}\n`;
  risultati += `Larghezza: ${larghezza} cm\n`;
  risultati += `Profondità: ${profondita} cm\n`;
  risultati += `Altezza anteriore: ${anteriore} cm\n`;
  risultati += `Altezza posteriore: ${posteriore} cm\n`;
  risultati += `Tettuccio: ${tettuccio}\n`;
  risultati += `Montaggio: ${montaggio}\n\n`;

  if (modello === "mono_bq") {
    const C13 = Math.round(larghezza - 15);
    const C14 = Math.round(larghezza - 57);
    const C15 = Math.round(larghezza - 49);
    const C16 = Math.round(larghezza - 186);
    const D17 = (larghezza - 151);
    const C17 = Math.round(D17);
    const C18 = Math.round((larghezza - 1140) / 2);
    const C20 = Math.round(larghezza - 90);
    const D21 = inclinazione;
    const C21 = Math.round(D21);
    const C22 = Math.round(anteriore - 10);
    const C23 = Math.round(larghezza);
    const C24 = Math.round(D21 - 70);
    const C25 = Math.round(larghezza - 100);
    const C27 = Math.round(D21 * 2 + 380);
    const E28 = C14 - 10;
    const C28 = Math.round(tettuccio.toUpperCase() === "SI" ? E28 : E28);
    const D29 = C17 * 8 + 31;
    const C29 = tettuccio.toUpperCase() === "SI" ? D29 : D29;

    risultati += `BQ: ${C13} cm\n`;
    risultati += `ESTERNO GUIDE: ${C14} cm\n`;
    risultati += `GRONDA: ${C15} cm\n`;
    risultati += `TRAVE TETTO: ${C16} cm\n`;
    risultati += `FRANGITRATTA: ${C17} cm\n`;
    risultati += `RULLO TRASP. AeB: ${C18} cm\n`;
    risultati += `PROFILO TELINO: ${C20} cm\n`;
    risultati += `GUIDA: ${C21} cm\n`;
    risultati += `PIANTONE: ${C22} cm\n`;
    risultati += `TELO LARGHEZZA (misura taglio): ${C23} cm\n`;
    risultati += `TELO ALTEZZA (misura taglio): ${C24} cm\n`;
    risultati += `TELINO LARGHEZZA (misura taglio): ${C25} cm\n`;
    risultati += `CINGHIA: ${C27} cm\n`;
    risultati += `L. TETTUCCIO: ${C28} cm\n`;
    risultati += `H TETTUCCIO: ${C29} cm\n`;
  }

  document.getElementById("output").textContent = risultati;
}
