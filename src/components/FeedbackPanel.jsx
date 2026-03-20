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
          Resposta correta: <strong>{correctAnswer}</strong>
        </p>
      </div>

      <div className="explanation-block">
        <h3>Explicação didática</h3>
        <p>
          <strong>Nome do osso:</strong> {explanation.name}
        </p>
        <p>
          <strong>Localização anatômica:</strong> {explanation.location}
        </p>
        <p>
          <strong>Função:</strong> {explanation.function}
        </p>
        <p>
          <strong>Principais características:</strong> {explanation.characteristics}
        </p>
        <p>
          <strong>Relações com outras estruturas:</strong> {explanation.relations}
        </p>
        <p>
          <strong>Dica de memorização:</strong> {explanation.memoryTips}
        </p>
      </div>
    </section>
  );
}

export default FeedbackPanel;
