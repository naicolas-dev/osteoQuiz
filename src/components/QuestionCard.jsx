import BoneVisual from "./BoneVisual";
import OptionButton from "./OptionButton";
import { quizRegistry, quizCategories } from "../data/quizRegistry";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

function QuestionCard({
  quizType,
  quizMode,
  question,
  questionNumber,
  totalQuestions,
  shuffledOptions,
  selectedOption,
  hasAnswered,
  onSelectOption,
}) {

  const getQuestionTitle = () => {
    if (question.questionText) return question.questionText;
    switch (quizType) {
      case "ossos": return "Qual osso é este?";
      case "articulacoes": return "Qual articulação é esta?";
      case "musculos": return "Qual músculo é este?";
      default: return "Qual estrutura anatômica é esta?";
    }
  };

  const typeLabel = quizRegistry[quizType]?.label || "Quiz";
  const categoryLabel = quizMode === "all" 
    ? "Todas as regiões" 
    : quizCategories[quizType]?.find(c => c.id === quizMode)?.label || quizMode;

  const quizContextLabel = `${typeLabel} - ${categoryLabel}`;

  return (
    <article className="question-card">
      <div className="question-header">
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <span className="chip" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#b7c8be' }}>
            {quizContextLabel}
          </span>
          <span className="chip">
            Questão {questionNumber}/{totalQuestions}
          </span>
        </div>
        <h2>{getQuestionTitle()}</h2>
        <p className="question-helper">
          {question.visualReference?.view === "text" 
            ? "Leia a referência e escolha a alternativa correta."
            : "Observe a referência visual e escolha apenas uma alternativa."}
        </p>
      </div>

      <BoneVisual key={question.id} visualReference={question.visualReference} />

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
              keyHint={index + 1}
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
