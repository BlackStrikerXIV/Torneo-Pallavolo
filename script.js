// --- CALENDARIO ---
const giornate = [
  {
    giornata: 1,
    partite: [
      { data: "Martedì 30/09  Ore 20.30", squadra1: "SGM", gol1: "", squadra2: "PSG2", gol2: "" }
    ],
  },
  {
    giornata: 2,
    partite: [
      { data: "Mercoledì 1/10  Ore 18.30", squadra1: "Chuchos", gol1: "", squadra2: "Le Pannocchiette", gol2: "" },
      { data: "Giovedì 2/10  Ore 20.30", squadra1: "Sfavoriti", gol1: "", squadra2: "Chicchi di mais", gol2: "" }
    ],
  },
  {
    giornata: 3,
    partite: [
      { data: "Giovedì 2/10  Ore 20.00", squadra1: "CIRO", gol1: "", squadra2: "Fireball", gol2: "" }
    ],
  },
  {
    giornata: 4,
    partite: [
      { data: "Venerdì 3/10  Ore 18.30", squadra1: "Chicchi di Mais", gol1: "", squadra2: "PSG2", gol2: "" },
      { data: "Venerdì 3/10  Ore 20.00", squadra1: "Pannocchiette", gol1: "", squadra2: "Fireball", gol2: "" }
    ],
  },
  {
    giornata: 5,
    partite: [
      { data: "Lunedi 6/10  Ore 20.00", squadra1: "Gli sfavoriti", gol1: "", squadra2: "PSG2", gol2: "" }
    ],
  },
  {
    giornata: 6,
    partite: [
      { data: "Martedì 7/10  Ore 20.00", squadra1: "Chuchos", gol1: "", squadra2: "CIRO", gol2: "" }
    ],
  },
  {
    giornata: 7,
    partite: [
      { data: "Mercoledì 8/10  Ore 18.30", squadra1: "Fireball", gol1: "", squadra2: "Chuchos", gol2: "" },
      { data: "Mercoledì 8/10  Ore 20.00", squadra1: "Gli Sfavoriti", gol1: "", squadra2: "SGM", gol2: "" }
    ],
  },
  {
    giornata: 8,
    partite: [
      { data: "Giovedì 9/10  Ore 18.30", squadra1: "Chicchi di Mais", gol1: "", squadra2: "SGM", gol2: "" },
      { data: "Giovedì 9/10  Ore 20.00", squadra1: "CIRO", gol1: "", squadra2: "Pannocchiette", gol2: "" }
    ],
  }
];

// Rendering calendario
const calendarioBody = document.querySelector("#tabella-calendario tbody");
calendarioBody.innerHTML = "";

giornate.forEach(giornata => {
  const trIntestazione = document.createElement("tr");
  trIntestazione.classList.add("table-primary");
  trIntestazione.innerHTML = `<td colspan="5" class="fw-bold">Giornata ${giornata.giornata}</td>`;
  calendarioBody.appendChild(trIntestazione);

  giornata.partite.forEach(p => {
    let dataConA_Capo = p.data.includes("Ore")
      ? `${p.data.split("Ore")[0].trim()}<br><small class="text-muted">Ore ${p.data.split("Ore")[1].trim()}</small>`
      : p.data;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${dataConA_Capo}</td>
      <td class="text-end">${p.squadra1}</td>
      <td class="text-center">${p.gol1} - ${p.gol2}</td>
      <td class="text-start">${p.squadra2}</td>
    `;
    calendarioBody.appendChild(tr);
  });
});

// --- CLASSIFICA ---
const classificaA = [
  { squadra: "Chuchos", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "CIRO", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "Pannocchiette", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "Fireball", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 }
];

const classificaB = [
  { squadra: "PSG2", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "Chicchi di mais", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "SGM", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 },
  { squadra: "Gli sfavoriti", punti: 0, g: 0, v: 0, p: 0, sv: 0, sp: 0, ds: 0 }
];

// Popola Girone A
const classificaBodyA = document.querySelector("#tabella-classifica-a tbody");
classificaBodyA.innerHTML = "";
classificaA.forEach(c => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.squadra}</td>
    <td>${c.punti}</td>
    <td>${c.g}</td>
    <td>${c.v}</td>
    <td>${c.p}</td>
    <td>${c.sv}</td>
    <td>${c.sp}</td>
    <td>${c.ds}</td>
  `;
  classificaBodyA.appendChild(tr);
});

// Popola Girone B
const classificaBodyB = document.querySelector("#tabella-classifica-b tbody");
classificaBodyB.innerHTML = "";
classificaB.forEach(c => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.squadra}</td>
    <td>${c.punti}</td>
    <td>${c.g}</td>
    <td>${c.v}</td>
    <td>${c.p}</td>
    <td>${c.sv}</td>
    <td>${c.sp}</td>
    <td>${c.ds}</td>
  `;
  classificaBodyB.appendChild(tr);
});