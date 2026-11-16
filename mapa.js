/* MAPA: globo 3D, mapa 2D, colores por influencia y ventanas.
   Usa los datos de datos.js (debe cargarse antes). */

const COL={3:"#c0392b",2:"#d89b2b",1:"#4f8a5b"};
const LBL={3:"Muy influyente",2:"Influencia media",1:"Poco influyente"};
let year=1914,byInfluence=false,byBando=false,selected=null,hover=null,svg=null,g=null,is2D=false;
const $=id=>document.getElementById(id);
const entOf=f=>C2E[f.properties.name]||null;     // entidad histórica de un país actual
const BCOL={A:"#2f6fb5",C:"#c4572a",N:"#8a8f94"};      // colores de los bandos
const TB=typeof BANDO!=="undefined";     // false si falta bando.js
const bandoDe=(id,y)=>(((TB&&BANDO[id])||"NNNNN")[(y||year)-1914])||"N";
const baseCol=id=>byBando?BCOL[bandoDe(id)]:byInfluence?COL[ENT[id].l]:"#d9b45a";   // un solo color para todos los países de la lista

/* selector de años */
YEARS.forEach(y=>{const o=document.createElement("option");o.value=y;o.textContent=y;$("year").appendChild(o)});
$("year").onchange=e=>{year=+e.target.value;refresh()};
function renderLegend(){
  const L=$("legend");
  const items=byBando?["A","C","N"].map(k=>[BCOL[k],BANDO_NOM[k]]):[3,2,1].map(l=>[COL[l],LBL[l]]);
  L.innerHTML=items.map(([col,t])=>`<span><i style="background:${col}"></i>${t}</span>`).join("")+(byBando?`<span style="margin-top:6px">Año: ${year}</span>`:"");
  L.classList.toggle("on",byInfluence||byBando);
}
function setMode(m){
  if(m==="bando"&&!TB){alert("Falta el archivo bando.js en tu repositorio de GitHub (debe estar junto a index.html).");return}
  byInfluence=m==="infl"?!byInfluence:false;
  byBando=m==="bando"?!byBando:false;
  $("infl").setAttribute("aria-pressed",byInfluence);if($("bando"))$("bando").setAttribute("aria-pressed",byBando);
  renderLegend();paint();
}
if($("bando"))$("bando").onclick=()=>setMode("bando");
$("infl").onclick=()=>setMode("infl");

function renderEvents(){const ev=EVENTS[year];$("evTitle").textContent=ev.title;$("evSub").textContent=ev.items[0];reanimar($("evTitle"),$("evSub"))}
function reanimar(...els){els.forEach(e=>{if(!e)return;e.classList.remove("flash");void e.offsetWidth;e.classList.add("flash")})}
function vids(ids,txt){return ids.length?ids.map(id=>`<iframe class="vid" src="https://www.youtube-nocookie.com/embed/${id}" title="Video" allowfullscreen loading="lazy"></iframe>`).join(""):`<div class="ph">${txt}</div>`}
function yearTabs(el){el.innerHTML="";YEARS.forEach(y=>{const b=document.createElement("button");b.textContent=y;b.setAttribute("aria-pressed",y===year);b.onclick=()=>{year=y;$("year").value=y;refresh()};el.appendChild(b)})}
function renderYear(){
  yearTabs($("yYears"));$("ymodal").style.setProperty("--acc","#f2c94c");$("ymodal").style.setProperty("--acc-soft","rgba(242,201,76,.32)");$("yTitle").textContent=EVENTS[year].title;
  $("yWorldH").textContent="El mundo en "+year;
  $("yWorld").innerHTML=YEAR_DETAIL[year].map(t=>`<p>${t}</p>`).join("");
  $("yList").innerHTML=EVENTS[year].items.map(t=>`<li>${t}</li>`).join("");
  $("yVideos").innerHTML=vids(VIDEOS_YEAR[year]||[],"Aquí irá el video de "+year+". Agrega su ID de YouTube en VIDEOS_YEAR dentro del código.");
}
function openYear(){$("ymodal").hidden=false;renderYear();$("yClose").focus()}
function closeYear(){$("ymodal").hidden=true}
$("evOpen").onclick=openYear;$("yClose").onclick=closeYear;
$("ymodal").onclick=e=>{if(e.target.id==="ymodal")closeYear()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("ymodal").hidden)closeYear()});
$("mToYear").onclick=()=>{closeModal();openYear()};
function renderInfo(){if(selected&&!$("modal").hidden)renderModal()}
function renderModal(){
  const id=selected,d=ENT[id],i=year-1914;
  $("mTitle").textContent=d.n;
  const acc=byBando?BCOL[bandoDe(id)]:COL[d.l];                   // el color de la ventana sigue al país (bando o influencia)
  $("modal").style.setProperty("--acc",acc);$("modal").style.setProperty("--acc-soft",d3.color(acc).copy({opacity:.35}).formatRgb());
  const tg=$("mTag");tg.textContent=LBL[d.l]+(TB?" · "+BANDO_NOM[bandoDe(id)]+" en "+year:"");tg.style.background=COL[d.l];
  yearTabs($("mYears"));
  const bs=(TB&&BANDO[id])||"NNNNN",pri=[...bs].findIndex(c=>c!=="N");
  const une=pri>0?"Se unió a "+BANDO_UNE[bs[pri]]+" en "+(1914+pri)+".":"";
  $("mNote").textContent=[d.note,une].filter(Boolean).join(" ");
  $("mYearH").textContent="Qué ocurrió en "+year;
  $("mText").textContent=d.t[i];reanimar($("mText"),$("mYearH"),$("mNote"));
  $("mExtra").innerHTML=((EXTRA[d.x]||{})[year]||[]).map(t=>`<p>${t}</p>`).join("");
  $("mToYear").textContent="Ver "+year+" en el mundo";
  $("mVideos").innerHTML=vids([...((VIDEOS[id]||{})[year]||[]),...(VIDEOS_YEAR[year]||[])],"Aquí irá el video de "+d.n+" en "+year+". Agrega su ID de YouTube en la sección VIDEOS del código.");
}
function openModal(id){selected=id;$("modal").hidden=false;renderModal();if(is2D)paint2D();$("mClose").focus()}
function closeModal(){$("modal").hidden=true;selected=null;if(is2D)paint2D()}
$("mClose").onclick=closeModal;
$("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("modal").hidden)closeModal()});
const colorId=id=>!id?"#33465c":id===selected?"#fff6d6":id===hover?"#ffe9a8":baseCol(id);
const color3D=f=>{const id=entOf(f);return !id?"#2c3d52":id===selected?"#fff6d6":baseCol(id)};   // el globo no resalta al pasar el mouse (evita lentitud)
function setHover(id){
  if(id===hover)return;               // solo actúa si cambió el país bajo el mouse
  hover=id;document.body.style.cursor=id?"pointer":"default";
  if(is2D)paint2D();                  // el mapa 2D es ligero; el globo solo muestra la etiqueta
}
function paint2D(){if(g)g.selectAll("path.land").attr("fill",d=>colorId(d.id))}
function paint3D(){world.polygonCapColor(color3D)}
function paint(){if(is2D)paint2D();else paint3D()}
/* Mapa 2D plano (sin imagen): se dibuja con los mismos países del globo */
function build2D(features){
  svg=d3.select("#map").append("svg");g=svg.append("g");
  g.append("path").attr("class","sea").datum({type:"Sphere"}).attr("fill","#14507f");
  const items=[];
  features.forEach(f=>{
    const id=entOf(f);
    if(f.properties.name==="Papua New Guinea")items.push({f,id:"png_br",part:"S"},{f,id:"png_al",part:"N"});
    else items.push({f,id,part:null});
  });
  g.selectAll("path.land").data(items).join("path").attr("class","land")
    .attr("stroke","#10161c").attr("stroke-width",.5).attr("vector-effect","non-scaling-stroke")
    .style("cursor",d=>d.id?"pointer":"default")
    .on("mouseenter",(e,d)=>setHover(d.id)).on("mouseleave",()=>setHover(null))
    .on("click",(e,d)=>{if(d.id)openModal(d.id)})
    .each(function(d){if(d.id)d3.select(this).append("title").text(ENT[d.id].n)});
  svg.call(d3.zoom().scaleExtent([1,12]).on("zoom",e=>g.attr("transform",e.transform)));
  layout2D();paint();
}
function layout2D(){
  const w=innerWidth,h=innerHeight;svg.attr("viewBox",`0 0 ${w} ${h}`);
  const make=()=>d3.geoNaturalEarth1().fitExtent([[10,(document.querySelector(".bar")?document.querySelector(".bar").offsetHeight:68)+8],[w-10,h-10]],{type:"Sphere"});
  const P=make(),yB=P([145,-8])[1];   // línea aproximada que separa Papúa (británica) de Nueva Guinea (alemana)
  const pa=d3.geoPath(P),N=d3.geoPath(make().clipExtent([[-1e5,-1e5],[1e5,yB]])),S=d3.geoPath(make().clipExtent([[-1e5,yB],[1e5,1e5]]));
  g.select("path.sea").attr("d",pa);
  g.selectAll("path.land").attr("d",d=>d.part==="N"?N(d.f):d.part==="S"?S(d.f):pa(d.f));
}
$("view").onclick=()=>{
  is2D=!is2D;$("view").textContent=is2D?"Vista 3D":"Vista 2D";
  $("globe").style.display=is2D?"none":"block";$("map").classList.toggle("on",is2D);
  if(is2D)layout2D();
  if(is2D)world.pauseAnimation();else world.resumeAnimation();
  paint();
};
function refresh(){renderEvents();renderInfo();renderLegend();if(!$("ymodal").hidden)renderYear();paint()}

const world=Globe()(document.getElementById("globe"))
  .backgroundColor("rgba(0,0,0,0)")
  .showAtmosphere(true).atmosphereColor("#6f9bb5")
  .polygonAltitude(0.01).polygonsTransitionDuration(0).polygonSideColor(()=>"rgba(20,30,40,.5)")
  .polygonStrokeColor(()=>"#10161c")
  .polygonLabel(f=>{const id=entOf(f);return id?`<div style="background:#1a232b;color:#e9e4d6;padding:4px 8px;border-radius:5px;font:13px system-ui">${ENT[id].n}</div>`:""})
  .onPolygonHover(f=>setHover(f?entOf(f):null))
  .onPolygonClick(f=>{const id=f&&entOf(f);if(id)openModal(id)});
world.globeMaterial().color.set("#1d5f94");
world.controls().autoRotate=true;world.controls().autoRotateSpeed=0.35;
addEventListener("resize",()=>{world.width(innerWidth).height(innerHeight);if(svg)layout2D()});
world.width(innerWidth).height(innerHeight);
["pointerdown","wheel"].forEach(ev=>$("globe").addEventListener(ev,()=>world.controls().autoRotate=false,{passive:true}));

fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
  .then(r=>r.json())
  .then(topo=>{
    const feats=topojson.feature(topo,topo.objects.countries).features.filter(f=>f.properties.name!=="Antarctica");
    world.polygonsData(feats);build2D(feats);refresh();
    const have=new Set(feats.map(f=>f.properties.name));
    Object.keys(C2E).filter(k=>!have.has(k)).forEach(k=>console.warn("País no encontrado en el mapa (revisa el nombre en datos.js):",k));
  })
  .catch(()=>{$("info").classList.add("err");$("info").innerHTML="<h2>No se pudo cargar el mapa</h2><p>Revisa tu conexión a internet y recarga la página.</p>"});
renderEvents();renderLegend();

/* Alto de la barra superior (tiene una segunda fila con la pregunta): se reserva para la leyenda y el mapa 2D */
(function(){
  const barra=document.querySelector(".bar");if(!barra)return;
  const medir=()=>{document.documentElement.style.setProperty("--bar-h",barra.offsetHeight+"px");dispatchEvent(new Event("resize"))};
  if("ResizeObserver" in window)new ResizeObserver(medir).observe(barra);else medir();
})();
