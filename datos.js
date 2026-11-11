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
/* VIDEOS: pega el ID de YouTube (lo que va después de v= en el enlace).
   Por país/entidad y año (usa el id de la entidad, ej. "alemania", "francia", "peru"):  "alemania":{1914:["ID1","ID2"]}
   Para todos los países en un año:  VIDEOS_YEAR={1914:["ID"]} */
const VIDEOS={};
const VIDEOS_YEAR={};
/* INFO EXTRA (párrafos largos). Se asocia con la clave "x" de cada entidad (ver ENT más abajo).
   Ejemplo:  "Germany":{1914:["Primer párrafo...","Segundo párrafo..."]} */
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
"aob":{
 1914:[
  "Cuando comenzó la Primera Guerra Mundial en agosto de 1914, la África Oriental Británica se encontraba bajo administración colonial británica. Debido a que Gran Bretaña declaró la guerra a Alemania el 4 de agosto, el territorio quedó involucrado automáticamente en el conflicto.",
  "La cercanía con el África Oriental Alemana provocó que la región se convirtiera rápidamente en una zona de enfrentamientos. Los británicos debían proteger sus territorios y evitar que las fuerzas alemanas utilizaran sus posiciones para realizar ataques contra las colonias británicas.",
  "Uno de los primeros acontecimientos militares importantes ocurrió el 15 de agosto de 1914, cuando tropas alemanas procedentes de su colonia atacaron la zona fronteriza de Taveta, en territorio británico. Este avance demostró que la guerra no se limitaría a Europa y que también afectaría directamente a las poblaciones africanas.",
  "Durante los primeros meses, las fuerzas británicas tuvieron dificultades para organizar una defensa adecuada. El territorio no contaba con suficientes unidades militares ni con una estructura de transporte preparada para una guerra de grandes dimensiones. Por esa razón, comenzaron a organizarse tropas y servicios de apoyo para enfrentar las operaciones alemanas.",
  "La población africana empezó a ser reclutada para trabajar como porteadores. Su función consistía en transportar suministros militares a través de caminos, montañas y zonas donde los vehículos no podían circular. En ese momento todavía no existía una organización de transporte suficientemente desarrollada, por lo que las autoridades tuvieron que improvisar sistemas de reclutamiento.",
  "La situación económica también comenzó a cambiar. El comercio marítimo sufrió dificultades debido a la guerra y algunas actividades comerciales se vieron afectadas. Sin embargo, la demanda de alimentos y productos agrícolas para abastecer a las tropas comenzó a generar nuevas oportunidades para los agricultores y comerciantes europeos establecidos en el territorio.",
  "En el aspecto social, la guerra comenzó a aumentar las exigencias de trabajo sobre la población africana. Aunque inicialmente se recurrió al reclutamiento voluntario, pronto surgieron problemas relacionados con la falta de trabajadores y la resistencia de los habitantes a participar en una guerra que no habían elegido. (Savage & Munro, 1966; Gobierno británico, 2014)."
 ],
   1915:[
"Durante 1915, las autoridades británicas intensificaron sus esfuerzos para organizar el apoyo militar desde la África Oriental Británica. La guerra en la frontera con el África Oriental Alemana continuaba y las tropas necesitaban grandes cantidades de alimentos, municiones y otros materiales.",
"Uno de los acontecimientos más importantes fue la aprobación de la Native Followers Recruitment Ordinance de 1915. Esta disposición permitió establecer el reclutamiento obligatorio de hombres africanos para trabajar en el Cuerpo de Porteadores.",
"Los porteadores no eran necesariamente soldados de combate. Su trabajo consistía principalmente en transportar suministros para las tropas británicas. Sin embargo, desempeñaban una función fundamental porque gran parte de las operaciones militares se desarrollaban en regiones con caminos difíciles y escasa infraestructura.",
"El reclutamiento obligatorio provocó descontento entre la población africana. Muchos hombres intentaban evitar el servicio debido a las malas condiciones de trabajo, las enfermedades y el peligro de encontrarse cerca de los enfrentamientos. Además, cuando los hombres eran enviados lejos de sus comunidades, sus familias perdían trabajadores necesarios para cultivar alimentos y mantener sus hogares.",
"La situación también generó tensiones entre las autoridades coloniales y los colonos europeos. Estos últimos necesitaban trabajadores para sus explotaciones agrícolas y temían que el reclutamiento militar redujera la mano de obra disponible. Como consecuencia, las autoridades intentaron organizar el reclutamiento de manera que no perjudicara demasiado la producción de las propiedades agrícolas europeas.",
"En el ámbito económico, algunos sectores agrícolas comenzaron a beneficiarse de la demanda relacionada con la guerra. La producción de cereales y ganado encontró nuevos mercados, mientras que cultivos comerciales como el café y el sisal continuaron desarrollándose. Esto favoreció principalmente a los colonos europeos, mientras que gran parte de la población africana enfrentaba mayores exigencias laborales.",
"Por tanto, 1915 fue un año en el que la participación de la África Oriental Británica se hizo más intensa, especialmente mediante la movilización de trabajadores africanos para sostener las operaciones militares británicas. (Savage & Munro, 1966; Overton, 1986)."
],
1916: [
"Durante 1916, la campaña militar en África oriental se intensificó considerablemente. Las fuerzas británicas organizaron una ofensiva de mayor escala contra el África Oriental Alemana, con el objetivo de ocupar sus principales ciudades, ferrocarriles y centros de comunicación.",
"El general sudafricano Jan Christiaan Smuts asumió el mando de las principales fuerzas británicas en febrero de 1916. Bajo su dirección, las tropas aliadas avanzaron desde diferentes territorios hacia las posiciones alemanas.",
"La África Oriental Británica funcionó como una de las principales bases de abastecimiento para estas operaciones. Desde su territorio se organizaron movimientos de soldados, alimentos, armas y materiales necesarios para mantener el avance militar.",
"Uno de los mayores problemas fue el transporte. Las tropas tenían que desplazarse por regiones con temperaturas elevadas, lluvias, vegetación densa y caminos difíciles. Además, las enfermedades tropicales afectaban constantemente a los soldados y trabajadores.",
"Por este motivo, el Cuerpo de Porteadores adquirió todavía más importancia. Miles de africanos fueron utilizados para transportar suministros, muchas veces en condiciones físicas muy difíciles. La movilización de trabajadores también provocó problemas en las actividades agrícolas, ya que numerosas comunidades perdieron parte de su población masculina en edad de trabajar.",
"En septiembre de 1916, las fuerzas británicas habían ocupado gran parte del África Oriental Alemana, incluyendo importantes ciudades, puertos y líneas ferroviarias. Sin embargo, el comandante alemán Paul von Lettow-Vorbeck logró evitar una derrota definitiva y mantuvo sus fuerzas en movimiento.",
"La situación económica de la África Oriental Británica tuvo un comportamiento desigual. Los sectores agrícolas vinculados a los colonos europeos consiguieron aumentar algunas exportaciones gracias a la demanda militar. Sin embargo, las comunidades africanas soportaron dificultades por la reducción de trabajadores, las exigencias de abastecimiento y las alteraciones de la producción agrícola.",
"En consecuencia, 1916 representó un momento de mayor participación militar y económica para el territorio, pero también un aumento considerable de las exigencias sobre su población. (Anderson, 2001; Overton, 1986)."
],
1917: [
"Durante 1917, la guerra continuó afectando directamente a la África Oriental Británica. Las fuerzas británicas necesitaban mantener la presión militar sobre los alemanes, que todavía conservaban capacidad para desplazarse y realizar ataques sorpresa.",
"En enero de ese año, Jan Smuts dejó el mando de las fuerzas aliadas para asistir a la Conferencia Imperial de Guerra. Su sucesor fue el general británico Reginald Hoskins, quien permaneció en el cargo durante aproximadamente tres meses y realizó cambios en la organización militar.",
"En mayo de 1917, el general sudafricano Jacob van Deventer asumió el mando. Su estrategia consistió en intensificar los enfrentamientos contra las tropas alemanas y destruir sus fuentes de abastecimiento, especialmente los alimentos que necesitaban para continuar la campaña.",
"La participación de los habitantes de la África Oriental Británica fue especialmente intensa durante este año. Las autoridades coloniales organizaron una movilización masiva de trabajadores africanos, conocida como Grand Levy. Esta medida buscaba conseguir suficientes porteadores para transportar suministros y mantener las operaciones militares.",
"El reclutamiento provocó consecuencias graves para las comunidades africanas. Muchos hombres fueron alejados de sus hogares y de sus actividades agrícolas. Esto redujo la producción de alimentos y aumentó las dificultades para las familias que dependían de su trabajo.",
"Además, los porteadores sufrían enfermedades, agotamiento y problemas de alimentación. Aunque se intentaron mejorar algunos servicios médicos y de asistencia, las condiciones continuaron siendo muy difíciles. Muchos trabajadores regresaron enfermos o con problemas físicos después de participar en las operaciones militares.",
"En el ámbito económico, la agricultura comercial de los colonos europeos continuó beneficiándose de la demanda de productos agrícolas y ganaderos. Sin embargo, esta situación no significó una mejora general para toda la población, porque las comunidades africanas soportaban la mayor parte de las exigencias laborales.",
"Hacia finales de 1917, las fuerzas alemanas se desplazaron hacia el África Oriental Portuguesa, actual Mozambique, para evitar ser capturadas. Aunque la mayor parte de su territorio original había sido ocupada, todavía no habían sido derrotadas.",
"Por lo tanto, 1917 fue un año especialmente difícil para la población africana, debido al reclutamiento masivo, la pérdida de trabajadores agrícolas, las enfermedades y las consecuencias económicas de la campaña militar. (Savage & Munro, 1966; Anderson, 2001; National Army Museum, s. f.)."
],
1918: [
"Durante 1918, la campaña militar en África oriental continuó, aunque las principales operaciones ya se desarrollaban fuera de la África Oriental Británica y del antiguo territorio alemán.",
"Las tropas británicas y aliadas siguieron persiguiendo a las fuerzas alemanas dirigidas por Paul von Lettow-Vorbeck. Estas fuerzas habían atravesado el África Oriental Portuguesa y regresaron posteriormente hacia el territorio de Rodesia del Norte, actualmente Zambia.",
"La participación de la África Oriental Británica continuó siendo importante por el apoyo logístico y humano que había proporcionado durante toda la campaña. Los porteadores y trabajadores africanos habían sido fundamentales para transportar suministros en regiones donde los caminos y ferrocarriles eran insuficientes.",
"El 13 de noviembre de 1918 se produjo el último enfrentamiento militar de la campaña en suelo africano. Posteriormente, el 25 de noviembre, Lettow-Vorbeck se rindió junto con los aproximadamente 1.500 hombres que todavía permanecían bajo su mando en Rodesia del Norte.",
"La noticia del armisticio europeo, firmado el 11 de noviembre de 1918, marcó el final de las operaciones de la Primera Guerra Mundial. Sin embargo, las consecuencias de la campaña africana continuaron afectando a las poblaciones de la región.",
"Uno de los problemas más graves fue la crisis alimentaria. Después de varios años de movilización laboral y dificultades agrícolas, algunas comunidades quedaron debilitadas y con una producción de alimentos insuficiente. A esto se sumaron las sequías y la epidemia de gripe de 1918, que provocó numerosas muertes en África oriental.",
"En el ámbito social, muchos trabajadores regresaron a sus comunidades después de largos periodos de servicio. Sin embargo, algunos volvieron enfermos y otros nunca regresaron. Las familias tuvieron que afrontar las consecuencias de la pérdida de trabajadores y las dificultades para recuperar sus actividades agrícolas.",
"La guerra también fortaleció la intervención del Gobierno colonial británico en la vida económica y social del territorio. Las autoridades habían ampliado su capacidad para controlar la mano de obra africana, situación que continuó teniendo consecuencias después del conflicto.",
"Al terminar 1918, la África Oriental Británica permanecía bajo dominio británico. No obtuvo su independencia ni experimentó un cambio de soberanía como consecuencia directa de la guerra. Sin embargo, su población había contribuido de manera importante al esfuerzo militar británico y había sufrido graves consecuencias sociales y económicas. (Anderson, 2001; Gobierno británico, 2014; National Army Museum, s. f.)",
"3. Consecuencias de la Primera Guerra Mundial",
"La Primera Guerra Mundial produjo importantes transformaciones en la África Oriental Británica, especialmente en su población africana, su economía y su administración colonial.",
"Consecuencias humanas y sociales: uno de los efectos más graves fue la movilización de miles de hombres africanos para trabajar como porteadores y auxiliares militares. Muchos fueron reclutados obligatoriamente y tuvieron que abandonar sus hogares durante largos periodos. Las enfermedades, el agotamiento y las malas condiciones de trabajo provocaron numerosas muertes.",
"Es importante señalar que las cifras de fallecidos disponibles suelen corresponder a toda la campaña de África oriental, no exclusivamente al Protectorado de África Oriental Británica. El historiador G. W. T. Hodges estimó que más de 100.000 trabajadores auxiliares africanos murieron durante la campaña en su conjunto. Por ello, no sería correcto atribuir esa cifra únicamente a Kenia.",
"Consecuencias económicas: la guerra afectó de manera desigual a los distintos sectores de la economía. Mientras que algunos colonos europeos consiguieron aumentar la producción y las exportaciones de cereales, ganado, café y sisal, muchas comunidades africanas tuvieron problemas por la pérdida de trabajadores y las exigencias de abastecimiento militar.",
"Además, el crecimiento de determinadas actividades agrícolas comerciales favoreció el fortalecimiento económico de los colonos europeos y aumentó la dependencia de la mano de obra africana.",
"Consecuencias políticas: el Gobierno colonial británico aumentó su capacidad de intervenir en el trabajo y en las actividades de la población africana. El reclutamiento obligatorio demostró el poder que tenían las autoridades para movilizar a los habitantes del territorio en beneficio de los intereses imperiales.",
"Consecuencias territoriales: la África Oriental Británica no sufrió una modificación de soberanía como resultado de la guerra. Continuó bajo administración británica. Sin embargo, la derrota alemana permitió que Gran Bretaña ampliara su influencia en África oriental, especialmente después de la pérdida de las colonias alemanas.",
"Consecuencias sanitarias: el regreso de trabajadores y soldados, junto con las dificultades alimentarias y la epidemia de gripe de 1918, agravó la situación sanitaria de las comunidades. La enfermedad y la escasez de alimentos prolongaron los efectos negativos de la guerra incluso después del armisticio.",
"4. Conclusión",
"La África Oriental Británica desempeñó un papel importante durante la Primera Guerra Mundial, principalmente como territorio de apoyo militar y logístico del Imperio británico. Su cercanía con el África Oriental Alemana hizo que se convirtiera en una base fundamental para las operaciones militares aliadas.",
"Aunque no era un Estado independiente, aportó trabajadores, recursos agrícolas y apoyo para el transporte de suministros. Especialmente importante fue el Cuerpo de Porteadores, que permitió mantener las operaciones militares en regiones donde las condiciones geográficas dificultaban el abastecimiento de las tropas.",
"Sin embargo, la participación en la guerra tuvo consecuencias muy negativas para la población africana. El reclutamiento obligatorio, las enfermedades, la reducción de la producción agrícola y las dificultades económicas afectaron considerablemente a las comunidades locales.",
"Entre 1914 y 1918, el territorio fortaleció su importancia estratégica para Gran Bretaña, pero también aumentó el control colonial sobre sus habitantes. En conclusión, la Primera Guerra Mundial fue un acontecimiento que transformó la sociedad y la economía de la África Oriental Británica, aunque no modificó directamente su condición de territorio colonial.",
"5. Fuentes bibliográficas",
"Las siguientes referencias corresponden a investigaciones académicas y publicaciones institucionales utilizadas para elaborar esta investigación. Se presentan en formato APA 7.ª edición.",
"1. Anderson, R. (2001). World War I in East Africa 1916–1918 [Tesis doctoral, University of Glasgow]. Enlighten Theses. <a href='https://theses.gla.ac.uk/5195/' target='_blank' rel='noopener'>https://theses.gla.ac.uk/5195/</a>",
"2. Gobierno británico. (2014, 25 de julio). When two bulls clash: The grass suffers: World War 1 in East Africa. GOV.UK. <a href='https://www.gov.uk/government/news/when-two-bulls-clash-the-grass-suffers-world-war-1-in-east-africa' target='_blank' rel='noopener'>https://www.gov.uk/government/news/when-two-bulls-clash-the-grass-suffers-world-war-1-in-east-africa</a>",
"3. Hodges, G. W. T. (1978). African manpower statistics for the British forces in East Africa, 1914–1918. The Journal of African History, 19(1), 101–116. <a href='https://www.jstor.org/stable/180615' target='_blank' rel='noopener'>https://www.jstor.org/stable/180615</a>",
"4. National Army Museum. (s. f.). East Africa campaign. <a href='https://www.nam.ac.uk/explore/east-africa-campaign' target='_blank' rel='noopener'>https://www.nam.ac.uk/explore/east-africa-campaign</a>"
]},
"Tanzania":{
   1914: [
"Cuando comenzó la Primera Guerra Mundial en agosto de 1914, la África Oriental Alemana se encontraba bajo administración del Imperio alemán. Su gobernador era Heinrich Schnee, mientras que el teniente coronel Paul von Lettow-Vorbeck dirigía las fuerzas militares coloniales.",
"Al comenzar el conflicto, Schnee intentó mantener la neutralidad de la colonia para evitar que su territorio se convirtiera en un campo de batalla. Su intención era proteger la economía y la población, además de respetar las disposiciones internacionales que buscaban mantener las colonias fuera de los enfrentamientos.",
"Sin embargo, Lettow-Vorbeck consideraba que la colonia debía participar activamente en la guerra. Pensaba que podía utilizar sus fuerzas para atacar a los británicos y obligarlos a mantener tropas en África, reduciendo así los recursos militares disponibles para Europa.",
"La diferencia entre ambos provocó tensiones dentro de la administración colonial. Finalmente, la estrategia militar de Lettow-Vorbeck terminó predominando.",
"Uno de los primeros acontecimientos importantes ocurrió en septiembre de 1914, cuando las fuerzas alemanas atacaron posiciones británicas en territorio de África Oriental Británica. La campaña comenzó a extenderse por la región fronteriza y demostró que el conflicto también tendría importantes consecuencias en África.",
"El 2 de noviembre de 1914, las tropas británicas intentaron desembarcar en Tanga, uno de los principales puertos de la colonia alemana. El objetivo era ocupar la ciudad y utilizarla como punto estratégico para avanzar hacia el interior.",
"Sin embargo, los alemanes consiguieron organizar una defensa eficaz bajo el mando de Lettow-Vorbeck. En la batalla de Tanga, que se desarrolló entre el 2 y el 5 de noviembre, las fuerzas británicas fueron derrotadas y tuvieron que retirarse. Esta victoria fortaleció la posición alemana y permitió que la colonia conservara temporalmente sus principales instalaciones.",
"Otro enfrentamiento importante ocurrió en noviembre de 1914 en Longido, cerca del monte Kilimanjaro, donde las fuerzas alemanas también lograron frenar el avance británico.",
"En el aspecto económico, la guerra comenzó a perjudicar el comercio exterior. El bloqueo naval británico dificultó las comunicaciones marítimas con Alemania, lo que provocó problemas para importar maquinaria, medicamentos y otros productos industriales.",
"En el ámbito social, las autoridades comenzaron a movilizar recursos y trabajadores para sostener las operaciones militares. Los soldados africanos (askaris) y los porteadores se convirtieron en elementos fundamentales para mantener el funcionamiento del ejército colonial.",
"Así, 1914 marcó el comienzo de una guerra que transformó profundamente la vida política, económica y social de la África Oriental Alemana. (Moyse-Bartlett, 1956; Paice, 2007)."
],
   1915: [
"Durante 1915, la guerra en la África Oriental Alemana continuó mediante enfrentamientos entre las fuerzas alemanas y las tropas británicas. Aunque Alemania tenía dificultades para recibir refuerzos y suministros desde Europa, consiguió mantener una resistencia considerable.",
"Uno de los acontecimientos militares más importantes fue la batalla de Jassin, desarrollada entre el 18 y el 19 de enero de 1915. En este enfrentamiento, las fuerzas alemanas derrotaron a una unidad británica que había avanzado hacia el territorio colonial alemán. Sin embargo, la victoria también tuvo un costo elevado para los alemanes, especialmente por la pérdida de oficiales experimentados y municiones.",
"Después de este enfrentamiento, Lettow-Vorbeck comenzó a evitar los combates directos de grandes dimensiones cuando no tenía una ventaja suficiente. En lugar de arriesgar a todo su ejército, empezó a dar mayor importancia a los ataques contra pequeñas unidades enemigas, las emboscadas y los desplazamientos rápidos. Esta estrategia permitió conservar sus fuerzas durante más tiempo. (Scheipers, 2024).",
"Otro acontecimiento importante fue el bloqueo de las comunicaciones marítimas alemanas. Los británicos controlaban gran parte de las rutas marítimas de la región y dificultaban la llegada de suministros desde Europa. Esto provocó que la colonia tuviera que depender cada vez más de los recursos disponibles dentro de su propio territorio.",
"En el ámbito naval, el crucero alemán Königsberg representó una amenaza para los barcos británicos en el océano Índico. Sin embargo, después de quedar bloqueado en el delta del río Rufiji, fue atacado por fuerzas navales británicas. En julio de 1915, los británicos consiguieron destruirlo, aunque parte de su armamento fue recuperado por los alemanes y utilizado posteriormente en operaciones terrestres.",
"En el aspecto económico, la interrupción del comercio internacional agravó las dificultades de la colonia. La escasez de productos importados afectó a las actividades comerciales y a la disponibilidad de materiales necesarios para la administración y el ejército.",
"La población africana también comenzó a sufrir mayores exigencias. Las autoridades alemanas necesitaban trabajadores para transportar suministros, construir instalaciones y apoyar a las tropas. En algunos lugares se recurrió al reclutamiento obligatorio y a la confiscación de alimentos y animales.",
"La situación alimentaria ya era delicada debido a los problemas agrícolas que existían desde antes de la guerra. La población todavía se estaba recuperando de las consecuencias de la rebelión Maji Maji de 1905-1907, que había provocado destrucción de cultivos y hambre en diferentes regiones.",
"En consecuencia, 1915 fue un año en el que la colonia alemana logró conservar su resistencia militar, pero sus condiciones económicas y sociales comenzaron a deteriorarse considerablemente. (Paice, 2007; Wittmann, 2020)."
],
   1916: [
"Durante 1916, la situación militar de la África Oriental Alemana cambió considerablemente. Los británicos y sus aliados organizaron una ofensiva de mayor escala con el objetivo de ocupar los principales centros administrativos, ferroviarios y comerciales de la colonia.",
"En febrero de 1916, el general sudafricano Jan Smuts asumió el mando de las principales fuerzas británicas. Su estrategia consistía en avanzar desde diferentes direcciones para obligar a los alemanes a abandonar sus posiciones.",
"El 5 de marzo comenzó una importante ofensiva británica en la región del Kilimanjaro. Las tropas alemanas tuvieron que retirarse progresivamente debido a la superioridad numérica y material de sus adversarios.",
"Uno de los avances más importantes fue la ocupación de Moshi y de otras localidades conectadas con el ferrocarril del norte. Estas instalaciones eran fundamentales porque permitían transportar soldados y suministros hacia el interior del territorio.",
"Posteriormente, las fuerzas aliadas avanzaron hacia Dar es Salaam, la principal ciudad y puerto de la colonia. En septiembre de 1916, las tropas británicas ocuparon la ciudad, que constituía uno de los centros administrativos y comerciales más importantes del territorio.",
"También fue importante el avance de las fuerzas belgas desde el Congo Belga. Estas tropas participaron en operaciones militares en el oeste de la colonia y consiguieron ocupar Tabora en septiembre de 1916, una localidad estratégica por su conexión ferroviaria.",
"A pesar de estas derrotas, Lettow-Vorbeck consiguió evitar que su ejército fuera completamente destruido. En lugar de defender las principales ciudades, retiró sus fuerzas hacia el sur, donde podía continuar operando y aprovechar el conocimiento del terreno.",
"La ocupación de las principales ciudades y vías ferroviarias significó que Alemania perdió gran parte del control efectivo sobre su colonia. Sin embargo, esto no representó el final de la resistencia militar alemana.",
"En el ámbito social y económico, 1916 fue especialmente difícil. Los ejércitos necesitaban grandes cantidades de alimentos, animales y trabajadores. Las tropas alemanas recurrieron a la confiscación de productos agrícolas y ganado para mantener sus operaciones.",
"Esta situación perjudicó directamente a los agricultores africanos, quienes perdieron parte de sus reservas alimentarias. Además, la movilización de hombres para transportar suministros redujo la cantidad de trabajadores disponibles para cultivar las tierras.",
"La escasez de alimentos comenzó a extenderse por diferentes regiones. En el centro del territorio, especialmente en la región habitada por los Wagogo, las requisas militares y las dificultades agrícolas prepararon las condiciones para una grave hambruna que se desarrollaría entre 1917 y 1920.",
"Por lo tanto, 1916 fue el año en que la colonia perdió sus principales centros estratégicos, mientras que la guerra comenzó a afectar de manera más profunda la supervivencia de la población civil. (Anderson, 2001; Maddox, 1996; National Army Museum, s. f.)."
],
   1917: [
"Durante 1917, las fuerzas alemanas se encontraban en una situación militar cada vez más complicada. Aunque habían perdido la mayoría de sus ciudades y líneas ferroviarias, Lettow-Vorbeck todavía conservaba un ejército capaz de continuar combatiendo.",
"A comienzos de año, las fuerzas aliadas intensificaron sus operaciones para terminar con la resistencia alemana. Los británicos avanzaron desde el norte y el sur, mientras que las tropas belgas también participaron en las operaciones desde el oeste.",
"Debido a la presión militar, Lettow-Vorbeck decidió abandonar definitivamente gran parte del territorio de la colonia y trasladar sus tropas hacia el sur. Su intención era evitar ser rodeado y continuar la guerra mediante desplazamientos rápidos.",
"En marzo de 1917, los alemanes tuvieron que abandonar importantes posiciones en el interior del territorio. La pérdida de recursos y las dificultades para conseguir alimentos hicieron cada vez más complicada la permanencia de sus fuerzas.",
"Uno de los enfrentamientos más importantes ocurrió en octubre de 1917, durante la batalla de Mahiwa, en el sur de la colonia. En este enfrentamiento, las fuerzas alemanas consiguieron infligir importantes pérdidas a las tropas británicas y evitar su destrucción inmediata.",
"Sin embargo, la victoria alemana no modificó de manera significativa la situación general de la guerra. Los británicos continuaron avanzando y los alemanes tenían cada vez más dificultades para reemplazar sus bajas y conseguir suministros.",
"Otro problema importante fue la situación de la población civil. Durante este año, la guerra había provocado una grave crisis alimentaria. Las confiscaciones de cosechas, la pérdida de ganado y el reclutamiento de trabajadores habían reducido considerablemente la capacidad de las comunidades para producir alimentos.",
"Uno de los casos más graves fue la hambruna conocida como Mtunya, que afectó especialmente a la población Wagogo de la región central. Según el historiador Gregory Maddox, esta crisis se desarrolló entre 1917 y 1920 y provocó aproximadamente 30.000 muertes en una población regional de 150.000 habitantes.",
"La hambruna no fue consecuencia de un único acontecimiento, sino de la combinación de varios factores: las requisas militares alemanas y británicas, la pérdida de ganado, la falta de trabajadores agrícolas y las condiciones ambientales desfavorables.",
"Además, las enfermedades y la desnutrición debilitaron a la población. Las personas desplazadas y los trabajadores obligados a recorrer largas distancias quedaron expuestos a condiciones sanitarias muy peligrosas.",
"En el ámbito político, la administración colonial alemana perdió prácticamente toda su capacidad de controlar el territorio. Los funcionarios coloniales ya no podían mantener una administración normal porque gran parte de la región estaba ocupada por las fuerzas aliadas.",
"Por tanto, 1917 representó el comienzo del final de la resistencia alemana dentro de su antigua colonia. Al mismo tiempo, fue uno de los años más destructivos para la población africana debido a la combinación de guerra, hambre, enfermedades y desplazamientos. (Maddox, 1996; Wittmann, 2020; Scheipers, 2024)."
],
   1918: [
"Durante 1918, las fuerzas alemanas continuaron luchando fuera de gran parte de su antigua colonia. Lettow-Vorbeck había conseguido cruzar hacia el África Oriental Portuguesa, actual Mozambique, donde atacó diferentes posiciones y depósitos de suministros para conseguir alimentos y municiones.",
"La estrategia alemana consistía en evitar los enfrentamientos en los que sus tropas pudieran quedar rodeadas. Por ello, continuaron desplazándose por territorios portugueses y británicos, realizando ataques y retiradas para mantener la resistencia.",
"La situación era extremadamente difícil. Las fuerzas alemanas tenían problemas para conseguir alimentos y medicamentos. Además, las enfermedades y el agotamiento reducían continuamente el número de soldados disponibles.",
"Durante este periodo, la población africana de las regiones atravesadas por las tropas sufrió las consecuencias de las requisas de alimentos, el desplazamiento de personas y el reclutamiento de trabajadores.",
"En noviembre de 1918, Lettow-Vorbeck regresó con sus tropas hacia el territorio de Rodesia del Norte, actualmente Zambia. Allí recibió la noticia del armisticio firmado en Europa el 11 de noviembre de 1918.",
"Finalmente, el 25 de noviembre de 1918, Lettow-Vorbeck aceptó rendirse ante las fuerzas británicas en Abercorn, actual Mbala, en Zambia. Su ejército estaba reducido a aproximadamente 1.500 hombres, entre soldados europeos y africanos. (National Army Museum, s. f.; Deutsches Historisches Museum, 2017).",
"La rendición significó el final de la campaña militar alemana en África oriental. Sin embargo, la derrota alemana había comenzado mucho antes, cuando perdió el control de sus principales ciudades y centros administrativos.",
"En el aspecto político, Alemania dejó de tener posibilidades de recuperar su colonia. El territorio quedó bajo ocupación de las fuerzas aliadas y posteriormente pasó a formar parte del nuevo sistema de administración colonial establecido después de la guerra.",
"En el ámbito social, las consecuencias fueron devastadoras. La población africana había soportado cuatro años de enfrentamientos, reclutamiento obligatorio, confiscaciones, enfermedades y escasez de alimentos.",
"La hambruna iniciada durante los años anteriores continuó afectando a determinadas regiones después del armisticio. También persistieron los problemas económicos relacionados con la destrucción de cultivos, la pérdida de ganado y la interrupción del comercio.",
"En conclusión, 1918 marcó el final de la presencia militar alemana en África oriental y el comienzo de una nueva etapa de administración colonial bajo control británico y belga.",
"3. Consecuencias de la Primera Guerra Mundial",
"La Primera Guerra Mundial produjo consecuencias muy graves para la antigua África Oriental Alemana, especialmente para su población africana, su economía y su organización política.",
"Consecuencias humanas y sociales: la población sufrió el reclutamiento obligatorio de soldados y porteadores, las enfermedades, el agotamiento y la pérdida de alimentos y ganado. Miles de personas fueron desplazadas de sus comunidades y muchas murieron como consecuencia directa o indirecta de la guerra.",
"Las estimaciones sobre las muertes civiles varían según los territorios y las categorías utilizadas. El Deutsches Historisches Museum señala que hasta 500.000 personas pudieron morir por las consecuencias de la campaña en África oriental hasta finales de 1918. Esta cifra debe entenderse como una estimación regional amplia, no como un recuento exclusivo de la actual Tanzania.",
"Consecuencias económicas: la economía colonial quedó profundamente perjudicada. El comercio exterior se interrumpió, las actividades agrícolas disminuyeron en numerosas regiones y se destruyeron o deterioraron infraestructuras. Además, las confiscaciones de productos agrícolas y animales perjudicaron directamente a las comunidades rurales.",
"Consecuencias políticas: Alemania perdió el control de su colonia. Después de la guerra, el territorio fue reorganizado bajo el sistema de mandatos de la Sociedad de Naciones.",
"Consecuencias territoriales: el Tratado de Versalles de 1919 estableció la renuncia de Alemania a sus colonias. La antigua África Oriental Alemana fue dividida:",
"•	Tanganica: la mayor parte del territorio continental pasó a administración británica como mandato de la Sociedad de Naciones.",
"•	Ruanda y Burundi: quedaron bajo administración belga como el territorio de Ruanda-Urundi.",
"•	El triángulo de Kionga: una pequeña zona costera fue entregada a Portugal y pasó a formar parte de Mozambique.",
"Estas transformaciones territoriales modificaron profundamente la organización política de África oriental.",
"Consecuencias sanitarias: la desnutrición, las enfermedades y la falta de servicios médicos provocaron una crisis sanitaria que continuó después del conflicto. La hambruna Mtunya es uno de los ejemplos más importantes de las consecuencias prolongadas de la guerra.",
"En general, la Primera Guerra Mundial terminó con el dominio colonial alemán en África oriental y dejó una sociedad profundamente afectada por la violencia y las dificultades económicas. (Maddox, 1996; Wittmann, 2020; Deutsches Historisches Museum, 2017).",
"4. Conclusión",
"La Tanzania alemana tuvo un papel importante durante la Primera Guerra Mundial porque fue uno de los principales escenarios de enfrentamientos militares en África. Aunque no era un país independiente, su territorio fue utilizado por Alemania como base para organizar operaciones contra las fuerzas británicas, belgas y portuguesas.",
"La resistencia dirigida por Paul von Lettow-Vorbeck consiguió mantener ocupadas a numerosas tropas aliadas durante varios años. Sin embargo, esta estrategia tuvo consecuencias muy graves para la población africana, que sufrió el reclutamiento obligatorio, las confiscaciones de alimentos, las enfermedades y las hambrunas.",
"Entre 1914 y 1918, la colonia pasó de ser un territorio bajo administración alemana a convertirse en una región ocupada por los Aliados. La derrota alemana significó el fin de su presencia colonial y permitió que Gran Bretaña y Bélgica asumieran el control de diferentes partes del territorio.",
"En conclusión, la Primera Guerra Mundial transformó completamente la historia de la antigua África Oriental Alemana. Sus consecuencias no se limitaron a la derrota militar de Alemania, sino que también modificaron las fronteras, la administración política y las condiciones de vida de millones de africanos.",
"5. Fuentes bibliográficas",
"Las siguientes referencias corresponden a investigaciones académicas, documentos históricos y publicaciones de instituciones especializadas. Se presentan en formato APA 7.ª edición.",
"1. Anderson, R. (2001). World War I in East Africa 1916–1918 [Tesis doctoral, University of Glasgow]. Enlighten Theses. <a href='https://theses.gla.ac.uk/5195/' target='_blank' rel='noopener'>https://theses.gla.ac.uk/5195/</a>",
"2. Deutsches Historisches Museum. (2017, 11 de marzo). Der Krieg in Deutsch-Ostafrika 1914–1918. LeMO. <a href='https://www.dhm.de/lemo/kapitel/erster-weltkrieg/kriegsverlauf/krieg-in-deutsch-ostafrika-1914-1918' target='_blank' rel='noopener'>https://www.dhm.de/lemo/kapitel/erster-weltkrieg/kriegsverlauf/krieg-in-deutsch-ostafrika-1914-1918</a>",
"3. Maddox, G. H. (1990). Mtunya: Famine in Central Tanzania, 1917–20. The Journal of African History, 31(2), 181–197. <a href='https://doi.org/10.1017/S0021853700024993' target='_blank' rel='noopener'>https://doi.org/10.1017/S0021853700024993</a>",
"4. Moyse-Bartlett, H. (1956). The King's African Rifles: A study in the military history of East and Central Africa, 1890–1945. Gale & Polden."
]},
Camerun: {
   1914: [
"Cuando comenzó la Primera Guerra Mundial en agosto de 1914, Camerún se encontraba bajo administración alemana. El gobernador Karl Ebermaier era la principal autoridad civil, mientras que las fuerzas militares coloniales estaban dirigidas por Carl Heinrich Zimmermann.",
"Después de que Gran Bretaña y Francia entraran en guerra contra Alemania, sus colonias africanas comenzaron a organizar operaciones militares contra el territorio alemán.",
"La posición geográfica de Camerún permitió que los Aliados atacaran desde diferentes direcciones. Las tropas británicas avanzaron principalmente desde Nigeria, mientras que las fuerzas francesas se movilizaron desde sus colonias de África ecuatorial y África occidental.",
"Uno de los primeros objetivos de los Aliados fue ocupar los puertos y centros comerciales alemanes. Estas posiciones eran importantes porque permitían controlar las comunicaciones marítimas y dificultar la llegada de suministros desde Europa.",
"El puerto de Duala, uno de los principales centros económicos de la colonia, fue atacado por fuerzas británicas y francesas. Después de enfrentamientos iniciales, los alemanes abandonaron la ciudad y los Aliados ocuparon Duala el 27 de septiembre de 1914.",
"La pérdida de este puerto representó un golpe importante para la administración alemana, porque dificultó el comercio exterior y eliminó uno de sus principales puntos de comunicación con el océano Atlántico.",
"Otro acontecimiento importante ocurrió en el norte del territorio, donde las fuerzas británicas y francesas comenzaron a avanzar hacia las posiciones alemanas. Los enfrentamientos se extendieron por diferentes regiones y obligaron a las tropas coloniales a abandonar algunas posiciones fronterizas.",
"En el aspecto militar, los alemanes intentaron organizar una defensa utilizando sus conocimientos del territorio y aprovechando las dificultades geográficas de la región. Sin embargo, la falta de refuerzos y suministros desde Europa redujo sus posibilidades de mantener una resistencia prolongada.",
"En el ámbito económico, la guerra interrumpió buena parte del comercio internacional. La ocupación de Duala dificultó las exportaciones agrícolas y la llegada de productos importados. Las plantaciones y empresas comerciales comenzaron a enfrentar problemas debido a la inseguridad y a la pérdida de sus principales rutas de transporte.",
"La población africana también comenzó a sufrir las consecuencias del conflicto. Algunas comunidades fueron desplazadas por los enfrentamientos, mientras que otras tuvieron que proporcionar alimentos y trabajadores a las fuerzas militares.",
"Por lo tanto, 1914 marcó el comienzo de la pérdida progresiva del control alemán sobre Camerún y el inicio de una guerra que afectaría directamente a sus habitantes. (Rudin, 1938; Le Gall, 2019)."
],
   1915: [
"Durante 1915, la campaña militar en Camerún se intensificó. Las fuerzas británicas y francesas continuaron avanzando desde sus colonias vecinas, mientras que los alemanes intentaban defender sus posiciones en el interior del territorio.",
"Los Aliados tenían una ventaja importante en número de soldados y recursos. Sin embargo, el avance no fue sencillo debido a las condiciones geográficas, la vegetación tropical, las dificultades de transporte y las enfermedades. Las tropas alemanas aprovecharon estos obstáculos para organizar emboscadas y retrasar el avance enemigo.",
"Uno de los acontecimientos más importantes ocurrió entre mayo y junio de 1915, cuando las fuerzas aliadas iniciaron una ofensiva hacia la meseta central. Durante estas operaciones consiguieron ocupar varias posiciones estratégicas.",
"El 10 de junio de 1915, los británicos consiguieron ocupar Garua, una localidad importante del norte de Camerún. Posteriormente, el 28 de junio, las fuerzas aliadas ocuparon Ngaoundéré, ampliando su control sobre las comunicaciones y las rutas interiores.",
"En octubre de 1915, las fuerzas aliadas también consiguieron ocupar Bamenda, mientras que en noviembre avanzaron hacia Banyo. Estas victorias redujeron considerablemente las posibilidades alemanas de mantener el control sobre el norte y el centro del territorio.",
"Otro acontecimiento importante fue el comienzo del bloqueo de Mora, una posición fortificada situada en el extremo norte de Camerún. Desde septiembre de 1915, las fuerzas británicas mantuvieron un asedio contra las tropas alemanas que defendían esta posición. Sin embargo, los defensores consiguieron resistir durante varios meses.",
"Mientras tanto, las fuerzas francesas continuaron avanzando desde el sur y el este. Su objetivo era alcanzar Yaoundé, que se había convertido en uno de los principales centros de resistencia alemana después de la pérdida de Duala.",
"La situación económica también empeoró. La interrupción del comercio internacional afectó a las empresas comerciales y a las plantaciones agrícolas. La ocupación de diferentes localidades provocó la pérdida de instalaciones y dificultó el transporte de productos.",
"La guerra también alteró las condiciones laborales. Antes del conflicto, miles de africanos trabajaban en las plantaciones alemanas. Durante la guerra, las actividades agrícolas y comerciales sufrieron interrupciones, mientras que los ejércitos necesitaban trabajadores para transportar alimentos, municiones y otros suministros.",
"Los enfrentamientos provocaron desplazamientos de población y daños en propiedades comerciales. Además, algunos trabajadores africanos quedaron atrapados entre las exigencias de las autoridades coloniales y las necesidades de los ejércitos invasores.",
"En diciembre de 1915, las fuerzas aliadas ocuparon Fumban, otra localidad importante del interior. Para entonces, la posición alemana era cada vez más débil y sus fuerzas tenían dificultades para mantener la comunicación entre sus diferentes unidades.",
"En consecuencia, 1915 fue un año de importantes avances aliados que prepararon la derrota definitiva de Alemania en Camerún. (National Army Museum, s. f.; Battles Nomenclature Committee, s. f.; Achenui, 2021)."
],
   1916: [
"Durante 1916, la campaña militar llegó a su etapa final. Las fuerzas británicas y francesas habían conseguido ocupar gran parte del territorio y estaban cada vez más cerca de destruir los últimos centros de resistencia alemana.",
"El 1 de enero de 1916, las tropas francesas consiguieron ocupar Yaoundé, que había funcionado como uno de los principales centros administrativos y militares alemanes. Esta pérdida fue especialmente importante porque obligó a los alemanes a abandonar otra de sus posiciones estratégicas.",
"Ante el avance de los Aliados, las fuerzas alemanas dirigidas por Zimmermann comenzaron a retirarse hacia el sur. Su objetivo era alcanzar la Guinea Española, actual Guinea Ecuatorial, que era un territorio neutral y donde podían evitar ser capturados por los ejércitos enemigos.",
"La retirada fue complicada debido a la falta de alimentos, medicamentos y medios de transporte. Las tropas también tuvieron que atravesar regiones con condiciones geográficas difíciles.",
"Una parte considerable de las fuerzas alemanas consiguió cruzar el río Campo y entrar en territorio español. Allí, los soldados fueron internados por las autoridades españolas, de acuerdo con las normas de neutralidad internacional. Entre los refugiados se encontraban militares europeos, soldados africanos, trabajadores y civiles que acompañaban a las tropas.",
"Mientras tanto, en el norte del territorio continuaba el asedio de Mora. Esta posición había resistido durante varios meses y constituía uno de los últimos puntos importantes de resistencia alemana.",
"Finalmente, el 18 de febrero de 1916, la guarnición alemana de Mora se rindió ante las fuerzas aliadas. Este acontecimiento marcó el final de la campaña militar en Camerún y la desaparición del dominio alemán sobre el territorio.",
"La derrota alemana permitió que Gran Bretaña y Francia comenzaran a organizar la administración de las regiones ocupadas. Sin embargo, ambos países tenían intereses territoriales diferentes, por lo que surgieron desacuerdos sobre cómo debían repartirse la antigua colonia.",
"El 18 de abril de 1916 entró en vigor una división provisional del territorio entre las dos potencias. Francia administró la mayor parte de Camerún, mientras que Gran Bretaña obtuvo una franja occidental situada junto a Nigeria.",
"Esta distribución no fue una decisión tomada por la población camerunesa. Las autoridades británicas y francesas negociaron el futuro del territorio sin conceder a sus habitantes una participación política significativa.",
"En el aspecto económico, la ocupación modificó las actividades comerciales. Las empresas alemanas perdieron sus propiedades y fueron sustituidas progresivamente por intereses comerciales británicos y franceses. Algunas redes comerciales anteriores continuaron funcionando, pero bajo nuevas autoridades coloniales.",
"La población africana también tuvo que adaptarse a una nueva administración. Los cambios de autoridad afectaron al comercio, los impuestos, las actividades agrícolas y las relaciones laborales.",
"Por lo tanto, 1916 fue el año decisivo para Camerún: terminó la resistencia militar alemana y comenzó una nueva etapa de control colonial británico y francés. (National Army Museum, s. f.; Elango, 2015; Naciones Unidas, 1946)."
],
   1917: [
"Durante 1917, Camerún ya no se encontraba bajo control alemán. La campaña militar había terminado en febrero de 1916 y el territorio estaba administrado por las fuerzas británicas y francesas.",
"La situación política estuvo marcada por la consolidación de la ocupación aliada. Francia controlaba la mayor parte del antiguo territorio alemán, mientras que Gran Bretaña administraba una región occidental que se encontraba junto a su colonia de Nigeria.",
"Aunque ambos países habían sido aliados durante la guerra, existían diferencias sobre la distribución territorial de Camerún. Francia tenía interés en obtener la mayor parte posible del territorio, mientras que Gran Bretaña buscaba asegurar una frontera favorable para sus intereses coloniales en África occidental.",
"Estas diferencias provocaron negociaciones sobre la división administrativa y territorial. La idea inicial de establecer una administración conjunta entre ambos países no llegó a consolidarse. En su lugar, se mantuvo la división provisional establecida en 1916.",
"En el aspecto económico, las nuevas autoridades comenzaron a reorganizar las actividades comerciales y agrícolas. Las empresas alemanas habían perdido el control de sus propiedades y muchas de ellas fueron intervenidas por los vencedores.",
"La interrupción de las antiguas redes comerciales continuó afectando a los comerciantes europeos y africanos. Las actividades agrícolas también tuvieron dificultades para recuperarse debido a los daños provocados por los enfrentamientos y a los cambios en las autoridades administrativas.",
"Un estudio de Nwenfor Divine Achenui sobre la economía camerunesa durante la guerra señala que las condiciones del conflicto provocaron cambios en los impuestos, la producción agrícola y las regulaciones comerciales. Estas transformaciones estuvieron relacionadas con las necesidades militares y económicas de las potencias ocupantes.",
"En el ámbito social, la población tuvo que adaptarse a un nuevo sistema colonial. Los cambios de administración no significaron el fin de las desigualdades laborales ni de las prácticas de explotación que habían existido durante el dominio alemán.",
"También continuaron las consecuencias del desplazamiento de personas y de la interrupción de las actividades económicas. Las comunidades que habían sufrido los enfrentamientos necesitaban recuperar sus viviendas, cultivos y medios de subsistencia.",
"Por lo tanto, 1917 fue principalmente un año de reorganización política y económica. Aunque ya no existían enfrentamientos militares importantes en Camerún, las consecuencias de la guerra continuaban afectando a su población. (Elango, 2015; Achenui, 2021; Neill, 2026)."
],
   1918: [
"Durante 1918, Camerún permaneció bajo administración británica y francesa. No se produjeron nuevas campañas militares importantes dentro del antiguo territorio alemán, porque la resistencia alemana había terminado en febrero de 1916.",
"La situación política continuó marcada por la división provisional entre las dos potencias europeas. Francia mantenía el control de la mayor parte del territorio, mientras que Gran Bretaña administraba la región occidental.",
"En el ámbito internacional, la derrota de Alemania se hizo cada vez más evidente. Durante los últimos meses de 1918, el Imperio alemán sufrió una profunda crisis política y militar que terminó con la firma del armisticio del 11 de noviembre.",
"Para Camerún, el final de la guerra significó que ya no existía la posibilidad de una recuperación militar alemana del territorio. Sin embargo, todavía no se había establecido definitivamente su nuevo estatus jurídico internacional.",
"En el ámbito económico, la población continuaba enfrentando las dificultades ocasionadas por cuatro años de guerra. El comercio había sufrido interrupciones, las empresas alemanas habían perdido sus propiedades y numerosas actividades productivas necesitaban reorganizarse.",
"Las autoridades británicas y francesas comenzaron a fortalecer sus respectivas administraciones coloniales. También continuaron las negociaciones sobre las fronteras que separarían sus zonas de influencia.",
"Un aspecto importante fue que la población camerunesa no tuvo una participación significativa en las decisiones sobre el futuro político del territorio. La división respondió principalmente a los intereses coloniales de Gran Bretaña y Francia.",
"Al finalizar 1918, Camerún se encontraba completamente fuera del control alemán y dividido entre las dos potencias vencedoras. Sin embargo, la situación jurídica definitiva se establecería posteriormente mediante los acuerdos internacionales relacionados con el Tratado de Versalles de 1919.",
"En conclusión, 1918 fue un año de transición para Camerún. La guerra había terminado, pero sus consecuencias políticas, económicas y sociales continuaban presentes. (Elango, 2015; Yearwood, 1993; Gobierno de Estados Unidos, 1919).",
"3. Consecuencias de la Primera Guerra Mundial",
"La Primera Guerra Mundial transformó profundamente la situación política, económica y social del Camerún alemán. Su principal consecuencia fue el fin del dominio colonial alemán y la división del territorio entre Gran Bretaña y Francia.",
"Consecuencias humanas y sociales: la guerra provocó muertes, desplazamientos y dificultades para las comunidades africanas. Los habitantes sufrieron las consecuencias de los enfrentamientos, las enfermedades, la interrupción de las actividades agrícolas y las exigencias laborales de los ejércitos.",
"Miles de africanos participaron como soldados, porteadores y trabajadores auxiliares. También hubo civiles que tuvieron que abandonar sus comunidades debido a las operaciones militares.",
"Consecuencias económicas: el comercio internacional sufrió una fuerte interrupción. La ocupación de Duala y de otros centros importantes afectó a las empresas comerciales y a las exportaciones agrícolas.",
"Las plantaciones de cacao, caucho y otros productos comerciales también sufrieron dificultades. Muchas propiedades alemanas fueron confiscadas o pasaron a manos de las nuevas autoridades coloniales.",
"Además, las restricciones comerciales, los cambios en los impuestos y la reorganización de la producción agrícola modificaron la economía del territorio.",
"Consecuencias políticas: Alemania perdió definitivamente el control de Camerún. El territorio pasó a ser administrado por Gran Bretaña y Francia, que establecieron sistemas de gobierno separados.",
"Consecuencias territoriales: el antiguo Camerún alemán fue dividido entre dos potencias europeas. Posteriormente, el Tratado de Versalles, firmado el 28 de junio de 1919, estableció que Alemania renunciaba a sus derechos sobre sus colonias.",
"La mayor parte de Camerún quedó bajo administración francesa, mientras que una región occidental pasó a administración británica.",
"En 1922, la Sociedad de Naciones formalizó esta situación mediante el sistema de mandatos:",
"•	Camerún francés: recibió la mayor parte del antiguo territorio alemán.",
"•	Camerún británico: recibió una franja occidental que fue administrada junto a Nigeria y posteriormente dividida en Camerún del Norte y Camerún del Sur.",
"Estas divisiones coloniales tuvieron consecuencias importantes para la historia posterior del país, especialmente porque establecieron diferentes sistemas administrativos, jurídicos y educativos en las dos regiones.",
"4. Conclusión",
"El Camerún alemán fue uno de los territorios africanos que sufrió directamente las consecuencias de la Primera Guerra Mundial. Aunque no era un Estado independiente, su ubicación geográfica lo convirtió en un objetivo estratégico para Gran Bretaña y Francia.",
"Entre 1914 y 1916, las fuerzas aliadas realizaron una campaña militar que terminó con la derrota alemana y la ocupación de todo el territorio. Posteriormente, durante 1917 y 1918, Gran Bretaña y Francia consolidaron su administración y negociaron la división de la antigua colonia.",
"La guerra también provocó importantes dificultades económicas y sociales. La población africana sufrió desplazamientos, pérdidas materiales, interrupciones comerciales y cambios en las actividades agrícolas.",
"En conclusión, la Primera Guerra Mundial significó el final del dominio alemán en Camerún y el comienzo de una nueva etapa colonial bajo control británico y francés. La división territorial establecida después de la guerra tuvo consecuencias duraderas en la organización política y social del Camerún actual.",
"5. Fuentes bibliográficas",
"Las siguientes fuentes permiten respaldar los principales acontecimientos militares, económicos y políticos de la investigación.",
"1. Achenui, N. D. (2021). Distortions on Cameroon's war-time economy, 1914–1916. American Journal of International Relations, 6(1), 46–76. <a href='https://doi.org/10.47672/ajir.785' target='_blank' rel='noopener'>https://doi.org/10.47672/ajir.785</a>",
"2. Elango, L. Z. (1985). The Anglo-French 'condominium' in Cameroon, 1914–1916: The myth and the reality. The International Journal of African Historical Studies, 18(4), 657–673. <a href='https://www.jstor.org/stable/218801' target='_blank' rel='noopener'>https://www.jstor.org/stable/218801</a>",
"3. Elango, L. Z. (2015). Anglo-French negotiations concerning Cameroon during World War I, 1914–1916: Occupation, «condominium» and partition. Journal of Global Initiatives: Policy, Pedagogy, Perspective, 9(2). <a href='https://digitalcommons.kennesaw.edu/jgi/vol9/iss2/10/' target='_blank' rel='noopener'>https://digitalcommons.kennesaw.edu/jgi/vol9/iss2/10/</a>",
"4. Gobierno de Estados Unidos, Office of the Historian. (1919). The disposition of German colonies. Foreign Relations of the United States, Paris Peace Conference. <a href='https://history.state.gov/historicaldocuments/frus1919Parisv13/ch10subch1' target='_blank' rel='noopener'>https://history.state.gov/historicaldocuments/frus1919Parisv13/ch10subch1</a>",
"5. Neill, D. (2026). Working through a war: The traders of John Holt & Co. in Cameroon during the First World War. The Journal of Imperial and Commonwealth History, 54(1), 150–177. <a href='https://doi.org/10.1080/03086534.2025.2593548' target='_blank' rel='noopener'>https://doi.org/10.1080/03086534.2025.2593548</a>"
]},
Etiopía: {
   1914: [
"Cuando comenzó la Primera Guerra Mundial en agosto de 1914, el gobierno etíope intentó mantener una posición neutral. Su objetivo era evitar involucrarse directamente en un conflicto que podía poner en peligro su independencia y provocar enfrentamientos con los países vecinos.",
"En ese momento, Lij Iyasu tenía el control político del país, aunque debía enfrentar la oposición de importantes sectores de la nobleza. La muerte de Menelik II, en 1913, había dejado una situación política complicada, debido a las disputas por el poder y a las diferencias entre los grupos que rodeaban al gobernante.",
"La guerra también despertó el interés de algunos dirigentes etíopes en aprovechar la situación internacional para recuperar territorios que estaban bajo dominio italiano. Una posibilidad que se llegó a considerar era atacar Eritrea si Italia entraba en guerra contra Etiopía. Sin embargo, esta idea no se convirtió en una intervención militar.",
"Desde agosto de 1914, los representantes británicos y franceses presionaron al gobierno etíope para que limitara las comunicaciones de los ciudadanos de las Potencias Centrales que vivían en el país. Entre las medidas que querían imponer estaban las restricciones al uso del correo, el telégrafo y el ferrocarril que conectaba Addis Abeba con Yibuti.",
"A pesar de estas presiones, Etiopía intentó mantener relaciones diplomáticas con ambos grupos de países y evitar una ruptura con Alemania y sus aliados. "
],
   1915: [
"Durante 1915, la situación internacional comenzó a influir todavía más en la política etíope. En abril de ese año, Italia entró en la guerra del lado de los Aliados, lo que aumentó las tensiones alrededor de Etiopía.",
"Alemania y el Imperio otomano intentaron acercarse al gobierno de Lij Iyasu. Su interés era conseguir apoyo etíope para debilitar las posiciones británicas en el noreste de África, especialmente en Sudán y Somalia.",
"Las Potencias Centrales consideraban que Etiopía podía ayudarlas mediante el suministro de armas y el apoyo a movimientos contrarios al dominio colonial europeo. También ofrecieron la posibilidad de que Etiopía consiguiera una salida al mar si colaboraba militarmente y las Potencias Centrales ganaban la guerra.",
"Estas propuestas resultaban atractivas para algunos sectores etíopes porque existía interés en recuperar territorios controlados por Italia. Sin embargo, el gobierno no declaró la guerra ni se incorporó oficialmente a las Potencias Centrales.",
"Al mismo tiempo, los representantes británicos y franceses observaban con preocupación las relaciones entre Lij Iyasu y los representantes otomanos. Temían que Etiopía terminara apoyando a Alemania y Turquía, lo que podía afectar sus intereses coloniales en África. "
],
 1916: [
"El año 1916 fue el más importante para Etiopía durante la Primera Guerra Mundial, debido a los conflictos políticos relacionados con la posición internacional del país.",
"Lij Iyasu mantuvo contactos con representantes otomanos y con dirigentes musulmanes de la región. En junio de 1916, el cónsul otomano Ahmed Mazhar Bey distribuyó propaganda en Addis Abeba para promover la cooperación entre los musulmanes y el gobierno etíope.",
"Estas relaciones preocuparon a los británicos y franceses. También aumentaron las tensiones con sectores de la nobleza etíope y de la Iglesia ortodoxa, que se oponían a las decisiones del gobernante.",
"Uno de los argumentos utilizados contra Lij Iyasu fue la acusación de que se había convertido al islam. Sin embargo, los estudios históricos señalan que no existen pruebas suficientes para confirmar que hubiera abandonado formalmente el cristianismo. La acusación también fue utilizada como instrumento político para justificar su destitución.",
"El 26 de septiembre de 1916 se produjo el golpe de Estado organizado por sectores de la nobleza, con el apoyo de los intereses aliados. Lij Iyasu fue apartado del poder y posteriormente quedó bajo custodia.",
"Después de su derrocamiento, fue proclamada emperatriz Zewditu, hija de Menelik II. Tafari Makonnen, primo de Lij Iyasu, fue nombrado heredero al trono y regente.",
"Este cambio político fue importante porque permitió que los sectores favorables a mantener buenas relaciones con los Aliados aumentaran su influencia. Sin embargo, Etiopía continuó siendo neutral y no entró oficialmente en la guerra. "
],
   1917: [
"El 11 de febrero de 1917, Zewditu fue coronada oficialmente emperatriz de Etiopía. Tafari Makonnen asumió el cargo de regente y heredero al trono. A partir de ese momento comenzó un periodo de gobierno compartido, caracterizado por las diferencias políticas entre ambos sectores.",
"Zewditu representaba una posición más conservadora y tradicional, mientras que Tafari defendía una mayor apertura hacia las relaciones internacionales y ciertas reformas para modernizar el país.",
"En relación con la guerra, Etiopía mantuvo su neutralidad. El gobierno incluso prohibió el reclutamiento de ciudadanos etíopes para incorporarse a los ejércitos aliados durante 1917.",
"En junio de ese año, el gobierno de Tafari ofreció a los representantes aliados romper todas las relaciones con las Potencias Centrales a cambio de recibir 16.000 fusiles modernos. La propuesta buscaba mejorar las relaciones con los Aliados y obtener armamento para fortalecer al Estado etíope.",
"Sin embargo, la propuesta fue rechazada. Italia y otros países aliados consideraban que era más conveniente mantener a Etiopía como un país neutral y amistoso que incorporarla a la guerra y tener que atender sus posibles reclamaciones territoriales después del conflicto.",
"También se produjo un incidente diplomático en mayo de 1917, cuando un pequeño grupo alemán intentó atravesar el mar Rojo para llevar mensajes al ejército otomano. Los integrantes del grupo fueron detenidos en Yibuti, y Francia acusó al gobierno etíope de no respetar completamente su neutralidad. "
],
   1918: [
"Durante 1918, Etiopía continuó manteniendo su neutralidad y no participó directamente en los combates de la Primera Guerra Mundial.",
"En el interior del país continuaron las diferencias políticas entre la emperatriz Zewditu y el regente Tafari Makonnen. Ambos representaban sectores distintos de la nobleza y tenían diferentes ideas sobre el futuro político del Estado.",
"En el ámbito internacional, el gobierno etíope observó el desarrollo de los últimos acontecimientos militares. Cuando los Aliados consiguieron la victoria a finales de 1918, Etiopía envió felicitaciones por el resultado de la guerra.",
"A pesar de ello, el gobierno no rompió inmediatamente sus relaciones con Alemania. La representación diplomática alemana permaneció abierta en Addis Abeba, lo que demuestra que Etiopía intentaba conservar cierta independencia en sus relaciones exteriores.",
"El final de la guerra abrió una nueva etapa diplomática para el país. Etiopía buscó que las potencias europeas reconocieran plenamente su soberanía y su posición como Estado independiente. Sin embargo, este reconocimiento todavía encontró obstáculos en los años posteriores. ",
"Encyclopedia 1914-1918 Online+1",
"3. Consecuencias de la Primera Guerra Mundial",
"La Primera Guerra Mundial tuvo consecuencias importantes para Etiopía, especialmente en su política interna y sus relaciones internacionales.",
"Mantenimiento de la independencia: a diferencia de muchos territorios africanos, Etiopía no fue convertida en colonia durante la guerra y conservó su soberanía.",
"Cambio de gobierno: el derrocamiento de Lij Iyasu en 1916 permitió que Zewditu asumiera el trono y que Tafari Makonnen aumentara su influencia política.",
"Influencia de las potencias extranjeras: Gran Bretaña, Francia e Italia intervinieron diplomáticamente en los asuntos internos de Etiopía porque buscaban impedir que el país apoyara a Alemania y al Imperio otomano.",
"Continuidad de la neutralidad: Etiopía no participó oficialmente como combatiente, aunque recibió presiones y propuestas de ambos grupos enfrentados.",
"Dificultades diplomáticas: después de la guerra, el país tuvo que seguir defendiendo su independencia y buscando reconocimiento internacional. Finalmente, fue admitido en la Sociedad de Naciones en 1923.",
"Cambios políticos internos: el gobierno compartido entre Zewditu y Tafari abrió una etapa de disputas entre los sectores conservadores y los partidarios de la modernización del Estado.",
"En general, la guerra no provocó la pérdida de independencia de Etiopía, pero sí influyó en sus decisiones políticas y aumentó la presión de las potencias europeas sobre su gobierno. ",
"Encyclopedia 1914-1918 Online+2",
"4. Conclusión",
"La participación de Etiopía en la Primera Guerra Mundial fue diferente a la de otros territorios africanos, porque el país era independiente y no estaba bajo dominio colonial europeo.",
"Aunque recibió presiones de Alemania, el Imperio otomano y los países aliados, el gobierno etíope intentó mantener una posición neutral. Sin embargo, la guerra influyó directamente en sus conflictos internos y contribuyó al derrocamiento de Lij Iyasu en 1916.",
"La llegada de Zewditu al trono y el nombramiento de Tafari Makonnen como regente marcaron una nueva etapa política. Finalmente, Etiopía consiguió mantenerse fuera del conflicto militar y conservar su independencia. Por eso, su experiencia durante la Primera Guerra Mundial demuestra que la guerra también afectó a los países africanos que no participaron directamente en los combates.",
"5. Fuentes bibliográficas (formato APA 7.ª edición)",
"1. Kaplan, S. (2015). The exaltation of Holy Cross and the deposition of the Emperor of Ethiopia: Lïj Iyasu and a Mäsqäl Drama. State, Religion and Church in Russia and Worldwide, 33(2), 182–197. https://cris.huji.ac.il/en/publications/the-exaltation-of-holy-cross-and-the-deposition-of-the-emperor-of-2/",
"2. Omer, A. H. (2013). The coup d'état of September 26, 1916: Different perspectives. Journal of Ethiopian Studies, 46, 99–120. https://www.jstor.org/stable/44326316",
"3. Pankhurst, R. (s. f.). Empress Zawditu, and the Tafari Makonnen Regency. Together We Learn Ethiopia. https://twlethiopia.org/article/5-empress-zawditu-and-the-tafari-makonnen-regency/",
"4. Zollmann, J. (2019). Ethiopia, international law and the First World War: Considerations of neutrality and foreign policy by the European powers, 1840–1919. En S. Bekele, U. C. Dirar, A. Volterra et al. (Eds.), The First World War from Tripoli to Addis Ababa (1911–1924) (pp. 115–152). Centre français des études éthiopiennes.",
"5. Zollmann, J. (2020). Ethiopia. En U. Daniel, P. Gatrell, O. Janz, H. Jones, J. Keene, A. Kramer y B. Nasson (Eds.), 1914–1918-online: International Encyclopedia of the First World War. Freie Universität Berlin. https://doi.org/10.15463/ie1418.11479",
"6. Záhořík, J. (2013). Iyasu V of Ethiopia (1913–1916): Perilous traitor or a true modernizer? Akta Fakulty filozofické Západočeské univerzity v Plzni, (2), 124–136. http://hdl.handle.net/11025/11847"
]},
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

/* ============ ENTIDADES DEL MAPA (1914) ============
   Cada entidad es lo que se colorea y se abre al hacer clic.
   id: { n: nombre mostrado, cont: continente, l: influencia (3/2/1),
         c: países actuales (nombres en inglés del mapa) que la forman,
         t: texto por año [1914..1918], x: clave de EXTRA (texto largo), note: aclaración } */
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
aob:{n:"África oriental británica",cont:"África",l:1,c:["Kenya","Uganda"],x:"aob",t:[
  "Inicio de la Primera Guerra Mundial",
  "Organización militar y reclutamiento obligatorio",
  "Intensificación de las operaciones militares",
  "Un año decisivo para la campaña en África oriental",
  "Final de la guerra"]},
tanzania:{n:"Tanzania alemana",cont:"África",l:2,c:["Tanzania","Rwanda","Burundi"],x:"Tanzania",t:[
  "Inicio de la Primera Guerra Mundial",
   "Continuación de los enfrentamientos y resistencia alemana",
   "Ofensiva aliada y pérdida de los principales territorios",
   "Retirada alemana y crisis humanitaria",
   "Final de la campaña militar y derrota alemana"],
  note:"Incluye las actuales Tanzania, Ruanda y Burundi, que formaban el África Oriental Alemana."},
camerun:{n:"Camerún alemán",cont:"África",l:1,c:["Cameroon"],x:"Camerun",t:[
  "Inicio de la guerra y primeras invasiones aliadas",
  "Avance de las fuerzas aliadas y debilitamiento alemán",
  "Derrota alemana y ocupación de Camerún",
   "Consolidación de la ocupación británica y francesa",
   "Final de la guerra y continuidad de la administración aliada"]},
namibia:{n:"Namibia alemana",cont:"África",l:1,c:["Namibia"],t:T3(
  "Colonia alemana atacada por fuerzas de Sudáfrica, que toman sus puertos y la hacen rendirse en julio de 1915.",
  "Sudáfrica administra el territorio ocupado.",
  "Tras la guerra, Sudáfrica recibe un mandato sobre la antigua colonia alemana.")},
etiopia:{n:"Etiopía",cont:"África",l:1,c:["Ethiopia"],x:"Etiopía",t:[
  " Inicio de la guerra y neutralidad etíope",
  "Crecimiento de las tensiones internacionales",
   "Derrocamiento de Lij Iyasu y cambio político",
   "Coronación de Zewditu y continuidad de la neutralidad",
  " Final de la guerra y posición internacional de Etiopía."]},
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
