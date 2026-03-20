import { useRef, useState } from "react";
import { FaShareAlt, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";

function ResultScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const shareCardRef = useRef(null);
  const [isSharing, setIsSharing] = useState(false);

  let performanceMessage = "Bom começo. Revise os ossos e tente novamente.";
  if (percentage >= 80) {
    performanceMessage = "Excelente desempenho. Sua identificação óssea está muito boa.";
  } else if (percentage >= 60) {
    performanceMessage = "Bom resultado. Com mais repetições você consolida o conteúdo.";
  }

  const handleShare = async () => {
    if (!shareCardRef.current || isSharing) return;

    setIsSharing(true);
    try {
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#1b2420",
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          setIsSharing(false);
          return;
        }

        const file = new File([blob], "nutrikabones-resultado.png", { type: "image/png" });
        const shareText = `Acabei de acertar ${score} de ${totalQuestions} questões (${percentage}%) no Quiz de Anatomia NutrikaBones! 🦴 Consegue fazer melhor?`;

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: "NutrikaBones - Quiz de Anatomia",
              text: shareText,
              files: [file],
            });
          } catch (error) {
            console.log("Compartilhamento nativo cancelado:", error);
          }
        } else {
          // Fallback to download and clipboard copy
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "nutrikabones-resultado.png";
          link.click();
          URL.revokeObjectURL(link.href);

          await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`).catch(() => { });

          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Imagem salva!",
            text: "Resultado baixado e texto copiado para a área de transferência.",
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
            background: "#1b2420",
            color: "#eaf4ee",
            iconColor: "#7bc6a4"
          });
        }
        setIsSharing(false);
      }, "image/png", 1.0);
    } catch (error) {
      setIsSharing(false);
      console.error("Erro ao gerar imagem:", error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Erro ao gerar imagem",
        showConfirmButton: false,
        timer: 3000,
        background: "#1b2420",
        color: "#eaf4ee",
      });
    }
  };

  return (
    <>
      <section className="result-screen">
        <p className="eyebrow">Resultado Final</p>
        <h2>Quiz concluído</h2>
        <p className="result-score">
          Você acertou <strong>{score}</strong> de <strong>{totalQuestions}</strong>{" "}
          questões.
        </p>
        <p className="result-percentage">Aproveitamento: {percentage}%</p>
        <p className="result-message">{performanceMessage}</p>

        <div className="result-actions">
          <button className="primary-button" onClick={onRestart} type="button" disabled={isSharing}>
            Reiniciar quiz
          </button>
          <button className="secondary-button share-button" onClick={handleShare} type="button" disabled={isSharing}>
            {isSharing ? <FaSpinner className="spin-icon" /> : <FaShareAlt />}
            {isSharing ? "Gerando..." : "Compartilhar"}
          </button>
        </div>
      </section>

      {/* Hidden Card for Web Share API rendering */}
      <div className="share-card-container" ref={shareCardRef}>
        <div className="share-card-content">
          <p className="share-eyebrow">OsteoQuiz - Anatomia Interativa</p>
          <h2 className="share-title">EU ACERTEI!</h2>
          <div className="share-score-box">
            <span className="share-number">{score}</span>
            <span className="share-total">/ {totalQuestions}</span>
          </div>
          <p className="share-percentage">Aproveitamento: {percentage}%</p>
          <p className="share-msg">{performanceMessage}</p>
          <div className="share-footer">
            <p>Consegue fazer melhor?</p>
            <strong>Jogue agora!</strong>
            <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.85rem", opacity: 0.9 }}>
              naicolas-dev.github.io/nutrikabones
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
