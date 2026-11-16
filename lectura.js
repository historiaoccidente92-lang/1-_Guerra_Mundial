/* LECTURA EN VOZ ALTA: botones "Escuchar / Pausar / Detener" en la ventana de cada país y de cada año.
   Usa la voz del propio navegador (no necesita internet ni servidor). */
(function () {
  const $ = id => document.getElementById(id);
  if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {   // navegador sin voz: se ocultan los botones
    document.querySelectorAll(".tts").forEach(e => e.style.display = "none");
    return;
  }
  const S = window.speechSynthesis;
  let activo = null, token = 0;

  /* Qué se lee en cada ventana */
  const grupos = {
    pais: { play: "mSpeak", stop: "mStop", texto() {
      const ps = [...$("mExtra").querySelectorAll("p")].map(p => p.textContent);
      const i = ps.findIndex(p => /fuentes bibliogr/i.test(p));          // no se leen las fuentes bibliográficas
      return [$("mTitle").textContent, $("mNote").textContent, $("mYearH").textContent, $("mText").textContent, ...(i >= 0 ? ps.slice(0, i) : ps)];
    } },
    anio: { play: "ySpeak", stop: "yStop", texto() {
      return [$("yTitle").textContent, $("yWorldH").textContent,
        ...[...$("yWorld").querySelectorAll("p")].map(p => p.textContent),
        "Hechos clave del año", ...[...$("yList").querySelectorAll("li")].map(l => l.textContent)];
    } }
  };

  /* Limpia el texto: quita citas (Autor, 2001), enlaces, viñetas y números de sección */
  const limpiar = t => t
    .replace(/\((?=[^()]*[A-ZÁÉÍÓÚÑ][^()]*,\s*(?:\d{4}|s\.\s*f\.))[^()]*\)/g, "")
    .replace(/https?:\/\/\S+/g, "").replace(/·/g, ",")
    .replace(/^[•\s]+/, "").replace(/^\d+\.\s+/, "").replace(/\s+/g, " ").trim();

  /* Trozos cortos (el navegador corta las lecturas muy largas) */
  function trocear(t) {
    const out = []; let cur = "";
    (t.match(/[^.!?;:]+[.!?;:]*\s*/g) || [t]).forEach(f => {
      if ((cur + f).length > 220 && cur) { out.push(cur.trim()); cur = f; } else cur += f;
    });
    if (cur.trim()) out.push(cur.trim());
    return out.flatMap(x => x.length > 260 ? x.match(/.{1,240}(\s|$)/g).map(s => s.trim()) : [x]);
  }

  const voz = () => {
    const v = S.getVoices();
    return v.find(x => /^es[-_](PE|MX|419|AR|CO|CL|US)/i.test(x.lang)) || v.find(x => /^es/i.test(x.lang)) || null;
  };

  function pintar(g, estado) {                       // estado: "" | "leyendo" | "pausa"
    Object.values(grupos).forEach(h => { const b = $(h.play); if (b) b.textContent = "🔊 Escuchar"; });
    if (g && estado) $(g.play).textContent = estado === "pausa" ? "▶ Continuar" : "⏸ Pausar";
  }
  function detener() { token++; S.cancel(); activo = null; pintar(null, ""); }
  function empezar(g) {
    detener();
    const trozos = g.texto().map(limpiar).filter(Boolean).flatMap(trocear), id = token, v = voz();
    activo = g; pintar(g, "leyendo");
    setTimeout(() => trozos.forEach((t, i) => {       // pequeña espera: Chrome ignora speak() justo después de cancel()
      const u = new SpeechSynthesisUtterance(t);
      u.lang = v ? v.lang : "es-ES"; if (v) u.voice = v; u.rate = 0.95;
      if (i === trozos.length - 1) u.onend = () => { if (id === token) { activo = null; pintar(null, ""); } };
      S.speak(u);
    }), 80);
  }

  Object.values(grupos).forEach(g => {
    $(g.play).onclick = () => {
      if (activo === g) {                              // ya está leyendo: pausar / continuar
        if (S.paused) { S.resume(); pintar(g, "leyendo"); } else { S.pause(); pintar(g, "pausa"); }
      } else empezar(g);
    };
    $(g.stop).onclick = detener;
  });
  /* Se detiene al cambiar de año, cerrar una ventana o salir de la página */
  document.addEventListener("click", e => {
    if (e.target.closest(".tabs button, #mClose, #yClose, #mToYear") || e.target.id === "modal" || e.target.id === "ymodal") detener();
  }, true);   // fase de captura: se detiene antes de que la ventana vuelva a dibujarse
  document.addEventListener("keydown", e => { if (e.key === "Escape") detener(); });
  $("year").addEventListener("change", detener);
  addEventListener("beforeunload", () => S.cancel());
  if (S.onvoiceschanged !== undefined) S.onvoiceschanged = () => {};
})();
