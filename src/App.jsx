import QuizContainer from "./components/QuizContainer";

function App() {
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
        <QuizContainer />
      </main>
    </div>
  );
}

export default App;
