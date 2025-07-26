
document.querySelectorAll("input, select").forEach(input => {
  input.addEventListener("input", calcola);
});
document.getElementById("modello").addEventListener("change", calcola);

function calcola() {
  const modello = document.getElementById("modello").value;
  const larghezza = parseFloat(document.getElementById("larghezza").value); // B5
  const profondita = parseFloat(document.getElementById("profondita").value); // usata per radice
  const anteriore = parseFloat(document.getElementById("anteriore").value); // B8
  const posteriore = parseFloat(document.getElementById("posteriore").value);
  const tettuccio = document.getElementById("tettuccio").value; // D6
  const montaggio = document.getElementById("montaggio").value; // D7

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
    const D21 = Math.sqrt(Math.pow(profondita, 2) + Math.pow(posteriore - anteriore, 2));
    const C21 = Math.round(D21);
    const C22 = Math.round(anteriore - 10);
    const C23 = Math.round(larghezza - 0);
    const C24 = Math.round(D21 - 70);
    const C25 = Math.round(larghezza - 100);
    const C27 = Math.round(D21 * 2 + 380);
    const E28 = C14 - 10;
    const C28 = Math.round(tettuccio.toUpperCase() === "SI" ? E28 : E28); // semplificato
    const D29 = C17 * 8 + 31;
    const C29 = tettuccio.toUpperCase() === "SI" ? D29 : D29; // semplificato

    risultati += `C13 (larghezza -15): ${C13} cm\n`;
    risultati += `C14 (larghezza -57): ${C14} cm\n`;
    risultati += `C15 (larghezza -49): ${C15} cm\n`;
    risultati += `C16 (larghezza -186): ${C16} cm\n`;
    risultati += `C17 ((larghezza -151)): ${C17} cm\n`;
    risultati += `C18 ((larghezza -1140)/2): ${C18} cm\n`;
    risultati += `C20 (larghezza -90): ${C20} cm\n`;
    risultati += `C21 (Profondità guida): ${C21} cm\n`;
    risultati += `C22 (anteriore -10): ${C22} cm\n`;
    risultati += `C23 (larghezza -0): ${C23} cm\n`;
    risultati += `C24 (C21 - 70): ${C24} cm\n`;
    risultati += `C25 (larghezza -100): ${C25} cm\n`;
    risultati += `C27 (C21*2 + 380): ${C27} cm\n`;
    risultati += `C28 (C14-10 se tettuccio=SI): ${C28} cm\n`;
    risultati += `C29 (C17*8+31): ${C29} cm\n`;
  }

  document.getElementById("output").textContent = risultati;
}
