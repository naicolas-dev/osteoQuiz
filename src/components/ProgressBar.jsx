function ProgressBar({ currentStep, totalSteps }) {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <section className="progress-wrap" aria-label="Progresso do quiz">
      <div className="progress-head">
        <span>Progresso</span>
        <strong>{progressPercent}%</strong>
      </div>
      <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="progress-caption">
        Pergunta {currentStep} de {totalSteps}
      </p>
    </section>
  );
}

export default ProgressBar;
