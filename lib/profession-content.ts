export interface ProfessionContent {
  heroSubtitle: string
  whatWeDo: string
  howWeWork: string[]
  services: { title: string; desc: string }[]
  whyUs: { title: string; desc: string }[]
  pricing: { service: string; range: string }[]
  pricingNote: string
  faq: { q: string; a: string }[]
  situations: { title: string; desc: string }[]
  seoText: string
  emergencyTips: string[]
  cityIntro: (city: string, province: string) => string
  cityServices: (city: string) => string
  cityAdvice: (city: string) => string
}

export const PROFESSION_CONTENT: Record<string, ProfessionContent> = {
  electricista: {
    heroSubtitle:
      "Electricistas autorizados con carnet profesional para cualquier averia, instalacion o emergencia electrica en Zaragoza y provincia. Diagnostico preciso, reparacion segura y materiales homologados. Cumplimiento total del REBT.",
    whatWeDo:
      "Nuestro equipo de electricistas resuelve todo tipo de incidencias electricas en viviendas, comunidades y locales comerciales de Zaragoza y su provincia. Desde reparaciones puntuales hasta reinstalaciones completas del cuadro electrico, trabajamos con las maximas garantias de seguridad. Todos nuestros electricistas disponen de carnet profesional en vigor y estan registrados como instaladores autorizados. Cualquier trabajo realizado cumple la normativa vigente y puede ser certificado oficialmente para Boletin Electrico o Certificado de Instalacion Electrica.",
    howWeWork: [
      "Contactanos y explicanos el problema. Te orientamos por telefono con unas preguntas basicas sobre la situacion.",
      "Te asignamos un electricista autorizado de tu zona en Zaragoza. Recibiras su nombre, numero de colegiado y hora estimada de llegada.",
      "El electricista realiza un diagnostico in situ. Te explica que ha encontrado, las opciones disponibles y el coste de cada una. Sin sorpresas.",
      "Aprobado el presupuesto, realizamos el trabajo con materiales homologados. Todo queda recogido, probado y funcionando.",
      "Entregamos factura con desglose completo y garantia por escrito. Si es necesario, tramitamos el boletin electrico.",
    ],
    services: [
      { title: "Averias electricas", desc: "Diagnostico y reparacion de cortocircuitos, apagones, diferenciales que saltan, enchufes averiados, luces intermitentes y cualquier fallo en la instalacion electrica." },
      { title: "Cuadro electrico", desc: "Revision, actualizacion o sustitucion del cuadro electrico. Instalacion de diferenciales, magnetotermicos, protectores de sobretension y limitadores de potencia." },
      { title: "Instalaciones nuevas", desc: "Instalacion electrica completa para viviendas nuevas o reformadas. Diseño del esquema unifilar, cableado, mecanismos y puntos de luz segun REBT." },
      { title: "Boletin electrico (CIE)", desc: "Tramitacion del Certificado de Instalacion Electrica para altas de luz, cambios de potencia, inspecciones obligatorias y venta de vivienda." },
      { title: "Iluminacion", desc: "Instalacion de lamparas, focos empotrables, tiras LED, iluminacion exterior, sensores de movimiento y sistemas de control de iluminacion." },
      { title: "Punto de recarga vehiculo electrico", desc: "Instalacion de wallbox para coche electrico en garaje comunitario o individual. Gestionamos autorizaciones y proyecto tecnico completo." },
    ],
    whyUs: [
      { title: "Electricistas con carnet profesional", desc: "Instaladores autorizados con carnet en vigor. Certifican cualquier trabajo y emiten boletines electricos oficiales." },
      { title: "Diagnostico previo al presupuesto", desc: "Evaluamos el problema, te lo explicamos con claridad y despues damos precio. Sin compromiso si no te convence." },
      { title: "Materiales homologados", desc: "Material de primeras marcas exclusivamente: Schneider, Legrand, Simon, Hager. Sin imitaciones ni material sin certificar." },
      { title: "Garantia por escrito", desc: "Minimo 1 año en mano de obra y 2 años en materiales. Documentado en factura." },
    ],
    pricing: [
      { service: "Revision cuadro electrico", range: "60 - 120 €" },
      { service: "Reparacion enchufe/interruptor", range: "40 - 80 €" },
      { service: "Sustitucion cuadro electrico completo", range: "300 - 800 €" },
      { service: "Boletin electrico (CIE)", range: "150 - 250 €" },
      { service: "Instalacion punto de luz", range: "50 - 120 €" },
      { service: "Instalacion wallbox coche electrico", range: "800 - 1.800 €" },
    ],
    pricingNote: "Precios orientativos con mano de obra y materiales basicos incluidos. El precio final depende del estado de la instalacion, accesibilidad y materiales elegidos. Presupuesto cerrado siempre antes de empezar.",
    faq: [
      { q: "Necesito boletin electrico para dar de alta la luz?", a: "Si. Para un nuevo suministro electrico o reactivar uno dado de baja hace mas de 3 años, necesitas un Certificado de Instalacion Electrica (CIE). Nuestros electricistas autorizados lo tramitan." },
      { q: "Se me ha ido la luz en casa, que puede ser?", a: "Lo mas habitual es que haya saltado el diferencial o un magnetotermico. Revisa el cuadro electrico: si algun interruptor esta bajado, subelo. Si vuelve a saltar, existe una averia que requiere un electricista profesional." },
      { q: "Cuanto cuesta cambiar toda la instalacion electrica de un piso?", a: "Para un piso de 80-100 m2, una reinstalacion completa (cableado, cuadro, mecanismos) cuesta entre 3.000 y 6.000 euros, boletin electrico incluido." },
      { q: "Es obligatorio tener diferencial en casa?", a: "Si. Desde 2002, toda instalacion electrica en vivienda requiere al menos un interruptor diferencial de 30 mA. Si tu instalacion carece de el, necesita revision urgente." },
      { q: "Puedo instalar punto de recarga para coche electrico en mi garaje comunitario?", a: "Si. La Ley de Propiedad Horizontal permite instalar un punto de recarga individual comunicandolo a la comunidad, sin aprobacion en junta. Nos encargamos de la instalacion completa." },
    ],
    situations: [
      { title: "Se ha ido la luz en casa", desc: "Comprueba si tus vecinos tienen luz. Si solo eres tu, revisa el cuadro electrico. Si no encuentras la causa, contactanos para diagnostico inmediato." },
      { title: "Un enchufe echa chispas", desc: "Desenchufa inmediatamente todo lo conectado, baja el magnetotermico del circuito y contactanos. No lo uses hasta revision profesional." },
      { title: "Salta el diferencial constantemente", desc: "Indica una derivacion a tierra. Puede ser un electrodomestico averiado o un cable dañado. Se localiza con megometro profesional." },
      { title: "Necesito mas potencia electrica", desc: "Revisamos tu instalacion, verificamos que soporta mas potencia y tramitamos el cambio con la distribuidora. Puede requerir boletin electrico." },
      { title: "Instalacion de punto de recarga", desc: "Instalamos wallbox en garajes comunitarios e individuales. Proyecto tecnico, comunicacion a la comunidad e instalacion completa." },
      { title: "Reforma con nueva instalacion electrica", desc: "Diseño e instalacion completa: esquema unifilar, cuadro electrico, cableado, mecanismos, iluminacion y tomas. Todo segun REBT con boletin incluido." },
    ],
    seoText: "Somos especialistas en servicios de electricista profesional en Zaragoza y toda su provincia. Electricista urgente, electricista 24 horas, electricista de emergencia, electricista economico y electricista autorizado en tu zona. Nuestros electricistas profesionales tienen carnet de instalador autorizado y están habilitados para emitir boletines eléctricos y certificados de instalación (CIE). Resolvemos averías eléctricas, cortocircuitos, apagones, problemas con enchufes, cuadros eléctricos, diferenciales, magnetotérmicos e instalaciones completas. También realizamos instalación de iluminación LED, domótica, puntos de recarga para coche eléctrico y reformas eléctricas integrales. Electricista en Zaragoza, electricista a domicilio, electricista rápido, electricista de confianza y electricista certificado en todos los pueblos y ciudades de la provincia de Zaragoza. Presupuesto cerrado y garantía por escrito.",
    emergencyTips: [
      "Si hueles a quemado o ves humo saliendo de un enchufe o cuadro electrico, corta la corriente general desde el ICP y contactanos inmediatamente.",
      "Si se ha ido la luz en toda la casa, comprueba el cuadro electrico. Si algun interruptor esta bajado, subelo. Si vuelve a saltar, llama a un electricista.",
      "Nunca toques cables pelados, enchufes dañados o aparatos electricos con las manos mojadas.",
      "Corte de luz parcial (unas habitaciones si y otras no) indica que ha saltado un magnetotermico de un circuito concreto.",
    ],
    cityIntro: (city, province) =>
      `Disponemos de electricistas autorizados en ${city} y toda la provincia de ${province}. Nuestros profesionales conocen las particularidades de las instalaciones electricas de la zona, desde edificios del casco antiguo hasta urbanizaciones modernas. Respuesta rapida y servicio garantizado.`,
    cityServices: (city) =>
      `En ${city} realizamos reparacion de averias electricas, instalacion de cuadros electricos, boletines electricos, iluminacion LED, automatismos, videoporteros, puntos de recarga para vehiculo electrico e instalaciones completas.`,
    cityAdvice: (city) =>
      `Si vives en ${city} en un edificio de mas de 25 años, tu instalacion electrica probablemente necesita revision. Las instalaciones antiguas carecen de proteccion diferencial, usan cableado de aluminio y no soportan la demanda actual. Una revision preventiva evita averias graves e incendios.`,
  },

  fontanero: {
    heroSubtitle:
      "Fontaneros cualificados en deteccion de fugas, reparacion de tuberias, instalacion de griferia y calentadores en Zaragoza y provincia. Trabajamos con todos los materiales (cobre, PEX, multicapa, PPR). Servicio limpio y garantizado.",
    whatWeDo:
      "Nuestros fontaneros resuelven cualquier problema de agua en tu hogar en Zaragoza: fugas, atascos, roturas, problemas con grifos, cisternas, calentadores y termos. Tambien realizamos instalaciones nuevas, reformas de baño y cocina, y mantenimiento preventivo. Utilizamos tecnologia de deteccion de fugas sin obra (camaras termicas, correlacion acustica, gas trazador) para localizar el problema exacto antes de abrir paredes o suelos.",
    howWeWork: [
      "Contactanos y describenos el problema: fuga, grifo que gotea, tuberia rota, calentador averiado... Te orientamos por telefono.",
      "Te enviamos un fontanero de tu zona en Zaragoza con herramienta y material necesarios.",
      "El fontanero inspecciona, te explica lo que ha encontrado y te da presupuesto cerrado. Si hay fuga oculta, usamos equipos de deteccion sin obra.",
      "Realizamos la reparacion con materiales de calidad. Todo queda limpio, probado y sin goteos.",
      "Factura con garantia por escrito. Si el problema se repite en periodo de garantia, volvemos sin coste.",
    ],
    services: [
      { title: "Deteccion y reparacion de fugas", desc: "Localizamos fugas ocultas en paredes, suelos y techos usando camaras termicas y equipos acusticos. Reparacion sin obra innecesaria." },
      { title: "Reparacion de tuberias", desc: "Reparamos tuberias de cobre, PEX, multicapa, plomo y hierro galvanizado. Sustitucion parcial o completa de la red." },
      { title: "Griferia y sanitarios", desc: "Instalacion, reparacion y sustitucion de grifos, duchas, bañeras, inodoros, bides y lavabos de todas las marcas." },
      { title: "Calentadores y termos", desc: "Instalacion, reparacion y sustitucion de calentadores de gas, termos electricos y calentadores instantaneos." },
      { title: "Cisternas y mecanismos", desc: "Reparacion de cisternas con perdidas, mecanismos de descarga averiados e instalaciones empotradas." },
      { title: "Reformas de baño y cocina", desc: "Fontaneria completa para reformas: desplazamiento de tomas, desagues, instalacion de sanitarios y griferia nueva." },
    ],
    whyUs: [
      { title: "Deteccion de fugas sin obra", desc: "Tecnologia avanzada para encontrar fugas sin romper paredes ni suelos: termografia, correlacion acustica y gas trazador." },
      { title: "Reparacion definitiva", desc: "Reparamos el origen del problema, no ponemos parches. Por eso damos garantia por escrito." },
      { title: "Limpieza total", desc: "Protegemos tu casa antes de empezar y dejamos todo limpio al terminar." },
      { title: "Presupuesto cerrado", desc: "Precio exacto antes de empezar. Si hay imprevistos, te informamos antes de continuar." },
    ],
    pricing: [
      { service: "Reparacion de grifo/cisterna", range: "50 - 120 €" },
      { service: "Deteccion de fuga sin obra", range: "80 - 200 €" },
      { service: "Reparacion de tuberia rota", range: "100 - 300 €" },
      { service: "Sustitucion de calentador/termo", range: "200 - 500 €" },
      { service: "Instalacion de inodoro/lavabo", range: "80 - 200 €" },
      { service: "Fontaneria reforma baño completo", range: "800 - 2.500 €" },
    ],
    pricingNote: "Precios orientativos con mano de obra y materiales basicos. Presupuesto cerrado siempre antes de empezar.",
    faq: [
      { q: "Tengo una mancha de humedad en el techo, puede ser una fuga?", a: "Si, las manchas de humedad suelen indicar una fuga en la tuberia del vecino de arriba, una bajante comunitaria o tu propia instalacion. Usamos camaras termicas para localizar el origen sin picar." },
      { q: "Mi grifo gotea, es urgente?", a: "No es emergencia, pero desperdicia 30-100 litros diarios (1.000-3.000 al mes). Ademas del gasto en agua, puede dañar griferia y mueble. Reparacion sencilla y economica." },
      { q: "Cuanto tarda en repararse una tuberia rota?", a: "Una reparacion accesible en tuberia vista se hace en 1-2 horas. Si esta empotrada, hay que localizar, abrir, reparar y cerrar: medio dia normalmente." },
      { q: "Puedo cambiar tuberias de plomo?", a: "Si, y es muy recomendable. Las tuberias de plomo estan prohibidas en nuevas instalaciones por riesgo sanitario. Las sustituimos por multicapa o PEX, seguras y duraderas." },
      { q: "Merece la pena reparar un calentador viejo?", a: "Si tiene mas de 10-12 años y la reparacion supera 200-250 euros, suele ser mas rentable sustituirlo. Los modelos actuales son mas eficientes." },
    ],
    situations: [
      { title: "Fuga de agua en casa", desc: "Cierra la llave de paso general inmediatamente para parar la fuga y evitar daños. Contactanos: localizamos el punto exacto con tecnologia sin obra." },
      { title: "El grifo no para de gotear", desc: "Desperdicia hasta 100 litros diarios. Suele ser problema de goma interior, cartucho ceramico o junta torica. Reparacion rapida y economica." },
      { title: "No sale agua caliente", desc: "El problema puede estar en calentador, termo electrico, caldera o griferia termostatica. Diagnosticamos la causa exacta." },
      { title: "Cisterna del WC corre sin parar", desc: "Pierde hasta 200 litros diarios. Problema en mecanismo de descarga o valvula de llenado. Reparacion en 30-45 minutos." },
      { title: "Mancha de humedad en el techo", desc: "Indica fuga en instalacion del piso superior, bajante o cubierta. Actuamos rapido para evitar daños estructurales." },
      { title: "Reforma de baño o cocina", desc: "Fontaneria completa: desplazamiento de tomas, desagues nuevos, instalacion de sanitarios, griferia y platos de ducha." },
    ],
    seoText: "Somos fontaneros profesionales en Zaragoza y toda su provincia. Fontanero urgente, fontanero 24 horas, fontanero de emergencia, fontanero economico y fontanero de confianza en tu zona. Especializados en detección de fugas sin obra, reparación de tuberías, instalación de grifería, cisternas, calentadores, termos eléctricos y fontanería para reformas. Utilizamos cámaras térmicas, equipos de correlación acústica y gas trazador. Fontanero en Zaragoza, fontanero a domicilio, fontanero rápido y fontanero certificado en todos los pueblos de la provincia. Presupuesto cerrado y garantía por escrito.",
    emergencyTips: [
      "Si hay una fuga importante, cierra la llave de paso general INMEDIATAMENTE.",
      "Si la fuga viene del techo, coloca un cubo y avisa al vecino de arriba para que cierre su llave de paso.",
      "Si hay riesgo de inundacion, desconecta los electrodomesticos cercanos.",
      "No intentes reparar una tuberia rota con cinta: cierra el agua y espera al fontanero.",
    ],
    cityIntro: (city, province) =>
      `Contamos con fontaneros cualificados en ${city} y toda la provincia de ${province}. Conocemos las redes de agua y particularidades de la fontaneria local. Respuesta rapida para urgencias y servicio programado para reformas.`,
    cityServices: (city) =>
      `En ${city} realizamos reparacion de fugas, sustitucion de tuberias, instalacion de sanitarios, griferia, calentadores, termos electricos, cisternas y fontaneria para reformas.`,
    cityAdvice: (city) =>
      `Si vives en ${city} con tuberias de hierro galvanizado (habituales en edificios de los 60-80), planifica su sustitucion. Se corroen internamente, reducen caudal y contaminan el agua con oxido.`,
  },

  cerrajero: {
    heroSubtitle:
      "Cerrajeros profesionales en Zaragoza para aperturas, cambios de cerradura, sistemas antibumping y seguridad avanzada. Trabajamos sin dañar tu puerta. Servicio discreto y con garantia.",
    whatWeDo:
      "Nuestros cerrajeros te ayudan cuando te quedas fuera de casa, necesitas mejorar la seguridad o has sufrido un intento de robo. Trabajamos con todas las marcas y tipos de cerraduras: yale, bombillos europeos, cerraduras multipunto, cerraduras inteligentes, puertas blindadas y acorazadas. Siempre intentamos abrir sin dañar puerta ni cerradura.",
    howWeWork: [
      "Contactanos y explicanos tu situacion: puerta cerrada, cerradura rota, intento de robo, mejora de seguridad...",
      "Te enviamos un cerrajero de tu zona en Zaragoza con nombre, hora estimada y rango de precio.",
      "El cerrajero evalua la situacion in situ y te confirma el precio exacto antes de actuar.",
      "Apertura o cambio de cerradura con tecnicas no destructivas siempre que sea posible.",
      "Factura con detalle del trabajo, llaves nuevas y garantia por escrito del material instalado.",
    ],
    services: [
      { title: "Apertura de puertas", desc: "Apertura de puertas cerradas con tecnicas no destructivas: ganzuas, bumping controlado, impresioning. Sin dañar la puerta." },
      { title: "Cambio de cerradura", desc: "Sustitucion de bombillo, cerradura completa o multipunto. Instalamos las mejores marcas: Keso, Ezcurra, Lince, Tesa, Yale." },
      { title: "Cerraduras antibumping", desc: "Bombillos y cerraduras con proteccion antibumping, antiganzua y antitaladro. Maxima proteccion contra metodos de robo habituales." },
      { title: "Puertas blindadas y acorazadas", desc: "Instalacion, reparacion y ajuste de puertas blindadas y acorazadas. Cerraduras multipunto, bisagras y sistemas de cierre." },
      { title: "Cerraduras inteligentes", desc: "Cerraduras electronicas con apertura por huella, codigo, tarjeta o movil. Compatibles con domotica." },
      { title: "Servicio post-robo", desc: "Reparacion urgente tras intento de robo. Sustitucion de cerradura, refuerzo de puerta y asesoramiento de seguridad." },
    ],
    whyUs: [
      { title: "Apertura sin daños", desc: "En el 90% de los casos abrimos sin dañar cerradura ni puerta." },
      { title: "Precio cerrado antes de actuar", desc: "Te decimos el coste antes de empezar. Sin sorpresas." },
      { title: "Cerrajeros identificados", desc: "Van identificados con nombre y numero profesional. Recibes sus datos antes de que llegue." },
      { title: "Marcas de primera", desc: "Solo cerraduras de marcas reconocidas con garantia del fabricante." },
    ],
    pricing: [
      { service: "Apertura puerta (no destructiva)", range: "60 - 150 €" },
      { service: "Cambio de bombillo de seguridad", range: "80 - 180 €" },
      { service: "Cambio cerradura multipunto", range: "150 - 400 €" },
      { service: "Instalacion cerradura antibumping", range: "100 - 250 €" },
      { service: "Copia de llaves de seguridad", range: "20 - 60 €" },
      { service: "Instalacion cerradura inteligente", range: "200 - 600 €" },
    ],
    pricingNote: "Precios orientativos. Depende del tipo de puerta, cerradura y dificultad. Precio cerrado siempre antes de empezar.",
    faq: [
      { q: "Me he dejado las llaves dentro, cuanto cuesta abrir?", a: "Una apertura no destructiva con cerradura estandar cuesta 60-120 euros. Cerraduras de alta seguridad pueden ser algo mas. Precio exacto antes de actuar." },
      { q: "Cuanto tarda en abrir una puerta?", a: "Cerradura estandar: 5-15 minutos. Alta seguridad: 20-40 minutos. Puerta acorazada bloqueada: puede ser mas." },
      { q: "Merece la pena cerradura antibumping?", a: "Si. El bumping es el metodo de robo mas utilizado en España. Un bombillo antibumping de buena marca cuesta 80-180 euros instalado y es la mejor inversion en seguridad." },
      { q: "Han intentado robar, que hago?", a: "No toques nada, llama a la policia para que levanten acta. Despues contactanos para sustituir cerradura dañada y reforzar la puerta." },
      { q: "Diferencia entre puerta blindada y acorazada?", a: "La blindada tiene hoja de madera reforzada con chapas de acero. La acorazada tiene marco y hoja completamente de acero. La acorazada ofrece mas seguridad pero es mas cara." },
    ],
    situations: [
      { title: "Llaves olvidadas dentro de casa", desc: "Apertura sin daños con tecnicas no destructivas. En el 90% de los casos no hay que cambiar nada: solo abrir y entrar." },
      { title: "Cerradura atascada", desc: "Puede ser bombillo desgastado, mecanismo oxidado o llave deformada. No fuerces la llave: puedes partirla dentro." },
      { title: "Intento de robo", desc: "No toques nada, llama a policia primero. Despues sustituimos cerradura, reforzamos puerta y asesoramos sobre seguridad." },
      { title: "Mejorar seguridad de la puerta", desc: "Instalamos bombillos antibumping, cerraduras multipunto, escudos de proteccion y cerraduras inteligentes." },
      { title: "Llave rota dentro de la cerradura", desc: "No intentes sacarla con pinzas. Extraemos la llave rota y dejamos la cerradura operativa." },
      { title: "Copias de llaves de seguridad", desc: "Copias de llaves de seguridad, llaves de puntos y llaves especiales. Para llaves con patente, necesitamos tarjeta de propiedad." },
    ],
    seoText: "Somos cerrajeros profesionales en Zaragoza y toda su provincia. Cerrajero urgente, cerrajero 24 horas, cerrajero de emergencia, cerrajero economico y cerrajero de confianza. Especializados en aperturas sin daños, cambios de cerradura, cerraduras antibumping, puertas blindadas y acorazadas, cerraduras inteligentes y servicio post-robo. Trabajamos con Keso, Ezcurra, Lince, Tesa, Yale, Iseo, Mottura y Mul-T-Lock. Cerrajero en Zaragoza, cerrajero a domicilio, cerrajero rápido y cerrajero certificado en todos los pueblos de la provincia. Precio cerrado y garantía del fabricante.",
    emergencyTips: [
      "No intentes abrir tu puerta con tarjetas o herramientas caseras: puedes dañar la cerradura y encarecer la reparacion.",
      "Si han intentado robar, no toques la puerta hasta que venga la policia. Necesitas el atestado para el seguro.",
      "Si la llave se ha partido dentro, no metas otra llave ni intentes extraer el trozo.",
      "Si la puerta se ha cerrado de un golpe de aire, manten la calma: es la apertura mas sencilla.",
    ],
    cityIntro: (city, province) =>
      `Contamos con cerrajeros profesionales en ${city} y toda la provincia de ${province}. Conocen los tipos de puertas y cerraduras habituales en la zona y van equipados para cualquier situacion.`,
    cityServices: (city) =>
      `En ${city} realizamos aperturas de puertas, cambios de cerradura, instalacion de cerraduras antibumping, reparacion de puertas blindadas y acorazadas, cerraduras inteligentes y servicio post-robo.`,
    cityAdvice: (city) =>
      `Si vives en ${city} y tu cerradura tiene mas de 10 años, probablemente no tiene proteccion antibumping. Cambiar el bombillo cuesta 80-180 euros y es la mejor mejora de seguridad relacion calidad-precio.`,
  },

  desatascos: {
    heroSubtitle:
      "Servicio profesional de desatascos en Zaragoza con maquinaria industrial: camiones cuba, equipos de alta presion, camaras CCTV y fresadoras mecanicas. Desatascamos tuberias, arquetas, bajantes y fosas septicas.",
    whatWeDo:
      "Somos especialistas en desatascos y limpieza de tuberias en Zaragoza y provincia. Diagnosticamos con camaras CCTV para ver exactamente que ocurre dentro de la tuberia antes de intervenir. Usamos equipos de alta presion (200-400 bar), fresadoras mecanicas e hidrolimpiadoras. Para trabajos mayores disponemos de camiones cuba de diferentes capacidades.",
    howWeWork: [
      "Describenos el problema: que desague esta atascado, desde cuando, si hay desbordamiento o mal olor.",
      "Te enviamos un tecnico con el equipo adecuado. Para atascos domesticos, furgoneta con alta presion. Para mayores, camion cuba.",
      "Inspeccion con camara CCTV si es necesario. Te mostramos en pantalla el interior de la tuberia.",
      "Desatasco con la tecnica mas adecuada. Verificacion con camara de que queda completamente limpia.",
      "Recomendaciones preventivas y factura con garantia.",
    ],
    services: [
      { title: "Desatasco de tuberias", desc: "Desatasco en cocina, baño, lavabo, ducha, bañera y fregadero. Alta presion que elimina grasa, cal y residuos." },
      { title: "Desatasco de inodoros", desc: "Equipo profesional para tapones de papel, toallitas, objetos y acumulaciones de cal. Resultado inmediato." },
      { title: "Limpieza de bajantes", desc: "Limpieza a presion de bajantes fecales y pluviales. Eliminamos incrustaciones de grasa, cal, raices y sedimentos." },
      { title: "Limpieza de arquetas", desc: "Vaciado y limpieza de arquetas, sifones, pozos de registro y colectores." },
      { title: "Vaciado de fosas septicas", desc: "Vaciado con camion cuba. Gestionamos transporte y vertido autorizado de residuos." },
      { title: "Inspeccion con camara CCTV", desc: "Inspeccion televisiva de tuberias y colectores. Localizamos obstrucciones, roturas y raices. Informe con video." },
    ],
    whyUs: [
      { title: "Diagnostico con camara CCTV", desc: "Vemos el interior de la tuberia antes de intervenir para aplicar la solucion correcta." },
      { title: "Maquinaria profesional", desc: "Equipos de alta presion hasta 400 bar, fresadoras mecanicas y camiones cuba de 3.000 a 15.000 litros." },
      { title: "Desatasco garantizado", desc: "Si se repite en 3 meses por la misma causa, volvemos sin coste adicional." },
      { title: "Limpieza incluida", desc: "Zona de trabajo limpia y desinfectada. Nos llevamos todos los residuos." },
    ],
    pricing: [
      { service: "Desatasco domestico (WC, fregadero, ducha)", range: "60 - 150 €" },
      { service: "Desatasco con alta presion", range: "120 - 300 €" },
      { service: "Limpieza de bajante", range: "150 - 400 €" },
      { service: "Inspeccion con camara CCTV", range: "100 - 250 €" },
      { service: "Vaciado fosa septica", range: "200 - 600 €" },
      { service: "Limpieza de arqueta/colector", range: "100 - 300 €" },
    ],
    pricingNote: "Precios orientativos. Depende de gravedad del atasco, longitud de tuberia, accesibilidad y maquinaria necesaria. Presupuesto cerrado.",
    faq: [
      { q: "Se me ha atascado el WC, puedo intentar desatascarlo?", a: "Prueba con desatascador de ventosa (no quimico). Si tras 10-15 intentos no se desatasca, contactanos. No uses productos quimicos: dañan tuberias." },
      { q: "Por que huele mal el desague de la cocina?", a: "Acumulacion de grasa y restos de comida en tuberia o sifon. Limpieza profesional con agua a presion lo elimina." },
      { q: "Cada cuanto vaciar fosa septica?", a: "Cada 1-2 años dependiendo de tamaño y uso. Si los desagues van lentos o hay mal olor, necesita vaciado." },
      { q: "Se ha desbordado una arqueta, que hago?", a: "No pises el agua (bacterias). Cierra el agua si es posible y contactanos. Requiere atencion rapida." },
      { q: "Pueden entrar raices en las tuberias?", a: "Si, muy habitual en viviendas con jardin. Penetran por las juntas. Se eliminan con fresadora mecanica." },
    ],
    situations: [
      { title: "WC atascado", desc: "Prueba desatascador de ventosa. Si no funciona, lo resolvemos con equipo profesional en minutos." },
      { title: "Mal olor en desagues", desc: "Indica acumulacion de grasa u organicos o sifon seco. Limpieza profesional necesaria si persiste." },
      { title: "Agua no baja en ducha o fregadero", desc: "Primer sintoma de atasco en formacion. Limpieza a tiempo evita desbordamientos." },
      { title: "Arqueta desbordada", desc: "No pises el agua. Enviamos equipo de alta presion o camion cuba segun gravedad." },
      { title: "Fosa septica llena", desc: "Desagues lentos, burbujas en WC o mal olor en jardin. Vaciado con camion cuba." },
      { title: "Bañera o ducha atascada", desc: "Acumulacion de pelo, jabon y cal. Limpieza con agua a presion: resultado inmediato." },
    ],
    seoText: "Somos especialistas en desatascos profesionales en Zaragoza y toda su provincia. Desatascos urgentes, desatascos 24 horas, desatascos de emergencia y desatascos economicos. Desatascamos tuberías, inodoros, fregaderos, duchas, bajantes, arquetas, colectores y fosas sépticas. Equipos de alta presión, fresadoras mecánicas, cámaras CCTV y camiones cuba. Desatascos en Zaragoza, desatascos a domicilio y desatascos rápidos en todos los pueblos de la provincia. Desatasco garantizado.",
    emergencyTips: [
      "Si el WC esta atascado, no tires mas de la cadena: solo conseguiras desbordamiento.",
      "No uses productos quimicos desatascadores: dañan tuberias y son ineficaces para atascos reales.",
      "Si se ha desbordado una arqueta, no pises el agua. Contiene bacterias.",
      "Sifon seco produce olor a alcantarilla: echa un vaso de agua por cada desague sin uso.",
    ],
    cityIntro: (city, province) =>
      `Disponemos de equipos de desatascos en ${city} y toda la provincia de ${province}. Furgonetas con alta presion para atascos domesticos y camiones cuba para trabajos mayores.`,
    cityServices: (city) =>
      `En ${city} realizamos desatascos de tuberias, inodoros, fregaderos, bajantes, arquetas, colectores, vaciado de fosas septicas e inspeccion CCTV.`,
    cityAdvice: (city) =>
      `Si vives en ${city} en edificio antiguo, haz limpieza preventiva de bajantes cada 2-3 años. Las tuberias antiguas acumulan grasa y cal que reducen el diametro hasta provocar atascos graves.`,
  },

  calderas: {
    heroSubtitle:
      "Tecnicos de calderas certificados en Zaragoza por los principales fabricantes para revision, reparacion, instalacion y sustitucion. Calderas de gas, gasoil y aerotermia. Mantenimiento preventivo con garantia.",
    whatWeDo:
      "Nuestros tecnicos estan certificados por las principales marcas (Junkers/Bosch, Vaillant, Saunier Duval, Baxi, Ferroli, Cointra, Ariston) y tienen carnet de instalador de gas en vigor. Revisiones anuales obligatorias, reparaciones, instalaciones nuevas y sustitucion de equipos antiguos. Tambien instalamos aerotermia como alternativa eficiente al gas.",
    howWeWork: [
      "Explicanos el problema de tu caldera: no enciende, hace ruido, pierde presion, necesitas revision anual...",
      "Te asignamos un tecnico certificado en Zaragoza, especializado en tu marca.",
      "Diagnostico, explicacion clara y presupuesto cerrado con opciones.",
      "Reparacion con piezas originales o compatibles homologadas. Si necesita sustitucion, te asesoramos.",
      "Factura con garantia, certificado de revision si procede, y recomendaciones de mantenimiento.",
    ],
    services: [
      { title: "Revision anual de caldera", desc: "Revision obligatoria segun RITE: analisis de combustion, comprobacion de seguridades, limpieza de quemador. Certificado oficial incluido." },
      { title: "Reparacion de averias", desc: "Todo tipo de averias: caldera que no enciende, pierde presion, hace ruido, da error, no calienta agua o no arranca calefaccion." },
      { title: "Instalacion de caldera nueva", desc: "Calderas de condensacion, estancas y mixtas. Gestionamos alta de gas y certificado de instalacion." },
      { title: "Sustitucion de caldera antigua", desc: "Retiramos la vieja e instalamos nueva de condensacion. Ahorro del 20-30% en factura de gas." },
      { title: "Radiadores y calefaccion", desc: "Instalacion, reparacion, purgado y equilibrado de radiadores. Sustitucion de bombas y valvulas." },
      { title: "Aerotermia", desc: "Instalacion de bomba de calor aire-agua para calefaccion, refrigeracion y ACS. Maxima eficiencia energetica." },
    ],
    whyUs: [
      { title: "Tecnicos certificados por marca", desc: "Formados y certificados por los principales fabricantes. Conocen cada modelo en profundidad." },
      { title: "Piezas originales", desc: "Piezas originales del fabricante o compatibles homologadas. Nunca genericas sin certificar." },
      { title: "Certificado oficial", desc: "Certificado de revision de gas valido para la distribuidora. Cumple todos los requisitos del RITE." },
      { title: "Asesoramiento honesto", desc: "Si se puede reparar, la reparamos. Si merece cambiarla, te lo decimos. Sin presiones." },
    ],
    pricing: [
      { service: "Revision anual + certificado", range: "80 - 120 €" },
      { service: "Reparacion de averia (sin pieza)", range: "60 - 120 €" },
      { service: "Sustitucion caldera de condensacion", range: "1.200 - 2.500 €" },
      { service: "Purgado y equilibrado radiadores", range: "60 - 150 €" },
      { service: "Instalacion de radiador nuevo", range: "100 - 250 €" },
      { service: "Instalacion aerotermia completa", range: "6.000 - 15.000 €" },
    ],
    pricingNote: "Precios orientativos. Las reparaciones dependen de la pieza necesaria. Las instalaciones incluyen equipo, materiales y mano de obra. Presupuesto cerrado.",
    faq: [
      { q: "Cada cuanto hay que revisar la caldera?", a: "Cada 2 años segun RITE (anual si tiene mas de 15 años). Sin revision, la compañia puede cortar el gas." },
      { q: "Mi caldera no enciende, que puede ser?", a: "Causas habituales: presion baja (menos de 1 bar), fallo de encendido electronico, sensor sucio, valvula de gas bloqueada. Comprueba presion en manometro primero." },
      { q: "Merece la pena cambiar a caldera de condensacion?", a: "Si tiene mas de 12-15 años, probablemente si. Son 20-30% mas eficientes. Ahorro de 200-400 euros anuales en gas. Inversion recuperada en 4-6 años." },
      { q: "Que es la aerotermia?", a: "Sistema que extrae calor del aire exterior. Electrica, sin gas. Por cada kW consumido genera 3-5 kW de calor. Ideal para viviendas unifamiliares." },
      { q: "Mi caldera pierde presion constantemente", a: "Probablemente fuga pequeña en circuito de calefaccion. No es urgente pero hay que localizarla y repararla." },
    ],
    situations: [
      { title: "Caldera no enciende", desc: "Comprueba manometro (debe estar entre 1 y 1,5 bar). Si esta bajo, rellena con llave de llenado. Si sigue sin encender, contactanos." },
      { title: "Caldera pierde presion", desc: "Fuga en circuito de calefaccion: radiador, valvula o vaso de expansion. Localizamos y reparamos." },
      { title: "Sin agua caliente", desc: "Problema en valvula de tres vias, intercambiador de placas o sensor de temperatura. Reparacion habitual." },
      { title: "Caldera hace ruido extraño", desc: "Burbujeo = aire en circuito. Golpeteo = cal en intercambiador. Silbido = presion incorrecta." },
      { title: "Olor a gas cerca de la caldera", desc: "Abre ventanas, no enciendas nada electrico, sal de casa y llama al 112. Despues contactanos para revision." },
      { title: "Revision anual de la caldera", desc: "Obligatoria cada 2 años. Analisis de combustion, seguridades, limpieza y certificado oficial." },
    ],
    seoText: "Somos técnicos de calderas certificados en Zaragoza y toda su provincia. Revisión de calderas, reparación de calderas urgente, instalación de calderas de condensación, sustitución de calderas antiguas, mantenimiento de radiadores y aerotermia. Trabajamos con Junkers/Bosch, Vaillant, Saunier Duval, Baxi, Ferroli, Cointra y Ariston. Técnico de calderas en Zaragoza, reparación de calderas rápida y mantenimiento profesional en todos los pueblos de la provincia. Piezas originales, presupuesto cerrado y garantía por escrito.",
    emergencyTips: [
      "Si hueles a gas, NO enciendas ni apagues nada electrico. Abre ventanas, sal de casa y llama al 112.",
      "Si la caldera pierde agua visiblemente, cierra la llave de gas y la llave de agua de la caldera.",
      "Si un radiador pierde agua, coloca recipiente debajo y cierra la valvula de ese radiador.",
      "Anota el codigo de error de la caldera antes de llamar: permite anticipar que pieza se necesita.",
    ],
    cityIntro: (city, province) =>
      `Contamos con tecnicos de calderas certificados en ${city} y toda la provincia de ${province}. Conocen las marcas mas instaladas en la zona y llevan las piezas mas habituales.`,
    cityServices: (city) =>
      `En ${city} realizamos revision anual con certificado, reparacion de averias, instalacion y sustitucion de calderas, mantenimiento de radiadores e instalacion de aerotermia.`,
    cityAdvice: (city) =>
      `Si vives en ${city} y tu caldera tiene mas de 15 años, programa revision antes del invierno. Las calderas antiguas de tiro natural estan siendo sustituidas por calderas estancas de condensacion, obligatorias en nuevas instalaciones y con 20-30% menos consumo de gas.`,
  },
}
