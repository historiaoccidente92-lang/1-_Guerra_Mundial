/* ENCUESTA: envía las respuestas a una hoja de Google Sheets (vía Google Apps Script).
   Pega aquí la URL de tu aplicación web (termina en /exec). */
const API_URL = "PEGA_AQUI_LA_URL_DE_APPS_SCRIPT";

(function () {
  const $ = id => document.getElementById(id);

  const abrir = () => { $("smodal").hidden = false; $("sMsg").textContent = ""; $("sMsg").className = ""; };
  const cerrar = () => { $("smodal").hidden = true; };
  $("surveyOpen").onclick = abrir;
  $("sClose").onclick = cerrar;
  $("smodal").onclick = e => { if (e.target.id === "smodal") cerrar(); };
  addEventListener("keydown", e => { if (e.key === "Escape" && !$("smodal").hidden) cerrar(); });

  $("sForm").addEventListener("submit", async e => {
    e.preventDefault();
    const msg = $("sMsg"), btn = $("sEnviar");
    const sel = [...document.querySelectorAll("#sForm select")];   // todas las preguntas del formulario (cualquier cantidad)
    if (sel.some(s => !s.value)) {
      msg.className = "err"; msg.textContent = "Responde las " + sel.length + " preguntas."; return;
    }
    if (!API_URL.startsWith("https://script.google.com/")) {
      msg.className = "err"; msg.textContent = "Falta configurar la URL de Google Sheets en encuesta.js."; return;
    }
    const datos = {
      nombre: $("sNombre").value.trim(),
      respuestas: sel.map(s => s.value),                              // letras: A, B, C…
      textos: sel.map(s => s.options[s.selectedIndex].text),          // texto de la opción elegida
      comentarios: $("sComent").value.trim()
    };
    btn.disabled = true; msg.className = ""; msg.textContent = "Enviando…";
    try {
      const r = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(datos) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || "Error");
      msg.className = "ok"; msg.textContent = "¡Gracias! Acertaste " + j.puntaje + " de " + j.total + ".";
      $("sForm").reset();
    } catch (err) {
      msg.className = "err"; msg.textContent = "No se pudo enviar (" + err.message + ").";
    } finally { btn.disabled = false; }
  });
})();
