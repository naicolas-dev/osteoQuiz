# Anatomia Quiz (React)

Aplicacao web de estudo de anatomia humana em formato de quiz interativo sobre ossos.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereco exibido no terminal (normalmente `http://localhost:5173`).

## Build de producao

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
anatomia/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    styles/
      global.css
    data/
      bonesQuizData.js
    utils/
      shuffle.js
    components/
      BoneVisual.jsx
      FeedbackPanel.jsx
      OptionButton.jsx
      ProgressBar.jsx
      QuestionCard.jsx
      QuizContainer.jsx
      ResultScreen.jsx
      ScoreBoard.jsx
```

## O que ja esta implementado

- Quiz com 10 perguntas iniciais sobre ossos humanos.
- 5 alternativas por questao (A, B, C, D, E).
- Embaralhamento das alternativas sem mutar os dados originais.
- Selecao unica de resposta por pergunta.
- Feedback imediato de acerto/erro com resposta correta.
- Explicacao didatica completa por osso:
  nome, localizacao, funcao, caracteristicas, relacoes e dica de memorizacao.
- Pontuacao em tempo real.
- Barra de progresso por pergunta.
- Fluxo de proxima pergunta.
- Tela final com desempenho e botao para reiniciar.
- Interface responsiva para desktop e mobile.

## Expansao futura (facil de manter)

- Adicionar novos ossos em `src/data/bonesQuizData.js`.
- Incluir novos modos de quiz (tempo, dificuldade, revisao por erro).
- Substituir a referencia visual simplificada por imagens anatomicas reais.
