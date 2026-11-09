const T3=(a,b,c)=>[a,a,a,b,c];            // a = 1914-1916, b = 1917, c = 1918
const tl=n=>T3(LAT[n][1],LAT[n][2],LAT[n][3]);
const ENT={
/* ---- Europa ---- */
alemania:{n:"Imperio Alemán",cont:"Europa",l:3,c:["Germany"],t:DATA.Germany.t,x:"Germany",
  note:"En el mapa se muestra la actual Alemania. El imperio incluía además partes de las actuales Polonia, Francia (Alsacia-Lorena), Dinamarca y Lituania."},
francia:{n:"Francia",cont:"Europa",l:3,c:["France"],t:DATA.France.t,x:"France"},
reinounido:{n:"Reino Unido",cont:"Europa",l:3,c:["United Kingdom","Ireland"],t:DATA["United Kingdom"].t,x:"United Kingdom",
  note:"Incluye Irlanda, que en 1914 formaba parte del Reino Unido."},
belgica:{n:"Bélgica",cont:"Europa",l:2,c:["Belgium"],t:DATA.Belgium.t},
italia:{n:"Italia",cont:"Europa",l:2,c:["Italy"],t:DATA.Italy.t,x:"Italy"},
austriahungria:{n:"Austria-Hungría",cont:"Europa",l:3,c:["Austria","Hungary","Czechia","Slovakia","Slovenia","Croatia","Bosnia and Herz."],t:AH.t,x:"Austria",
  note:"Se muestran las actuales Austria, Hungría, Chequia, Eslovaquia, Eslovenia, Croacia y Bosnia. El imperio incluía además partes de las actuales Polonia, Ucrania, Rumania, Italia, Serbia y Montenegro."},
imperioruso:{n:"Imperio ruso",cont:"Europa",l:3,t:DATA.Russia.t,x:"Russia",
  c:["Russia","Poland","Ukraine","Belarus","Lithuania","Latvia","Estonia","Moldova","Georgia","Armenia","Azerbaijan","Kazakhstan","Uzbekistan","Turkmenistan","Kyrgyzstan","Tajikistan"],
  note:"Se muestran la actual Rusia y los territorios que controlaba en 1914: Ucrania, Bielorrusia, los países bálticos, Moldavia, el Cáucaso y Asia central. Polonia estaba repartida entre Rusia, Alemania y Austria-Hungría; aquí se muestra con Rusia, que controlaba la mayor parte. Finlandia aparece aparte."},
serbia:{n:"Serbia",cont:"Europa",l:2,c:["Serbia","Kosovo","North Macedonia","Macedonia"],t:DATA.Serbia.t,
  note:"Incluye Kosovo y Macedonia del Norte, que Serbia había ganado en las guerras balcánicas de 1912-1913."},
grecia:{n:"Grecia",cont:"Europa",l:2,c:["Greece"],t:T3(
  "Comienza neutral: el rey Constantino I, cuñado del Káiser, se opone a entrar en la guerra, mientras el primer ministro Venizelos quiere unirse a los Aliados. En 1915 los Aliados desembarcan en Salónica y el país se divide (el «Cisma Nacional»).",
  "Constantino I abandona el trono (junio) y Grecia declara la guerra a las Potencias Centrales junto a los Aliados.",
  "Su ejército participa en la ofensiva del frente de Macedonia que obliga a Bulgaria a pedir el armisticio (septiembre).")},
bulgaria:{n:"Bulgaria",cont:"Europa",l:2,c:["Bulgaria"],t:[
  "Neutral, en negociaciones con ambos bandos tras perder la segunda guerra balcánica (1913).",
  "Se une a las Potencias Centrales (octubre) y ocupa Serbia junto a Alemania y Austria-Hungría.",
  "Combate en el frente de Macedonia y conquista parte de Rumania.",
  "Sufre escasez y descontento mientras sostiene el frente de Macedonia.",
  "Los Aliados rompen su frente y firma el armisticio de Salónica (29 de septiembre)."]},
montenegro:{n:"Montenegro",cont:"Europa",l:1,c:["Montenegro"],t:[
  "Se pone del lado de Serbia y declara la guerra a Austria-Hungría (agosto).",
  "Resiste ataques austrohúngaros en el monte Lovćen y colabora con el ejército serbio.",
  "Austria-Hungría conquista el país en enero; el rey Nicolás I se exilia.",
  "Sigue ocupado por Austria-Hungría.",
  "Es liberado y se une al futuro Reino de serbios, croatas y eslovenos (noviembre)."]},
albania:{n:"Albania",cont:"Europa",l:1,c:["Albania"],t:[
  "Es un Estado recién creado (1913); su príncipe Guillermo de Wied huye en septiembre y el país cae en el caos.",
  "Tropas serbias, montenegrinas, griegas e italianas ocupan partes del territorio.",
  "Austria-Hungría ocupa el norte y centro; Italia, Grecia y Francia ocupan el sur (Francia crea la República de Korçë).",
  "Italia proclama un protectorado sobre Albania (junio).",
  "Los ocupantes se retiran y el país conserva su independencia; en 1920 reorganiza su gobierno."]},
espana:{n:"España",cont:"Europa",l:1,c:["Spain"],t:tl("Spain")},
portugal:{n:"Portugal",cont:"Europa",l:2,c:["Portugal"],t:tl("Portugal")},
paisesbajos:{n:"Países Bajos",cont:"Europa",l:1,c:["Netherlands"],t:tl("Netherlands")},
noruega:{n:"Noruega",cont:"Europa",l:1,c:["Norway"],t:tl("Norway")},
suecia:{n:"Suecia",cont:"Europa",l:1,c:["Sweden"],t:tl("Sweden")},
dinamarca:{n:"Dinamarca",cont:"Europa",l:1,c:["Denmark"],t:tl("Denmark")},
suiza:{n:"Suiza",cont:"Europa",l:1,c:["Switzerland"],t:tl("Switzerland")},
finlandia:{n:"Finlandia",cont:"Europa",l:1,c:["Finland"],t:[
  "Es un Gran Ducado autónomo dentro del Imperio ruso y vive bajo la sombra de la guerra.",
  "Rusia fortifica el país; un grupo de nacionalistas finlandeses viaja a Alemania para entrenarse (los jägers).",
  "Sigue dentro del imperio, con tropas rusas en su territorio y creciente escasez de alimentos.",
  "Tras la Revolución rusa, el Parlamento declara la independencia (6 de diciembre).",
  "Estalla una guerra civil entre «rojos» y «blancos»; los blancos, con ayuda alemana, vencen en mayo."]},
rumania:{n:"Rumania",cont:"Europa",l:2,c:["Romania"],t:[
  "Neutral pese a su alianza secreta con las Potencias Centrales; muere el rey Carlos I (octubre).",
  "Sigue neutral y negocia con ambos bandos.",
  "Entra con los Aliados (27 de agosto) con la promesa de Transilvania, pero es derrotada y Bucarest cae en diciembre.",
  "Resiste en Moldavia con ayuda rusa, pero queda aislada tras la salida de Rusia.",
  "Firma la paz de Bucarest (mayo), vuelve a la guerra el 10 de noviembre y gana Transilvania, Besarabia y Bucovina."]},
/* ---- Asia ---- */
otomano:{n:"Imperio otomano",cont:"Asia",l:2,c:["Turkey","Iraq","Syria","Lebanon","Israel","Palestine","Jordan"],t:OT.t,x:"Turkey",
  note:"Se muestran Turquía, Irak, Siria, Líbano, Israel, Palestina y Jordania. El imperio incluía además la franja occidental de Arabia (Hiyaz) y partes de Yemen."},
raj:{n:"Raj británico (India)",cont:"Asia",l:2,c:["India","Pakistan","Bangladesh","Myanmar"],t:T3(
  "La India británica entra en guerra con el Imperio británico: más de un millón de soldados indios sirven fuera del país, en Francia, Galípoli, Mesopotamia y África oriental.",
  "Siguen los envíos de soldados y recursos; Gandhi inicia en Champarán su primera campaña de desobediencia civil.",
  "Unos 74.000 soldados indios murieron en la guerra; la epidemia de gripe mata a millones de personas en la India."),
  note:"Incluye las actuales India, Pakistán, Bangladesh y Myanmar (Birmania). Ceilán era una colonia aparte."},
indochina:{n:"Indochina francesa",cont:"Asia",l:1,c:["Vietnam","Laos","Cambodia"],t:T3(
  "Colonia francesa en el sudeste asiático: aporta recursos y, desde 1915, soldados y trabajadores que viajan a Francia.",
  "Estalla la revuelta de Thái Nguyên (agosto) contra el dominio francés.",
  "Unos 100.000 vietnamitas e indochinos habían sido enviados a Francia como soldados o trabajadores.")},
japon:{n:"Imperio japonés",cont:"Asia",l:2,c:["Japan","Taiwan"],t:DATA.Japan.t,
  note:"Incluye Taiwán (Formosa), colonia japonesa. Corea se muestra aparte."},
corea:{n:"Corea japonesa",cont:"Asia",l:1,c:["North Korea","South Korea"],t:T3(
  "Anexada por Japón en 1910, no participa como país en la guerra y su economía sirve a los intereses japoneses.",
  "Continúa bajo el dominio colonial japonés.",
  "El principio de autodeterminación de Wilson alimenta el movimiento independentista que estallará en marzo de 1919.")},
china:{n:"China",cont:"Asia",l:1,c:["China"],t:tl("China"),note:"China era una república desde 1912."},
mongolia:{n:"Mongolia",cont:"Asia",l:1,c:["Mongolia"],t:T3(
  "Autónoma bajo influencia rusa desde 1911; el tratado de Kiajta (1915) reconoce su autonomía bajo soberanía china.",
  "La Revolución rusa debilita la influencia de Rusia en Mongolia.",
  "China aprovecha la guerra civil rusa y presiona para recuperar el control, que logra en 1919.")},
/* ---- África ---- */
argelia:{n:"Argelia francesa",cont:"África",l:1,c:["Algeria"],t:T3(
  "Es parte de Francia: miles de argelinos son movilizados y combaten como tirailleurs en el frente occidental; en 1916 hay revueltas contra el reclutamiento.",
  "Se mantienen los reclutamientos y llegan trabajadores argelinos a las fábricas francesas.",
  "Más de 170.000 argelinos sirvieron en el ejército francés y unos 25.000 murieron.")},
aof:{n:"África occidental francesa",cont:"África",l:1,c:["Mauritania","Senegal","Mali","Guinea","Burkina Faso","Côte d'Ivoire","Niger","Benin"],t:T3(
  "Federación colonial francesa: miles de africanos son reclutados como «tiradores senegaleses» y enviados al frente occidental; en 1915-1916 estallan revueltas contra el reclutamiento.",
  "Siguen los reclutamientos y se envían materias primas y alimentos a Francia.",
  "Blaise Diagne, diputado de Senegal, dirige el reclutamiento de 1918; más de 170.000 soldados de la región sirvieron en la guerra."),
  note:"Se muestran los territorios de la AOF (Mauritania, Senegal, Mali, Guinea, Burkina Faso, Costa de Marfil, Níger y Benín), sin Argelia."},
congobelga:{n:"Congo belga",cont:"África",l:1,c:["Dem. Rep. Congo"],t:T3(
  "Colonia de Bélgica que aporta caucho, cobre y marfil; su Fuerza Pública combate a los alemanes en África oriental y toma Tabora (1916).",
  "Continúa la campaña de África oriental: miles de congoleños sirven como soldados y cargadores.",
  "Tras la guerra, Bélgica recibirá un mandato sobre Ruanda-Urundi, antiguas posesiones alemanas.")},
egipto:{n:"Egipto británico",cont:"África",l:2,c:["Egypt"],t:T3(
  "Es protectorado británico desde diciembre de 1914; el Canal de Suez es clave y los británicos lo defienden de un ataque otomano (1915).",
  "Egipto es la base de las fuerzas británicas que combaten a los otomanos; miles de egipcios trabajan para el ejército.",
  "Tras el armisticio crece el nacionalismo y en 1919 estalla la revolución egipcia.")},
aob:{n:"África oriental británica",cont:"África",l:1,c:["Kenya","Uganda"],t:T3(
  "Colonias británicas de Kenia y Uganda: sirven de base para combatir a los alemanes en África oriental alemana.",
  "Cientos de miles de africanos sirven como cargadores; las enfermedades y el hambre causan muchas muertes.",
  "La campaña continúa hasta el final: el general alemán von Lettow-Vorbeck se rinde después del armisticio.")},
tanzania:{n:"Tanzania alemana",cont:"África",l:2,c:["Tanzania","Rwanda","Burundi"],t:T3(
  "Es la mayor colonia alemana de África. Von Lettow-Vorbeck vence a los británicos en Tanga (1914) y libra una guerra de guerrillas con tropas africanas (askaris).",
  "Los Aliados avanzan; Lettow-Vorbeck se retira hacia el sur y entra en el Mozambique portugués.",
  "Sigue combatiendo y se rinde el 25 de noviembre, con el armisticio ya firmado en Europa. Luego Gran Bretaña y Bélgica se reparten la colonia."),
  note:"Incluye las actuales Tanzania, Ruanda y Burundi, que formaban el África Oriental Alemana."},
camerun:{n:"Camerún alemán",cont:"África",l:1,c:["Cameroon"],t:T3(
  "Colonia alemana invadida por fuerzas británicas, francesas y belgas; Duala cae en septiembre de 1914 y la resistencia termina en febrero de 1916.",
  "Francia y Gran Bretaña se reparten la colonia ocupada.",
  "Tras la guerra, la Sociedad de Naciones confirma el reparto como mandato.")},
namibia:{n:"Namibia alemana",cont:"África",l:1,c:["Namibia"],t:T3(
  "Colonia alemana atacada por fuerzas de Sudáfrica, que toman sus puertos y la hacen rendirse en julio de 1915.",
  "Sudáfrica administra el territorio ocupado.",
  "Tras la guerra, Sudáfrica recibe un mandato sobre la antigua colonia alemana.")},
etiopia:{n:"Etiopía",cont:"África",l:1,c:["Ethiopia"],t:T3(
  "Imperio independiente. El heredero Iyasu simpatiza con los otomanos y las Potencias Centrales; es depuesto en septiembre de 1916 y gobierna Zauditu con Ras Tafari (el futuro Haile Selassie) como regente.",
  "Se mantiene neutral, rodeada de colonias británicas, francesas e italianas.",
  "Termina la guerra sin participar y sin perder territorio; ingresará en la Sociedad de Naciones en 1923.")},
/* ---- América ---- */
canada:{n:"Canadá británico",cont:"América",l:2,c:["Canada"],t:T3(
  "Entra en guerra con el Imperio británico. Envía una primera fuerza de unos 30.000 hombres en 1914 y sufre graves bajas en Ypres (1915).",
  "El Cuerpo Canadiense toma la cresta de Vimy (abril); la crisis del servicio militar obligatorio divide al país.",
  "Participa en los Cien Días con victorias como Amiens; más de 60.000 canadienses murieron en la guerra.")},
eeuu:{n:"Estados Unidos",cont:"América",l:2,c:["United States of America"],t:DATA["United States of America"].t,x:"United States of America"},
mexico:{n:"México",cont:"América",l:1,c:["Mexico"],t:tl("Mexico")},
peru:{n:"Perú",cont:"América",l:1,c:["Peru"],t:tl("Peru")},
brasil:{n:"Brasil",cont:"América",l:1,c:["Brazil"],t:tl("Brazil")},
argentina:{n:"Argentina",cont:"América",l:1,c:["Argentina"],t:tl("Argentina")},
/* ---- Oceanía ---- */
australia:{n:"Australia británica",cont:"Oceanía",l:2,c:["Australia"],t:T3(
  "Entra en guerra con el Imperio británico. El ANZAC desembarca en Galípoli (1915) y luego combate en Francia; un referendo rechaza el servicio militar obligatorio (octubre de 1916).",
  "Combate en Passchendaele; un segundo referendo vuelve a rechazar el servicio militar obligatorio (diciembre).",
  "Participa en los Cien Días (Hamel, Amiens). Más de 60.000 australianos murieron en la guerra.")},
nuevazelanda:{n:"Nueva Zelanda británica",cont:"Oceanía",l:1,c:["New Zealand"],t:T3(
  "Entra en guerra con el Imperio británico, ocupa Samoa Alemana (agosto de 1914) y sus tropas ANZAC combaten en Galípoli y el Somme.",
  "Sufre grandes bajas en Passchendaele (octubre).",
  "Participa en las batallas finales en Francia; unos 18.000 neozelandeses murieron en la guerra.")},
png_br:{n:"Papúa Nueva Guinea británica",cont:"Oceanía",l:1,c:["Papua New Guinea"],t:T3(
  "Territorio de Papúa, administrado por Australia dentro del Imperio británico. Australia ocupa la vecina Nueva Guinea alemana en septiembre de 1914.",
  "Sigue bajo administración australiana y aporta trabajadores y recursos.",
  "Tras la guerra, Australia recibe el mandato sobre la antigua Nueva Guinea alemana y ambos territorios se administran juntos."),
  note:"La frontera con la parte alemana está dibujada de forma aproximada (cerca de los 8° de latitud sur)."},
png_al:{n:"Papúa Nueva Guinea alemana",cont:"Oceanía",l:1,c:["Papua New Guinea"],t:T3(
  "Colonia alemana (Kaiser-Wilhelmsland y archipiélago de Bismarck). Una fuerza australiana la ocupa en septiembre de 1914, tras breves combates en Bita Paka.",
  "Queda bajo ocupación militar australiana.",
  "En 1920 la Sociedad de Naciones concederá a Australia el mandato sobre el territorio."),
  note:"La frontera con la parte británica está dibujada de forma aproximada (cerca de los 8° de latitud sur)."}
};
const C2E={};Object.keys(ENT).forEach(id=>ENT[id].c.forEach(p=>{if(!C2E[p])C2E[p]=id}));
