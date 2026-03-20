function ScoreBoard({ score, answeredCount, totalQuestions }) {
  return (
    <section className="scoreboard" aria-label="Pontuação atual">
      <p>
        Questões corretas: <strong>{score}</strong>
      </p>
      <p>
        Questões respondidas:{" "}
        <strong>
          {answeredCount}/{totalQuestions}
        </strong>
      </p>
    </section>
  );
}

export default ScoreBoard;
