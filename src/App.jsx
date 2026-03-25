import { useState, useEffect } from "react";
import QuizContainer from "./components/QuizContainer";
import RegionSelectionScreen from "./components/RegionSelectionScreen";
import Changelog from "./components/Changelog"; // <-- Importação do Changelog

function App() {
  const [appState, setAppState] = useState("welcome");
  const [quizMode, setQuizMode] = useState("all");

  const isDesktop = () => window.matchMedia("(pointer: fine)").matches;

  const handleStartQuiz = () => {
    setAppState("region-selection");
  };

  const handleModeSelection = (mode) => {
    setQuizMode(mode);
    setAppState("quiz");
  };

  useEffect(() => {
    if (!isDesktop()) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if (appState === "welcome" && e.key === "Enter") {
        handleStartQuiz();
      } else if (appState === "region-selection") {
        if (e.key === "1") handleModeSelection("cranio");
        if (e.key === "2") handleModeSelection("coluna-torax");
        if (e.key === "3") handleModeSelection("membros-superiores");
        if (e.key === "4") handleModeSelection("membros-inferiores");
        if (e.key === "5") handleModeSelection("all");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [appState]);

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
          <div className="welcome-wrapper">
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
              <div className="hotkey-hint">
                <kbd>Enter</kbd>
                <span>para iniciar</span>
              </div>
            </section>
            
            {/* Componente Changelog adicionado aqui */}
            <Changelog />
          </div>
        )}

        {appState === "region-selection" && (
          <RegionSelectionScreen onSelectMode={handleModeSelection} />
        )}

        {appState === "quiz" && (
          <QuizContainer 
            quizMode={quizMode} 
            onRestartApp={() => setAppState("welcome")} 
            onChooseRegion={() => setAppState("region-selection")}
          />
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