import { useState } from "react";
import QuizContainer from "./components/QuizContainer";
import RegionSelectionScreen from "./components/RegionSelectionScreen";

function App() {
  const [appState, setAppState] = useState("welcome"); // "welcome" | "region-selection" | "quiz"
  const [quizMode, setQuizMode] = useState("all"); // "all" | "cranio"

  const handleStartQuiz = () => {
    setAppState("region-selection");
  };

  const handleModeSelection = (mode) => {
    setQuizMode(mode);
    setAppState("quiz");
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">OsteoQuiz</p>
        <h1>Anatomia Interativa</h1>
        <p className="subtitle">
          Identifique o osso destacado, receba feedback imediato e revise os
          pontos mais importantes para memorização.
        </p>
      </header>

      <main>
        {appState === "welcome" && (
          <section className="welcome-screen">
            <h2>Pronto para testar seus conhecimentos?</h2>
            <p>
              Você verá imagens reais do esqueleto com marcações indicando ossos
              específicos. Escolha a alternativa correta e aprenda com as
              explicações detalhadas.
            </p>
            <button
              className="primary-button start-button"
              onClick={handleStartQuiz}
              type="button"
            >
              Iniciar
            </button>
          </section>
        )}

        {appState === "region-selection" && (
          <RegionSelectionScreen onSelectMode={handleModeSelection} />
        )}

        {appState === "quiz" && (
          <QuizContainer quizMode={quizMode} onRestartApp={() => setAppState("welcome")} />
        )}
      </main>

      <footer className="app-footer">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/naicolas-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicolas Viana Alves
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
