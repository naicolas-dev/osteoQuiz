function ResultScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  let performanceMessage = "Bom começo. Revise os ossos e tente novamente.";
  if (percentage >= 80) {
    performanceMessage = "Excelente desempenho. Sua identificação óssea está muito boa.";
  } else if (percentage >= 60) {
    performanceMessage = "Bom resultado. Com mais repetições você consolida o conteúdo.";
  }

  return (
    <section className="result-screen">
      <p className="eyebrow">Resultado Final</p>
      <h2>Quiz concluído</h2>
      <p className="result-score">
        Você acertou <strong>{score}</strong> de <strong>{totalQuestions}</strong>{" "}
        questões.
      </p>
      <p className="result-percentage">Aproveitamento: {percentage}%</p>
      <p className="result-message">{performanceMessage}</p>
      <button className="primary-button" onClick={onRestart} type="button">
        Reiniciar quiz
      </button>
    </section>
  );
}

export default ResultScreen;
