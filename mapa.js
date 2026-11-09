/* MAPA: globo 3D, mapa 2D, colores por influencia y ventanas.
   Usa los datos de datos.js (debe cargarse antes). */
 
const COL={3:"#c0392b",2:"#d89b2b",1:"#4f8a5b"};
const LBL={3:"Muy influyente",2:"Influencia media",1:"Poco influyente"};
const CONT={"Europa":"#5b8fc9","Asia":"#d9a441","África":"#59a96a","América":"#b074c4","Oceanía":"#3fb5b0"};
let year=1914,byInfluence=false,selected=null,hover=null,svg=null,g=null,ov=null,is2D=false;
const $=id=>document.getElementById(id);
const entOf=f=>C2E[f.properties.name]||null;     // entidad histórica de un país actual
const baseCol=id=>byInfluence?COL[ENT[id].l]:CONT[ENT[id].cont];
 
/* Proyección Robinson ajustada a la imagen mapa-base.png */
const RX=[1,0.9986,0.9954,0.99,0.9822,0.973,0.96,0.9427,0.9216,0.8962,0.8679,0.835,0.7986,0.7597,0.7186,0.6732,0.6213,0.5722,0.5322];
const RY=[0,0.062,0.124,0.186,0.248,0.31,0.372,0.434,0.4958,0.5571,0.6176,0.6769,0.7346,0.7903,0.8435,0.8936,0.9394,0.9761,1];
function robinsonRaw(l,p){
  const a=Math.abs(p)*180/Math.PI/5,i=Math.min(Math.floor(a),17),t=a-i;
  const X=RX[i]*(1-t)+RX[i+1]*t,Y=RY[i]*(1-t)+RY[i+1]*t;
  return[l*X*0.8487,Math.sign(p)*Y*1.3523*1.0092];
}
const K=270.06,TX=543.1,TY=366.4;
const proj2D=()=>d3.geoProjection(robinsonRaw).scale(K).translate([TX,TY]);
 
/* Rusia y Fiyi cruzan los 180°: se desplazan +360 y se proyectan sin recorte */
const WRAP=new Set(["Russia","Fiji"]);
const wrapC=c=>typeof c[0]==="number"?[c[0]<0?c[0]+360:c[0],c[1]]:c.map(wrapC);
const flat=d3.geoPath(d3.geoTransform({point(lo,la){
  const[x,y]=robinsonRaw(lo*Math.PI/180,la*Math.PI/180);
  this.stream.point(TX+K*x,TY-K*y);
}}));
 
/* selector de años */
YEARS.forEach(y=>{const o=document.createElement("option");o.value=y;o.textContent=y;$("year").appendChild(o)});
$("year").onchange=e=>{year=+e.target.value;refresh()};
function renderLegend(){
  const items=byInfluence?[3,2,1].map(l=>[COL[l],LBL[l]]):Object.entries(CONT).map(([c,col])=>[col,c]);
  $("legend").innerHTML=items.map(([col,t])=>`<span><i style="background:${col}"></i>${t}</span>`).join("");
  $("legend").classList.add("on");
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
  const tg=$("mTag");tg.textContent=LBL[d.l]+" · "+d.cont;tg.style.background=COL[d.l];
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
function color3D(f){
  const id=entOf(f);if(!id)return"#2a3742";
  if(id===selected)return"#f4efe0";
  if(id===hover)return"#c9d6df";
  return baseCol(id);
}
function fill2D(id){
  if(id===selected)return"#f2c94c";
  const c=d3.color(baseCol(id));return id===hover?c.brighter(.7).formatHex():c.formatHex();
}
function paint(){
  /* 3D: casi plano (sin paredes laterales) para que los colores no se vean deformados en el borde */
  world.polygonCapColor(color3D).polygonAltitude(f=>{const id=entOf(f);return id&&(id===selected||id===hover)?0.02:0.004});
  /* 2D: el trazo lleva el mismo color que el relleno, así cubre los huecos pequeños en las costas */
  if(ov)ov.selectAll("path.land").attr("fill",d=>fill2D(d.id)).style("stroke",d=>fill2D(d.id));
}
/* Mapa 2D: la imagen mapa-base.png con los países de 1914 coloreados encima.
   Una máscara hecha con la propia imagen deja el color solo sobre la tierra de la imagen:
   no se sale al mar, ni fuera de los bordes, y las fronteras dibujadas quedan visibles. */
function build2D(features){
  svg=d3.select("#map").append("svg").attr("viewBox","3 -90 1318 850").attr("preserveAspectRatio","xMidYMid meet");
  const defs=svg.append("defs");
  const ft=defs.append("filter").attr("id","landF").attr("color-interpolation-filters","sRGB");
  ft.append("feColorMatrix").attr("type","matrix").attr("values","1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0");
  const tr=ft.append("feComponentTransfer");
  ["R","G","B"].forEach(c=>tr.append("feFunc"+c).attr("type","linear").attr("slope",20).attr("intercept",-17.2));
  defs.append("clipPath").attr("id","imgClip").append("rect").attr("x",3).attr("y",0).attr("width",1318).attr("height",757);
  defs.append("mask").attr("id","landM").attr("maskUnits","userSpaceOnUse").attr("x",0).attr("y",0).attr("width",1321).attr("height",760).attr("color-interpolation","sRGB")
    .append("image").attr("href","mapa-base.png").attr("width",1321).attr("height",760).attr("filter","url(#landF)");
 
  g=svg.append("g");
  g.append("image").attr("href","mapa-base.png").attr("width",1321).attr("height",760).attr("clip-path","url(#imgClip)").style("pointer-events","none");
  ov=g.append("g").attr("mask","url(#landM)").style("mix-blend-mode","multiply");
  const P=proj2D(),pa=d3.geoPath(P),yB=P([145,-8])[1];   // línea aproximada que separa Papúa (británica) de Nueva Guinea (alemana)
  const norte=d3.geoPath(proj2D().clipExtent([[-5000,-5000],[5000,yB]])),sur=d3.geoPath(proj2D().clipExtent([[-5000,yB],[5000,5000]]));
  const items=[];
  features.forEach(f=>{
    const id=entOf(f);if(!id)return;
    const nm=f.properties.name;
    if(nm==="Papua New Guinea")items.push({id:"png_br",d:sur(f)},{id:"png_al",d:norte(f)});
    else if(WRAP.has(nm))items.push({id,d:flat({type:"Feature",geometry:{type:f.geometry.type,coordinates:wrapC(f.geometry.coordinates)}})});
    else items.push({id,d:pa(f)});
  });
  ov.selectAll("path.land").data(items).join("path").attr("class","land").attr("d",d=>d.d).attr("fill-opacity",.9)
    .style("stroke-width","1.4px").style("stroke-linejoin","round").style("stroke-opacity",.9)
    .on("mouseenter",(e,d)=>{hover=d.id;paint()}).on("mouseleave",()=>{hover=null;paint()})
    .on("click",(e,d)=>openModal(d.id)).append("title").text(d=>ENT[d.id].n);
  svg.call(d3.zoom().scaleExtent([1,12]).on("zoom",e=>g.attr("transform",e.transform)));
  paint();
}
$("view").onclick=()=>{
  is2D=!is2D;$("view").textContent=is2D?"Vista 3D":"Vista 2D";
  $("globe").style.display=is2D?"none":"block";$("map").classList.toggle("on",is2D);
  document.body.classList.toggle("is2d",is2D);
  if(is2D)world.pauseAnimation();else world.resumeAnimation();
  paint();
};
function refresh(){renderEvents();renderInfo();if(!$("ymodal").hidden)renderYear();paint()}
 
const world=Globe()(document.getElementById("globe"))
  .backgroundColor("#10161c")
  .showAtmosphere(true).atmosphereColor("#6f9bb5")
  .polygonsTransitionDuration(0)
  .polygonSideColor(()=>"rgba(0,0,0,0)")      // sin paredes laterales
  .polygonStrokeColor(()=>"#10161c")
  .polygonLabel(f=>{const id=entOf(f);return id?`<div style="background:#1a232b;color:#e9e4d6;padding:4px 8px;border-radius:5px;font:13px system-ui">${ENT[id].n}</div>`:""})
  .onPolygonHover(f=>{hover=f?entOf(f):null;document.body.style.cursor=hover?"pointer":"default";paint()})
  .onPolygonClick(f=>{const id=f&&entOf(f);if(id)openModal(id)});
world.globeMaterial().color.set("#17324a");
world.pointOfView({lat:28,lng:12,altitude:2.4},0);   // empieza centrado en Europa y África
world.controls().autoRotate=true;world.controls().autoRotateSpeed=0.35;
addEventListener("resize",()=>world.width(innerWidth).height(innerHeight));
world.width(innerWidth).height(innerHeight);
["pointerdown","wheel"].forEach(ev=>$("globe").addEventListener(ev,()=>world.controls().autoRotate=false,{passive:true}));
 
fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json")
  .then(r=>r.json())
  .then(topo=>{
    const feats=topojson.feature(topo,topo.objects.countries).features.filter(f=>f.properties.name!=="Antarctica");
    world.polygonsData(feats);build2D(feats);refresh();
    const have=new Set(feats.map(f=>f.properties.name));
    Object.keys(C2E).filter(k=>!have.has(k)).forEach(k=>console.warn("País no encontrado en el mapa (revisa el nombre en datos.js):",k));
  })
  .catch(()=>{$("info").innerHTML="<h2>No se pudo cargar el mapa</h2><p>Revisa tu conexión a internet y recarga la página.</p>"});
renderEvents();renderLegend();
