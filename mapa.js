/* MAPA: globo 3D, mapa 2D, colores por influencia y ventanas.
   Usa los datos de datos.js (debe cargarse antes). */

const COL={3:"#c0392b",2:"#d89b2b",1:"#4f8a5b",0:"#56636d"};
const LBL={3:"Muy influyente",2:"Influencia media",1:"Poco influyente"};
let year=1914,byInfluence=false,selected=null,hover=null,svg=null,g=null,is2D=false;
const $=id=>document.getElementById(id);
function info(name){
  if(DATA[name])return DATA[name];
  const a=LAT[name];if(a)return{n:a[0],l:a[4],t:[a[1],a[1],a[1],a[2],a[3]]};
  const h=HIST[name];if(h)return{n:h[3],l:h[1],t:DATA[h[0]].t,pk:h[0],note:"En 1914 este territorio formaba parte de "+h[2]+"."};
  return{n:name,l:1,t:Array(5).fill(GENERIC)};
}

/* selector de años */
YEARS.forEach(y=>{const o=document.createElement("option");o.value=y;o.textContent=y;$("year").appendChild(o)});
$("year").onchange=e=>{year=+e.target.value;refresh()};
$("infl").onclick=e=>{byInfluence=!byInfluence;e.target.setAttribute("aria-pressed",byInfluence);$("legend").classList.toggle("on",byInfluence);paint()};

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
  const key=selected.properties.name,d=info(key),i=year-1914;
  $("mTitle").textContent=d.n;
  const tg=$("mTag");tg.textContent=LBL[d.l];tg.style.background=COL[d.l];
  yearTabs($("mYears"));
  $("mNote").textContent=d.note||"";
  $("mYearH").textContent=(d.pk?"Lo que ocurría en "+DATA[d.pk].n+" en ":"Qué ocurrió en ")+year;
  $("mText").textContent=d.t[i];
  $("mExtra").innerHTML=((EXTRA[d.pk||key]||{})[year]||[]).map(t=>`<p>${t}</p>`).join("");
  $("mToYear").textContent="Ver "+year+" en el mundo";
  $("mVideos").innerHTML=vids([...((VIDEOS[key]||{})[year]||[]),...(VIDEOS_YEAR[year]||[])],"Aquí irá el video de "+d.n+" en "+year+". Agrega su ID de YouTube en la sección VIDEOS del código.");
}
function openModal(f){selected=f;$("modal").hidden=false;renderModal();paint();$("mClose").focus()}
function closeModal(){$("modal").hidden=true;selected=null;paint()}
$("mClose").onclick=closeModal;
$("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("modal").hidden)closeModal()});
function colorOf(f){
  const d=info(f.properties.name);
  if(f===selected)return "#f4efe0";
  if(f===hover)return "#9fb3c0";
  return byInfluence?COL[d.l]:"#3b5a6b";
}
function paint(){
  world.polygonCapColor(colorOf).polygonAltitude(f=>f===selected||f===hover?0.04:0.01);
  if(g)g.selectAll("path.land").attr("fill",colorOf);
}
function build2D(features){
  svg=d3.select("#map").append("svg");g=svg.append("g");
  g.append("path").attr("class","sea").datum({type:"Sphere"}).attr("fill","#17324a");
  g.selectAll("path.land").data(features).join("path").attr("class","land")
    .on("mouseenter",(e,f)=>{hover=f;paint()}).on("mouseleave",()=>{hover=null;paint()})
    .on("click",(e,f)=>openModal(f)).append("title").text(f=>info(f.properties.name).n);
  svg.call(d3.zoom().scaleExtent([1,8]).on("zoom",e=>g.attr("transform",e.transform)));
  layout2D();paint();
}
function layout2D(){
  const w=innerWidth,h=innerHeight;svg.attr("viewBox",`0 0 ${w} ${h}`);
  const pr=d3.geoNaturalEarth1().fitExtent([[10,76],[w-10,h-10]],{type:"Sphere"}),pa=d3.geoPath(pr);
  g.selectAll("path.sea,path.land").attr("d",pa);
}
$("view").onclick=()=>{
  is2D=!is2D;$("view").textContent=is2D?"Vista 3D":"Vista 2D";
  $("globe").style.display=is2D?"none":"block";$("map").classList.toggle("on",is2D);
  if(is2D){world.pauseAnimation();layout2D()}else world.resumeAnimation();
  paint();
};
function refresh(){renderEvents();renderInfo();if(!$("ymodal").hidden)renderYear();paint()}

const world=Globe()(document.getElementById("globe"))
  .backgroundColor("#10161c")
  .showAtmosphere(true).atmosphereColor("#6f9bb5")
  .polygonSideColor(()=>"rgba(20,30,40,.5)")
  .polygonStrokeColor(()=>"#10161c")
  .polygonLabel(({properties:p})=>`<div style="background:#1a232b;color:#e9e4d6;padding:4px 8px;border-radius:5px;font:13px system-ui">${info(p.name).n}</div>`)
  .onPolygonHover(f=>{hover=f;document.body.style.cursor=f?"pointer":"default";paint()})
  .onPolygonClick(f=>openModal(f));
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
    [...Object.keys(DATA),...Object.keys(LAT),...Object.keys(HIST)].filter(k=>!have.has(k)).forEach(k=>console.warn("País no encontrado en el mapa:",k));
  })
  .catch(()=>{$("info").innerHTML="<h2>No se pudo cargar el mapa</h2><p>Revisa tu conexión a internet y recarga la página.</p>"});
renderEvents();
