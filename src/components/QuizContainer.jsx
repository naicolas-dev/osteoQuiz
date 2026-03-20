import { useEffect, useState } from "react";
import { bonesQuizData } from "../data/bonesQuizData";
import { shuffleArray } from "../utils/shuffle";
import FeedbackPanel from "./FeedbackPanel";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import ScoreBoard from "./ScoreBoard";

function QuizContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const [questions, setQuestions] = useState(() => shuffleArray([...bonesQuizData]));
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (!currentQuestion || isFinished) {
      return;
    }

    setShuffledOptions(shuffleArray(currentQuestion.options));
    setSelectedOption(null);
    setHasAnswered(false);
  }, [currentQuestion, isFinished]);

  const handleSelectOption = (option) => {
    if (hasAnswered || isFinished) {
      return;
    }

    setSelectedOption(option);
    setHasAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (!hasAnswered) {
      return;
    }

    if (currentIndex >= totalQuestions - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    const newQuestions = shuffleArray([...bonesQuizData]);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsFinished(false);
    setShuffledOptions(shuffleArray(newQuestions[0].options));
  };

  if (isFinished) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
      />
    );
  }

  const answeredCount = hasAnswered ? currentIndex + 1 : currentIndex;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <section className="quiz-shell" aria-live="polite">
      <div className="quiz-topbar">
        <ProgressBar
          currentStep={currentIndex + 1}
          totalSteps={totalQuestions}
        />
        <ScoreBoard
          score={score}
          answeredCount={answeredCount}
          totalQuestions={totalQuestions}
        />
      </div>

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={totalQuestions}
        shuffledOptions={shuffledOptions}
        selectedOption={selectedOption}
        hasAnswered={hasAnswered}
        onSelectOption={handleSelectOption}
      />

      {hasAnswered && (
        <FeedbackPanel
          question={currentQuestion}
          selectedOption={selectedOption}
          isCorrect={isCorrect}
        />
      )}

      <div className="actions-row">
        <button
          className="primary-button"
          onClick={handleNext}
          disabled={!hasAnswered}
        >
          {currentIndex === totalQuestions - 1
            ? "Finalizar quiz"
            : "Próxima pergunta"}
        </button>
      </div>
    </section>
  );
}

export default QuizContainer;
