import BoneVisual from "./BoneVisual";
import OptionButton from "./OptionButton";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  shuffledOptions,
  selectedOption,
  hasAnswered,
  onSelectOption,
}) {
  return (
    <article className="question-card">
      <div className="question-header">
        <span className="chip">
          Questao {questionNumber}/{totalQuestions}
        </span>
        <h2>Qual osso esta destacado?</h2>
        <p className="question-helper">
          Observe a referencia visual e escolha apenas uma alternativa.
        </p>
      </div>

      <BoneVisual visualReference={question.visualReference} />

      <div className="options-grid" role="radiogroup" aria-label="Alternativas">
        {shuffledOptions.map((option, index) => {
          const isCorrectOption = option === question.correctAnswer;
          const isSelectedOption = option === selectedOption;

          let status = "default";
          if (hasAnswered && isCorrectOption) {
            status = "correct";
          } else if (hasAnswered && isSelectedOption && !isCorrectOption) {
            status = "wrong";
          }

          return (
            <OptionButton
              key={option}
              label={OPTION_LABELS[index]}
              option={option}
              status={status}
              disabled={hasAnswered}
              isSelected={isSelectedOption}
              onSelect={() => onSelectOption(option)}
            />
          );
        })}
      </div>
    </article>
  );
}

export default QuestionCard;
