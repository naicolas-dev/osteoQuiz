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
    visualReference: { image: "/assets/cranio/frontal.jpg", view: "single", region: "abóbada anterior", hint: "Osso da testa.", marker: { x: 250, y: 150, r: 15 }, landmark: "Fronte", quickTip: "Região superior da face." },
    options: ["Frontal", "Parietal", "Occipital", "Maxila", "Mandíbula"], correctAnswer: "Frontal",
    explanation: { name: "Frontal", location: "Fronte", function: "Protege o cérebro", characteristics: "Teto das órbitas", relations: "Parietais, esfenoide", memoryTips: "Testa = Frontal" }
  },
  {
    id: 12, category: "cranio", boneName: "Parietal",
    visualReference: {
      images: [
        { image: "/assets/cranio/parietal1.jpg", marker: { x: 250, y: 250, r: 35 } },
        { image: "/assets/cranio/parietal2.jpg", marker: { x: 250, y: 250, r: 35 } }
      ],
      view: "single", region: "teto craniano", hint: "Osso superior e lateral do crânio.", landmark: "Topo e lados", quickTip: "Teto do crânio"
    },
    options: ["Parietal", "Frontal", "Temporal", "Occipital", "Esfenoide"], correctAnswer: "Parietal",
    explanation: { name: "Parietal", location: "Superior e lateral", function: "Protege o telencéfalo", characteristics: "Osso pareado grande", relations: "Suturas sagital, coronal e lambdoide", memoryTips: "Parede e teto protetor" }
  },
  {
    id: 13, category: "cranio", boneName: "Temporal",
    visualReference: {
      images: [
        { image: "/assets/cranio/temporal1.jpg", marker: { x: 250, y: 250, r: 35 } },
        { image: "/assets/cranio/temporal2.jpg", marker: { x: 250, y: 250, r: 35 } }
      ],
      view: "single", region: "perto da orelha", hint: "Abriga o canal do ouvido.", landmark: "Ao redor da orelha", quickTip: "Tem o canal auditivo"
    },
    options: ["Temporal", "Parietal", "Zigomático", "Occipital", "Esfenoide"], correctAnswer: "Temporal",
    explanation: { name: "Temporal", location: "Inferolateral", function: "Audição", characteristics: "Meato acústico, arco temporal", relations: "Mandíbula, Parietal", memoryTips: "Tempo -> Têmporas -> Temporal" }
  },
  {
    id: 14, category: "cranio", boneName: "Occipital",
    visualReference: { image: "/assets/cranio/occipital.jpg", view: "single", region: "nuca reta/posterior", hint: "Grande osso da base traseira.", marker: { x: 250, y: 350, r: 20 }, landmark: "Parte de trás inferior", quickTip: "Domina a nuca" },
    options: ["Occipital", "Parietal", "Temporal", "Esfenoide", "Atlas"], correctAnswer: "Occipital",
    explanation: { name: "Occipital", location: "Posterior e base", function: "Cerebelo e tronco", characteristics: "Forame magno", relations: "Parietal", memoryTips: "Cobre toda a nuca" }
  },
  {
    id: 15, category: "cranio", boneName: "Esfenoide",
    visualReference: {
      images: [
        { image: "/assets/cranio/esfenoide1.jpg", marker: { x: 250, y: 250, r: 35 } },
        { image: "/assets/cranio/esfenoide2.jpg", marker: { x: 250, y: 250, r: 35 } }
      ],
      view: "single", region: "centro da base", hint: "Parece uma borboleta ou morcego.", landmark: "Centro estrutural do crânio", quickTip: "Tem as 'asas'"
    },
    options: ["Esfenoide", "Etmoide", "Vômer", "Occipital", "Temporal"], correctAnswer: "Esfenoide",
    explanation: { name: "Esfenoide", location: "Base craniana", function: "Apoia glândula pituitária", characteristics: "Sela turca", relations: "Quase todos os ossos cranianos", memoryTips: "Borboleta central" }
  },
  {
    id: 16, category: "cranio", boneName: "Etmoide",
    visualReference: { image: "/assets/cranio/etmoide.jpg", view: "single", region: "teto nasal", hint: "Osso profundo por onde entra o cheiro.", marker: { x: 250, y: 250, r: 25 }, landmark: "Topo interno do nariz", quickTip: "Como uma esponja" },
    options: ["Etmoide", "Esfenoide", "Vômer", "Nasal", "Frontal"], correctAnswer: "Etmoide",
    explanation: { name: "Etmoide", location: "Caixa craniana/Fossa nasal", function: "Olfação", characteristics: "Placa cribrosa", relations: "Frontal, Esfenoide", memoryTips: "O filtro de odores" }
  },
  {
    id: 17, category: "cranio", boneName: "Maxila",
    visualReference: { image: "/assets/cranio/maxila.jpg", view: "single", region: "centro da face", hint: "Arcada superior da boca.", marker: { x: 250, y: 250, r: 25 }, landmark: "Abaixo do nariz", quickTip: "Sustenta os dentes de cima" },
    options: ["Maxila", "Mandíbula", "Zigomático", "Frontal", "Nasal"], correctAnswer: "Maxila",
    explanation: { name: "Maxila", location: "Centro da face", function: "Sustenta dentes superiores", characteristics: "Tem seio maxilar", relations: "Maioria dos ossos da face", memoryTips: "Sustenta lábio superior e dentes de cima" }
  },
  {
    id: 18, category: "cranio", boneName: "Mandíbula",
    visualReference: { image: "/assets/cranio/mandibula.jpg", view: "single", region: "face inferior", hint: "Queixo e dentes inferiores.", marker: { x: 250, y: 250, r: 25 }, landmark: "Arcada inferior", quickTip: "A mandíbula" },
    options: ["Mandíbula", "Maxila", "Temporal", "Frontal", "Esfenoide"], correctAnswer: "Mandíbula",
    explanation: { name: "Mandíbula", location: "Inferior da face", function: "Mastigação", characteristics: "Único osso móvel craniano", relations: "Articulação Temporomandibular", memoryTips: "O de baixo que se mexe" }
  },
  {
    id: 19, category: "cranio", boneName: "Zigomático",
    visualReference: { image: "/assets/cranio/zigomatico.jpg", view: "single", region: "face lateral", hint: "Osso da maçã do rosto.", marker: { x: 250, y: 250, r: 20 }, landmark: "Bochecha alta", quickTip: "Forma um arco" },
    options: ["Zigomático", "Maxila", "Temporal", "Esfenoide", "Parietal"], correctAnswer: "Zigomático",
    explanation: { name: "Zigomático", location: "Face lateral", function: "Maçã do rosto", characteristics: "Arco zigomático", relations: "Temporal, Maxila", memoryTips: "Osso do blush no rosto" }
  },
  {
    id: 20, category: "cranio", boneName: "Nasal",
    visualReference: { image: "/assets/cranio/nasal.jpg", view: "single", region: "face centro", hint: "Ponte superior do nariz.", marker: { x: 250, y: 250, r: 20 }, landmark: "Dorso do nariz", quickTip: "Entre os olhos" },
    options: ["Nasal", "Maxila", "Lacrimal", "Vômer", "Etmoide"], correctAnswer: "Nasal",
    explanation: { name: "Nasal", location: "Face central", function: "Ponte do nariz", characteristics: "Osso par", relations: "Frontal, Maxila", memoryTips: "Onde apoia o meio do óculos" }
  },
  {
    id: 21, category: "cranio", boneName: "Lacrimal",
    visualReference: { image: "/assets/cranio/lacrimal.jpg", view: "single", region: "órbita medial", hint: "Canalha da lágrima.", marker: { x: 250, y: 250, r: 15 }, landmark: "Dentro da órbita nasal", quickTip: "O menor osso" },
    options: ["Lacrimal", "Nasal", "Vômer", "Etmoide", "Zigomático"], correctAnswer: "Lacrimal",
    explanation: { name: "Lacrimal", location: "Órbita", function: "Canal da lágrima", characteristics: "Frágil e minúsculo", relations: "Maxila, Etmoide", memoryTips: "Por onde escorre a lágrima" }
  },
  {
    id: 22, category: "cranio", boneName: "Palatino",
    visualReference: { image: "/assets/cranio/palatino.jpg", view: "single", region: "céu ba boca posterior", hint: "Duro lá trás no céu da boca.", marker: { x: 250, y: 250, r: 20 }, landmark: "Teto traseiro bocal", quickTip: "Formato em L" },
    options: ["Palatino", "Maxila", "Vômer", "Esfenoide", "Mandíbula"], correctAnswer: "Palatino",
    explanation: { name: "Palatino", location: "Palato duro (posterior)", function: "Eixo buco-nasal", characteristics: "Formato de um L", relations: "Maxila, Esfenoide", memoryTips: "Pálato = céu da boca" }
  },
  {
    id: 23, category: "cranio", boneName: "Concha Nasal Inferior",
    visualReference: { image: "/assets/cranio/concha-nasal-inferior.jpg", view: "single", region: "cavidade nasal lateral", hint: "Pedaços curvos frouxinhos dentro do nariz.", marker: { x: 250, y: 250, r: 20 }, landmark: "Laterais internas do nariz", quickTip: "São como conchinhas" },
    options: ["Concha Nasal Inferior", "Vômer", "Etmoide", "Nasal", "Lacrimal"], correctAnswer: "Concha Nasal Inferior",
    explanation: { name: "Concha Nasal Inferior", location: "Paredes nasais laterais", function: "Aquece o ar", characteristics: "Osso pareado curvo", relations: "Maxila", memoryTips: "As conchinhas de ar interno do nariz" }
  },
  {
    id: 24, category: "cranio", boneName: "Vômer",
    visualReference: { image: "/assets/cranio/vomer.jpg", view: "single", region: "cavidade nasal central", hint: "Septo interno inferior como uma faca.", marker: { x: 250, y: 250, r: 20 }, landmark: "Meio do nariz (base)", quickTip: "É como a ponta de um arado" },
    options: ["Vômer", "Etmoide", "Nasal", "Lacrimal", "Concha Nasal Inferior"], correctAnswer: "Vômer",
    explanation: { name: "Vômer", location: "Septo nasal inferior", function: "Divide o nariz medialmente", characteristics: "Ímpar e triangular", relations: "Etmoide, Maxila", memoryTips: "Lâmina medial inferior divisória do nariz" }
  },
  {
    id: 25, category: "cranio", boneName: "Osso Hióideo",
    visualReference: { image: "/assets/cranio/osso-hióideo.jpg", view: "single", region: "pescoço", hint: "Osso em forma de U na base da língua.", marker: { x: 250, y: 250, r: 15 }, landmark: "Base do pescoço, laringe", quickTip: "Não possui articulações com outros ossos" },
    options: ["Osso Hióideo", "Atlas", "Áxis", "Vértebra Cervical", "Mandíbula"], correctAnswer: "Osso Hióideo",
    explanation: { name: "Osso Hióideo", location: "Pescoço", function: "Sustenta a língua deglutição", characteristics: "Formato de U, flutuante", relations: "Inserções musculares, sem articulação fixa", memoryTips: "A 'ferradura' solta no pescoço" }
  },

  // --- NOVAS QUESTÕES: COLUNA E TÓRAX ---
  {
    id: 35, category: "coluna-torax", boneName: "Cóccix",
    visualReference: { 
      images: [
        { image: "/assets/coluna-torax/coccix1.jpg", marker: { x: 250, y: 250, r: 25 } },
        { image: "/assets/coluna-torax/coccix2.jpg", marker: { x: 250, y: 250, r: 25 } }
      ],
      view: "single", 
      region: "base da coluna", 
      hint: "Porção terminal da coluna vertebral.", 
      landmark: "Fim da coluna", 
      quickTip: "Parece um bico de pássaro" 
    },
    options: ["Sacro", "Cóccix", "Ísquio", "Lombar", "Púbis"], correctAnswer: "Cóccix",
    explanation: { name: "Cóccix", location: "Abaixo do sacro", function: "Inserção de ligamentos e músculos pélvicos", characteristics: "Composto por 3 a 5 pequenas vértebras fundidas", relations: "Articula-se superiormente com o sacro", memoryTips: "Osso do 'rabo'" }
  },
  {
    id: 36, category: "coluna-torax", boneName: "Esterno",
    visualReference: { 
      images: [
        { image: "/assets/coluna-torax/esterno1.jpg", marker: { x: 250, y: 250, r: 25 } },
        { image: "/assets/coluna-torax/esterno2.jpg", marker: { x: 250, y: 250, r: 25 } }
      ],
      view: "single", 
      region: "tórax anterior", 
      hint: "Osso central do peito.", 
      landmark: "Meio do peito", 
      quickTip: "Tem formato de gravata ou espada" 
    },
    options: ["Esterno", "Escápula", "Manúbrio", "Clavícula", "Costela"], correctAnswer: "Esterno",
    explanation: { name: "Esterno", location: "Linha média anterior do tórax", function: "Protege o coração e grandes tubos", characteristics: "Osso plano com manúbrio, corpo e processo xifoide", relations: "Costelas e clavículas", memoryTips: "Escudo do peito" }
  },
  {
    id: 37, category: "coluna-torax", boneName: "Sacro",
    visualReference: { 
      images: [
        { image: "/assets/coluna-torax/sacro1.jpg", marker: { x: 250, y: 250, r: 35 } },
        { image: "/assets/coluna-torax/sacro2.jpg", marker: { x: 250, y: 250, r: 35 } }
      ],
      view: "single", 
      region: "base da coluna", 
      hint: "Grande osso triangular na base da coluna.", 
      landmark: "Acima do cóccix", 
      quickTip: "Tem furinhos (forames)" 
    },
    options: ["Sacro", "Cóccix", "Vértebra Lombar", "Osso Ilíaco", "Ísquio"], correctAnswer: "Sacro",
    explanation: { name: "Sacro", location: "Base da coluna, entre os ossos do quadril", function: "Transmite o peso do corpo para a pelve", characteristics: "Formado por 5 vértebras fundidas", relations: "L5, cóccix, osso ilíaco", memoryTips: "Um triângulo de osso no fim da coluna" }
  },
  {
    id: 38, category: "coluna-torax", boneName: "Costelas",
    visualReference: { image: "/assets/coluna-torax/costelas.jpg", view: "single", region: "tórax", hint: "Arcos ósseos do tórax.", marker: { x: 250, y: 250, r: 40 }, landmark: "Caixa torácica", quickTip: "Protegem os pulmões" },
    options: ["Costelas", "Esterno", "Clavícula", "Fíbula", "Escápula"], correctAnswer: "Costelas",
    explanation: { name: "Costelas", location: "Envolvem o tórax", function: "Protegem a cavidade torácica e auxiliam na respiração", characteristics: "12 pares (verdadeiras, falsas e flutuantes)", relations: "Articulam com as vértebras torácicas e o esterno", memoryTips: "A grade do peito" }
  },
  {
    id: 39, category: "coluna-torax", boneName: "Vértebras Cervicais",
    visualReference: { image: "/assets/coluna-torax/vertebras-cervicais.jpg", view: "single", region: "pescoço", hint: "Vértebras do pescoço.", marker: { x: 250, y: 250, r: 30 }, landmark: "Abaixo do crânio", quickTip: "Menores vértebras com forame no processo transverso" },
    options: ["Vértebras Cervicais", "Vértebras Torácicas", "Vértebras Lombares", "Sacro", "Atlas e Áxis"], correctAnswer: "Vértebras Cervicais",
    explanation: { name: "Vértebras Cervicais", location: "Região do pescoço", function: "Sustentam a cabeça e permitem rotação", characteristics: "7 vértebras (C1 a C7)", relations: "Crânio, torácicas", memoryTips: "Sustentam o crânio (cervical = pescoço)" }
  },
  {
    id: 40, category: "coluna-torax", boneName: "Vértebras Torácicas",
    visualReference: { image: "/assets/coluna-torax/vertebras-toracicas.jpg", view: "single", region: "meio das costas", hint: "Vértebras articuladas com as costelas.", marker: { x: 250, y: 250, r: 30 }, landmark: "Parte superior das costas", quickTip: "Tem processo espinhoso voltado para baixo" },
    options: ["Vértebras Torácicas", "Vértebras Lombares", "Vértebras Cervicais", "Costelas", "Sacro"], correctAnswer: "Vértebras Torácicas",
    explanation: { name: "Vértebras Torácicas", location: "Meio das costas", function: "Suporte e articulação com as costelas", characteristics: "12 vértebras (T1 a T12)", relations: "Costelas, cervical, lombar", memoryTips: "T1 a T12, como as 12 costelas" }
  },
  {
    id: 41, category: "coluna-torax", boneName: "Vértebras Lombares",
    visualReference: { image: "/assets/coluna-torax/vertebras-lombares.jpg", view: "single", region: "fundo das costas", hint: "As maiores vértebras da coluna.", marker: { x: 250, y: 250, r: 30 }, landmark: "Abaixo das costelas", quickTip: "Corpo vertebral grande e robusto" },
    options: ["Vértebras Lombares", "Vértebras Torácicas", "Vértebras Cervicais", "Sacro", "Cóccix"], correctAnswer: "Vértebras Lombares",
    explanation: { name: "Vértebras Lombares", location: "Parte inferior das costas", function: "Suportam o maior peso do corpo", characteristics: "5 vértebras grandes (L1 a L5)", relations: "Torácicas, sacro", memoryTips: "Lombar liga com lombalgia (dor no fundo das costas)" }
  },

  // --- NOVAS QUESTÕES: MEMBROS SUPERIORES ---
  {
    id: 42, category: "membros-superiores", boneName: "Clavícula",
    visualReference: { image: "/assets/membros-superiores/clavicula.jpg", view: "single", region: "ombro", hint: "Osso longo em forma de 'S' na parte superior do peito.", marker: { x: 250, y: 250, r: 25 }, landmark: "Entre o esterno e o ombro", quickTip: "Pode ser sentida sob a pele na frente do pescoço" },
    options: ["Clavícula", "Escápula", "Rádio", "Úmero", "Ulna"], correctAnswer: "Clavícula",
    explanation: { name: "Clavícula", location: "Cintura escapular, superior ao tórax", function: "Atua como suporte e fixa o membro superior no tronco", characteristics: "Único osso longo horizontal", relations: "Articula-se com o esterno e a escápula", memoryTips: "A ponte do peito pro ombro" }
  },
  {
    id: 43, category: "membros-superiores", boneName: "Escápula",
    visualReference: { image: "/assets/membros-superiores/escapula.jpg", view: "single", region: "costas", hint: "Osso plano triangular nas costas.", marker: { x: 250, y: 250, r: 35 }, landmark: "Omoplata", quickTip: "Move-se quando você gira os ombros" },
    options: ["Escápula", "Esterno", "Clavícula", "Ílio", "Úmero"], correctAnswer: "Escápula",
    explanation: { name: "Escápula", location: "Parte posterior e superior do tórax", function: "Ancoragem de muitos músculos do ombro", characteristics: "Plana e triangular, forma a articulação do ombro com o úmero", relations: "Úmero, clavícula", memoryTips: "A 'asa' nas suas costas" }
  },
  {
    id: 44, category: "membros-superiores", boneName: "Úmero",
    visualReference: { 
      images: [
        { image: "/assets/membros-superiores/umero1.jpg", marker: { x: 250, y: 250, r: 30 } },
        { image: "/assets/membros-superiores/umero2.jpg", marker: { x: 250, y: 250, r: 30 } }
      ],
      view: "single", region: "braço", hint: "O maior osso do membro superior.", landmark: "Do ombro ao cotovelo", quickTip: "A 'cabeça' dele encaixa na escápula"
    },
    options: ["Úmero", "Rádio", "Ulna", "Fêmur", "Tíbia"], correctAnswer: "Úmero",
    explanation: { name: "Úmero", location: "Braço", function: "Sustentação do braço e inserção muscular de ombro e antebraço", characteristics: "Osso longo padrão", relations: "Escápula (acima), Rádio e Ulna (abaixo)", memoryTips: "Lembra humor, dor no 'nervinho' do cotovelo irrita o úmero" }
  },
  {
    id: 45, category: "membros-superiores", boneName: "Rádio",
    visualReference: { image: "/assets/membros-superiores/radio.jpg", view: "single", region: "antebraço", hint: "Osso lateral do antebraço.", marker: { x: 250, y: 250, r: 25 }, landmark: "Lado do polegar", quickTip: "Fique na posição anatômica, é o osso de fora" },
    options: ["Rádio", "Ulna", "Fíbula", "Tíbia", "Carpo"], correctAnswer: "Rádio",
    explanation: { name: "Rádio", location: "Antebraço (lado lateral)", function: "Permite as rotações da mão (pronação e supinação)", characteristics: "Mais curto e espesso perto da mão", relations: "Úmero, Ulna, Carpo", memoryTips: "A antena do rádio é o polegar" }
  },
  {
    id: 46, category: "membros-superiores", boneName: "Ulna",
    visualReference: { image: "/assets/membros-superiores/ulna.jpg", view: "single", region: "antebraço", hint: "Osso medial do antebraço.", marker: { x: 250, y: 250, r: 25 }, landmark: "Lado do dedo mindinho", quickTip: "Forma a ponta do cotovelo" },
    options: ["Ulna", "Rádio", "Fêmur", "Fíbula", "Metacarpo"], correctAnswer: "Ulna",
    explanation: { name: "Ulna", location: "Antebraço (lado medial)", function: "Estabiliza o antebraço", characteristics: "Mais grossa perto do cotovelo", relations: "Úmero, Rádio", memoryTips: "Ulna rima com mindinho (mentira, mas acompanham a mesma linha medial)" }
  },
  {
    id: 47, category: "membros-superiores", boneName: "Ossos do Carpo",
    visualReference: { image: "/assets/membros-superiores/ossos-carpo.png", view: "single", region: "punho", hint: "Grupo de 8 pequenos ossos no pulso.", marker: { x: 250, y: 250, r: 40 }, landmark: "Punho", quickTip: "Enfileirados em duas fileiras de quatro" },
    options: ["Ossos do Carpo", "Ossos do Tarso", "Metacarpos", "Falanges", "Patela"], correctAnswer: "Ossos do Carpo",
    explanation: { name: "Ossos do Carpo", location: "Punho", function: "Permitem os movimentos complexos e articulação do punho", characteristics: "Escafoide, Semilunar, Piramidal, Pisiforme, Trapézio, Trapezoide, Capitato e Hamato", relations: "Rádio, Ulna, Metacarpos", memoryTips: "Carpo = mão (tarso = pé)" }
  },
  {
    id: 48, category: "membros-superiores", boneName: "Metacarpo",
    visualReference: { image: "/assets/membros-superiores/metacarpo.jpg", view: "single", region: "mão", hint: "Cinco ossos que formam a palma da mão.", marker: { x: 250, y: 250, r: 35 }, landmark: "Palma e dorso da mão", quickTip: "Numerados de I a V, do polegar ao dedinho" },
    options: ["Metacarpo", "Metatarso", "Falanges", "Carpo", "Ulna"], correctAnswer: "Metacarpo",
    explanation: { name: "Osso Metacárpico", location: "Eixo principal da mão", function: "Apoio e estrutura para os dedos", characteristics: "Ossos longos miniaturizados em formato de ponte", relations: "Carpo e falanges", memoryTips: "'Meta' está além. Além do carpo." }
  },
  {
    id: 49, category: "membros-superiores", boneName: "Falanges (Mão)",
    visualReference: { image: "/assets/membros-superiores/falanges-mao.jpg", view: "single", region: "dedos da mão", hint: "Os ossinhos que formam os dedos.", marker: { x: 250, y: 250, r: 40 }, landmark: "Dedos da mão", quickTip: "Cada dedo tem três, exceto o polegar (que tem a proximal e distal)" },
    options: ["Falanges", "Metacarpos", "Carpos", "Sesamoides", "Tubérculos"], correctAnswer: "Falanges",
    explanation: { name: "Falanges da Mão", location: "Ponta dos dedos", function: "Movimentação fina e pegada", characteristics: "Proximais, médias e distais", relations: "Metacarpo", memoryTips: "Falam muito com a mão -> Falanges" }
  },

  // --- NOVAS QUESTÕES: MEMBROS INFERIORES ---
  {
    id: 50, category: "membros-inferiores", boneName: "Fêmur",
    visualReference: { 
      images: [
        { image: "/assets/membros-inferiores/femur1.jpg", marker: { x: 250, y: 250, r: 35 } },
        { image: "/assets/membros-inferiores/femur2.jpg", marker: { x: 250, y: 250, r: 35 } }
      ],
      view: "single", region: "coxa", hint: "O osso mais longo, mais forte e mais pesado do corpo humano.", landmark: "Coxa", quickTip: "Sua 'cabeça' encaixa no quadril"
    },
    options: ["Fêmur", "Tíbia", "Fíbula", "Úmero", "Rádio"], correctAnswer: "Fêmur",
    explanation: { name: "Fêmur", location: "Coxa", function: "Sustenta grande parte do peso corporal e permite a locomoção", characteristics: "Maior e mais forte osso longo do corpo", relations: "Pelve (acima), Tíbia e Patela (abaixo)", memoryTips: "O gigante da coxa" }
  },
  {
    id: 51, category: "membros-inferiores", boneName: "Patela",
    visualReference: { image: "/assets/membros-inferiores/patela.jpeg", view: "single", region: "joelho", hint: "Osso pequeno e grosso localizado na frente da articulação do joelho.", marker: { x: 250, y: 250, r: 25 }, landmark: "Rótula do joelho", quickTip: "Também conhecida antigamente como rótula" },
    options: ["Patela", "Tíbia", "Fíbula", "Carpal", "Falange"], correctAnswer: "Patela",
    explanation: { name: "Patela", location: "Articulação do joelho (anterior)", function: "Aumenta a alavanca do tendão do quádriceps e protege o joelho", characteristics: "Maior osso sesamoide do corpo", relations: "Fêmur", memoryTips: "O 'escudinho' do joelho" }
  },
  {
    id: 52, category: "membros-inferiores", boneName: "Tíbia",
    visualReference: { image: "/assets/membros-inferiores/tibia.jpg", view: "single", region: "perna", hint: "O osso maior e mais medial da perna.", marker: { x: 250, y: 250, r: 30 }, landmark: "Canela", quickTip: "Segundo maior osso do corpo" },
    options: ["Tíbia", "Fíbula", "Úmero", "Ulna", "Fêmur"], correctAnswer: "Tíbia",
    explanation: { name: "Tíbia", location: "Perna (medial a anterior)", function: "Sustentação principal do peso na perna inferior", characteristics: "Osso longo, forma a 'canela'", relations: "Fêmur, Fíbula, Tálus", memoryTips: "A 'canela' que sofre jogando futebol" }
  },
  {
    id: 53, category: "membros-inferiores", boneName: "Fíbula",
    visualReference: { image: "/assets/membros-inferiores/fibula.jpg", view: "single", region: "perna", hint: "O osso longo e fino situado na parte lateral da perna.", marker: { x: 250, y: 250, r: 25 }, landmark: "Lado externo da perna", quickTip: "Não suporta o peso do corpo" },
    options: ["Fíbula", "Tíbia", "Úmero", "Rádio", "Ulna"], correctAnswer: "Fíbula",
    explanation: { name: "Fíbula", location: "Perna (lateral)", function: "Fixação muscular e estabilização do tornozelo", characteristics: "Osso longo e esbelto", relations: "Tíbia, Tálus", memoryTips: "Fina como a Fíbula" }
  },
  {
    id: 54, category: "membros-inferiores", boneName: "Ossos do Tarso",
    visualReference: { image: "/assets/membros-inferiores/ossos-tarso.jpg", view: "single", region: "tornozelo", hint: "Grupo de 7 ossos na região posterior do pé/tornozelo.", marker: { x: 250, y: 250, r: 35 }, landmark: "Tornozelo e calcanhar", quickTip: "Inclui o Calcâneo, o osso do calcanhar" },
    options: ["Ossos do Tarso", "Ossos do Carpo", "Metatarsos", "Falanges", "Patela"], correctAnswer: "Ossos do Tarso",
    explanation: { name: "Ossos do Tarso", location: "Tornozelo e parte posterior do pé", function: "Suporte de peso e flexibilidade do pé", characteristics: "Sete ossos irregulares robustos", relations: "Tíbia, Fíbula, Metatarsos", memoryTips: "Tarso = do pé (você pisava num 'tarsinho' ou 'toquinho' de chão)" }
  },
  {
    id: 55, category: "membros-inferiores", boneName: "Metatarso",
    visualReference: { image: "/assets/membros-inferiores/metatarso.jpg", view: "single", region: "pé", hint: "Grupo de cinco ossos compridos no pé.", marker: { x: 250, y: 250, r: 35 }, landmark: "Peito do pé", quickTip: "Numerados de I a V, começando pelo dedão" },
    options: ["Metatarso", "Metacarpo", "Tarso", "Carpo", "Ulna"], correctAnswer: "Metatarso",
    explanation: { name: "Metatarso", location: "Peito do pé", function: "Suporte e propulsão na marcha", characteristics: "Cinco ossos longos miniatura", relations: "Tarso e Falanges", memoryTips: "O 'caminho' até os dedos do pé" }
  },
  {
    id: 56, category: "membros-inferiores", boneName: "Falanges (Pé)",
    visualReference: { image: "/assets/membros-inferiores/falanges-pe.jpg", view: "single", region: "dedos do pé", hint: "Ossos que formam os dedos dos pés.", marker: { x: 250, y: 250, r: 30 }, landmark: "Dedos do pé", quickTip: "O dedão tem duas, os outros têm três" },
    options: ["Falanges", "Metatarsos", "Tarsos", "Carpos", "Rádio"], correctAnswer: "Falanges",
    explanation: { name: "Falanges do Pé", location: "Ponta dos dedos do pé", function: "Equilíbrio, aderência e flexibilidade", characteristics: "Proximais, médias e distais", relations: "Metatarso", memoryTips: "As mesmas dos dedos da mão, só que no pé" }
  }
];

