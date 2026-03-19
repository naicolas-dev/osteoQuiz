export const bonesQuizData = [
  {
    id: 1,
    boneName: "Femur",
    visualReference: {
      region: "coxa",
      hint: "Osso longo na coxa, entre quadril e joelho.",
      marker: { x: 120, y: 302, r: 16 },
    },
    options: ["Femur", "Tibia", "Fibula", "Ulna", "Clavicula"],
    correctAnswer: "Femur",
    explanation: {
      name: "Femur",
      location:
        "Fica na coxa e conecta a pelve ao joelho. Sua extremidade proximal articula com o acetabulo e a distal com tibia e patela.",
      function:
        "Suporta grande parte do peso corporal e transmite forcas durante marcha, corrida e salto.",
      characteristics:
        "E o osso mais longo e resistente do corpo. Possui cabeca femoral, colo, trocanter maior e menor, alem de condilos distais.",
      relations:
        "Relaciona-se com acetabulo, ligamentos do quadril, musculos da coxa e articulacao do joelho.",
      memoryTips:
        "Associe femur a forca e sustentacao. Pense nele como a principal coluna ossea do membro inferior.",
    },
  },
  {
    id: 2,
    boneName: "Umero",
    visualReference: {
      region: "braco",
      hint: "Osso longo do braco, entre ombro e cotovelo.",
      marker: { x: 72, y: 176, r: 14 },
    },
    options: ["Umero", "Radio", "Escapula", "Clavicula", "Femur"],
    correctAnswer: "Umero",
    explanation: {
      name: "Umero",
      location:
        "Localiza-se no braco, entre a escapula (ombro) e os ossos do antebraco (radio e ulna).",
      function:
        "Permite movimentos amplos do membro superior e atua como alavanca para musculos do ombro e do braco.",
      characteristics:
        "Tem cabeca umeral proximal, tuberculos para insercao muscular e troclea/capitelo distal para articulacao do cotovelo.",
      relations:
        "Articula-se com a cavidade glenoidal da escapula e com radio e ulna no cotovelo.",
      memoryTips:
        "Lembre de umero como osso unico do braco. Braco tem um, antebraco tem dois.",
    },
  },
  {
    id: 3,
    boneName: "Tibia",
    visualReference: {
      region: "perna medial",
      hint: "Osso principal da perna, abaixo do joelho e voltado para a linha media.",
      marker: { x: 110, y: 372, r: 14 },
    },
    options: ["Fibula", "Patela", "Tibia", "Femur", "Talus"],
    correctAnswer: "Tibia",
    explanation: {
      name: "Tibia",
      location:
        "Fica na perna, em posicao medial, entre joelho e tornozelo. E palpavel na canela.",
      function:
        "Suporta a maior parte do peso transmitido pelo femur e participa da estabilidade da marcha.",
      characteristics:
        "Possui planalto tibial proximal, tuberosidade tibial e maleolo medial distal.",
      relations:
        "Articula-se com femur e fibula proximalmente e com talus no tornozelo.",
      memoryTips:
        "Pense em tibia como osso da canela e principal suporte da perna abaixo do joelho.",
    },
  },
  {
    id: 4,
    boneName: "Radio",
    visualReference: {
      region: "antebraco lateral",
      hint: "Osso lateral do antebraco no lado do polegar.",
      marker: { x: 64, y: 252, r: 12 },
    },
    options: ["Ulna", "Escafode", "Radio", "Umero", "Clavicula"],
    correctAnswer: "Radio",
    explanation: {
      name: "Radio",
      location:
        "Localiza-se no antebraco, lateralmente quando a palma esta voltada para frente, no lado do polegar.",
      function:
        "Participa dos movimentos de pronacao e supinacao, alem de transmitir carga da mao para o cotovelo.",
      characteristics:
        "Tem cabeca radial proximal e extremidade distal alargada que participa do punho.",
      relations:
        "Relaciona-se com ulna, umero e ossos do carpo, especialmente escafode e semilunar.",
      memoryTips:
        "Radio gira sobre a ulna nos movimentos de rotacao do antebraco.",
    },
  },
  {
    id: 5,
    boneName: "Clavicula",
    visualReference: {
      region: "cintura escapular anterior",
      hint: "Osso em formato de S acima do torax, na base do pescoco.",
      marker: { x: 118, y: 110, r: 12 },
    },
    options: ["Escapula", "Esterno", "Clavicula", "Costela", "Umero"],
    correctAnswer: "Clavicula",
    explanation: {
      name: "Clavicula",
      location:
        "Fica entre o manubrio do esterno e o acromio da escapula, na porcao superior do torax.",
      function:
        "Mantem o ombro afastado do tronco e ajuda a transferir forca do membro superior para o esqueleto axial.",
      characteristics:
        "E um osso longo com curvatura em S, subcutaneo e facilmente palpavel.",
      relations:
        "Conecta-se ao esterno medialmente e a escapula lateralmente na articulacao acromioclavicular.",
      memoryTips:
        "A clavicula funciona como uma haste que sustenta a cintura escapular na frente do torax.",
    },
  },
  {
    id: 6,
    boneName: "Escapula",
    visualReference: {
      region: "dorso superior",
      hint: "Osso plano da parte posterior do ombro.",
      marker: { x: 92, y: 136, r: 13 },
    },
    options: ["Escapula", "Clavicula", "Esterno", "Umero", "Atlas"],
    correctAnswer: "Escapula",
    explanation: {
      name: "Escapula",
      location:
        "Situada na parede posterior do torax, entre a segunda e a setima costela, em cada lado.",
      function:
        "Serve de base para movimentos do ombro e de insercao para varios musculos do membro superior.",
      characteristics:
        "Osso plano triangular com espinha da escapula, acromio, processo coracoide e cavidade glenoidal.",
      relations:
        "Articula-se com clavicula e umero. Desliza sobre a parede toracica com forte controle muscular.",
      memoryTips:
        "Visualize a escapula como uma placa triangular nas costas que guia a mecanica do ombro.",
    },
  },
  {
    id: 7,
    boneName: "Mandibula",
    visualReference: {
      region: "face inferior",
      hint: "Osso da arcada inferior e unico movel do cranio.",
      marker: { x: 120, y: 62, r: 12 },
    },
    options: ["Maxila", "Mandibula", "Zigomatico", "Frontal", "Temporal"],
    correctAnswer: "Mandibula",
    explanation: {
      name: "Mandibula",
      location:
        "Fica na porcao inferior da face e forma o contorno do queixo e da arcada dentaria inferior.",
      function:
        "Permite mastigacao, fala e abertura/fechamento da boca por meio da articulacao temporomandibular.",
      characteristics:
        "Tem corpo horizontal e ramos verticais, com processos condilar e coronoide.",
      relations:
        "Relaciona-se com osso temporal na ATM, dentes inferiores e musculos da mastigacao.",
      memoryTips:
        "Lembre que a mandibula e o principal osso movel do cranio em atividades como falar e mastigar.",
    },
  },
  {
    id: 8,
    boneName: "Esterno",
    visualReference: {
      region: "linha media toracica",
      hint: "Osso plano central do torax, na frente do peito.",
      marker: { x: 120, y: 156, r: 13 },
    },
    options: ["Esterno", "Clavicula", "Escapula", "Costela", "Vertebra toracica"],
    correctAnswer: "Esterno",
    explanation: {
      name: "Esterno",
      location:
        "Fica na linha media anterior do torax, composto por manubrio, corpo e processo xifoide.",
      function:
        "Protege estruturas vitais como coracao e grandes vasos, alem de participar da caixa toracica.",
      characteristics:
        "Osso plano alongado, com incisuras para claviculas e cartilagens costais.",
      relations:
        "Conecta-se a claviculas e costelas por meio de cartilagens, formando parte do gradil costal.",
      memoryTips:
        "Pense no esterno como escudo central do torax e ponto de referencia para contagem de costelas.",
    },
  },
  {
    id: 9,
    boneName: "Patela",
    visualReference: {
      region: "joelho anterior",
      hint: "Osso sesamoide na frente do joelho.",
      marker: { x: 112, y: 344, r: 11 },
    },
    options: ["Patela", "Tibia", "Femur", "Fibula", "Talus"],
    correctAnswer: "Patela",
    explanation: {
      name: "Patela",
      location:
        "Localiza-se anteriormente ao joelho, inserida no tendao do quadriceps e ligada a tibia pelo ligamento patelar.",
      function:
        "Aumenta a eficiencia mecanica do quadriceps e protege a face anterior da articulacao do joelho.",
      characteristics:
        "E o maior osso sesamoide do corpo e possui face articular posterior para deslizamento no femur.",
      relations:
        "Relaciona-se com tendao do quadriceps, ligamento patelar e superficie patelar femoral.",
      memoryTips:
        "Visualize a patela como uma polia anterior do joelho que melhora a extensao da perna.",
    },
  },
  {
    id: 10,
    boneName: "Osso Iliaco",
    visualReference: {
      region: "quadril",
      hint: "Porcao ampla da pelve lateral, acima do acetabulo.",
      marker: { x: 124, y: 242, r: 14 },
    },
    options: ["Sacro", "Osso Iliaco", "Pubis", "Femur", "Esterno"],
    correctAnswer: "Osso Iliaco",
    explanation: {
      name: "Osso Iliaco",
      location:
        "Compõe a porcao superior e lateral do osso do quadril, formando parte da pelve.",
      function:
        "Distribui carga entre coluna e membros inferiores e oferece ampla area de insercao muscular.",
      characteristics:
        "Inclui asa do ilio, crista iliaca e parte do acetabulo onde a cabeca do femur se encaixa.",
      relations:
        "Relaciona-se com sacro na articulacao sacroiliaca, com pubis/isquio e com o femur no quadril.",
      memoryTips:
        "Associe crista iliaca ao ponto osseo palpavel na cintura, util para orientar anatomia da pelve.",
    },
  },
];
