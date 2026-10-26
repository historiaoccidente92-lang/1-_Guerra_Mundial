/* DATOS: toda la información de países, años, eventos, videos y textos extra.
   Edita este archivo para cambiar o ampliar el contenido. */

/* ============ CONTENIDO (edita aquí los textos) ============ */
const YEARS=[1914,1915,1916,1917,1918];

/* Eventos relevantes por año (viñeta lateral) */
const EVENTS={
1914:{title:"1914 · Inicio",items:[
 "Qué pasó: el 28 de junio es asesinado en Sarajevo el archiduque Francisco Fernando, heredero de Austria-Hungría.",
 "Por qué surgió: tensiones por el imperialismo, la carrera armamentista, el nacionalismo y el sistema de alianzas.",
 "Países: Austria-Hungría declara la guerra a Serbia (28 jul); Alemania, Rusia, Francia y Reino Unido se suman en agosto.",
 "Alemania invade Bélgica; la batalla del Marne (sept.) frena su avance y empieza la guerra de trincheras."]},
1915:{title:"1915 · Estancamiento",items:[
 "Italia entra con los Aliados tras el Tratado de Londres (mayo); Bulgaria se une a las Potencias Centrales.",
 "Campaña de Galípoli: los Aliados fracasan al intentar tomar los Dardanelos.",
 "Primer uso masivo de gas venenoso (Ypres) y hundimiento del Lusitania.",
 "Comienza el genocidio armenio en el Imperio otomano."]},
1916:{title:"1916 · Guerra de desgaste",items:[
 "Batalla de Verdún (feb.–dic.) y batalla del Somme (jul.–nov.): cientos de miles de muertos.",
 "Batalla naval de Jutlandia entre las flotas británica y alemana.",
 "Ofensiva Brusilov de Rusia contra Austria-Hungría.",
 "Rumania entra en la guerra del lado aliado; comienza la Revuelta árabe contra los otomanos."]},
1917:{title:"1917 · Giro de la guerra",items:[
 "Alemania reanuda la guerra submarina sin restricciones; el telegrama Zimmermann irrita a EE. UU.",
 "Estados Unidos declara la guerra a Alemania (6 de abril).",
 "Revolución rusa: cae el zar (febrero) y los bolcheviques toman el poder (octubre).",
 "Batalla de Passchendaele, derrota italiana en Caporetto y toma británica de Jerusalén."]},
1918:{title:"1918 · Fin",items:[
 "Cómo se llegó: Rusia firma la paz de Brest-Litovsk (marzo) y Alemania lanza su última ofensiva en el oeste.",
 "La contraofensiva aliada de los Cien Días, con tropas estadounidenses frescas, rompe el frente alemán.",
 "Los aliados de Alemania piden la paz: Bulgaria (sept.), Imperio otomano (oct.) y Austria-Hungría (nov.).",
 "Armisticio del 11 de noviembre en Compiègne; el Káiser abdica. En 1919 el Tratado de Versalles impone duras condiciones a Alemania."]}
};

/* nivel: 3 = muy influyente, 2 = medio, 1 = poco · t = texto por año (1914…1918) */
const AH={n:"Austria-Hungría",l:3,t:[
 "Declara la guerra a Serbia tras Sarajevo, pero su ofensiva fracasa y pierde Galitzia ante Rusia.",
 "Italia le declara la guerra; con Alemania y Bulgaria conquista Serbia.",
 "Muere el emperador Francisco José (nov.); le sucede Carlos I.",
 "Con ayuda alemana derrota a Italia en Caporetto. La escasez y las protestas crecen.",
 "Derrota en Vittorio Veneto; firma el armisticio el 3 de nov. y el imperio se disuelve."]};
const OT={n:"Imperio otomano (Turquía)",l:2,t:[
 "Se une a las Potencias Centrales a finales de octubre.",
 "Defiende con éxito Galípoli. Comienza el genocidio armenio.",
 "Estalla la Revuelta árabe apoyada por los británicos.",
 "Pierde Bagdad y Jerusalén ante los británicos.",
 "Firma el armisticio de Mudros (30 oct.). El imperio queda derrotado."]};
const MID_GEN=n=>({n,l:2,t:Array(5).fill("Participó en la guerra con un papel secundario pero relevante, aportando tropas, recursos o territorio.")});
const DATA={
"Germany":{n:"Alemania",l:3,t:[
 "Aplica el Plan Schlieffen: invade Bélgica y Francia, pero es frenada en el Marne.",
 "Gana terreno en el frente oriental. Usa gas en Ypres y hunde el Lusitania.",
 "Intenta desangrar a Francia en Verdún; combate en el Somme y en Jutlandia.",
 "Guerra submarina sin restricciones. Rusia se derrumba, pero EE. UU. entra en la guerra.",
 "Lanza la ofensiva de primavera, es derrotada, el Káiser abdica y se firma el armisticio (11 nov.)."]},
"United Kingdom":{n:"Reino Unido",l:3,t:[
 "Declara la guerra el 4 de agosto por la invasión de Bélgica. Su ejército profesional combate en Mons y el Marne.",
 "Fracasa en Galípoli. El Lusitania se hunde y la guerra se vuelve total.",
 "Se instaura el servicio militar obligatorio. Sufre la batalla del Somme y estalla el Alzamiento de Pascua en Irlanda.",
 "Combate en Passchendaele, usa tanques en Cambrai y publica la Declaración Balfour.",
 "Participa en la ofensiva de los Cien Días que lleva al armisticio."]},
"France":{n:"Francia",l:3,t:[
 "Resiste la invasión y gana el Marne (sept.), salvando París.",
 "Lanza ofensivas costosas en Champaña y Artois sin romper el frente.",
 "Resiste meses en Verdún bajo el mando de Pétain.",
 "La ofensiva Nivelle fracasa y estallan motines en el ejército.",
 "Foch asume el mando aliado único; la victoria llega con el armisticio en Compiègne."]},
"Russia":{n:"Rusia",l:3,t:[
 "Invade Prusia Oriental pero es derrotada en Tannenberg; avanza en Galitzia.",
 "Sufre la Gran Retirada ante el avance de las Potencias Centrales.",
 "La ofensiva Brusilov es su mayor éxito, pero con enormes pérdidas.",
 "Revolución: cae el zar Nicolás II y los bolcheviques toman el poder en octubre.",
 "Firma la paz de Brest-Litovsk (marzo) y sale de la guerra."]},
"Austria":AH,"Hungary":AH,
"Turkey":OT,
"United States of America":{n:"Estados Unidos",l:2,t:[
 "Se declara neutral.",
 "El hundimiento del Lusitania mata a 128 estadounidenses y tensa las relaciones con Alemania.",
 "Wilson es reelegido con el lema de mantener la paz. Presta dinero y vende armas a los Aliados.",
 "Declara la guerra a Alemania el 6 de abril y comienza a movilizar un gran ejército.",
 "Sus tropas deciden batallas en Meuse-Argonne. Wilson propone los Catorce Puntos."]},
"Italy":{n:"Italia",l:2,t:[
 "Se mantiene neutral pese a su alianza con Alemania y Austria-Hungría.",
 "Firma el Tratado de Londres y entra en la guerra con los Aliados (mayo).",
 "Libra sucesivas batallas del Isonzo con pocos avances.",
 "Sufre una gran derrota en Caporetto y se reorganiza en el Piave.",
 "Gana en Vittorio Veneto y Austria-Hungría pide el armisticio."]},
"Serbia":{n:"Serbia",l:2,t:[
 "Tras el asesinato de Sarajevo, resiste las invasiones austrohúngaras en Cer y Kolubara.",
 "Es invadida y su ejército se retira a través de Albania.",
 "Su ejército, reorganizado, combate en el frente de Salónica.",
 "Sigue luchando junto a los Aliados desde Salónica.",
 "Se libera y se integra en el nuevo Reino de serbios, croatas y eslovenos (dic.)."]},
"Belgium":{n:"Bélgica",l:2,t:[
 "Es invadida por Alemania pese a ser neutral; resiste en Lieja y en el Yser.",
 "Gran parte del país está ocupado; el frente se estabiliza en Ypres.",
 "Sigue bajo ocupación; el rey Alberto I encabeza el ejército en el frente.",
 "Se libra la batalla de Passchendaele en su territorio.",
 "Es liberada en el otoño con la ofensiva aliada."]},
"Japan":{n:"Japón",l:2,t:[
 "Se une a los Aliados y toma la colonia alemana de Tsingtao, en China.",
 "Presenta a China las Veintiún Exigencias.",
 "Aumenta su industria y sus exportaciones durante la guerra.",
 "Su flota ayuda a escoltar convoyes en el Mediterráneo.",
 "Participa en la intervención aliada en Siberia."]},
"Bulgaria":MID_GEN("Bulgaria"),"Romania":MID_GEN("Rumania"),"Greece":MID_GEN("Grecia"),
"Canada":MID_GEN("Canadá"),"Australia":MID_GEN("Australia"),"India":MID_GEN("India"),
"New Zealand":MID_GEN("Nueva Zelanda"),"South Africa":MID_GEN("Sudáfrica")
};
const L=(n,a,b,c,l)=>[n,a,b,c,l||1];
const LAT={
"Argentina":L("Argentina","Se mantuvo neutral y exportó trigo y carne a los Aliados.","El presidente Yrigoyen mantuvo la neutralidad pese a que submarinos alemanes hundieron barcos argentinos y a la presión de EE. UU.","Siguió neutral y exportó alimentos a Europa."),
"Mexico":L("México","Estaba inmerso en la Revolución mexicana y se mantuvo neutral.","Alemania propuso a México una alianza en el telegrama Zimmermann; el presidente Carranza la rechazó y mantuvo la neutralidad.","Siguió neutral, concentrado en reconstruir el país tras la Revolución."),
"Brazil":L("Brasil","Se mantuvo neutral y exportó café, caucho y carne.","Tras el hundimiento de barcos brasileños por submarinos alemanes, rompió relaciones con Alemania y le declaró la guerra el 26 de octubre.","Envió una flota naval y una misión médica a Europa. Fue el único país sudamericano que declaró la guerra."),
"Peru":L("Perú","Se mantuvo neutral; la guerra afectó su comercio de azúcar, algodón y minerales.","Tras el hundimiento del velero peruano Lorton, rompió relaciones con Alemania (octubre) y se alineó con los Aliados.","Apoyó a los Aliados; en 1919 firmó el Tratado de Versalles y fue miembro fundador de la Sociedad de Naciones."),
"Chile":L("Chile","Se mantuvo neutral. En 1914 hubo una batalla naval frente a sus costas, en Coronel, y su salitre fue clave para fabricar explosivos y fertilizantes.","Siguió neutral. Su economía dependía de las exportaciones de salitre, muy demandado por ambos bandos.","Terminó la guerra neutral; el salitre sintético empezó a amenazar su economía."),
"Colombia":L("Colombia","Se mantuvo neutral y su economía se resintió por la caída del comercio.","Siguió neutral.","Terminó la guerra neutral."),
"Venezuela":L("Venezuela","Se mantuvo neutral durante la guerra.","Siguió neutral.","Terminó la guerra neutral."),
"Paraguay":L("Paraguay","Se mantuvo neutral durante la guerra.","Siguió neutral.","Terminó la guerra neutral."),
"Uruguay":L("Uruguay","Se mantuvo neutral, aunque simpatizaba con los Aliados.","Rompió relaciones con Alemania en octubre, en solidaridad con EE. UU. y Brasil.","Apoyó la causa aliada sin enviar tropas."),
"Bolivia":L("Bolivia","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania en abril.","Siguió sin participar en los combates."),
"Ecuador":L("Ecuador","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania en diciembre.","Siguió sin participar en los combates."),
"Cuba":L("Cuba","Se mantuvo neutral y su azúcar tuvo gran demanda.","Declaró la guerra a Alemania el 7 de abril, un día después de EE. UU.","Aportó azúcar y apoyo logístico a los Aliados."),
"Panama":L("Panamá","Se mantuvo neutral; el Canal de Panamá abrió en agosto de 1914.","Declaró la guerra a Alemania el 7 de abril, en alianza con EE. UU.","Cooperó en la defensa del Canal."),
"Guatemala":L("Guatemala","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania en abril.","Declaró la guerra a Alemania en abril."),
"Costa Rica":L("Costa Rica","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania.","Declaró la guerra a Alemania en mayo."),
"Nicaragua":L("Nicaragua","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania.","Declaró la guerra a Alemania en mayo."),
"Honduras":L("Honduras","Se mantuvo neutral durante la guerra.","Rompió relaciones con Alemania.","Declaró la guerra a Alemania en julio."),
"Haiti":L("Haití","Se mantuvo neutral; en 1915 EE. UU. ocupó el país.","Rompió relaciones con Alemania.","Declaró la guerra a Alemania en julio."),
"Spain":L("España","España se mantuvo neutral. Su economía creció al exportar alimentos y manufacturas a ambos bandos, aunque hubo inflación y conflictos sociales.","Siguió neutral y vivió una fuerte crisis social y política.","Terminó la guerra neutral; la gripe de 1918 golpeó duramente al país."),
"Netherlands":L("Países Bajos","Se mantuvieron neutrales, rodeados por el conflicto, y recibieron a miles de refugiados belgas.","Siguieron neutrales y sufrieron el bloqueo y la escasez.","El Káiser Guillermo II se exilió allí tras abdicar."),
"Switzerland":L("Suiza","Permaneció neutral, movilizó su ejército para defender sus fronteras y fue sede de la Cruz Roja Internacional, que ayudó a prisioneros de guerra.","Siguió neutral y acogió a exiliados y diplomáticos de ambos bandos.","Vivió una huelga general en noviembre y terminó la guerra neutral."),
"Sweden":L("Suecia","Fue neutral, pero comerció con ambos bandos, lo que le generó tensiones con los Aliados.","Siguió neutral con crisis de alimentos.","Terminó la guerra neutral."),
"Norway":L("Noruega","Fue neutral, pero su flota mercante perdió muchos barcos hundidos por submarinos alemanes.","Siguió neutral; los hundimientos aumentaron.","Terminó la guerra neutral."),
"Denmark":L("Dinamarca","Fue neutral, minó sus aguas y comerció con ambos lados.","Siguió neutral.","Terminó la guerra neutral."),
"China":L("China","Se declaró neutral. Japón ocupó la colonia alemana de Tsingtao y en 1915 le presentó las Veintiún Exigencias.","Declaró la guerra a las Potencias Centrales en agosto; envió unos 140.000 trabajadores a Francia.","Esperaba recuperar Shandong en Versalles, pero pasó a Japón, lo que provocó protestas en 1919."),
"Portugal":L("Portugal","Se declaró neutral en Europa, pero defendió sus colonias africanas; en 1916 Alemania le declaró la guerra.","Envió un cuerpo expedicionario al frente occidental.","Sufrió una gran derrota en La Lys (abril), pero compartió la victoria aliada.",2)
};
/* Territorios actuales que en 1914 pertenecían a un imperio: [texto base, nivel, "formaba parte de…", nombre en español] */
const H=(a,l,b,n)=>[a,l,b,n];
const HIST={
"Poland":H("Russia",3,"los imperios ruso, alemán y austrohúngaro, y fue campo de batalla del frente oriental","Polonia"),
"Ukraine":H("Russia",2,"los imperios ruso y austrohúngaro","Ucrania"),
"Belarus":H("Russia",3,"el Imperio ruso, y fue escenario de combates","Bielorrusia"),
"Lithuania":H("Russia",2,"el Imperio ruso","Lituania"),"Latvia":H("Russia",2,"el Imperio ruso","Letonia"),
"Estonia":H("Russia",2,"el Imperio ruso","Estonia"),"Finland":H("Russia",2,"el Imperio ruso (Gran Ducado de Finlandia)","Finlandia"),
"Georgia":H("Russia",2,"el Imperio ruso","Georgia"),"Armenia":H("Russia",2,"los imperios ruso y otomano","Armenia"),
"Azerbaijan":H("Russia",2,"el Imperio ruso","Azerbaiyán"),
"Czechia":H("Austria",2,"Austria-Hungría","Chequia"),"Slovakia":H("Austria",2,"Austria-Hungría","Eslovaquia"),
"Croatia":H("Austria",2,"Austria-Hungría","Croacia"),"Slovenia":H("Austria",2,"Austria-Hungría","Eslovenia"),
"Bosnia and Herz.":H("Austria",3,"Austria-Hungría; en su capital, Sarajevo, se produjo el atentado de 1914","Bosnia y Herzegovina"),
"Iraq":H("Turkey",2,"el Imperio otomano","Irak"),"Syria":H("Turkey",2,"el Imperio otomano","Siria"),
"Lebanon":H("Turkey",2,"el Imperio otomano","Líbano"),"Israel":H("Turkey",2,"el Imperio otomano","Israel"),
"Palestine":H("Turkey",2,"el Imperio otomano","Palestina"),"Jordan":H("Turkey",2,"el Imperio otomano","Jordania"),
"Saudi Arabia":H("Turkey",2,"el Imperio otomano (la Revuelta árabe empezó en el Hiyaz)","Arabia Saudita"),
"Egypt":H("United Kingdom",2,"el Imperio británico (protectorado desde diciembre de 1914)","Egipto"),
"Pakistan":H("United Kingdom",1,"la India británica","Pakistán"),"Nigeria":H("United Kingdom",1,"el Imperio británico","Nigeria"),
"Kenya":H("United Kingdom",1,"el Imperio británico","Kenia"),
"Algeria":H("France",1,"el Imperio colonial francés","Argelia"),"Morocco":H("France",1,"el Imperio colonial francés","Marruecos"),
"Tunisia":H("France",1,"el Imperio colonial francés","Túnez"),
"Tanzania":H("Germany",2,"las colonias alemanas; allí se libró la campaña de África Oriental","Tanzania"),
"Namibia":H("Germany",1,"las colonias alemanas","Namibia"),"Cameroon":H("Germany",1,"las colonias alemanas","Camerún"),
"Libya":H("Italy",1,"el Imperio colonial italiano","Libia"),
"Dem. Rep. Congo":H("Belgium",1,"el Congo Belga","R. D. del Congo")
};
/* País sin datos propios → texto genérico de poca influencia */
const GENERIC="Fue neutral o tuvo una participación muy limitada en la guerra, aunque sufrió sus efectos económicos y políticos.";
/* VIDEOS: pega el ID de YouTube (lo que va después de v= en el enlace).
   Por país y año:  "Germany":{1914:["ID1","ID2"]}
   Para todos los países en un año:  VIDEOS_YEAR={1914:["ID"]} */
const VIDEOS={};
const VIDEOS_YEAR={};
/* INFO EXTRA (párrafos largos) por país y año. Ejemplo:
   "Germany":{1914:["Primer párrafo...","Segundo párrafo..."]} */
const X=a=>Object.fromEntries(a.map((t,i)=>[1914+i,[t]]));
const AHX=X([
"El imperio, formado por austriacos, húngaros, checos, eslovacos, polacos, croatas, serbios, rumanos y otros pueblos, vio en el asesinato de Sarajevo la oportunidad de castigar a Serbia, con el respaldo de Alemania (el «cheque en blanco»). Sin embargo, sus ejércitos fracasaron en Serbia, perdieron Galitzia ante Rusia y sufrieron bajas enormes en los primeros meses.",
"Con ayuda alemana y búlgara conquistó Serbia en otoño, pero tuvo que abrir un nuevo frente contra Italia en el Isonzo y los Alpes. El bloqueo naval aliado empezó a causar escasez de alimentos en las ciudades del imperio.",
"El 21 de noviembre murió Francisco José tras 68 años de reinado y lo sucedió su sobrino nieto Carlos I, que buscó una salida negociada. La ofensiva Brusilov destrozó a sus ejércitos y su dirección militar pasó a depender cada vez más de Alemania.",
"Con apoyo alemán logró la victoria de Caporetto (octubre), pero la economía estaba al límite: huelgas, hambre y tensiones entre nacionalidades. Carlos I intentó negociar la paz en secreto (el asunto Sixto), sin éxito. La salida de Rusia alivió la presión en el este.",
"El imperio se desintegró: checos, eslovacos, polacos, húngaros, croatas, eslovenos y otros pueblos proclamaron su independencia o su unión a nuevos Estados. Tras Vittorio Veneto se firmó el armisticio con Italia (3 de noviembre) y Carlos I renunció a participar en el gobierno (11 de noviembre). Después llegarían los tratados de Saint-Germain (Austria) y Trianón (Hungría)."]);
const OTX=X([
"Gobernado por los «Jóvenes Turcos», firmó en agosto una alianza secreta con Alemania. Los cruceros alemanes Goeben y Breslau llegaron a Constantinopla y, a fines de octubre, atacaron puertos rusos del mar Negro, lo que llevó a la guerra con la Entente. En noviembre el sultán proclamó la yihad.",
"Defendió con éxito Galípoli, donde se destacó el oficial Mustafa Kemal. Ese año comenzó la deportación y el exterminio de los armenios, que costó la vida a cientos de miles de personas. Numerosos historiadores y países lo reconocen como genocidio; el Estado turco actual rechaza ese término.",
"En abril las tropas otomanas obtuvieron la rendición de una guarnición británica en Kut, Mesopotamia. En junio el jerife Husayn de La Meca inició la Revuelta árabe con apoyo británico, entre ellos T. E. Lawrence, que abrió un frente interno en el imperio.",
"Los británicos tomaron Bagdad (marzo) y Jerusalén (diciembre), mientras la Revuelta árabe avanzaba. La Revolución rusa alivió la presión en el Cáucaso, pero la economía y la logística estaban colapsadas por el hambre y las enfermedades.",
"Tras caer Palestina y Siria (batalla de Megido en septiembre y Damasco en octubre) firmó el armisticio de Mudros el 30 de octubre. El Tratado de Sèvres (1920) planeó repartir el imperio, pero la guerra de independencia turca llevó al Tratado de Lausana (1923) y al nacimiento de la República de Turquía."]);
const EXTRA={
"Germany":X([
"Alemania tenía el ejército mejor entrenado de Europa y un plan para evitar una guerra en dos frentes: derrotar a Francia en pocas semanas y luego volcarse contra Rusia. Al violar la neutralidad de Bélgica provocó la entrada del Reino Unido. En septiembre la derrota en el Marne obligó a sus tropas a retroceder y el frente se fijó con trincheras desde el mar del Norte hasta Suiza.",
"Sin poder vencer en el oeste, concentró esfuerzos en el este y, junto a Austria-Hungría, rompió el frente ruso en Gorlice-Tarnów (mayo) y ocupó Polonia. En el oeste usó gas de cloro en Ypres (abril). Sus zepelines bombardearon Gran Bretaña y su guerra submarina, que hundió el Lusitania en mayo, generó un fuerte rechazo internacional.",
"El jefe del estado mayor, Falkenhayn, lanzó Verdún en febrero con la idea de «desangrar» al ejército francés. La batalla duró unos diez meses y costó cientos de miles de bajas sin un resultado decisivo. Luego tuvo que defenderse en el Somme y la flota combatió en Jutlandia sin romper el bloqueo británico. En agosto Hindenburg y Ludendorff asumieron el mando militar.",
"Por el bloqueo británico la población sufrió escasez grave; el invierno de 1916-17 se recuerda como el «invierno del nabo». Para forzar la paz, Alemania reanudó en febrero la guerra submarina sin restricciones, lo que junto al telegrama Zimmermann llevó a EE. UU. a la guerra. En el este, el colapso de Rusia le permitió trasladar tropas hacia el oeste.",
"En marzo lanzó la ofensiva de primavera con tropas liberadas del este; avanzó mucho pero no logró un golpe decisivo y quedó agotada. Desde el 8 de agosto, el «día negro» del ejército alemán, retrocedió ante los Aliados. Estallaron el motín naval de Kiel y revueltas en varias ciudades; el Káiser Guillermo II abdicó el 9 de noviembre y el nuevo gobierno firmó el armisticio dos días después."]),
"United Kingdom":X([
"El Reino Unido entró el 4 de agosto al violarse la neutralidad de Bélgica, que había garantizado. Envió la Fuerza Expedicionaria Británica a Francia, que combatió en Mons y el Marne y sufrió grandes bajas en la primera batalla de Ypres. Su imperio aportó soldados y recursos desde India, Canadá, Australia y otros territorios, y Kitchener empezó a reclutar voluntarios.",
"Churchill impulsó la campaña de Galípoli para abrir los Dardanelos; fracasó y fue evacuada entre diciembre de 1915 y enero de 1916. Por primera vez el país sufrió bombardeos de zepelines y el hundimiento del Lusitania despertó indignación. La falta de municiones (la «crisis de los obuses») provocó un gobierno de coalición.",
"Se aprobó el servicio militar obligatorio. El 1 de julio comenzó el Somme, con casi 60.000 bajas británicas el primer día, el más sangriento en la historia de su ejército, y en septiembre se usaron tanques por primera vez. En abril fue reprimido el Alzamiento de Pascua en Dublín y en diciembre Lloyd George llegó a primer ministro.",
"Los submarinos alemanes pusieron al país al borde del desabastecimiento hasta que se adoptó el sistema de convoyes. Libró Passchendaele (julio–noviembre) entre el barro y con enormes pérdidas, y en Cambrai (noviembre) usó tanques en masa. En Oriente Próximo tomó Bagdad y Jerusalén, y la Declaración Balfour apoyó un «hogar nacional» judío en Palestina.",
"Participó en la contraofensiva de los Cien Días, con batallas como la de Amiens (8 de agosto). En febrero las mujeres mayores de 30 años que cumplían ciertos requisitos obtuvieron el derecho a voto. Tras el armisticio el país celebró la victoria, pero había perdido cerca de 900.000 soldados."]),
"France":X([
"Francia aplicó el Plan XVII y atacó en Alsacia y Lorena, pero fue rechazada. Con los alemanes cerca de París, el gobierno se trasladó a Burdeos y, según la tradición, los taxis de París llevaron refuerzos al Marne, donde Joffre ganó la batalla (6–12 de septiembre). Los partidos políticos se unieron bajo la «Unión Sagrada».",
"Lanzó ofensivas en Champaña y Artois para expulsar a los alemanes del norte del país, con pérdidas enormes y avances mínimos. Gran parte de sus regiones industriales del noreste estaba ocupada. Fue un año de aprendizaje: aparecieron el casco de acero, la artillería pesada y el uso masivo de granadas.",
"En Verdún, entre febrero y diciembre, los franceses defendieron la fortaleza bajo la consigna «No pasarán». La «Vía Sagrada», la carretera que abastecía a los soldados, fue vital, y Pétain organizó el relevo constante de tropas. La batalla causó cientos de miles de bajas francesas.",
"El general Nivelle prometió romper el frente en el Chemin des Dames (abril), pero la ofensiva fracasó con enormes bajas. Esto desató motines en decenas de divisiones; Pétain los calmó mejorando permisos y condiciones y evitando ataques costosos. En noviembre Clemenceau asumió el gobierno.",
"En abril Foch fue nombrado comandante supremo aliado. Francia resistió las ofensivas alemanas, ganó la segunda batalla del Marne (julio) y participó en la ofensiva final. El armisticio se firmó en un vagón de tren en el bosque de Compiègne. Murieron cerca de 1,4 millones de franceses y Alsacia y Lorena volvieron a Francia."]),
"Russia":X([
"El imperio movilizó rápido en apoyo de Serbia. Invadió Prusia Oriental, pero fue derrotado por los alemanes en Tannenberg (agosto) y en los lagos Masurianos (septiembre). En Galitzia, en cambio, venció a Austria-Hungría y tomó Lemberg (Leópolis).",
"La falta de fusiles, munición y transporte puso al ejército en graves dificultades. La ofensiva de Gorlice-Tarnów lo obligó a la «Gran Retirada»: perdió Polonia, Lituania y parte de Bielorrusia y Letonia. En septiembre el zar Nicolás II asumió el mando supremo, ligando su suerte a la del frente.",
"La ofensiva Brusilov (junio), probablemente su mayor victoria de la guerra, obligó a Alemania a enviar refuerzos y ayudó indirectamente a Francia en Verdún y el Somme. Pero costó enormes bajas, y en las ciudades crecían el hambre y el descontento.",
"En marzo, protestas por pan y la deserción de soldados provocaron la abdicación del zar y un Gobierno Provisional que continuó la guerra. La ofensiva Kérenski (julio) fracasó. Lenin y los bolcheviques, con el lema «paz, pan y tierra», tomaron el poder en octubre y pidieron un armisticio.",
"El gobierno bolchevique firmó la paz de Brest-Litovsk (3 de marzo) y cedió grandes territorios, como Polonia, los países bálticos y Ucrania. Rusia quedó sumida en una guerra civil entre rojos y blancos, con intervención extranjera."]),
"Austria":AHX,"Hungary":AHX,"Turkey":OTX,
"United States of America":X([
"El presidente Wilson proclamó la neutralidad y pidió a los estadounidenses ser «imparciales de pensamiento y acción». El país tenía muchos inmigrantes de ambos bandos y su economía empezó a beneficiarse comerciando con los Aliados.",
"El hundimiento del Lusitania por un submarino alemán (7 de mayo) mató a 128 estadounidenses entre más de mil víctimas. Wilson protestó con firmeza y Alemania moderó temporalmente su guerra submarina, pero creció el debate sobre la «preparación» militar.",
"Wilson ganó la reelección con el lema «Nos mantuvo fuera de la guerra». Se aprobó la Ley de Defensa Nacional, que amplió el ejército y la armada, y los bancos estadounidenses prestaron grandes sumas a los Aliados.",
"Alemania reanudó la guerra submarina sin restricciones y se conoció el telegrama Zimmermann, en que proponía a México una alianza. El 6 de abril el Congreso declaró la guerra. Se aprobó el servicio militar obligatorio y en junio llegaron a Francia los primeros soldados, al mando del general Pershing.",
"Wilson presentó los Catorce Puntos en enero. Más de dos millones de soldados llegaron a Europa y combatieron en Cantigny, Belleau Wood y la ofensiva Meuse-Argonne. Murieron cerca de 116.000 estadounidenses, muchos de ellos por enfermedad, sobre todo la gripe de 1918."]),
"Italy":X([
"Pese a pertenecer a la Triple Alianza, Italia se declaró neutral alegando que la alianza era defensiva y que Austria-Hungría no la había consultado. En el país se enfrentaron los neutralistas y los intervencionistas, que querían recuperar territorios «irredentos» como Trento y Trieste.",
"Con el secreto Tratado de Londres (abril), los Aliados le prometieron territorios como el Trentino, el Tirol del Sur, Trieste y parte de Dalmacia. Italia declaró la guerra a Austria-Hungría el 23 de mayo. El frente se centró en el Isonzo y los Alpes, con una guerra de montaña durísima.",
"El ejército italiano tomó Gorizia en agosto y libró repetidas batallas del Isonzo con enormes bajas. En mayo, Austria-Hungría lanzó una ofensiva de castigo en el Trentino que no logró romper el frente.",
"El 24 de octubre una ofensiva austro-alemana rompió el frente en Caporetto; los italianos retrocedieron más de cien kilómetros hasta el río Piave y perdieron cientos de miles de prisioneros. Cadorna fue reemplazado por Diaz y el país se unió ante la amenaza de invasión.",
"Italia resistió en el Piave en junio y a fines de octubre lanzó la batalla de Vittorio Veneto, que desintegró al ejército austrohúngaro. El armisticio se firmó el 3 de noviembre. Pese a la victoria hubo descontento por no recibir todos los territorios prometidos, lo que se llamó la «victoria mutilada»."])
};
const YEAR_DETAIL={
1914:[
"Europa estaba dividida en dos bloques: la Triple Entente (Francia, Rusia y Reino Unido) y la Triple Alianza (Alemania, Austria-Hungría e Italia). Años de carrera armamentista, rivalidades coloniales, conflictos en los Balcanes y un fuerte nacionalismo habían creado un ambiente explosivo.",
"El 28 de junio el joven nacionalista Gavrilo Princip asesinó en Sarajevo al archiduque Francisco Fernando y a su esposa Sofía. Austria-Hungría envió un ultimátum a Serbia y le declaró la guerra el 28 de julio. Rusia movilizó, Alemania declaró la guerra a Rusia (1 de agosto) y a Francia (3 de agosto) y el Reino Unido entró el 4 de agosto.",
"Se esperaba una guerra corta, «terminada para Navidad». Pero tras el Marne ambos bandos cavaron trincheras, mientras en el este la guerra fue más móvil. Japón se unió a los Aliados en agosto y el Imperio otomano a las Potencias Centrales en octubre. En la Navidad, soldados de ambos lados confraternizaron en algunos sectores del frente occidental."],
1915:[
"Se consolidó la guerra de trincheras: alambre de púas, ametralladoras y artillería hacían que cada ataque costara miles de vidas por pocos metros. Aparecieron armas nuevas, como el gas venenoso, y los primeros bombardeos de zepelines.",
"Se abrieron nuevos frentes: Italia declaró la guerra a Austria-Hungría (mayo) y Bulgaria se unió a las Potencias Centrales (octubre). Serbia fue conquistada. Los Aliados desembarcaron en Galípoli (abril) en un intento fallido de sacar del conflicto al Imperio otomano.",
"En el mar, Alemania declaró zona de guerra las aguas británicas y sus submarinos atacaron barcos mercantes; el hundimiento del Lusitania conmocionó a la opinión pública. En el Imperio otomano, la deportación de los armenios marcó una de las mayores tragedias civiles de la guerra."],
1916:[
"Fue el año de las grandes batallas de desgaste. Verdún (febrero–diciembre) y el Somme (julio–noviembre) mostraron que ninguno de los bandos podía romper el frente a un costo aceptable: solo en el Somme hubo más de un millón de bajas sumando ambos lados.",
"En el mar, Jutlandia (31 de mayo–1 de junio) fue el mayor enfrentamiento naval de la guerra; la flota alemana se retiró y el bloqueo británico continuó. En el este, la ofensiva Brusilov debilitó a Austria-Hungría, y Rumania entró en la guerra en agosto, pero fue derrotada y ocupada en gran parte a fin de año.",
"Hubo cambios políticos y sociales: Lloyd George sustituyó a Asquith en el Reino Unido, Alemania pasó a un mando militar casi dictatorial de Hindenburg y Ludendorff y murió el emperador Francisco José. Las sociedades sufrían escasez de alimentos y trabajaban en economías de guerra, con muchas mujeres en las fábricas."],
1917:[
"Fue un año decisivo. Alemania reanudó la guerra submarina sin restricciones (febrero) y, tras el telegrama Zimmermann, Estados Unidos declaró la guerra (6 de abril). Cuba y Panamá la declararon también en abril y Brasil en octubre, mientras otros países americanos rompieron relaciones con Alemania. Argentina y México se mantuvieron neutrales.",
"En Rusia, la Revolución de Febrero derrocó al zar y la de Octubre llevó a los bolcheviques al poder, que pidieron un armisticio a las Potencias Centrales en diciembre. En el oeste, la ofensiva Nivelle fracasó, hubo motines franceses y los británicos libraron Passchendaele.",
"Otros hechos: Grecia entró con los Aliados (junio), China declaró la guerra a las Potencias Centrales (agosto), Caporetto sacudió el frente italiano y la Declaración Balfour y la toma de Jerusalén cambiaron el Oriente Próximo."],
1918:[
"Con Rusia fuera de la guerra (Brest-Litovsk, 3 de marzo), Alemania intentó ganar antes de que llegaran masivamente los estadounidenses. Su ofensiva de primavera, iniciada el 21 de marzo, avanzó pero se quedó sin fuerzas. El 8 de agosto los Aliados lanzaron la ofensiva de los Cien Días.",
"Las Potencias Centrales colapsaron una tras otra: Bulgaria (29 de septiembre), el Imperio otomano (30 de octubre), Austria-Hungría (3 de noviembre) y finalmente Alemania, que firmó el armisticio el 11 de noviembre a las 11 de la mañana.",
"La guerra dejó entre 9 y 10 millones de militares muertos y varios millones de civiles. La gripe de 1918 causó decenas de millones de muertes más. Cayeron cuatro imperios: el alemán, el austrohúngaro, el ruso y el otomano. En 1919, la Conferencia de París y el Tratado de Versalles redefinieron Europa y crearon la Sociedad de Naciones."]
};
/* ============ FIN DEL CONTENIDO ============ */
