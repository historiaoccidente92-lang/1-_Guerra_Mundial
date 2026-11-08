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
    const datos = {
      nombre: $("sNombre").value.trim(),
      calificacion: parseInt($("sCalif").value, 10),
      claridad: parseInt($("sClaridad").value, 10),
      vista: $("sVista").value,
      aprendio: $("sAprendio").value,
      comentarios: $("sComent").value.trim()
    };
    if (!datos.calificacion || !datos.claridad || !datos.vista || !datos.aprendio) {
      msg.className = "err"; msg.textContent = "Responde las preguntas obligatorias."; return;
    }
    if (!API_URL.startsWith("https://script.google.com/")) {
      msg.className = "err"; msg.textContent = "Falta configurar la URL de Google Sheets en encuesta.js."; return;
    }
    btn.disabled = true; msg.className = ""; msg.textContent = "Enviando…";
    try {
      const r = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(datos) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || "Error");
      msg.className = "ok"; msg.textContent = "¡Gracias! Tus respuestas fueron enviadas.";
      $("sForm").reset();
    } catch (err) {
      msg.className = "err"; msg.textContent = "No se pudo enviar. Intenta de nuevo más tarde.";
    } finally { btn.disabled = false; }
  });
})();
