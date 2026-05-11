export const musculosQuizData = [
  // --- FACE - GRUPO LABIAL / BOCHECHAS ---
  {
    id: "musc-1", category: "face", boneName: "Orbicular da boca",
    visualReference: { view: "text", hint: "Músculo circular que circunda os lábios, funcionando como esfíncter da boca.", landmark: "Lábios e região ao redor", quickTip: "Músculo do beijo e do assobio. É o principal esfíncter oral." },
    options: ["Orbicular da boca", "Bucinador", "Levantador do lábio superior", "Zigomático maior", "Risório"],
    correctAnswer: "Orbicular da boca",
    explanation: { name: "Orbicular da boca", location: "Circunda o orifício bucal, formando a maior parte dos lábios.", function: "Aproxima, comprime e protrui os lábios. Fundamental para a fala, mastigação, e expressões como o beijo e o assobio.", characteristics: "É um músculo complexo formado por várias camadas de fibras (algumas próprias, outras derivadas de músculos faciais adjacentes).", relations: "Pele dos lábios, músculos que convergem para o modíolo (ângulo da boca). Inervado pelo nervo facial (VII).", memoryTips: "ORBICULAR = órbita/círculo. O 'círculo da boca'. Bico do beijo = orbicular da boca." }
  },
  {
    id: "musc-2", category: "face", boneName: "Bucinador",
    visualReference: { view: "text", hint: "Músculo profundo da bochecha que a comprime contra os dentes.", landmark: "Bochechas, profundamente", quickTip: "Músculo do 'trompetista' (buccina = trombeta em latim). Mantém a comida entre os dentes durante a mastigação." },
    options: ["Bucinador", "Orbicular da boca", "Masseter", "Risório", "Platisma"],
    correctAnswer: "Bucinador",
    explanation: { name: "Bucinador", location: "Plano profundo da bochecha, entre a maxila e a mandíbula.", function: "Comprime a bochecha contra os dentes molares. Auxilia na mastigação (mantém o alimento no vestíbulo oral), no sopro e na sucção.", characteristics: "É o músculo principal da bochecha. O ducto parotídeo perfura o bucinador para drenar a saliva na boca. Embora auxilie na mastigação, é considerado um músculo da expressão facial (inervado pelo nervo facial).", relations: "Pele e mucosa da bochecha, ducto parotídeo, músculo orbicular da boca, corpo adiposo da bochecha (bola de Bichat) fica superficial a ele.", memoryTips: "BUCINADOR = Buccina (trombeta). Soprar vela, tocar trompete, sugar o canudinho." }
  },
  {
    id: "musc-3", category: "face", boneName: "Levantador do lábio superior",
    visualReference: { view: "text", hint: "Músculo que se origina na maxila e se insere no lábio superior, responsável por elevá-lo.", landmark: "Abaixo da órbita até o lábio superior", quickTip: "Expressa desgosto ou tristeza ao levantar o lábio superior." },
    options: ["Levantador do lábio superior", "Zigomático menor", "Levantador do lábio superior e da asa do nariz", "Risório", "Orbicular da boca"],
    correctAnswer: "Levantador do lábio superior",
    explanation: { name: "Levantador do lábio superior", location: "Região infraorbital (maxila), descendo até o lábio superior.", function: "Eleva e everte o lábio superior. Participa da expressão de tristeza, desdém ou quando mostramos os dentes superiores.", characteristics: "Forma um feixe muscular plano que corre inferiormente a partir da margem infraorbital.", relations: "Maxila (origem), lábio superior (inserção), músculo orbicular do olho (superiormente).", memoryTips: "O nome já diz tudo: LEVANTA o LÁBIO SUPERIOR." }
  },
  {
    id: "musc-4", category: "face", boneName: "Levantador do lábio superior e da asa do nariz",
    visualReference: { view: "text", hint: "Músculo longo e fino que desce ao longo da lateral do nariz, dividindo-se em duas partes para lábio e nariz.", landmark: "Lateral do nariz", quickTip: "O 'músculo do rosnado' (como um cachorro mostrando os dentes e dilatando as narinas)." },
    options: ["Levantador do lábio superior e da asa do nariz", "Levantador do lábio superior", "Nasal", "Corrugador do supercílio", "Risório"],
    correctAnswer: "Levantador do lábio superior e da asa do nariz",
    explanation: { name: "Levantador do lábio superior e da asa do nariz", location: "Origina-se no processo frontal da maxila e desce lateralmente ao nariz.", function: "Eleva o lábio superior E dilata a narina (asa do nariz). Ação clássica de 'rosnar' ou demonstrar nojo/desprezo.", characteristics: "Possui o nome mais longo entre os músculos faciais. Divide-se em dois fascículos (um para a cartilagem alar maior do nariz e outro para o lábio superior).", relations: "Processo frontal da maxila, osso nasal, cartilagens nasais, orbicular da boca.", memoryTips: "Nome gigante = função dupla (levanta o lábio E a asa do nariz). Expressão de cheiro ruim (nojo)." }
  },
  {
    id: "musc-5", category: "face", boneName: "Zigomático maior",
    visualReference: { view: "text", hint: "Músculo que se estende do osso zigomático até o ângulo da boca. O principal músculo do sorriso alegre.", landmark: "Da maçã do rosto até o canto da boca", quickTip: "Músculo do SORRISO verdadeiro e franco (sorriso de Duchenne, junto com o orbicular do olho)." },
    options: ["Zigomático maior", "Zigomático menor", "Risório", "Levantador do ângulo da boca", "Bucinador"],
    correctAnswer: "Zigomático maior",
    explanation: { name: "Zigomático maior", location: "Face lateral (bochecha), estendendo-se oblíquamente do osso zigomático ao modíolo (ângulo da boca).", function: "Puxa o ângulo da boca para cima e para fora. É o principal músculo responsável pelo sorriso franco e alegre.", characteristics: "É mais lateral e inferior em relação ao zigomático menor. Em algumas pessoas, é bífido, o que causa as 'covinhas' na bochecha ao sorrir.", relations: "Osso zigomático (origem), modíolo do ângulo da boca (inserção).", memoryTips: "ZIGOMÁTICO MAIOR = SORRISO MAIOR. O sorriso largo que puxa o canto da boca para a orelha." }
  },
  {
    id: "musc-6", category: "face", boneName: "Zigomático menor",
    visualReference: { view: "text", hint: "Músculo medial ao zigomático maior, também atua no lábio superior.", landmark: "Da maçã do rosto até o lábio superior, medial ao zigomático maior", quickTip: "Auxilia no sorriso e na expressão de desdém (sorriso amarelo)." },
    options: ["Zigomático menor", "Zigomático maior", "Levantador do lábio superior", "Risório", "Levantador do ângulo da boca"],
    correctAnswer: "Zigomático menor",
    explanation: { name: "Zigomático menor", location: "Origina-se no osso zigomático, medialmente ao zigomático maior, e se insere no lábio superior.", function: "Eleva o lábio superior, expondo os dentes maxilares. Auxilia na expressão de sorriso, mas também de desdém ou tristeza.", characteristics: "É um músculo fino e cilíndrico, situado paralelamente ao zigomático maior.", relations: "Osso zigomático, lábio superior, músculo zigomático maior (lateral a ele).", memoryTips: "ZIGOMÁTICO MENOR = SORRISO MENOR / sorriso cínico. Fica 'por dentro' (medial) do zigomático maior." }
  },
  {
    id: "musc-7", category: "face", boneName: "Levantador do ângulo da boca",
    visualReference: { view: "text", hint: "Músculo profundo que se origina na maxila (fossa canina) e eleva o canto da boca.", landmark: "Profundo à maçã do rosto e lábio superior, indo para o canto da boca", quickTip: "Auxilia no sorriso, levantando especificamente o canto (ângulo) da boca." },
    options: ["Levantador do ângulo da boca", "Levantador do lábio superior", "Zigomático maior", "Risório", "Bucinador"],
    correctAnswer: "Levantador do ângulo da boca",
    explanation: { name: "Levantador do ângulo da boca", location: "Plano mais profundo, origina-se na fossa canina da maxila (abaixo do forame infraorbital) e insere-se no modíolo.", function: "Eleva o ângulo (canto) da boca. Auxilia o zigomático maior no sorriso.", characteristics: "Anteriormente chamado de músculo canino (devido à origem na fossa canina).", relations: "Maxila (fossa canina), modíolo (ângulo da boca). Profundo aos músculos levantador do lábio superior e zigomáticos.", memoryTips: "O nome define a ação: LEVANTA o ÂNGULO (canto) da boca. Antigo músculo canino." }
  },
  {
    id: "musc-8", category: "face", boneName: "Risório",
    visualReference: { view: "text", hint: "Músculo superficial, fino e transversal na bochecha, que puxa o canto da boca lateralmente.", landmark: "Transversal na bochecha, indo para o canto da boca", quickTip: "Músculo do 'sorriso falso' ou tenso. Puxa os lábios para os lados, sem elevar (sorriso de Monalisa)." },
    options: ["Risório", "Bucinador", "Zigomático maior", "Platisma", "Orbicular da boca"],
    correctAnswer: "Risório",
    explanation: { name: "Risório", location: "Fáscia sobre a glândula parótida e masseter (origem) até o modíolo no ângulo da boca (inserção).", function: "Retrai o ângulo da boca lateralmente. Produz um sorriso tenso, sorriso forçado ou de ironia.", characteristics: "Músculo altamente variável, muitas vezes fino e pouco desenvolvido ou ausente em algumas pessoas.", relations: "Fáscia parotídea/massetérica, modíolo. Superficial ao bucinador.", memoryTips: "RISÓRIO = Riso falso/tenso. Aquele sorriso 'esticado' para os lados." }
  },
  {
    id: "musc-9", category: "face", boneName: "Depressor do ângulo da boca",
    visualReference: { view: "text", hint: "Músculo triangular no queixo que puxa o canto da boca para baixo.", landmark: "Do canto da boca para a borda inferior da mandíbula", quickTip: "O 'músculo da tristeza'. Puxa o canto da boca para baixo na expressão clássica de choro ou melancolia." },
    options: ["Depressor do ângulo da boca", "Depressor do lábio inferior", "Mentual", "Platisma", "Risório"],
    correctAnswer: "Depressor do ângulo da boca",
    explanation: { name: "Depressor do ângulo da boca", location: "Origina-se na linha oblíqua da mandíbula e se insere no modíolo (ângulo da boca).", function: "Puxa o ângulo da boca para baixo e lateralmente. Expressão de tristeza, pesar ou desgosto.", characteristics: "Também conhecido como músculo triangular (devido ao seu formato). Suas fibras convergem para o canto da boca.", relations: "Mandíbula, modíolo. Superficial ao depressor do lábio inferior.", memoryTips: "DEPRESSOR = para baixo. ÂNGULO = canto. Canto da boca para baixo = Tristeza." }
  },
  {
    id: "musc-10", category: "face", boneName: "Depressor do lábio inferior",
    visualReference: { view: "text", hint: "Músculo quadrangular no queixo que puxa o lábio inferior para baixo.", landmark: "Do lábio inferior até a mandíbula", quickTip: "Puxa o lábio inferior para baixo e para fora, usado em expressões de ironia, beicinho ou escovação dos dentes inferiores." },
    options: ["Depressor do lábio inferior", "Depressor do ângulo da boca", "Mentual", "Platisma", "Orbicular da boca"],
    correctAnswer: "Depressor do lábio inferior",
    explanation: { name: "Depressor do lábio inferior", location: "Origina-se na linha oblíqua da mandíbula (medial e profundo ao depressor do ângulo da boca) e insere-se no lábio inferior.", function: "Deprime e everte (vira para fora) o lábio inferior. Contribui para a expressão de melancolia ou ironia.", characteristics: "Anteriormente chamado de quadrado do lábio inferior.", relations: "Mandíbula, lábio inferior. Profundo e medial em relação ao depressor do ângulo da boca.", memoryTips: "O nome já diz: puxa O LÁBIO (e não o canto) para baixo. Beicinho inferior." }
  },
  {
    id: "musc-11", category: "face", boneName: "Mentual",
    visualReference: { view: "text", hint: "Músculo do queixo que eleva e protrui o lábio inferior, enrugando a pele do queixo.", landmark: "Ponta do queixo (mento)", quickTip: "O 'músculo da dúvida' ou do beicinho de choro. É ele que enruga o queixo (aspecto de casca de laranja) quando forçado." },
    options: ["Mentual", "Depressor do lábio inferior", "Depressor do ângulo da boca", "Orbicular da boca", "Platisma"],
    correctAnswer: "Mentual",
    explanation: { name: "Mentual", location: "Origina-se na mandíbula (fossa incisiva) e insere-se na pele do queixo (mento).", function: "Eleva e protrui o lábio inferior, e eleva e enruga a pele do queixo. Expressão de dúvida, beicinho de choro em crianças.", characteristics: "Também chamado de mentoniano. Fibras descem verticalmente da mandíbula para a pele do mento.", relations: "Mandíbula, pele do queixo.", memoryTips: "MENTUAL = MENTO = queixo. Enruga o queixo e faz beicinho de dúvida/choro." }
  },

  // --- FACE - GRUPO NASAL ---
  {
    id: "musc-12", category: "face", boneName: "Nasal",
    visualReference: { view: "text", hint: "Músculo sobre o dorso do nariz, com duas partes: transversa e alar.", landmark: "Dorso do nariz e asas das narinas", quickTip: "A parte transversa comprime a narina, a parte alar dilata (abre) a narina." },
    options: ["Nasal", "Prócero", "Corrugador do supercílio", "Levantador do lábio superior e da asa do nariz", "Orbicular do olho"],
    correctAnswer: "Nasal",
    explanation: { name: "Nasal", location: "Cobre o dorso e as asas do nariz.", function: "Possui duas porções com funções opostas: a parte transversa (comprime a abertura nasal) e a parte alar (dilata as narinas, como na respiração profunda ou raiva).", characteristics: "A parte transversa cruza o dorso do nariz como uma faixa. A parte alar se insere na cartilagem alar do nariz.", relations: "Maxila (origem), aponeurose nasal e cartilagem alar (inserção).", memoryTips: "NASAL = Nariz. Dilata e comprime o nariz. 'Respirar fundo' = parte alar do nasal." }
  },
  {
    id: "musc-13", category: "face", boneName: "Prócero",
    visualReference: { view: "text", hint: "Pequeno músculo vertical entre as sobrancelhas, que puxa a pele para baixo enrugando o dorso do nariz.", landmark: "Entre as sobrancelhas, base do nariz (glabela)", quickTip: "Cria as rugas horizontais sobre a raiz do nariz, associadas à expressão de 'cara de mau', agressividade ou concentração." },
    options: ["Prócero", "Nasal", "Corrugador do supercílio", "Occipitofrontal", "Depressor do supercílio"],
    correctAnswer: "Prócero",
    explanation: { name: "Prócero", location: "Origina-se sobre o osso nasal e cartilagem nasal lateral, inserindo-se na pele da fronte inferior entre as sobrancelhas.", function: "Traciona o ângulo medial da sobrancelha inferiormente, produzindo pregas transversais sobre a raiz do nariz. Expressão de franzir a testa com raiva/concentração.", characteristics: "Fibras fundem-se com o ventre frontal do músculo occipitofrontal superiormente.", relations: "Osso nasal, pele da glabela.", memoryTips: "PRÓCERO = cara de mau / cheiro ruim. Faz as rugas HORIZONTAIS na raiz do nariz." }
  },

  // --- FACE - GRUPO ORBITAL ---
  {
    id: "musc-14", category: "face", boneName: "Orbicular do olho",
    visualReference: { view: "text", hint: "Músculo circular esfincteriano que envolve a órbita ocular.", landmark: "Ao redor dos olhos e pálpebras", quickTip: "É o músculo que pisca, fecha os olhos com força e forma os 'pés de galinha' ao sorrir." },
    options: ["Orbicular do olho", "Corrugador do supercílio", "Depressor do supercílio", "Prócero", "Occipitofrontal"],
    correctAnswer: "Orbicular do olho",
    explanation: { name: "Orbicular do olho", location: "Circunda a órbita e forma a pálpebra.", function: "Fecha as pálpebras. A parte palpebral fecha suavemente (piscar, dormir). A parte orbital fecha com força (proteger o olho do sol, poeira). Contribui para o escoamento das lágrimas (parte lacrimal).", characteristics: "Músculo esfíncter. Lesão do nervo facial paralisa esse músculo, impedindo o fechamento do olho (lagoftalmia), podendo causar úlcera de córnea.", relations: "Pálpebras, osso frontal, maxila, ligamento palpebral.", memoryTips: "ORBICULAR DO OLHO = Esfíncter do olho. Piscar, apertar os olhos e 'pé de galinha'." }
  },
  {
    id: "musc-15", category: "face", boneName: "Corrugador do supercílio",
    visualReference: { view: "text", hint: "Músculo pequeno e profundo que traciona as sobrancelhas medialmente e para baixo.", landmark: "Profundo à extremidade medial das sobrancelhas", quickTip: "Cria as rugas verticais entre as sobrancelhas (glabela). O músculo da 'preocupação'." },
    options: ["Corrugador do supercílio", "Prócero", "Orbicular do olho", "Depressor do supercílio", "Occipitofrontal"],
    correctAnswer: "Corrugador do supercílio",
    explanation: { name: "Corrugador do supercílio", location: "Extremidade medial do arco superciliar do frontal, profundo ao músculo occipitofrontal.", function: "Traciona as sobrancelhas medialmente e inferiormente. Produz as rugas verticais características da preocupação, dor ou concentração.", characteristics: "Músculo profundo. É o alvo principal das injeções de toxina botulínica (Botox) para rugas da glabela.", relations: "Osso frontal, pele da metade medial da sobrancelha.", memoryTips: "CORRUGADOR = Corrugar/franzir. Rugas VERTICAIS de preocupação entre os olhos (músculo '11')." }
  },
  {
    id: "musc-16", category: "face", boneName: "Depressor do supercílio",
    visualReference: { view: "text", hint: "Fibras muitas vezes consideradas parte do orbicular do olho, tracionando a sobrancelha inferiormente.", landmark: "Base medial da sobrancelha", quickTip: "Auxilia o corrugador e o prócero a deprimir a sobrancelha, fechando a expressão." },
    options: ["Depressor do supercílio", "Corrugador do supercílio", "Prócero", "Levantador do lábio superior e da asa do nariz", "Nasal"],
    correctAnswer: "Depressor do supercílio",
    explanation: { name: "Depressor do supercílio", location: "Origina-se da porção nasal do osso frontal e insere-se na pele sob a sobrancelha.", function: "Deprime a pele do supercílio (sobrancelha), facilitando o fechamento do olho e participando de expressões de tristeza/raiva.", characteristics: "Frequentemente descrito como um feixe medial da parte orbital do músculo orbicular do olho.", relations: "Osso frontal, pele da sobrancelha.", memoryTips: "DEPRESSOR = para baixo. SUPERCÍLIO = sobrancelha. Abaixa a sobrancelha." }
  },

  // --- FACE - GRUPO EPICRANIANO ---
  {
    id: "musc-17", category: "face", boneName: "Occipitofrontal",
    visualReference: { view: "text", hint: "Músculo vasto com dois ventres (frontal e occipital) conectados por uma aponeurose no topo do crânio.", landmark: "Testa (ventre frontal) e nuca (ventre occipital)", quickTip: "O ventre frontal levanta as sobrancelhas (expressão de surpresa/espanto) e forma as rugas horizontais na testa." },
    options: ["Occipitofrontal", "Platisma", "Auricular superior", "Prócero", "Corrugador do supercílio"],
    correctAnswer: "Occipitofrontal",
    explanation: { name: "Occipitofrontal (Ventre Frontal e Occipital)", location: "Cobre a calvária (abóbada craniana) de trás (occipital) para a frente (frontal).", function: "Ventre frontal: eleva as sobrancelhas e enruga a testa horizontalmente (surpresa). Ventre occipital: retrai o couro cabeludo, fixando a galea aponeurótica.", characteristics: "Os dois ventres musculares são unidos pela galea aponeurótica (aponeurose epicraniana). Não tem fixação óssea anterior (insere-se na pele da sobrancelha).", relations: "Pele da fronte, osso occipital, aponeurose epicraniana.", memoryTips: "OCCIPITO-FRONTAL = do occipital (nuca) ao frontal (testa). Testa enrugada de surpresa!" }
  },
  {
    id: "musc-18", category: "face", boneName: "Platisma",
    visualReference: { view: "text", hint: "Músculo largo, fino e superficial que cobre a parte anterior e lateral do pescoço, indo até a mandíbula.", landmark: "Pescoço superficial", quickTip: "O 'músculo do terror'. Estica a pele do pescoço e puxa a mandíbula para baixo em expressões de susto extremo ou estresse intenso (esforço físico)." },
    options: ["Platisma", "Esternocleidomastóideo", "Occipitofrontal", "Depressor do ângulo da boca", "Risório"],
    correctAnswer: "Platisma",
    explanation: { name: "Platisma", location: "Tecido subcutâneo da região cervical, estendendo-se da fáscia do peitoral/deltoide até a base da mandíbula.", function: "Traciona inferiormente o lábio inferior e ângulo da boca. Estica e enruga a pele do pescoço. Auxilia levemente a baixar a mandíbula. Expressão de pavor.", characteristics: "É um músculo da expressão facial que migrou para o pescoço (inervado pelo ramo cervical do nervo facial).", relations: "Pele do pescoço, clavícula, fáscia peitoral, mandíbula. Superficial a tudo no pescoço (veia jugular externa corre abaixo dele).", memoryTips: "PLATISMA = prato/plano. O 'lençol' do pescoço. Expressão do 'grito' do quadro de Edvard Munch." }
  },

  // --- FACE - GRUPO AURICULAR ---
  {
    id: "musc-19", category: "face", boneName: "Auricular anterior",
    visualReference: { view: "text", hint: "Músculo fino e pequeno na frente da orelha (pavilhão auricular).", landmark: "Na frente da orelha", quickTip: "Traciona a orelha ligeiramente para a frente e para cima. Vestigial em humanos." },
    options: ["Auricular anterior", "Auricular superior", "Auricular posterior", "Occipitofrontal", "Temporal"],
    correctAnswer: "Auricular anterior",
    explanation: { name: "Auricular anterior", location: "Origina-se da fáscia temporal (anterior à orelha) e insere-se na parte anterior da espinha da hélice (orelha).", function: "Puxa o pavilhão auricular para a frente e para cima.", characteristics: "Músculo rudimentar/vestigial na maioria dos humanos. Algumas pessoas conseguem movê-lo voluntariamente.", relations: "Fáscia temporal, pavilhão da orelha.", memoryTips: "AURICULAR = Orelha. ANTERIOR = Frente." }
  },
  {
    id: "musc-20", category: "face", boneName: "Auricular superior",
    visualReference: { view: "text", hint: "Maior dos músculos auriculares, situado acima da orelha.", landmark: "Acima da orelha", quickTip: "Eleva a orelha. Também vestigial." },
    options: ["Auricular superior", "Auricular anterior", "Auricular posterior", "Occipitofrontal", "Temporal"],
    correctAnswer: "Auricular superior",
    explanation: { name: "Auricular superior", location: "Origina-se da aponeurose epicraniana (acima da orelha) e insere-se na parte superior da superfície craniana do pavilhão auricular.", function: "Puxa o pavilhão auricular para cima (elevação).", characteristics: "Geralmente o mais desenvolvido dos três auriculares, embora ainda vestigial em humanos (muito útil em cães/gatos para direcionar audição).", relations: "Galea aponeurótica, pavilhão auricular.", memoryTips: "AURICULAR = Orelha. SUPERIOR = Cima." }
  },
  {
    id: "musc-21", category: "face", boneName: "Auricular posterior",
    visualReference: { view: "text", hint: "Músculo pequeno situado atrás da orelha, sobre o processo mastóide.", landmark: "Atrás da orelha", quickTip: "Traciona a orelha para trás." },
    options: ["Auricular posterior", "Auricular superior", "Auricular anterior", "Occipital", "Esternocleidomastóideo"],
    correctAnswer: "Auricular posterior",
    explanation: { name: "Auricular posterior", location: "Origina-se do processo mastóide do osso temporal e insere-se na parte inferior da superfície craniana da concha (orelha).", function: "Puxa o pavilhão auricular para trás.", characteristics: "Consiste geralmente em 2 ou 3 pequenos fascículos musculares. Vestigial.", relations: "Processo mastóide, pavilhão auricular.", memoryTips: "AURICULAR = Orelha. POSTERIOR = Atrás." }
  }
];
