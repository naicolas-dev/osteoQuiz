export const specialQuizData = [
  {
    id: "sp-1", category: "geral", boneName: "Conceito de Articulação",
    questionText: "O que são articulações?",
    visualReference: { view: "text", hint: "São estruturas formadas por dois ou mais ossos, também chamadas de junturas.", quickTip: "Articulação = encontro entre ossos." },
    options: [
      "Estruturas formadas apenas por músculos",
      "Estruturas formadas por dois ou mais ossos",
      "Estruturas que existem apenas no crânio",
      "Estruturas que produzem sangue",
      "Estruturas exclusivas dos órgãos internos"
    ],
    correctAnswer: "Estruturas formadas por dois ou mais ossos",
    explanation: { 
      name: "Conceito de Articulação", 
      location: "Todo o esqueleto", 
      function: "Articulação é o local onde dois ou mais ossos se encontram. Algumas permitem bastante movimento, outras quase nenhum.", 
      characteristics: "Podem ser fibrosas, cartilaginosas ou sinoviais, dependendo do tecido que as une.", 
      relations: "Conectam ossos entre si e também ossos a cartilagens ou dentes.", 
      memoryTips: "Articulação = encontro entre ossos." 
    }
  },
  {
    id: "sp-2", category: "geral", boneName: "Sinartrose",
    questionText: "Qual tipo de articulação não possui mobilidade?",
    visualReference: { view: "text", hint: "Sinartrose: articulações que não possuem mobilidade.", quickTip: "Sinartrose = sem movimento." },
    options: [
      "Sinartrose",
      "Anfiartrose",
      "Diartrose",
      "Sinovial",
      "Esferoidal"
    ],
    correctAnswer: "Sinartrose",
    explanation: { 
      name: "Sinartrose", 
      location: "Principalmente no crânio (suturas) e na face.",
      function: "A sinartrose é uma articulação imóvel ou quase imóvel, cuja função principal é garantir proteção forte e sustentação.", 
      characteristics: "São articulações fibrosas. Com o envelhecimento, algumas podem ossificar completamente (sinostose).",
      relations: "Ossos do crânio, dentes e maxilares.",
      memoryTips: "Sinartrose = sem movimento." 
    }
  },
  {
    id: "sp-3", category: "geral", boneName: "Anfiartrose",
    questionText: "Qual tipo de articulação é semimóvel?",
    visualReference: { view: "text", hint: "Anfiartroses: são articulações semimóveis.", quickTip: "Anfiartrose = movimento intermediário." },
    options: [
      "Sinartrose",
      "Anfiartrose",
      "Diartrose",
      "Gonfose",
      "Sutura"
    ],
    correctAnswer: "Anfiartrose",
    explanation: { 
      name: "Anfiartrose", 
      location: "Coluna vertebral e sínfise púbica.",
      function: "A anfiartrose permite pouco movimento. Ela fica entre a articulação imóvel e a articulação muito móvel, suportando peso e absorvendo choque.", 
      characteristics: "São articulações cartilaginosas, geralmente unidas por fibrocartilagem ou cartilagem hialina.",
      relations: "Corpos vertebrais (discos) e ossos do quadril (púbis).",
      memoryTips: "Anfiartrose = movimento intermediário." 
    }
  },
  {
    id: "sp-4", category: "geral", boneName: "Diartrose",
    questionText: "Qual tipo de articulação possui muita mobilidade?",
    visualReference: { view: "text", hint: "Diartroses: possuem muita mobilidade.", quickTip: "Diartrose = articulação que mexe bastante." },
    options: [
      "Sinartrose",
      "Sutura",
      "Gonfose",
      "Diartrose",
      "Sincondrose"
    ],
    correctAnswer: "Diartrose",
    explanation: { 
      name: "Diartrose", 
      location: "Membros superiores e inferiores (ombro, cotovelo, joelho, etc).",
      function: "Diartroses são articulações móveis, responsáveis por ampla gama de movimentos do corpo.", 
      characteristics: "São estruturalmente as articulações sinoviais, caracterizadas por possuírem cápsula articular, cavidade e líquido sinovial.",
      relations: "Relacionam-se fortemente com músculos esqueléticos, ligamentos e tendões para sua estabilização.",
      memoryTips: "Diartrose = articulação que mexe bastante." 
    }
  },
  {
    id: "sp-5", category: "geral", boneName: "Sutura",
    questionText: "Qual articulação une os ossos do crânio e não tem movimento?",
    visualReference: { view: "text", hint: "Sutura: não tem movimento. Exemplo: ossos do crânio.", quickTip: "Sutura parece uma “costura” entre os ossos do crânio." },
    options: [
      "Gonfose",
      "Sutura",
      "Gínglimo",
      "Selar",
      "Trocoide"
    ],
    correctAnswer: "Sutura",
    explanation: { 
      name: "Sutura", 
      location: "Exclusivas do crânio.",
      function: "As suturas mantêm os ossos do crânio fortemente unidos para proteger o encéfalo.", 
      characteristics: "Tipo de sinartrose (fibrosa) em que os ossos são intertravados e unidos por um fina camada de tecido conjuntivo denso.",
      relations: "Ossos frontal, parietais, occipital, temporais e outros ossos cranianos.",
      memoryTips: "Sutura parece uma “costura” entre os ossos do crânio." 
    }
  },
  {
    id: "sp-6", category: "geral", boneName: "Gonfose",
    questionText: "Qual articulação prende o dente ao osso?",
    visualReference: { view: "text", hint: "Gonfose: dente e mandíbula/maxilares.", quickTip: "Gonfose = dente encaixado no osso." },
    options: [
      "Sutura",
      "Sindesmose",
      "Gonfose",
      "Diartrose",
      "Gínglimo"
    ],
    correctAnswer: "Gonfose",
    explanation: { 
      name: "Gonfose", 
      location: "Arcadas dentárias (maxila e mandíbula).",
      function: "A gonfose é a articulação que fixa a raiz do dente ao alvéolo ósseo, suportando as forças de mastigação.", 
      characteristics: "Articulação fibrosa semelhante a um pino encaixado em um buraco. Única articulação que não une um osso a outro osso (une dente a osso).",
      relations: "Raiz dentária, osso alveolar e ligamento periodontal.",
      memoryTips: "Gonfose = dente encaixado no osso." 
    }
  },
  {
    id: "sp-7", category: "geral", boneName: "Membrana sinovial",
    questionText: "Qual estrutura produz o líquido sinovial?",
    visualReference: { view: "text", hint: "Membrana sinovial e líquido sinovial.", quickTip: "Membrana sinovial → líquido sinovial." },
    options: [
      "Ligamento",
      "Tendão",
      "Membrana sinovial",
      "Menisco",
      "Cartilagem costal"
    ],
    correctAnswer: "Membrana sinovial",
    explanation: { 
      name: "Membrana sinovial", 
      location: "Parte interna da cápsula articular das diartroses.",
      function: "A membrana sinovial produz o líquido sinovial, que lubrifica a articulação e nutre a cartilagem avascular.", 
      characteristics: "Tecido conjuntivo especializado, altamente vascularizado e flexível.",
      relations: "Reveste a cavidade articular e fica internamente à cápsula fibrosa externa.",
      memoryTips: "Membrana sinovial → líquido sinovial." 
    }
  },
  {
    id: "sp-8", category: "geral", boneName: "Líquido sinovial",
    questionText: "Qual é a principal função do líquido sinovial?",
    visualReference: { view: "text", hint: "Líquido sinovial: serve para lubrificar.", quickTip: "Líquido sinovial = “óleo” da articulação." },
    options: [
      "Lubrificar a articulação",
      "Prender o dente ao osso",
      "Produzir músculo",
      "Formar ossos do crânio",
      "Controlar a respiração"
    ],
    correctAnswer: "Lubrificar a articulação",
    explanation: { 
      name: "Líquido sinovial", 
      location: "Dentro da cavidade articular das articulações sinoviais.",
      function: "O líquido sinovial reduz o atrito entre as partes da articulação, facilitando o movimento suave.", 
      characteristics: "Fluido claro ou amarelado, viscoso (semelhante à clara de ovo), rico em ácido hialurônico.",
      relations: "Cartilagem articular (que ele nutre e protege) e membrana sinovial.",
      memoryTips: "Líquido sinovial = “óleo” da articulação." 
    }
  },
  {
    id: "sp-9", category: "geral", boneName: "Ligamento",
    questionText: "Qual estrutura estabiliza a articulação ligando osso a osso?",
    visualReference: { view: "text", hint: "Ligamentos: estabilizam a articulação.", quickTip: "Ligamento liga osso com osso." },
    options: [
      "Tendão",
      "Ligamento",
      "Músculo liso",
      "Líquido sinovial",
      "Cemento"
    ],
    correctAnswer: "Ligamento",
    explanation: { 
      name: "Ligamento", 
      location: "Ao redor e dentro de articulações em todo o corpo.",
      function: "Ligamentos unem ossos a ossos, restringindo movimentos anormais e ajudando a manter a articulação firme e estável.", 
      characteristics: "Cordões ou faixas muito fortes e inelásticas de tecido conjuntivo fibroso denso.",
      relations: "Ossos vizinhos e cápsula articular. (Diferente dos tendões, que ligam músculo a osso).",
      memoryTips: "Ligamento liga osso com osso." 
    }
  },
  {
    id: "sp-10", category: "geral", boneName: "Esferoidal",
    questionText: "Qual tipo de articulação sinovial é chamada de “bola de soquete”?",
    visualReference: { view: "text", hint: "Esferoidal: articulação sinovial em formato de bola de soquete.", quickTip: "Esferoidal lembra esfera, ou seja, bola." },
    options: [
      "Gínglimo",
      "Plana",
      "Esferoidal",
      "Trocoide",
      "Selar"
    ],
    correctAnswer: "Esferoidal",
    explanation: { 
      name: "Esferoidal", 
      location: "Grandes articulações da raiz dos membros (ombro e quadril).",
      function: "A articulação esferoidal é a que possui maior grau de liberdade, permitindo movimentos amplos em múltiplos eixos.", 
      characteristics: "Superfície convexa em forma de bola (cabeça) encaixada em uma cavidade côncava (soquete).",
      relations: "Úmero com escápula; fêmur com osso do quadril.",
      memoryTips: "Esferoidal lembra esfera, ou seja, bola." 
    }
  },
  {
    id: "sp-11", category: "geral", boneName: "Exemplos de articulação esferoidal",
    questionText: "Quais articulações são exemplos de articulação esferoidal?",
    visualReference: { view: "text", hint: "Ombro/glenoumeral e quadril/coxofemoral.", quickTip: "Ombro e quadril são articulações de grande mobilidade." },
    options: [
      "Crânio e dente",
      "Ombro e quadril",
      "Cotovelo e joelho",
      "Carpo e tarso",
      "Atlas e áxis"
    ],
    correctAnswer: "Ombro e quadril",
    explanation: { 
      name: "Articulações do Ombro e Quadril", 
      location: "Região escapular e região pélvica.",
      function: "O ombro e o quadril têm formato de bola e encaixe, permitindo movimentos essenciais para o alcance e a locomoção.", 
      characteristics: "Articulações sinoviais multiaxiais, com potentes feixes musculares para suporte mecânico.",
      relations: "A estabilidade do ombro depende mais dos músculos (manguito rotador), enquanto o quadril depende mais de sua conformação óssea profunda e fortes ligamentos.",
      memoryTips: "Ombro e quadril são articulações de grande mobilidade." 
    }
  },
  {
    id: "sp-12", category: "geral", boneName: "Gínglimo",
    questionText: "Qual tipo de articulação funciona como uma dobradiça?",
    visualReference: { view: "text", hint: "Gínglimo: também chamada de dobradiça.", quickTip: "Gínglimo = dobradiça." },
    options: [
      "Gínglimo",
      "Esferoidal",
      "Plana",
      "Gonfose",
      "Sutura"
    ],
    correctAnswer: "Gínglimo",
    explanation: { 
      name: "Gínglimo", 
      location: "Cotovelo, joelho e articulações interfalangeanas dos dedos.",
      function: "A articulação gínglimo permite principalmente a abertura e o fechamento do ângulo articular (flexão e extensão), como uma porta abrindo e fechando.", 
      characteristics: "Articulação sinovial uniaxial, onde a superfície cilíndrica de um osso se encaixa na depressão de outro.",
      relations: "Geralmente estabilizadas por fortes ligamentos colaterais nas laterais para evitar desvios.",
      memoryTips: "Gínglimo = dobradiça." 
    }
  },
  {
    id: "sp-13", category: "geral", boneName: "Exemplos de gínglimo",
    questionText: "Quais são exemplos de articulação gínglimo?",
    visualReference: { view: "text", hint: "Gínglimo: cotovelo e joelho.", quickTip: "Cotovelo e joelho dobram como dobradiça." },
    options: [
      "Ombro e quadril",
      "Cotovelo e joelho",
      "Crânio e dente",
      "Atlas e áxis",
      "Sínfise púbica e disco intervertebral"
    ],
    correctAnswer: "Cotovelo e joelho",
    explanation: { 
      name: "Articulações do Cotovelo e Joelho", 
      location: "Meio do membro superior e meio do membro inferior.",
      function: "Cotovelo e joelho realizam principalmente os movimentos de dobrar (flexão) e estender, essenciais para manusear objetos e andar.", 
      characteristics: "São exemplos clássicos de articulações que operam principalmente no plano sagital como dobradiças rígidas.",
      relations: "Rádio, ulna e úmero; Fêmur, tíbia e patela.",
      memoryTips: "Cotovelo e joelho dobram como dobradiça." 
    }
  },
  {
    id: "sp-14", category: "geral", boneName: "Trocoide",
    questionText: "Qual articulação permite principalmente rotação?",
    visualReference: { view: "text", hint: "Trocoide/pivô: rotação. Exemplo: entre atlas e áxis.", quickTip: "Pivô = girar." },
    options: [
      "Trocoide",
      "Gínglimo",
      "Gonfose",
      "Sutura",
      "Anfiartrose"
    ],
    correctAnswer: "Trocoide",
    explanation: { 
      name: "Trocoide", 
      location: "Pescoço (atlantoaxial) e antebraço (radioulnar).",
      function: "A articulação trocoide, ou pivô, permite unicamente o movimento de rotação (como girar a cabeça para dizer 'não' ou virar a palma da mão para baixo).", 
      characteristics: "Articulação sinovial uniaxial, onde um osso arredondado gira dentro de um anel formado por osso e ligamento.",
      relations: "Vértebras C1 e C2; cabeça do rádio e ulna.",
      memoryTips: "Pivô = girar." 
    }
  },
  {
    id: "sp-15", category: "geral", boneName: "Flexão",
    questionText: "Qual movimento diminui o ângulo entre partes do corpo?",
    visualReference: { view: "text", hint: "Flexão: diminuição do ângulo.", quickTip: "Flexionar = dobrar." },
    options: [
      "Extensão",
      "Flexão",
      "Adução",
      "Abdução",
      "Rotação"
    ],
    correctAnswer: "Flexão",
    explanation: { 
      name: "Flexão", 
      location: "Principalmente nas articulações sinoviais no plano sagital.",
      function: "Flexão é o movimento de dobrar uma articulação, diminuindo o ângulo anatômico entre as partes ósseas conectadas.", 
      characteristics: "Movimento anterior na maioria das articulações (exceto no joelho, onde dobrar é um movimento posterior).",
      relations: "Executada primariamente pelos ventres musculares do compartimento anterior.",
      memoryTips: "Flexionar = dobrar." 
    }
  },
  {
    id: "sp-16", category: "geral", boneName: "Extensão",
    questionText: "Qual movimento aumenta o ângulo entre partes do corpo?",
    visualReference: { view: "text", hint: "Extensão: aumenta o ângulo.", quickTip: "Extensão = esticar." },
    options: [
      "Flexão",
      "Extensão",
      "Supinação",
      "Pronação",
      "Circundução"
    ],
    correctAnswer: "Extensão",
    explanation: { 
      name: "Extensão", 
      location: "Plano sagital, retornando o corpo à posição anatômica.",
      function: "Extensão é o movimento de esticar uma articulação, aumentando o ângulo e endireitando as partes.", 
      characteristics: "É o oposto biomecânico exato da flexão.",
      relations: "Executada primariamente pelos músculos extensores do compartimento posterior dos membros.",
      memoryTips: "Extensão = esticar." 
    }
  },
  {
    id: "sp-17", category: "geral", boneName: "Abdução",
    questionText: "Qual movimento afasta uma parte do corpo da linha média?",
    visualReference: { view: "text", hint: "Abdução: afastamento da linha média.", quickTip: "Abdução = abrir para longe do centro." },
    options: [
      "Adução",
      "Abdução",
      "Flexão",
      "Extensão",
      "Supinação"
    ],
    correctAnswer: "Abdução",
    explanation: { 
      name: "Abdução", 
      location: "Plano coronal.",
      function: "Abdução é quando uma parte do corpo (como o braço ou a perna) se move afastando-se do eixo central sagital.", 
      characteristics: "Comum nas articulações esferoidais e condilares.",
      relations: "Músculos abdutores como o deltoide (ombro) e glúteo médio (quadril).",
      memoryTips: "Abdução = abrir para longe do centro." 
    }
  },
  {
    id: "sp-18", category: "geral", boneName: "Adução",
    questionText: "Qual movimento aproxima uma parte do corpo da linha média?",
    visualReference: { view: "text", hint: "Adução: aproximação da linha média.", quickTip: "Adução = adicionar ao centro." },
    options: [
      "Abdução",
      "Adução",
      "Rotação",
      "Pronação",
      "Circundução"
    ],
    correctAnswer: "Adução",
    explanation: { 
      name: "Adução", 
      location: "Plano coronal.",
      function: "Adução é o movimento de fechamento, quando uma parte do corpo volta em direção à linha média ou a atravessa.", 
      characteristics: "Traz o membro de volta à posição anatômica após uma abdução.",
      relations: "Músculos adutores da coxa e peitoral maior.",
      memoryTips: "Adução = ADICIONAR ao centro." 
    }
  },
  {
    id: "sp-19", category: "geral", boneName: "Masseter",
    questionText: "Qual músculo da mastigação eleva a mandíbula?",
    visualReference: { view: "text", hint: "Masseter: elevação da mandíbula.", quickTip: "Masseter = força da mordida." },
    options: [
      "Masseter",
      "Esternocleidomastoideo",
      "Músculo liso",
      "Músculo cardíaco",
      "Ligamento anular"
    ],
    correctAnswer: "Masseter",
    explanation: { 
      name: "Masseter", 
      location: "Face, cobrindo a região lateral do ramo da mandíbula.",
      function: "O masseter é um potente músculo da mastigação, responsável pela elevação da mandíbula para fechar a boca fortemente.", 
      characteristics: "É um músculo quadrangular, forte e espesso.",
      relations: "Arco zigomático (origem), ângulo e ramo da mandíbula (inserção), nervo trigêmeo (V par).",
      memoryTips: "Masseter = força máxima da mordida." 
    }
  },
  {
    id: "sp-20", category: "geral", boneName: "Esternocleidomastoideo",
    questionText: "Qual músculo faz flexão do pescoço quando os dois lados contraem juntos?",
    visualReference: { view: "text", hint: "Esternocleidomastoideo: contração bilateral faz flexão do pescoço.", quickTip: "Dois lados juntos puxam a cabeça para frente." },
    options: [
      "Masseter",
      "Temporal",
      "Esternocleidomastoideo",
      "Pterigoideo lateral",
      "Músculo liso"
    ],
    correctAnswer: "Esternocleidomastoideo",
    explanation: { 
      name: "Esternocleidomastoideo", 
      location: "Região anterolateral do pescoço, formando uma faixa visível na lateral.",
      function: "Quando os dois lados contraem juntos (bilateral), flexionam o pescoço. Se apenas um lado contrai (unilateral), ele gira e inclina a cabeça.", 
      characteristics: "Músculo bicaudal (possui duas cabeças de origem inferiormente).",
      relations: "Esterno e clavícula (origens) e processo mastoide do osso temporal (inserção).",
      memoryTips: "Dois lados juntos puxam a cabeça para frente (flexão)." 
    }
  },
  {
    id: "sp-21", category: "geral", boneName: "Músculo voluntário",
    questionText: "Qual tipo de músculo é voluntário?",
    visualReference: { view: "text", hint: "Músculo estriado esquelético: voluntário.", quickTip: "Esquelético move o corpo quando você quer." },
    options: [
      "Músculo estriado esquelético",
      "Músculo estriado cardíaco",
      "Músculo liso",
      "Ligamento",
      "Cartilagem"
    ],
    correctAnswer: "Músculo estriado esquelético",
    explanation: { 
      name: "Músculo Estriado Esquelético", 
      location: "Conectado aos ossos do esqueleto, e alguns na pele da face.",
      function: "O músculo estriado esquelético é controlado voluntariamente pela nossa vontade e gera todos os movimentos corporais amplos, fala e postura.", 
      characteristics: "Fibras longas, cilíndricas, multinucleadas e com estrias transversais visíveis no microscópio.",
      relations: "Controlado pelo Sistema Nervoso Somático; liga-se aos ossos pelos tendões.",
      memoryTips: "Esquelético = movimenta o esqueleto = voluntário (você quer, ele move)." 
    }
  },
  {
    id: "sp-22", category: "geral", boneName: "Músculo estriado cardíaco",
    questionText: "Qual tipo de músculo é encontrado no coração?",
    visualReference: { view: "text", hint: "Músculo estriado cardíaco.", quickTip: "Cardíaco = coração." },
    options: [
      "Músculo liso",
      "Músculo estriado cardíaco",
      "Músculo estriado esquelético",
      "Tendão",
      "Ligamento"
    ],
    correctAnswer: "Músculo estriado cardíaco",
    explanation: { 
      name: "Músculo Estriado Cardíaco", 
      location: "Exclusivo do coração, compondo a camada do miocárdio.",
      function: "O músculo estriado cardíaco forma as paredes do coração e bombeia o sangue através de contrações rítmicas vigorosas.", 
      characteristics: "Fibras estriadas, mas curtas e ramificadas. Contração involuntária, contínua e rápida. Possuem discos intercalares que conectam as células.",
      relations: "Autônomo (não precisa do cérebro para bater), recebe regulação simpática e parassimpática.",
      memoryTips: "Cardíaco = coração." 
    }
  },
  {
    id: "sp-23", category: "geral", boneName: "Músculo liso",
    questionText: "Qual tipo de músculo aparece em órgãos como estômago e útero?",
    visualReference: { view: "text", hint: "Músculo liso: estômago e útero.", quickTip: "Liso = órgãos internos." },
    options: [
      "Músculo liso",
      "Músculo estriado cardíaco",
      "Músculo estriado esquelético",
      "Masseter",
      "Temporal"
    ],
    correctAnswer: "Músculo liso",
    explanation: { 
      name: "Músculo Liso", 
      location: "Paredes de órgãos internos ocos, como estômago, bexiga, útero e vasos sanguíneos.",
      function: "Realiza contrações lentas, sustentadas e involuntárias para mover fluidos, alimentos (peristaltismo) ou até empurrar o bebê no parto.", 
      characteristics: "Fibras fusiformes sem estriações transversais visíveis (por isso o nome 'liso'). Possuem um único núcleo central.",
      relations: "Controlado inteiramente pelo Sistema Nervoso Autônomo e por hormônios.",
      memoryTips: "Liso = movimentos internos lentos dos órgãos." 
    }
  },
  {
    id: "sp-24", category: "geral", boneName: "Classificação por mobilidade",
    questionText: "Qual alternativa resume corretamente a classificação por mobilidade?",
    visualReference: { view: "text", hint: "Sinartrose: sem mobilidade. Anfiartrose: semimóvel. Diartrose: muita mobilidade.", quickTip: "Sem, semi, muito: sinartrose, anfiartrose, diartrose." },
    options: [
      "Sinartrose sem mobilidade, anfiartrose semimóvel, diartrose muito móvel",
      "Sinartrose muito móvel, anfiartrose imóvel, diartrose semimóvel",
      "Sinartrose cardíaca, anfiartrose muscular, diartrose nervosa",
      "Sinartrose do coração, anfiartrose do estômago, diartrose do útero",
      "Sinartrose flexiona, anfiartrose estende, diartrose mastiga"
    ],
    correctAnswer: "Sinartrose sem mobilidade, anfiartrose semimóvel, diartrose muito móvel",
    explanation: { 
      name: "Classificação das Articulações por Mobilidade", 
      location: "Sistema articular completo.",
      function: "Essa é a classificação funcional mais importante para entender como o corpo se move. Cada grupo de mobilidade dita a função mecânica da área.", 
      characteristics: "A mobilidade é inversamente proporcional à estabilidade: Sinartrose (muito estável, sem movimento) vs Diartrose (muito móvel, menos estável).",
      relations: "Forte correlação com a classificação estrutural (Sinartrose = Fibrosa, Anfiartrose = Cartilaginosa, Diartrose = Sinovial).",
      memoryTips: "Sem, semi, muito: sinartrose, anfiartrose, diartrose." 
    }
  }
];
