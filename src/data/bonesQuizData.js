export const bonesQuizData = [
  {
    id: 1,
    category: "esqueleto",
    boneName: "Fêmur",
    visualReference: {
      view: "front",
      region: "coxa",
      hint: "Estrutura longa na coxa, entre quadril e joelho.",
      marker: { x: 72, y: 281, r: 10 },
      landmark: "Terço médio da coxa, entre a pelve e o joelho.",
      quickTip: "Compare com a perna: aqui o eixo ósseo é mais robusto.",
    },
    options: ["Fêmur", "Tíbia", "Fíbula", "Ulna", "Clavícula"],
    correctAnswer: "Fêmur",
    explanation: {
      name: "Fêmur",
      location:
        "Fica na coxa e conecta a pelve ao joelho. Sua extremidade proximal articula com o acetábulo e a distal com a tíbia e patela.",
      function:
        "Suporta grande parte do peso corporal e transmite forças durante marcha, corrida e salto.",
      characteristics:
        "É o osso mais longo e resistente do corpo. Possui cabeça femoral, colo, trocânter maior e menor, além de côndilos distais.",
      relations:
        "Relaciona-se com o acetábulo, ligamentos do quadril, músculos da coxa e articulação do joelho.",
      memoryTips:
        "Associe o fêmur à força e sustentação. Pense nele como a principal coluna óssea do membro inferior.",
    },
  },
  {
    id: 2,
    category: "esqueleto",
    boneName: "Úmero",
    visualReference: {
      view: "front",
      region: "braço",
      hint: "Estrutura longa entre ombro e cotovelo.",
      marker: { x: 45, y: 140, r: 9 },
      landmark: "Segmento central do braço.",
      quickTip: "No braço existe um único osso longo principal.",
    },
    options: ["Úmero", "Rádio", "Escápula", "Clavícula", "Fêmur"],
    correctAnswer: "Úmero",
    explanation: {
      name: "Úmero",
      location:
        "Localiza-se no braço, entre a escápula (ombro) e os ossos do antebraço (rádio e ulna).",
      function:
        "Permite movimentos amplos do membro superior e atua como alavanca para músculos do ombro e do braço.",
      characteristics:
        "Tem cabeça umeral proximal, tubérculos para inserção muscular e tróclea/capítulo distal para articulação do cotovelo.",
      relations:
        "Articula-se com a cavidade glenoidal da escápula e com rádio e ulna no cotovelo.",
      memoryTips:
        "Lembre do úmero como osso único do braço. Braço tem um, antebraço tem dois.",
    },
  },
  {
    id: 3,
    category: "esqueleto",
    boneName: "Tíbia",
    visualReference: {
      view: "front",
      region: "perna medial",
      hint: "Estrutura da canela, abaixo do joelho e mais medial.",
      marker: { x: 122, y: 396, r: 9 },
      landmark: "Região da canela, medial, abaixo da patela.",
      quickTip: "Procure o osso mais espesso da perna.",
    },
    options: ["Fíbula", "Patela", "Tíbia", "Fêmur", "Tálus"],
    correctAnswer: "Tíbia",
    explanation: {
      name: "Tíbia",
      location:
        "Fica na perna, em posição medial, entre joelho e tornozelo. É palpável na canela.",
      function:
        "Suporta a maior parte do peso transmitido pelo fêmur e participa da estabilidade da marcha.",
      characteristics:
        "Possui planalto tibial proximal, tuberosidade tibial e maléolo medial distal.",
      relations:
        "Articula-se com fêmur e fíbula proximalmente e com tálus no tornozelo.",
      memoryTips:
        "Pense na tíbia como osso da canela e principal suporte da perna abaixo do joelho.",
    },
  },
  {
    id: 4,
    category: "esqueleto",
    boneName: "Rádio",
    visualReference: {
      view: "side",
      region: "antebraço lateral",
      hint: "Estrutura do antebraço no lado do polegar.",
      marker: { x: 432, y: 214, r: 8 },
      landmark: "Antebraço na face lateral (lado do polegar).",
      quickTip: "Participa fortemente da rotação do antebraço.",
    },
    options: ["Ulna", "Escafoide", "Rádio", "Úmero", "Clavícula"],
    correctAnswer: "Rádio",
    explanation: {
      name: "Rádio",
      location:
        "Localiza-se no antebraço, lateralmente quando a palma está voltada para frente, no lado do polegar.",
      function:
        "Participa dos movimentos de pronação e supinação, além de transmitir carga da mão para o cotovelo.",
      characteristics:
        "Tem cabeça radial proximal e extremidade distal alargada que participa do punho.",
      relations:
        "Relaciona-se com a ulna, úmero e ossos do carpo, especialmente escafoide e semilunar.",
      memoryTips:
        "O rádio gira sobre a ulna nos movimentos de rotação do antebraço.",
    },
  },
  {
    id: 5,
    category: "esqueleto",
    boneName: "Clavícula",
    visualReference: {
      view: "front",
      region: "cintura escapular anterior",
      hint: "Estrutura curva acima do tórax, na base do pescoço.",
      marker: { x: 128, y: 103, r: 8 },
      landmark: "Haste óssea transversal na base do pescoço.",
      quickTip: "Pense na haste que conecta tronco e ombro na frente.",
    },
    options: ["Escápula", "Esterno", "Clavícula", "Costela", "Úmero"],
    correctAnswer: "Clavícula",
    explanation: {
      name: "Clavícula",
      location:
        "Fica entre o manúbrio do esterno e o acrômio da escápula, na porção superior do tórax.",
      function:
        "Mantém o ombro afastado do tronco e ajuda a transferir força do membro superior para o esqueleto axial.",
      characteristics:
        "É um osso longo com curvatura em S, subcutâneo e facilmente palpável.",
      relations:
        "Conecta-se ao esterno medialmente e à escápula lateralmente na articulação acromioclavicular.",
      memoryTips:
        "A clavícula funciona como uma haste que sustenta a cintura escapular na frente do tórax.",
    },
  },
  {
    id: 6,
    category: "esqueleto",
    boneName: "Escápula",
    visualReference: {
      view: "back",
      region: "dorso superior",
      hint: "Estrutura plana da parte posterior do ombro.",
      marker: { x: 307, y: 114, r: 10 },
      landmark: "Região superolateral das costas, atrás do tórax.",
      quickTip: "Serve de base para o deslizamento da cintura escapular.",
    },
    options: ["Escápula", "Clavícula", "Esterno", "Úmero", "Atlas"],
    correctAnswer: "Escápula",
    explanation: {
      name: "Escápula",
      location:
        "Situada na parede posterior do tórax, entre a segunda e a sétima costela, em cada lado.",
      function:
        "Serve de base para movimentos do ombro e de inserção para vários músculos do membro superior.",
      characteristics:
        "Osso plano triangular com espinha da escápula, acrômio, processo coracoide e cavidade glenoidal.",
      relations:
        "Articula-se com a clavícula e o úmero. Desliza sobre a parede torácica com forte controle muscular.",
      memoryTips:
        "Visualize a escápula como uma placa triangular nas costas que guia a mecânica do ombro.",
    },
  },
  {
    id: 7,
    category: "esqueleto",
    boneName: "Mandíbula",
    visualReference: {
      view: "side",
      region: "face inferior",
      hint: "Estrutura da arcada inferior e porção móvel da face.",
      marker: { x: 414, y: 73, r: 8 },
      landmark: "Arcada inferior e contorno do queixo.",
      quickTip: "Observe a porção óssea que se move na mastigação.",
    },
    options: ["Maxila", "Mandíbula", "Zigomático", "Frontal", "Temporal"],
    correctAnswer: "Mandíbula",
    explanation: {
      name: "Mandíbula",
      location:
        "Fica na porção inferior da face e forma o contorno do queixo e da arcada dentária inferior.",
      function:
        "Permite mastigação, fala e abertura/fechamento da boca por meio da articulação temporomandibular.",
      characteristics:
        "Tem corpo horizontal e ramos verticais, com processos condilar e coronoide.",
      relations:
        "Relaciona-se com o osso temporal na ATM, dentes inferiores e músculos da mastigação.",
      memoryTips:
        "Lembre que a mandíbula é o principal osso móvel do crânio em atividades como falar e mastigar.",
    },
  },
  {
    id: 8,
    category: "esqueleto",
    boneName: "Esterno",
    visualReference: {
      view: "front",
      region: "linha média torácica",
      hint: "Estrutura plana central do tórax, na frente do peito.",
      marker: { x: 97, y: 122, r: 9 },
      landmark: "Linha média do tórax anterior, entre as clavículas.",
      quickTip: "Use como eixo central para orientar o tórax anterior.",
    },
    options: ["Esterno", "Clavícula", "Escápula", "Costela", "Vértebra torácica"],
    correctAnswer: "Esterno",
    explanation: {
      name: "Esterno",
      location:
        "Fica na linha média anterior do tórax, composto por manúbrio, corpo e processo xifoide.",
      function:
        "Protege estruturas vitais como coração e grandes vasos, além de participar da caixa torácica.",
      characteristics:
        "Osso plano alongado, com incisuras para clavículas e cartilagens costais.",
      relations:
        "Conecta-se a clavículas e costelas por meio de cartilagens, formando parte do gradil costal.",
      memoryTips:
        "Pense no esterno como o escudo central do tórax e ponto de referência para contagem de costelas.",
    },
  },
  {
    id: 9,
    category: "esqueleto",
    boneName: "Patela",
    visualReference: {
      view: "front",
      region: "joelho anterior",
      hint: "Estrutura pequena na frente do joelho.",
      marker: { x: 127, y: 330, r: 8 },
      landmark: "Face anterior do joelho, sobre o tendão patelar.",
      quickTip: "Atua como polia mecânica para a extensão do joelho.",
    },
    options: ["Patela", "Tíbia", "Fêmur", "Fíbula", "Tálus"],
    correctAnswer: "Patela",
    explanation: {
      name: "Patela",
      location:
        "Localiza-se anteriormente ao joelho, inserida no tendão do quadríceps e ligada à tíbia pelo ligamento patelar.",
      function:
        "Aumenta a eficiência mecânica do quadríceps e protege a face anterior da articulação do joelho.",
      characteristics:
        "É o maior osso sesamoide do corpo e possui face articular posterior para deslizamento no fêmur.",
      relations:
        "Relaciona-se com o tendão do quadríceps, ligamento patelar e superfície patelar femoral.",
      memoryTips:
        "Visualize a patela como uma polia anterior do joelho que melhora a extensão da perna.",
    },
  },
  {
    id: 10,
    category: "esqueleto",
    boneName: "Osso Ilíaco",
    visualReference: {
      view: "front",
      region: "quadril",
      hint: "Porção ampla da pelve lateral, acima da articulação do quadril.",
      marker: { x: 123, y: 209, r: 10 },
      landmark: "Porção superior e lateral da pelve, acima da articulação do quadril.",
      quickTip: "Observe a borda óssea alta da cintura pélvica.",
    },
    options: ["Sacro", "Osso Ilíaco", "Púbis", "Fêmur", "Esterno"],
    correctAnswer: "Osso Ilíaco",
    explanation: {
      name: "Osso Ilíaco",
      location:
        "Compõe a porção superior e lateral do osso do quadril, formando parte da pelve.",
      function:
        "Distribui a carga entre coluna e membros inferiores e oferece ampla área de inserção muscular.",
      characteristics:
        "Inclui asa do ílio, crista ilíaca e parte do acetábulo onde a cabeça do fêmur se encaixa.",
      relations:
        "Relaciona-se com o sacro na articulação sacroilíaca, com púbis/ísquio e com o fêmur no quadril.",
      memoryTips:
        "Associe a crista ilíaca ao ponto ósseo palpável na cintura, útil para orientar a anatomia da pelve.",
    },
  },

  // --- NOVAS QUESTÕES: CRÂNIO ---
  {
    id: 11, category: "cranio", boneName: "Frontal",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "abóbada anterior", hint: "Testa.", marker: { x: 250, y: 150, r: 15 }, landmark: "Fronte", quickTip: "Região superior da face." },
    options: ["Frontal", "Parietal", "Occipital", "Maxila", "Mandíbula"], correctAnswer: "Frontal",
    explanation: { name: "Frontal", location: "Fronte", function: "Protege o cérebro", characteristics: "Teto das órbitas", relations: "Parietais, esfenoide", memoryTips: "Testa = Frontal" }
  },
  {
    id: 12, category: "cranio", boneName: "Nasal",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "face centro", hint: "Osso do nariz.", marker: { x: 250, y: 250, r: 8 }, landmark: "Dorso do nariz", quickTip: "Logo abaixo do frontal." },
    options: ["Nasal", "Maxila", "Lacrimal", "Vômer", "Zigomático"], correctAnswer: "Nasal",
    explanation: { name: "Nasal", location: "Face central", function: "Ponte do nariz", characteristics: "Osso par", relations: "Frontal, maxila", memoryTips: "Onde apoia o óculos" }
  },
  {
    id: 13, category: "cranio", boneName: "Maxila",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "centro da face", hint: "Arcada superior.", marker: { x: 250, y: 340, r: 12 }, landmark: "Abaixo do nariz", quickTip: "Centro superior da boca" },
    options: ["Maxila", "Mandíbula", "Zigomático", "Frontal", "Nasal"], correctAnswer: "Maxila",
    explanation: { name: "Maxila", location: "Centro da face", function: "Sustenta dentes superiores", characteristics: "Tem seio maxilar", relations: "Maioria dos ossos da face", memoryTips: "Sustenta lábio superior" }
  },
  {
    id: 14, category: "cranio", boneName: "Zigomático",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "face lateral", hint: "Maçã do rosto.", marker: { x: 160, y: 280, r: 10 }, landmark: "Bochecha", quickTip: "Curva lateral" },
    options: ["Zigomático", "Maxila", "Temporal", "Esfenoide", "Parietal"], correctAnswer: "Zigomático",
    explanation: { name: "Zigomático", location: "Face lateral", function: "Maçã do rosto", characteristics: "Arco zigomático", relations: "Temporal, maxila", memoryTips: "Osso do blush" }
  },
  {
    id: 15, category: "cranio", boneName: "Mandíbula",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "face inferior", hint: "Queixo e dentes inferiores.", marker: { x: 250, y: 440, r: 15 }, landmark: "Arcada inferior", quickTip: "Osso móvel" },
    options: ["Mandíbula", "Maxila", "Temporal", "Frontal", "Esfenoide"], correctAnswer: "Mandíbula",
    explanation: { name: "Mandíbula", location: "Inferior", function: "Mastigação", characteristics: "Único móvel", relations: "Temporal", memoryTips: "Queixo e movimento" }
  },
  {
    id: 16, category: "cranio", boneName: "Lacrimal",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "órbita medial", hint: "Paredes internas do olho.", marker: { x: 215, y: 240, r: 6 }, landmark: "Dentro da órbita", quickTip: "Próximo canal lacrimal" },
    options: ["Lacrimal", "Nasal", "Vômer", "Etmoide", "Zigomático"], correctAnswer: "Lacrimal",
    explanation: { name: "Lacrimal", location: "Órbita", function: "Canal da lágrima", characteristics: "Frágil", relations: "Maxila, frontal", memoryTips: "Por onde escorre lágrima" }
  },
  {
    id: 17, category: "cranio", boneName: "Vômer",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "cavidade nasal", hint: "Septo interno inferior.", marker: { x: 250, y: 310, r: 5 }, landmark: "Meio do nariz por dentro", quickTip: "Lâmina medial" },
    options: ["Vômer", "Etmoide", "Nasal", "Lacrimal", "Concha nasal"], correctAnswer: "Vômer",
    explanation: { name: "Vômer", location: "Septo nasal", function: "Divide o nariz", characteristics: "Ímpar", relations: "Etmoide, maxila", memoryTips: "Lâmina cortante no meio do nariz" }
  },
  {
    id: 18, category: "cranio", boneName: "Concha nasal inferior",
    visualReference: { image: "/src/assets/cranio/cranio-frente.jpg", view: "single", region: "cavidade nasal", hint: "Lâminas laterais do nariz.", marker: { x: 220, y: 310, r: 5 }, landmark: "Laterais internas", quickTip: "Curvas nas laterais" },
    options: ["Concha nasal inferior", "Vômer", "Etmoide", "Nasal", "Lacrimal"], correctAnswer: "Concha nasal inferior",
    explanation: { name: "Concha nasal inferior", location: "Paredes nasais", function: "Aquece o ar", characteristics: "Osso pareado e encurvado", relations: "Maxila", memoryTips: "Saliências curvas internas" }
  },
  {
    id: 19, category: "cranio", boneName: "Occipital (Inferior)",
    visualReference: { image: "/src/assets/cranio/cranio-inferior.jpg", view: "single", region: "base do crânio", hint: "Tem o forame magno.", marker: { x: 250, y: 400, r: 15 }, landmark: "Forame magno", quickTip: "Onde entra a coluna" },
    options: ["Occipital", "Esfenoide", "Temporal", "Frontal", "Parietal"], correctAnswer: "Occipital",
    explanation: { name: "Occipital", location: "Base posterior", function: "Protege medula/cerebelo", characteristics: "Grande abertura (Forame Magno)", relations: "Temporal, esfenoide", memoryTips: "Buraco grande" }
  },
  {
    id: 20, category: "cranio", boneName: "Temporal (Inferior)",
    visualReference: { image: "/src/assets/cranio/cranio-inferior.jpg", view: "single", region: "base lateral", hint: "Porções petrosas densas.", marker: { x: 150, y: 280, r: 15 }, landmark: "Osso denso lateral interno", quickTip: "Abriga os ouvidos" },
    options: ["Temporal", "Parietal", "Occipital", "Esfenoide", "Frontal"], correctAnswer: "Temporal",
    explanation: { name: "Temporal", location: "Lados da base", function: "Audição e equilíbrio", characteristics: "Parte petrosa é muito dura", relations: "Esfenoide, occipital", memoryTips: "Denso feito pedra (petroso)" }
  },
  {
    id: 21, category: "cranio", boneName: "Esfenoide",
    visualReference: { image: "/src/assets/cranio/cranio-inferior.jpg", view: "single", region: "centro da base", hint: "Parece uma borboleta ou morcego.", marker: { x: 250, y: 200, r: 15 }, landmark: "Região central interna", quickTip: "Centro estrutural do crânio" },
    options: ["Esfenoide", "Etmoide", "Vômer", "Occipital", "Temporal"], correctAnswer: "Esfenoide",
    explanation: { name: "Esfenoide", location: "Base média craniana", function: "Ponto-chave estrutural e abriga a glândula pituitária", characteristics: "Formato de borboleta (sela turca)", relations: "Articula-se com quase todos do neuro", memoryTips: "A borboleta no meio da base" }
  },
  {
    id: 22, category: "cranio", boneName: "Frontal (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "abóbada anterior lateral", hint: "Testa de lado.", marker: { x: 120, y: 120, r: 15 }, landmark: "Acima do nariz e órbitas", quickTip: "Curva frontal" },
    options: ["Frontal", "Parietal", "Temporal", "Occipital", "Esfenoide"], correctAnswer: "Frontal",
    explanation: { name: "Frontal", location: "Anterior superior", function: "Protege lóbos frontais", characteristics: "Se liga aos parietais via sutura coronal", relations: "Parietal, Esfenoide", memoryTips: "Mesmo frontal, apenas vista lateral" }
  },
  {
    id: 23, category: "cranio", boneName: "Parietal",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "teto craniano", hint: "Maior osso lateral-superior.", marker: { x: 250, y: 100, r: 20 }, landmark: "Topo e lados", quickTip: "Teto do crânio" },
    options: ["Parietal", "Frontal", "Temporal", "Occipital", "Esfenoide"], correctAnswer: "Parietal",
    explanation: { name: "Parietal", location: "Superior e lateral", function: "Protege o telencéfalo", characteristics: "Osso pareado grande", relations: "Suturas sagital, coronal e lambdoide", memoryTips: "Parede e teto protetor." }
  },
  {
    id: 24, category: "cranio", boneName: "Temporal (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "perto da orelha", hint: "Tem o buraco do ouvido.", marker: { x: 280, y: 280, r: 15 }, landmark: "Ao redor da orelha", quickTip: "Tem o canal auditivo" },
    options: ["Temporal", "Parietal", "Zigomático", "Occipital", "Esfenoide"], correctAnswer: "Temporal",
    explanation: { name: "Temporal", location: "Inferolateral", function: "Audição", characteristics: "Meato acústico, arco temporal", relations: "Mandíbula, Parietal", memoryTips: "Tempo -> Têmporas -> Temporal" }
  },
  {
    id: 25, category: "cranio", boneName: "Occipital (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "nuca lateral", hint: "Fundo e base lateral da cabeça.", marker: { x: 400, y: 350, r: 15 }, landmark: "Região da nuca", quickTip: "Contorno inferoposterior" },
    options: ["Occipital", "Parietal", "Temporal", "Frontal", "Mandíbula"], correctAnswer: "Occipital",
    explanation: { name: "Occipital", location: "Posterior e base", function: "Cerebelo e tronco", characteristics: "Protuberância nucal", relations: "Parietal", memoryTips: "Base de trás" }
  },
  {
    id: 26, category: "cranio", boneName: "Esfenoide (Asa Maior)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "têmpora profunda", hint: "Pequeno espaço visível atrás da órbita lateral.", marker: { x: 170, y: 200, r: 10 }, landmark: "Pequeno osso entre temporal e frontal lateral", quickTip: "Triângulo exposto lateral" },
    options: ["Esfenoide", "Etmoide", "Zigomático", "Parietal", "Temporal"], correctAnswer: "Esfenoide",
    explanation: { name: "Esfenoide", location: "Asa maior lateral", function: "Pontes estruturais profundas", characteristics: "Parte lateral deste grande osso base", relations: "Temporal, Parietal, Frontal, Zigom.", memoryTips: "Ponto unificador de vários ossos laterais (ptério)" }
  },
  {
    id: 27, category: "cranio", boneName: "Zigomático (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "arco zigomático", hint: "Arco ou ponte da maçã do rosto na lateral.", marker: { x: 120, y: 270, r: 10 }, landmark: "Conexão maxila-temporal", quickTip: "Arco lateral saliente" },
    options: ["Zigomático", "Maxila", "Nasal", "Temporal", "Esfenoide"], correctAnswer: "Zigomático",
    explanation: { name: "Zigomático", location: "Ponte lateral", function: "Compartimento da face m. masseter", characteristics: "Forma a proeminência e o arco", relations: "Maxila, temporal", memoryTips: "O arco ósseo sentido do lado do rosto" }
  },
  {
    id: 28, category: "cranio", boneName: "Maxila (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "acima da boca lateral", hint: "Raízes dos dentes superiores vistos de lado.", marker: { x: 100, y: 350, r: 12 }, landmark: "Arcada superior de lado", quickTip: "Acima dos dentes superiores laterais" },
    options: ["Maxila", "Mandíbula", "Zigomático", "Frontal", "Nasal"], correctAnswer: "Maxila",
    explanation: { name: "Maxila", location: "Porção central inferior lateral", function: "Acomoda os dentes", characteristics: "Osso par robusto", relations: "Palatino, Zigomático", memoryTips: "Estrutura dos molares de cima" }
  },
  {
    id: 29, category: "cranio", boneName: "Mandíbula (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "arcada inferior lateral", hint: "Osso angular com dentes inferiores.", marker: { x: 150, y: 450, r: 15 }, landmark: "Queixo e ramo lateral inclinado da base", quickTip: "Em forma de 'L' deitadão" },
    options: ["Mandíbula", "Maxila", "Temporal", "Occipital", "Parietal"], correctAnswer: "Mandíbula",
    explanation: { name: "Mandíbula", location: "Base do eixo mastigatório", function: "Abertura da boca", characteristics: "Côndilo articular (ATM) e processo coronoide", relations: "Temporal, Masseter", memoryTips: "Único a se mover na cabeça lateral" }
  },
  {
    id: 30, category: "cranio", boneName: "Nasal (Lateral)",
    visualReference: { image: "/src/assets/cranio/cranio-lado.jpg", view: "single", region: "nariz de vista lateral", hint: "Pequena lâmina anterior.", marker: { x: 60, y: 210, r: 5 }, landmark: "Ponte nasal em perfil", quickTip: "Ponto extremo anterior superior" },
    options: ["Nasal", "Lacrimal", "Frontal", "Maxila", "Etmoide"], correctAnswer: "Nasal",
    explanation: { name: "Nasal", location: "Visto na borda perfilada anterior", function: "Projeta a base do nariz de lado", characteristics: "Fino e projetado", relations: "Frontal e cartilagens nasais", memoryTips: "Perfil do nariz pontudo" }
  },
  {
    id: 31, category: "cranio", boneName: "Occipital (Posterior)",
    visualReference: { image: "/src/assets/cranio/cranio-tras.jpg", view: "single", region: "nuca reta/posterior", hint: "Grande osso da base traseira fechando o crânio totalmente.", marker: { x: 250, y: 350, r: 20 }, landmark: "Parte de trás inferior", quickTip: "Domina a vista posterior baixa" },
    options: ["Occipital", "Parietal", "Temporal", "Esfenoide", "Atlas"], correctAnswer: "Occipital",
    explanation: { name: "Occipital", location: "Visto totalmente por trás", function: "Ligação cervical à base", characteristics: "Linhas nucais e conchas posteriores", relations: "Parietais na sutura lambdoide", memoryTips: "Cobre toda a nuca" }
  },
  {
    id: 32, category: "cranio", boneName: "Parietal (Posterior)",
    visualReference: { image: "/src/assets/cranio/cranio-tras.jpg", view: "single", region: "teto craniano visto de trás", hint: "Fechando o cocuruto superior dividido ao meio.", marker: { x: 180, y: 150, r: 20 }, landmark: "Teto de trás", quickTip: "Paredes traseiras altas divididas" },
    options: ["Parietal", "Frontal", "Temporal", "Occipital", "Mandíbula"], correctAnswer: "Parietal",
    explanation: { name: "Parietal", location: "Parte supero posterior do crânio", function: "Fechamento parietal posterior", characteristics: "Sutura sagital clara os dividindo de costas", relations: "Occipital e contraparte", memoryTips: "O telhado visto de trás" }
  },
  {
    id: 33, category: "cranio", boneName: "Temporal (Posterior)",
    visualReference: { image: "/src/assets/cranio/cranio-tras.jpg", view: "single", region: "cantos inferiores trás", hint: "Canto inferior externo pontudo que apoia lateral (mastoide) de costas.", marker: { x: 120, y: 400, r: 8 }, landmark: "Cantos pontudos da base inferior externa", quickTip: "Saliência que aparece quase para fora das laterais" },
    options: ["Temporal", "Esfenoide", "Parietal", "Mandíbula", "Occipital"], correctAnswer: "Temporal",
    explanation: { name: "Temporal", location: "Mastoide visto em segundo plano lateral-costal", function: "Muscultatura rotatória de pescoço ancorada no processo visto de trás", characteristics: "Irrelevante na vista costal além de seus processos inferiores mastoides", relations: "Occipital borda inferolateral", memoryTips: "Só dá pra ver um carocinho de lado nas costas" }
  }

];
