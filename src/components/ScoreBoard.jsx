function ScoreBoard({ score, answeredCount, totalQuestions }) {
  return (
    <section className="scoreboard" aria-label="Pontuação atual">
      <p>
        Pontuação: <strong>{score}</strong>
      </p>
      <p>
        Respondidas:{" "}
        <strong>
          {answeredCount}/{totalQuestions}
        </strong>
      </p>
    </section>
  );
}

export default ScoreBoard;
