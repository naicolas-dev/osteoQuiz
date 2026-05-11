import { useState, useEffect } from "react";
import QuizContainer from "./components/QuizContainer";
import RegionSelectionScreen from "./components/RegionSelectionScreen";
import TypeSelectionScreen from "./components/TypeSelectionScreen";
import Changelog from "./components/Changelog";

function App() {
  const [appState, setAppState] = useState("welcome"); // welcome | type-selection | region-selection | quiz
  const [quizType, setQuizType] = useState("ossos"); // ossos | articulacoes | musculos
  const [quizMode, setQuizMode] = useState("all");

  const isDesktop = () => window.matchMedia("(pointer: fine)").matches;

  const handleStartQuiz = () => {
    setAppState("type-selection");
  };

  const handleTypeSelection = (typeId) => {
    setQuizType(typeId);
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
      }
      // O TypeSelectionScreen e o RegionSelectionScreen agora devem lidar com seus próprios atalhos se desejarem.
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
          Identifique estruturas anatômicas, receba feedback imediato e revise os pontos mais importantes para memorização.
        </p>
      </header>

      <main>
        {appState === "welcome" && (
          <div className="welcome-wrapper">
            <section className="welcome-screen">
              <h2>Pronto para testar seus conhecimentos?</h2>
              <p>
                Você verá questões práticas sobre diferentes estruturas do corpo humano. Escolha a alternativa correta e aprenda com explicações detalhadas.
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
            <Changelog />
          </div>
        )}

        {appState === "type-selection" && (
          <TypeSelectionScreen 
            onSelectType={handleTypeSelection} 
            onBack={() => setAppState("welcome")}
          />
        )}

        {appState === "region-selection" && (
          <RegionSelectionScreen 
            selectedType={quizType}
            onSelectMode={handleModeSelection} 
            onBack={() => setAppState("type-selection")}
          />
        )}

        {appState === "quiz" && (
          <QuizContainer 
            quizType={quizType}
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