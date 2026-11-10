/* MAPA: globo 3D, mapa 2D, colores por influencia y ventanas.
   Usa los datos de datos.js (debe cargarse antes). */

const COL={3:"#c0392b",2:"#d89b2b",1:"#4f8a5b"};
const LBL={3:"Muy influyente",2:"Influencia media",1:"Poco influyente"};
let year=1914,byInfluence=false,selected=null,hover=null,svg=null,g=null,is2D=false;
const $=id=>document.getElementById(id);
const entOf=f=>C2E[f.properties.name]||null;     // entidad histórica de un país actual
const baseCol=id=>byInfluence?COL[ENT[id].l]:"#3b5a6b";   // un solo color para todos los países de la lista

/* selector de años */
YEARS.forEach(y=>{const o=document.createElement("option");o.value=y;o.textContent=y;$("year").appendChild(o)});
$("year").onchange=e=>{year=+e.target.value;refresh()};
function renderLegend(){
  const L=$("legend");
  L.innerHTML=[3,2,1].map(l=>`<span><i style="background:${COL[l]}"></i>${LBL[l]}</span>`).join("");
  L.classList.toggle("on",byInfluence);
}
$("infl").onclick=e=>{byInfluence=!byInfluence;e.target.setAttribute("aria-pressed",byInfluence);renderLegend();paint()};

function renderEvents(){const ev=EVENTS[year];$("evTitle").textContent=ev.title;$("evSub").textContent=ev.items[0]}
function vids(ids,txt){return ids.length?ids.map(id=>`<iframe class="vid" src="https://www.youtube-nocookie.com/embed/${id}" title="Video" allowfullscreen loading="lazy"></iframe>`).join(""):`<div class="ph">${txt}</div>`}
function yearTabs(el){el.innerHTML="";YEARS.forEach(y=>{const b=document.createElement("button");b.textContent=y;b.setAttribute("aria-pressed",y===year);b.onclick=()=>{year=y;$("year").value=y;refresh()};el.appendChild(b)})}
function renderYear(){
  yearTabs($("yYears"));$("yTitle").textContent=EVENTS[year].title;
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
  const tg=$("mTag");tg.textContent=LBL[d.l];tg.style.background=COL[d.l];
  yearTabs($("mYears"));
  $("mNote").textContent=d.note||"";
  $("mYearH").textContent="Qué ocurrió en "+year;
  $("mText").textContent=d.t[i];
  $("mExtra").innerHTML=((EXTRA[d.x]||{})[year]||[]).map(t=>`<p>${t}</p>`).join("");
  $("mToYear").textContent="Ver "+year+" en el mundo";
  $("mVideos").innerHTML=vids([...((VIDEOS[id]||{})[year]||[]),...(VIDEOS_YEAR[year]||[])],"Aquí irá el video de "+d.n+" en "+year+". Agrega su ID de YouTube en la sección VIDEOS del código.");
}
function openModal(id){selected=id;$("modal").hidden=false;renderModal();paint();$("mClose").focus()}
function closeModal(){$("modal").hidden=true;selected=null;paint()}
$("mClose").onclick=closeModal;
$("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("modal").hidden)closeModal()});
const colorId=id=>!id?"#26323c":id===selected?"#f4efe0":id===hover?"#9fb3c0":baseCol(id);
const color3D=f=>colorId(entOf(f));
function setHover(id){
  if(id===hover)return;               // solo repinta si cambió el país bajo el mouse
  hover=id;document.body.style.cursor=id?"pointer":"default";paint();
}
function paint(){
  world.polygonCapColor(color3D);
  if(g)g.selectAll("path.land").attr("fill",d=>colorId(d.id));
}
/* Mapa 2D plano (sin imagen): se dibuja con los mismos países del globo */
function build2D(features){
  svg=d3.select("#map").append("svg");g=svg.append("g");
  g.append("path").attr("class","sea").datum({type:"Sphere"}).attr("fill","#17324a");
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
  const make=()=>d3.geoNaturalEarth1().fitExtent([[10,76],[w-10,h-10]],{type:"Sphere"});
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
function refresh(){renderEvents();renderInfo();if(!$("ymodal").hidden)renderYear();paint()}

const world=Globe()(document.getElementById("globe"))
  .backgroundColor("#10161c")
  .showAtmosphere(true).atmosphereColor("#6f9bb5")
  .polygonAltitude(0.01).polygonSideColor(()=>"rgba(20,30,40,.5)")
  .polygonStrokeColor(()=>"#10161c")
  .polygonLabel(f=>{const id=entOf(f);return id?`<div style="background:#1a232b;color:#e9e4d6;padding:4px 8px;border-radius:5px;font:13px system-ui">${ENT[id].n}</div>`:""})
  .onPolygonHover(f=>setHover(f?entOf(f):null))
  .onPolygonClick(f=>{const id=f&&entOf(f);if(id)openModal(id)});
world.globeMaterial().color.set("#17324a");
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
  .catch(()=>{$("info").innerHTML="<h2>No se pudo cargar el mapa</h2><p>Revisa tu conexión a internet y recarga la página.</p>"});
renderEvents();renderLegend();
