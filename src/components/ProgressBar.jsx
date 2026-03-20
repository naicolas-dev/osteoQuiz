function ProgressBar({ currentStep, answeredCount, totalSteps }) {
  const progressPercent = Math.round((answeredCount / totalSteps) * 100);

  return (
    <section className="progress-wrap" aria-label="Progresso do quiz">
      <div className="progress-head">
        <span>Progresso</span>
        <strong>{progressPercent}%</strong>
      </div>
      <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </section>
  );
}

export default ProgressBar;
