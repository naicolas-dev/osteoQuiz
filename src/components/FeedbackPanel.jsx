function FeedbackPanel({ question, selectedOption, isCorrect }) {
  const { explanation, correctAnswer } = question;

  return (
    <section className={`feedback-panel ${isCorrect ? "feedback-correct" : "feedback-wrong"}`}>
      <div className="feedback-header">
        <p className="feedback-status">
          {isCorrect ? "Resposta correta" : "Resposta incorreta"}
        </p>
        <p className="feedback-selected">
          Sua resposta: <strong>{selectedOption}</strong>
        </p>
        <p className="feedback-correct-answer">
          Resposta certa: <strong>{correctAnswer}</strong>
        </p>
      </div>

      <div className="explanation-block">
        <h3>Explicacao didatica</h3>
        <p>
          <strong>Nome do osso:</strong> {explanation.name}
        </p>
        <p>
          <strong>Localizacao anatomica:</strong> {explanation.location}
        </p>
        <p>
          <strong>Funcao:</strong> {explanation.function}
        </p>
        <p>
          <strong>Principais caracteristicas:</strong> {explanation.characteristics}
        </p>
        <p>
          <strong>Relacoes com outras estruturas:</strong> {explanation.relations}
        </p>
        <p>
          <strong>Dica de memorizacao:</strong> {explanation.memoryTips}
        </p>
      </div>
    </section>
  );
}

export default FeedbackPanel;
