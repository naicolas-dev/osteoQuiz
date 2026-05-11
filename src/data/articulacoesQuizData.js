export const articulacoesQuizData = [
  // --- OMBRO ---
  {
    id: "art-1", category: "ombro", boneName: "Glenoumeral",
    visualReference: { view: "text", hint: "Articulação sinovial do tipo esferóide entre a cabeça do úmero e a cavidade glenoidal da escápula.", landmark: "Ombro — a mais móvel do corpo humano", quickTip: "É a articulação mais instável do corpo: alta mobilidade, baixa estabilidade. A glenoide é rasa como um pires." },
    options: ["Glenoumeral", "Acromioclavicular", "Esternoclavicular", "Escapulotorácica", "Umeroulnar"],
    correctAnswer: "Glenoumeral",
    explanation: { name: "Articulação Glenoumeral", location: "Entre a cabeça do úmero (esférica) e a cavidade glenoidal da escápula (rasa), formando o ombro.", function: "Permite os maiores movimentos do corpo: flexão, extensão, abdução, adução, rotação interna, externa e circundução.", characteristics: "Articulação sinovial esferóide. A capsula articular é frouxa. O labrum glenoidal aprofunda a glenoide. O manguito rotador (supra, infra, redondo menor e subescapular) é o principal estabilizador dinâmico.", relations: "Relaciona-se com o manguito rotador, bolsa subacromial, tendão do bíceps (porção longa) e ligamentos glenoumerais.", memoryTips: "GLENOUMERAL = glenoide + úmero. É a mais MÓVEL e mais LUXADA do corpo. Pense: 'alta liberdade, alto risco'." }
  },
  {
    id: "art-2", category: "ombro", boneName: "Acromioclavicular",
    visualReference: { view: "text", hint: "Articulação entre o acrômio da escápula e a extremidade lateral da clavícula.", landmark: "Topo do ombro — a junção entre clavícula e escápula", quickTip: "É a articulação que se separa nas lesões tipo 'shoulder separation' do esporte de contato." },
    options: ["Acromioclavicular", "Glenoumeral", "Esternoclavicular", "Escapulotorácica", "Radioulnar proximal"],
    correctAnswer: "Acromioclavicular",
    explanation: { name: "Articulação Acromioclavicular", location: "Entre o acrômio da escápula e a extremidade acromial da clavícula, no topo do ombro.", function: "Transmite forças do membro superior para a clavícula. Permite pequenos movimentos de deslizamento e rotação da escápula.", characteristics: "Articulação sinovial plana. Contém um disco articular parcial. Estabilizada pelos ligamentos acromioclavicular e coracoclavicular (trapezoide e conoide).", relations: "Clavícula, acrômio, ligamentos coracoclaviculares, músculo deltóide e trapézio.", memoryTips: "ACROMIO + CLAVICULAR. No rugby e futebol americano, a 'separação do ombro' é lesão desta articulação. Graus I, II e III de separação AC." }
  },
  {
    id: "art-3", category: "ombro", boneName: "Esternoclavicular",
    visualReference: { view: "text", hint: "Única articulação sinovial verdadeira entre o membro superior e o esqueleto axial.", landmark: "Base do pescoço, onde a clavícula encontra o esterno", quickTip: "É a ÚNICA conexão óssea entre o membro superior e o tronco. Sem ela, o braço só se conectaria por músculos." },
    options: ["Esternoclavicular", "Acromioclavicular", "Glenoumeral", "Escapulotorácica", "Sacroilíaca"],
    correctAnswer: "Esternoclavicular",
    explanation: { name: "Articulação Esternoclavicular", location: "Entre a extremidade medial da clavícula, o manúbrio do esterno e a cartilagem da 1ª costela.", function: "Única articulação sinovial entre o membro superior e o esqueleto axial. Transmite forças do membro superior ao tronco e permite elevação, depressão, protração e retração da clavícula.", characteristics: "Articulação sinovial em sela (ou plana). Possui disco articular que a divide em dois compartimentos. Muito estável graças aos ligamentos esternoclaviculares anterior e posterior e o costoclavicular.", relations: "Manúbrio esternal, 1ª cartilagem costal, clavícula. Proximidade com grandes vasos e traqueia.", memoryTips: "ESTERNO + CLAVICULAR. É o 'pino' que prende o braço ao peito. Luxações são raras mas perigosas (estruturas vitais por baixo)." }
  },
  {
    id: "art-4", category: "ombro", boneName: "Escapulotorácica",
    visualReference: { view: "text", hint: "Junção funcional (não uma articulação sinovial verdadeira) entre a face anterior da escápula e a parede posterior do tórax.", landmark: "Costas superiores — onde a escápula desliza sobre as costelas", quickTip: "Tecnicamente não é uma articulação sinovial, mas uma interface muscular. Sem ela a escápula não se moveria sobre o tórax." },
    options: ["Escapulotorácica", "Glenoumeral", "Acromioclavicular", "Esternoclavicular", "Tibiofibular proximal"],
    correctAnswer: "Escapulotorácica",
    explanation: { name: "Articulação Escapulotorácica", location: "Interface entre a face costal (anterior) da escápula e a face posterior do tórax (sobre as costelas 2 a 7).", function: "Permite os movimentos escapulares: elevação, depressão, protração, retração e rotação (para cima e para baixo). É fundamental para a abdução completa do ombro (acima de 90°).", characteristics: "Não é uma articulação sinovial — é uma articulação fisiológica ou funcional. O deslizamento ocorre entre músculo subescapular e serrátil anterior, separados por tecido conjuntivo frouxo.", relations: "Escápula, costelas 2-7, músculo serrátil anterior e subescapular, clavícula via articulações AC e EC.", memoryTips: "ESCÁPULA + TORAX. A 'escápula alada' ocorre quando o serrátil anterior falha e a escápula não consegue mais deslizar sobre o tórax." }
  },

  // --- COTOVELO ---
  {
    id: "art-5", category: "cotovelo", boneName: "Umeroulnar",
    visualReference: { view: "text", hint: "Articulação em dobradiça entre a tróclea do úmero e a incisura troclear da ulna, principal articulação do cotovelo.", landmark: "Cotovelo — a principal articulação que flete e estende o antebraço", quickTip: "É a articulação mais estável do cotovelo. A incisura troclear da ulna se encaixa perfeitamente na tróclea do úmero como uma chave na fechadura." },
    options: ["Umeroulnar", "Umerorradial", "Radioulnar proximal", "Glenoumeral", "Tibiofemoral medial"],
    correctAnswer: "Umeroulnar",
    explanation: { name: "Articulação Umeroulnar", location: "Entre a tróclea do úmero e a incisura troclear da ulna, no cotovelo medial.", function: "Principal articulação do cotovelo. É uma gínglimo (dobradiça) que permite flexão (0–145°) e extensão do antebraço. É a articulação que define o ângulo de carregamento do braço.", characteristics: "Articulação em dobradiça (gínglimo) muito estável. O olécrano se encaixa na fossa olecraniana na extensão; o processo coronoide na fossa coronoide na flexão. Estabilizada pelo ligamento colateral ulnar (medial).", relations: "Úmero, ulna, ligamento colateral medial, músculo braquial (anterior) e tríceps (posterior).", memoryTips: "ÚMERO + ULNA = UMEROULNAR. É o 'cotovelo verdadeiro'. Bater o 'nervinho' = nervo ulnar comprimido no epicôndilo medial, perto desta articulação." }
  },
  {
    id: "art-6", category: "cotovelo", boneName: "Umerorradial",
    visualReference: { view: "text", hint: "Articulação entre o capítulo do úmero e a cabeça do rádio, permitindo flexão e o início da pronossupinação.", landmark: "Cotovelo lateral — onde o rádio se encaixa no úmero", quickTip: "Enquanto a umeroulnar é a dobradiça principal, a umerorradial é a que 'gira' — ela permite tanto flexão quanto rotação do rádio." },
    options: ["Umerorradial", "Umeroulnar", "Radioulnar proximal", "Acromioclavicular", "Patelofemoral"],
    correctAnswer: "Umerorradial",
    explanation: { name: "Articulação Umerorradial", location: "Entre o capítulo do úmero (hemisfério lateral) e a fóvea da cabeça do rádio, no cotovelo lateral.", function: "Participa da flexão e extensão do cotovelo. Também permite a rotação da cabeça do rádio (pronossupinação). Transmite forças axiais da mão para o úmero.", characteristics: "Articulação esferóide modificada (condilóide). A cabeça do rádio em forma de disco gira sobre o capítulo do úmero. Estabilizada lateralmente pelo ligamento colateral radial.", relations: "Úmero, rádio, ligamento colateral lateral, músculo bíceps (se insere na tuberosidade radial próxima) e braquiorradial.", memoryTips: "ÚMERO + RÁDIO = UMERORRADIAL. No lado do polegar (lateral). 'Cotovelo de tenista' (epicondilite lateral) ocorre próximo a esta articulação." }
  },
  {
    id: "art-7", category: "cotovelo", boneName: "Radioulnar proximal",
    visualReference: { view: "text", hint: "Articulação trocoide (pivô) entre a cabeça do rádio e a incisura radial da ulna, permitindo a pronossupinação.", landmark: "Cotovelo — logo abaixo da articulação principal, onde o rádio gira sobre a ulna", quickTip: "É o pivô proximal da pronossupinação. Age em par com a radioulnar distal (no punho): juntas fazem o antebraço girar." },
    options: ["Radioulnar proximal", "Umeroulnar", "Umerorradial", "Radioulnar distal", "Tibiofibular proximal"],
    correctAnswer: "Radioulnar proximal",
    explanation: { name: "Articulação Radioulnar Proximal", location: "Entre a cabeça do rádio e a incisura radial da ulna, imediatamente abaixo da articulação do cotovelo.", function: "Permite a rotação axial do rádio sobre a ulna — pronação (palma para baixo) e supinação (palma para cima). Age em conjunto com a radioulnar distal.", characteristics: "Articulação trocoide (pivô). A cabeça do rádio é mantida contra a ulna pelo ligamento anular (que abraça a cabeça do rádio). A 'subluxação da cabeça do rádio' (cotovelo de babá) ocorre quando o ligamento anular escorrega.", relations: "Rádio, ulna, ligamento anular, ligamento quadrado. Compartilha cápsula com a articulação do cotovelo.", memoryTips: "RADIO + ULNA + PROXIMAL. Liga anular = anel em volta da cabeça do rádio. Cotovelo de babá: puxão brusco no braço da criança solta a cabeça do rádio do ligamento anular." }
  },

  // --- JOELHO ---
  {
    id: "art-8", category: "joelho", boneName: "Tibiofemoral medial",
    visualReference: { view: "text", hint: "Compartimento medial do joelho, entre o côndilo femoral medial e o platô tibial medial, com o menisco medial interposto.", landmark: "Joelho — lado interno (medial), onde se insere o ligamento cruzado medial", quickTip: "O menisco medial é menos móvel que o lateral (fixado ao ligamento colateral medial), por isso é mais lesionado. A 'tríade infeliz' é a lesão conjunta de menisco medial + LCA + LCM." },
    options: ["Tibiofemoral medial", "Tibiofemoral lateral", "Patelofemoral", "Tibiofibular proximal", "Umeroulnar"],
    correctAnswer: "Tibiofemoral medial",
    explanation: { name: "Compartimento Tibiofemoral Medial", location: "Lado medial (interno) do joelho, entre o côndilo femoral medial e o platô tibial medial.", function: "Sustenta e transmite forças de carga (mais carga que o lateral em posição ereta). Permite flexão, extensão e rotação axial do joelho.", characteristics: "O menisco medial (forma de C) interpõe-se entre as superfícies, aumentando a congruência. É menos móvel que o lateral. O LCM (ligamento colateral medial) estabiliza esse compartimento contra forças em valgo.", relations: "Côndilo femoral medial, platô tibial medial, menisco medial, LCA, LCP, LCM.", memoryTips: "MEDIAL = lado de dentro do joelho. 'Tríade infeliz': LCM + menisco medial + LCA. Artrose de joelho começa frequentemente no compartimento medial." }
  },
  {
    id: "art-9", category: "joelho", boneName: "Tibiofemoral lateral",
    visualReference: { view: "text", hint: "Compartimento lateral do joelho, entre o côndilo femoral lateral e o platô tibial lateral, com o menisco lateral interposto.", landmark: "Joelho — lado externo (lateral)", quickTip: "O menisco lateral é mais circular e mais móvel que o medial, por isso menos lesionado. Cisto de Baker pode ocorrer na parte posterior deste compartimento." },
    options: ["Tibiofemoral lateral", "Tibiofemoral medial", "Patelofemoral", "Tibiofibular proximal", "Sacroilíaca"],
    correctAnswer: "Tibiofemoral lateral",
    explanation: { name: "Compartimento Tibiofemoral Lateral", location: "Lado lateral (externo) do joelho, entre o côndilo femoral lateral e o platô tibial lateral.", function: "Transmite cargas, especialmente em atividades como corrida onde a força lateral é maior. Participa da flexão, extensão e rotação axial.", characteristics: "O menisco lateral (forma de O, quase circular) é mais móvel que o medial. O LCL (ligamento colateral lateral ou fibular) estabiliza contra forças em varo. O nervo fibular comum contorna a cabeça da fíbula próximo daqui.", relations: "Côndilo femoral lateral, platô tibial lateral, menisco lateral, LCL, tendão do poplíteo.", memoryTips: "LATERAL = lado de fora do joelho. Menisco lateral = mais redondo e mais móvel = menos lesionado. LCL protege contra o varo (joelho 'arqueado')." }
  },
  {
    id: "art-10", category: "joelho", boneName: "Patelofemoral",
    visualReference: { view: "text", hint: "Articulação entre a face posterior da patela e a superfície patelar (troclear) do fêmur.", landmark: "Frente do joelho — onde a 'rodela' desliza sobre o fêmur", quickTip: "A patela desliza para cima e para baixo na extensão e flexão. Quando 'sai do trilho', temos a síndrome da dor patelofemoral (muito comum em corredores)." },
    options: ["Patelofemoral", "Tibiofemoral medial", "Tibiofemoral lateral", "Tibiofibular proximal", "Umerorradial"],
    correctAnswer: "Patelofemoral",
    explanation: { name: "Articulação Patelofemoral", location: "Entre a face articular posterior da patela e a superfície troclear (patelar) anterior do fêmur.", function: "Permite o deslizamento da patela na tróclea femoral durante flexão e extensão do joelho. Aumenta o braço de alavanca do quadríceps em até 50%.", characteristics: "A patela desliza 7–8 cm durante o arco completo de movimento. Na extensão completa, a patela fica acima da tróclea; na flexão profunda encaixa profundamente. A cartilagem patelar posterior é a mais espessa do corpo.", relations: "Patela, fêmur, tendão do quadríceps (acima), ligamento patelar (abaixo), retináculos medial e lateral.", memoryTips: "PATELA + FÊMUR. 'Joelho de corredor' (síndrome patelofemoral) = patela mal alinhada na tróclea. Condromalácia patelar = desgaste da cartilagem posterior da patela." }
  },
  {
    id: "art-11", category: "joelho", boneName: "Tibiofibular proximal",
    visualReference: { view: "text", hint: "Articulação sinovial plana entre a cabeça da fíbula e o côndilo lateral da tíbia, logo abaixo do joelho.", landmark: "Abaixo do joelho lateral — onde a fíbula se articula com a tíbia", quickTip: "Articulação de baixa mobilidade mas importante: o nervo fibular comum passa ao redor da cabeça da fíbula exatamente aqui, sendo vulnerável a lesões." },
    options: ["Tibiofibular proximal", "Tibiofibular distal", "Tibiofemoral lateral", "Patelofemoral", "Radioulnar proximal"],
    correctAnswer: "Tibiofibular proximal",
    explanation: { name: "Articulação Tibiofibular Proximal", location: "Entre a face articular da cabeça da fíbula e a faceta fibular no côndilo lateral da tíbia.", function: "Permite pequenos movimentos de deslizamento durante a dorsiflexão do tornozelo (a fíbula sobe ligeiramente). Transmite pequenas forças laterais.", characteristics: "Articulação sinovial plana com cápsula reforçada pelos ligamentos tibiofibulares anterior e posterior. Baixa mobilidade. O nervo fibular comum (ciático poplíteo externo) contorna a cabeça da fíbula — vulnerável a compressão.", relations: "Tíbia (côndilo lateral), fíbula (cabeça), nervo fibular comum, músculo poplíteo.", memoryTips: "TÍBIA + FÍBULA + PROXIMAL (próxima do joelho). Cuidado ao aplicar gesso ou comprimir a cabeça da fíbula: nervo fibular ali = pé caído (drop foot) se lesado." }
  },

  // --- PELVE ---
  {
    id: "art-12", category: "pelve", boneName: "Sacroilíaca",
    visualReference: { view: "text", hint: "Articulação entre o sacro e o osso ilíaco, uma das mais fortes e estáveis do corpo.", landmark: "Região posterior da pelve — as 'covinhas' nas costas baixas marcam sua localização", quickTip: "É uma das articulações mais fortes do corpo, mantida por ligamentos poderosos. Na gravidez, a relaxina a amolece para facilitar o parto." },
    options: ["Sacroilíaca", "Sínfise púbica", "Sacrococcígea", "Lumbossacral", "Coxofemoral"],
    correctAnswer: "Sacroilíaca",
    explanation: { name: "Articulação Sacroilíaca", location: "Entre as faces auriculares do sacro e do osso ilíaco, bilateralmente, na região posterior da pelve.", function: "Transmite o peso do tronco para os membros inferiores. Permite micromovimantos de nutação e contra-nutação. Na gestação, amolece para aumentar o diâmetro do canal do parto.", characteristics: "Artrodial (sinovial) na parte anterior e sindesmótica na posterior. É uma das articulações mais reforçadas do corpo pelos ligamentos sacroilíacos anterior, posterior e interósseo, além dos ligamentos sacrotuberal e sacroespinal.", relations: "Sacro, ilíaco, ligamentos sacroilíacos, músculo piriforme (passa por dentro da articulação).", memoryTips: "SACRO + ILÍACO. As 'covinhas de Vênus' marcam exatamente a articulação sacroilíaca. Dor sacroilíaca é causa comum de lombalgia." }
  },
  {
    id: "art-13", category: "pelve", boneName: "Sínfise púbica",
    visualReference: { view: "text", hint: "Articulação cartilaginosa na linha média anterior da pelve, unindo os dois púbis.", landmark: "Região púbica anterior — a junção dos dois ossos do quadril na frente", quickTip: "Na gravidez, a relaxina amolece esta articulação, podendo causar dor pélvica (disfunção da sínfise púbica). Também pode separar no parto." },
    options: ["Sínfise púbica", "Sacroilíaca", "Sacrococcígea", "Lumbossacral", "Coxofemoral"],
    correctAnswer: "Sínfise púbica",
    explanation: { name: "Sínfise Púbica", location: "Articulação na linha média anterior da pelve, entre os corpos dos dois ossos púbicos.", function: "Estabiliza a pelve anteriormente. Permite pequenos movimentos durante a marcha e a gravidez. Suporta forças de cisalhamento e compressão.", characteristics: "Articulação fibrocartilaginosa (anfiartrrose). Contém um disco fibrocartilaginoso interpúbico. Reforçada pelos ligamentos púbicos superior e inferior (arqueado). Pode se separar até 1 cm sem sintomas.", relations: "Dois ossos púbicos, disco interpúbico, ligamentos púbicos, músculos adutores e abdominais inferiores.", memoryTips: "SÍNFISE = junção. Os dois púbis se 'beijam' na frente pela sínfise. Em futebolistas: 'pubalgia' = tendinopatia dos adutores na sínfise." }
  },
  {
    id: "art-14", category: "pelve", boneName: "Sacrococcígea",
    visualReference: { view: "text", hint: "Articulação entre o ápice do sacro e a base do cóccix.", landmark: "Base da coluna — junção sacro-cóccix, entre as nádegas", quickTip: "Quando você cai sentado e dói 'no rabinho', é nessa articulação e no cóccix que a lesão ocorre. A fratura do cóccix é uma das lesões mais dolorosas." },
    options: ["Sacrococcígea", "Sacroilíaca", "Sínfise púbica", "Lumbossacral", "Tibiofibular proximal"],
    correctAnswer: "Sacrococcígea",
    explanation: { name: "Articulação Sacrococcígea", location: "Entre o ápice do sacro (S5) e a base do cóccix, na porção terminal da coluna vertebral.", function: "Permite pequena flexão e extensão do cóccix. Importante na defecação, parto e ao sentar.", characteristics: "Articulação fibrocartilaginosa similar às articulações intervertebrais. Reforçada pelos ligamentos sacrococcígeos anterior, posterior superficial e posterior profundo. Em mulheres, o cóccix pode fleXionar mais para facilitar o parto.", relations: "Sacro, cóccix, ligamentos sacrococcígeos, músculo coccígeo e levantador do ânus.", memoryTips: "SACRO + CÓCCIX. Queda sentado = dor sacrococcígea. O cóccix pode fraturar ou luxar desta articulação. Sentar em almofada em forma de rosca alivia a pressão." }
  },
  {
    id: "art-15", category: "pelve", boneName: "Lumbossacral",
    visualReference: { view: "text", hint: "Articulação entre a 5ª vértebra lombar (L5) e a base do sacro (S1), ponto de maior estresse da coluna.", landmark: "Região lombar baixa — a última articulação antes do sacro", quickTip: "L5-S1 é o nível mais comum de hérnia de disco e espondilólise/espondilolistese. Toda a força da coluna converge neste ponto." },
    options: ["Lumbossacral", "Sacroilíaca", "Sínfise púbica", "Sacrococcígea", "Coxofemoral"],
    correctAnswer: "Lumbossacral",
    explanation: { name: "Articulação Lumbossacral", location: "Entre o corpo de L5, o disco intervertebral L5-S1 e a base do sacro, no ângulo lumbossacral.", function: "Transmite todo o peso da coluna vertebral para a pelve. O ângulo lumbossacral cria uma força de cisalhamento que torna este nível sujeito a espondilolistese.", characteristics: "Composta pela articulação intervertebral (disco L5-S1) e as articulações zigoapofisárias L5-S1. O disco L5-S1 é o mais frequentemente herniado (comprime raízes S1). Liga os ligamentos iliolombares.", relations: "L5, sacro, disco L5-S1, articulações zigoapofisárias, ligamentos iliolombares, raízes nervosas L5 e S1.", memoryTips: "LOMBO + SACRAL. L5-S1 = ponto mais estressado da coluna. 'Dor que irradia para a perna' (ciática) frequentemente vem de hérnia L4-L5 ou L5-S1." }
  },
  {
    id: "art-16", category: "pelve", boneName: "Coxofemoral (quadril)",
    visualReference: { view: "text", hint: "Articulação esferóide entre a cabeça do fêmur e o acetábulo do osso do quadril — a segunda articulação mais móvel após o ombro.", landmark: "Quadril — virilha e região lateral do quadril", quickTip: "É muito mais estável que o ombro porque o acetábulo é profundo (como uma xícara), ao contrário da glenoide rasa. Prótese total de quadril é uma das cirurgias ortopédicas mais realizadas." },
    options: ["Coxofemoral (quadril)", "Sacroilíaca", "Sínfise púbica", "Glenoumeral", "Tibiofemoral medial"],
    correctAnswer: "Coxofemoral (quadril)",
    explanation: { name: "Articulação Coxofemoral", location: "Entre a cabeça esférica do fêmur e o acetábulo (cavidade profunda formada pelo ílio, ísquio e púbis).", function: "Sustenta o peso corporal e transmite forças para o membro inferior. Permite flexão, extensão, abdução, adução, rotação e circundução. Essencial para marcha, corrida e posturas.", characteristics: "Articulação sinovial esferóide. O labrum acetabular aprofunda o acetábulo. Ligamentos muito fortes: iliofemoral (Y de Bigelow — o mais forte do corpo), pubofemoral e isquiofemoral. A bursa iliopectínea é a maior do corpo.", relations: "Fêmur, acetábulo (ílio+ísquio+púbis), labrum, ligamentos iliofemoral/pubofemoral/isquiofemoral, músculo piriforme, vasos e nervos da coxa.", memoryTips: "COXA + FÊMUR. O acetábulo é profundo como uma xícara (acetabulum = vinagreira em latim). Ligamento de Bigelow = em Y = o mais forte do corpo." }
  },
];
