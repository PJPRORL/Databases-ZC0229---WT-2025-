// Takenlijst Databaseproject: afvinken, notities en deadlines, bewaard in de browser (localStorage).
(function () {
  "use strict";

  const DATA = window.TAKEN;
  const LS_KEY = "takenlijst-databaseproject-v1";
  const staat = {};                      // taakcode -> { klaar: bool, notitie: string }
  let deadlines = { e: "", s: "", n: "" };
  let filter = "alles";
  let opslagWerkt = true;

  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    for (const k of kids) if (k != null) n.append(k);
    return n;
  };
  const alleTaken = () => DATA.secties.flatMap(s => s.groepen.flatMap(g => g.taken));
  const isKlaar = id => !!(staat[id] && staat[id].klaar);
  const refs = { rijen: {}, sectieStand: {}, chips: {}, delen: {}, boxen: [] };

  /* ---------- opslaan en laden ---------- */
  function laad() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return;
      zetGegevens(JSON.parse(raw));
    } catch (e) {
      opslagWerkt = false;
    }
  }
  function zetGegevens(o) {
    const codes = new Set(alleTaken().map(t => t.id));
    for (const k of Object.keys(staat)) delete staat[k];
    for (const [id, v] of Object.entries((o && o.staat) || {})) {
      if (!codes.has(id) || !v) continue;
      staat[id] = { klaar: !!v.klaar, notitie: typeof v.notitie === "string" ? v.notitie : "" };
    }
    const d = (o && o.deadlines) || {};
    deadlines = { e: d.e || "", s: d.s || "", n: d.n || "" };
  }
  function bewaar() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ staat, deadlines }));
      opslagWerkt = true;
    } catch (e) {
      opslagWerkt = false;
    }
    toonOpslag();
  }
  function toonOpslag() {
    const o = document.getElementById("opslag");
    o.dataset.mode = opslagWerkt ? "ok" : "fout";
    document.getElementById("opslag-tekst").textContent = opslagWerkt
      ? "Bewaard in deze browser"
      : "Deze browser laat niet toe om op te slaan. Gebruik Back-up opslaan.";
  }

  /* ---------- back-up ---------- */
  function exporteer() {
    const nu = new Date();
    const dag = nu.getFullYear() + "-" + String(nu.getMonth() + 1).padStart(2, "0") + "-" + String(nu.getDate()).padStart(2, "0");
    const inhoud = JSON.stringify({ takenlijst: "Databaseproject", versie: 1, opgeslagen: nu.toISOString(), staat, deadlines }, null, 2);
    const url = URL.createObjectURL(new Blob([inhoud], { type: "application/json" }));
    const a = el("a", { href: url, download: "takenlijst-voortgang-" + dag + ".json" });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    meld("Back-up opgeslagen als takenlijst-voortgang-" + dag + ".json.");
  }
  function importeer(bestand) {
    const lezer = new FileReader();
    lezer.onload = () => {
      try {
        const o = JSON.parse(lezer.result);
        if (!o || o.takenlijst !== "Databaseproject" || typeof o.staat !== "object") throw new Error("geen back-up");
        zetGegevens(o);
        bewaar(); toon();
        meld("Back-up teruggezet: " + alleTaken().filter(t => isKlaar(t.id)).length + " taken afgevinkt.");
      } catch (e) {
        meld("Dit bestand is geen back-up van deze takenlijst. Er is niets veranderd.");
      }
    };
    lezer.readAsText(bestand);
  }
  function meld(t) { document.getElementById("backup-info").textContent = t; }

  /* ---------- opbouw ---------- */
  function bouw() {
    document.getElementById("ondertitel").textContent = DATA.ondertitel + " · " + DATA.versie;
    document.getElementById("voet").textContent =
      "Gebaseerd op de projectopgave Databases WT, het SQL-sjabloon en de theorie H1 tot H14. " + DATA.versie + ".";

    const delen = document.getElementById("delen");
    for (const s of DATA.secties.filter(s => s.deadline)) {
      const inp = el("input", { type: "date", id: "deadline-" + s.id });
      inp.addEventListener("change", () => {
        if ((deadlines[s.id] || "") === inp.value) return;
        deadlines[s.id] = inp.value; bewaar(); toon();
      });
      const over = el("span", { class: "over" });
      const balk = el("span");
      const telling = el("span", { class: "telling num" });
      delen.append(el("div", { class: "deel" },
        el("div", { class: "deel-top" }, el("a", { href: "#" + s.id, text: s.kort }), el("span", { class: "gewicht", text: s.gewicht + " van je score" })),
        telling,
        el("div", { class: "balk" }, balk),
        el("label", { for: "deadline-" + s.id }, "Deadline", inp),
        over));
      refs.delen[s.id] = { inp, over, balk, telling };
    }

    const chips = document.getElementById("chips");
    for (const s of DATA.secties) {
      const b = el("b", { class: "num" });
      const a = el("a", { href: "#" + s.id }, s.kort, b);
      chips.append(a); refs.chips[s.id] = { a, b };
    }

    const main = document.getElementById("secties");
    for (const s of DATA.secties) {
      const stand = el("span", { class: "num" });
      const balk = el("span");
      const titel = el("div", { class: "sectie-titel" }, el("span", { class: "code", text: s.code }), el("h2", { text: s.naam }));
      if (s.gewicht) titel.append(el("span", { class: "label", text: s.gewicht }));
      if (s.optioneel) titel.append(el("span", { class: "label", text: "optioneel" }));
      const sec = el("section", { id: s.id },
        el("div", { class: "sectie-kop" }, titel, el("p", { text: s.intro }),
          el("div", { class: "sectie-stand" }, el("div", { class: "balk" }, balk), stand)));
      refs.sectieStand[s.id] = { stand, balk };
      if (s.bevindingen) sec.append(maakBevindingen(s.bevindingen));
      for (const g of s.groepen) {
        const telling = el("span", { class: "num" });
        const leeg = el("div", { class: "verborgen-leeg", text: "Niets te tonen met deze filter." });
        leeg.hidden = true;
        const box = el("div", { class: "box" }, el("div", { class: "box-kop" }, el("span", { text: g.naam }), telling));
        for (const t of g.taken) box.append(maakRij(t, s));
        box.append(leeg);
        refs.boxen.push({ g, telling, leeg });
        sec.append(box);
      }
      main.append(sec);
    }

    document.querySelectorAll(".filter button").forEach(b => b.addEventListener("click", () => {
      filter = b.dataset.f;
      document.querySelectorAll(".filter button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      toon();
    }));
    document.getElementById("export").addEventListener("click", exporteer);
    const kiezer = document.getElementById("import-bestand");
    document.getElementById("import").addEventListener("click", () => kiezer.click());
    kiezer.addEventListener("change", () => { if (kiezer.files[0]) importeer(kiezer.files[0]); kiezer.value = ""; });
  }

  function maakBevindingen(bv) {
    const lijst = (kop, rijen) => {
      const ul = el("dl", { class: "bv-lijst" });
      for (const [k, v] of rijen) ul.append(el("dt", { text: k }), el("dd", { text: v }));
      return el("div", { class: "bv-blok" }, el("h3", { text: kop }), ul);
    };
    return el("div", { class: "bevindingen" },
      el("p", { class: "bv-oordeel" }, el("strong", { text: "Oordeel: " }), bv.oordeel),
      el("div", { class: "bv-kolommen" },
        lijst("Wat je lijst je al geeft", bv.geeft),
        lijst("Wat er niet in staat en je zelf toevoegt", bv.ontbreekt)),
      el("p", { class: "bv-letop" }, el("strong", { text: "Let op. " }), bv.letop));
  }

  function maakRij(t, s) {
    const vink = el("input", { type: "checkbox", class: "vink", id: "v-" + t.id, "aria-label": t.id + " " + t.t });
    vink.addEventListener("change", () => {
      staat[t.id] = Object.assign({ notitie: "" }, staat[t.id], { klaar: vink.checked });
      bewaar(); toon();
    });
    const inhoud = el("div", { class: "inhoud" }, el("label", { class: "taak", for: "v-" + t.id, text: t.t }));
    if (t.u) inhoud.append(el("p", { class: "u", text: t.u }));
    const meta = el("div", { class: "meta" });
    if (t.b) meta.append(el("span", { class: "bron", text: t.b }));
    const isVraag = !!s.vraag;
    const tekstvak = el("textarea", { id: "n-" + t.id, rows: "2" });
    const notitie = el("div", { class: "notitie" },
      el("label", { for: "n-" + t.id, text: isVraag ? "Antwoord van je leerkracht" : "Notitie" }), tekstvak);
    notitie.hidden = !isVraag;
    const heeft = el("span", { class: "heeft-notitie", text: "• notitie" });
    heeft.hidden = true;
    if (!isVraag) {
      const knop = el("button", { type: "button", class: "notitie-knop", "aria-expanded": "false", text: "Notitie" });
      knop.addEventListener("click", () => {
        notitie.hidden = !notitie.hidden;
        knop.setAttribute("aria-expanded", String(!notitie.hidden));
        if (!notitie.hidden) tekstvak.focus();
      });
      meta.append(knop, heeft);
    }
    const bewaarNotitie = () => {
      const oud = (staat[t.id] && staat[t.id].notitie) || "";
      if (oud === tekstvak.value) return;
      staat[t.id] = Object.assign({ klaar: false }, staat[t.id], { notitie: tekstvak.value });
      bewaar(); toon();
    };
    let timer = null;
    tekstvak.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(bewaarNotitie, 600); });
    tekstvak.addEventListener("blur", () => { clearTimeout(timer); bewaarNotitie(); });
    inhoud.append(meta, notitie);
    const rij = el("div", { class: "rij" }, el("div", { class: "sleutel" }, vink, el("span", { class: "mono", text: t.id })), inhoud);
    refs.rijen[t.id] = { rij, vink, tekstvak, heeft };
    return rij;
  }

  /* ---------- weergave ---------- */
  function resterend(datum, vol) {
    if (!datum) return "";
    if (vol) return "Alles afgevinkt";
    const nu = new Date(); nu.setHours(0, 0, 0, 0);
    const n = Math.round((new Date(datum + "T00:00:00") - nu) / 864e5);
    if (n > 1) return "Nog " + n + " dagen";
    if (n === 1) return "Morgen";
    if (n === 0) return "Vandaag";
    return "Deadline voorbij";
  }
  function toon() {
    for (const t of alleTaken()) {
      const r = refs.rijen[t.id]; const st = staat[t.id] || {};
      r.vink.checked = !!st.klaar;
      if (document.activeElement !== r.tekstvak) r.tekstvak.value = st.notitie || "";
      r.heeft.hidden = !(st.notitie && st.notitie.trim());
      r.rij.classList.toggle("klaar", !!st.klaar);
      r.rij.hidden = (filter === "open" && !!st.klaar) || (filter === "klaar" && !st.klaar);
    }
    for (const b of refs.boxen) {
      b.telling.textContent = b.g.taken.filter(t => isKlaar(t.id)).length + " / " + b.g.taken.length;
      b.leeg.hidden = b.g.taken.some(t => !refs.rijen[t.id].rij.hidden);
    }
    let totK = 0, totA = 0;
    for (const s of DATA.secties) {
      const taken = s.groepen.flatMap(g => g.taken);
      const klaar = taken.filter(t => isKlaar(t.id)).length, alle = taken.length;
      if (!s.optioneel) { totK += klaar; totA += alle; }
      const pct = alle ? Math.round(100 * klaar / alle) : 0;
      refs.sectieStand[s.id].stand.textContent = klaar + " van " + alle + " · " + pct + "%";
      refs.sectieStand[s.id].balk.style.width = pct + "%";
      refs.chips[s.id].b.textContent = klaar + "/" + alle;
      refs.chips[s.id].a.classList.toggle("vol", klaar === alle);
      const d = refs.delen[s.id];
      if (d) {
        d.telling.textContent = klaar + " van " + alle + " taken";
        d.balk.style.width = pct + "%";
        if (document.activeElement !== d.inp) d.inp.value = deadlines[s.id] || "";
        d.over.textContent = resterend(deadlines[s.id], klaar === alle);
      }
    }
    document.getElementById("tot-klaar").textContent = totK;
    document.getElementById("tot-alle").textContent = totA;
    document.getElementById("tot-balk").style.width = (totA ? Math.round(100 * totK / totA) : 0) + "%";
  }

  laad();
  bouw();
  toonOpslag();
  toon();
})();
