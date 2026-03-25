import { useEffect, useState } from "react";
import { bonesQuizData } from "../data/bonesQuizData";
import { shuffleArray } from "../utils/shuffle";
import FeedbackPanel from "./FeedbackPanel";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import ScoreBoard from "./ScoreBoard";
import Swal from "sweetalert2";
import { IoArrowBack } from "react-icons/io5";

function QuizContainer({ quizMode, onRestartApp, onChooseRegion }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [showDevMenu, setShowDevMenu] = useState(false);

  const getQuestionsByMode = () => {
    if (quizMode === "all") {
      return bonesQuizData;
    }
    return bonesQuizData.filter((bone) => bone.category === quizMode);
  };

  const [questions, setQuestions] = useState(() => shuffleArray([...getQuestionsByMode()]));
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
  };

  const handleConfirm = () => {
    if (!selectedOption || hasAnswered) return;
    
    setHasAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Desktop keyboard shortcuts (pointer: fine = non-touch)
  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop || isFinished) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      
      // 1-5: select option
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 5 && !hasAnswered) {
        const option = shuffledOptions[num - 1];
        if (option) handleSelectOption(option);
      }
      
      // Enter: confirm or go next
      if (e.key === "Enter") {
        if (!hasAnswered && selectedOption) {
          handleConfirm();
        } else if (hasAnswered) {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shuffledOptions, selectedOption, hasAnswered, isFinished]);

  // Developer mode shortcut: Alt + D
  useEffect(() => {
    const handleDevShortcut = (e) => {
      if (e.altKey && e.key.toLowerCase() === "d") {
        setShowDevMenu((prev) => !prev);
      }
      if (e.key === "Escape") {
        setShowDevMenu(false);
      }
    };
    window.addEventListener("keydown", handleDevShortcut);
    return () => window.removeEventListener("keydown", handleDevShortcut);
  }, []);


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
    const newQuestions = shuffleArray([...getQuestionsByMode()]);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setIsFinished(false);
    setShuffledOptions(shuffleArray(newQuestions.length > 0 ? newQuestions[0].options : []));
  };

  const handleExit = () => {
    Swal.fire({
      title: "Encerrar Quiz?",
      html: `
        <div class="bone-break-container">
          <div class="bone-part bone-left">
            <svg viewBox="0 0 100 40">
              <path d="M10,20 Q10,5 25,10 Q35,15 35,20 Q35,25 25,30 Q10,35 10,20 Z" fill="#7bc6a4" stroke="#151c19" stroke-width="1.5"/>
              <path d="M30,20 L60,20 L65,12 L50,15 L60,20 Z" fill="#7bc6a4" />
              <rect x="25" y="14" width="30" height="12" fill="#7bc6a4" />
              <path d="M55,14 L60,18 L55,22 L60,26 L55,26 Z" fill="#7bc6a4" stroke="#151c19" stroke-width="1" />
            </svg>
          </div>
          <div class="bone-part bone-right">
            <svg viewBox="0 0 100 40">
              <path d="M90,20 Q90,5 75,10 Q65,15 65,20 Q65,25 75,30 Q90,35 90,20 Z" fill="#7bc6a4" stroke="#151c19" stroke-width="1.5"/>
              <rect x="45" y="14" width="30" height="12" fill="#7bc6a4" />
              <path d="M45,14 L40,18 L45,22 L40,26 L45,26 Z" fill="#7bc6a4" stroke="#151c19" stroke-width="1" />
            </svg>
          </div>
          <div class="bone-fragment frag-1"></div>
          <div class="bone-fragment frag-2"></div>
          <div class="bone-fragment frag-3"></div>
        </div>
        <p style="margin-top: 1.5rem; color: #b7c8be;">
          Você voltará para a tela inicial e seu progresso atual será perdido.
        </p>
      `,
      showCancelButton: true,
      background: "#1b2420",
      color: "#eaf4ee",
      confirmButtonColor: "#d96c6c",
      cancelButtonColor: "#2a3832",
      confirmButtonText: "Sim, sair",
      cancelButtonText: "Continuar no Quiz",
      reverseButtons: true,
      customClass: {
        confirmButton: "swal-btn swal-confirm-btn",
        cancelButton: "swal-btn swal-cancel-btn",
        popup: "swal-custom-popup",
      },
      buttonsStyling: false,
      heightAuto: false,
      backdrop: `rgba(15, 20, 18, 0.8)`,
    }).then((result) => {
      if (result.isConfirmed) {
        onRestartApp();
      }
    });
  };

  if (isFinished) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
        onChooseRegion={onChooseRegion}
      />
    );
  }

  const answeredCount = hasAnswered ? currentIndex + 1 : currentIndex;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <section className="quiz-shell" aria-live="polite">
      {showDevMenu && (
        <div className="dev-menu-overlay" onClick={() => setShowDevMenu(false)}>
          <div className="dev-menu-content" onClick={(e) => e.stopPropagation()}>
            <h3>Modo Desenvolvedor</h3>
            <p>Selecione uma questão para pular:</p>
            <div className="dev-menu-grid">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  className={`dev-menu-item ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowDevMenu(false);
                    setSelectedOption(null);
                    setHasAnswered(false);
                  }}
                >
                  {idx + 1}. {q.boneName}
                </button>
              ))}
            </div>
            <button className="dev-menu-close" onClick={() => setShowDevMenu(false)}>
              Fechar (Esc)
            </button>
          </div>
        </div>
      )}
      <div className="quiz-topbar">
        <ProgressBar
          currentStep={currentIndex + 1}
          answeredCount={answeredCount}
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
        <button className="text-button exit-quiz-button" onClick={handleExit}>
          <IoArrowBack /> Sair do Quiz
        </button>
        {!hasAnswered ? (
          <button
            className="primary-button"
            onClick={handleConfirm}
            disabled={!selectedOption}
          >
            Confirmar sua resposta
          </button>
        ) : (
          <button
            className="primary-button"
            onClick={handleNext}
          >
            {currentIndex === totalQuestions - 1
              ? "Finalizar quiz"
              : "Próxima questão"}
          </button>
        )}
      </div>
    </section>
  );
}

export default QuizContainer;
