import { useState } from "react";
import QuizContainer from "./components/QuizContainer";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Estudo Interativo</p>
        <h1>Quiz de Ossos do Corpo Humano</h1>
        <p className="subtitle">
          Identifique o osso destacado, receba feedback imediato e revise os
          pontos mais importantes para memorização.
        </p>
      </header>

      <main>
        {!isQuizStarted ? (
          <section className="welcome-screen">
            <h2>Pronto para testar seus conhecimentos?</h2>
            <p>
              Você verá imagens reais do esqueleto com marcações indicando ossos
              específicos. Escolha a alternativa correta e aprenda com as
              explicações detalhadas.
            </p>
            <button
              className="primary-button start-button"
              onClick={() => setIsQuizStarted(true)}
              type="button"
            >
              Iniciar quiz
            </button>
          </section>
        ) : (
          <QuizContainer />
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
