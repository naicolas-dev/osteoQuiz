import { FaShareAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function ResultScreen({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  let performanceMessage = "Bom começo. Revise os ossos e tente novamente.";
  if (percentage >= 80) {
    performanceMessage = "Excelente desempenho. Sua identificação óssea está muito boa.";
  } else if (percentage >= 60) {
    performanceMessage = "Bom resultado. Com mais repetições você consolida o conteúdo.";
  }

  const handleShare = async () => {
    const shareText = `Acabei de acertar ${score} de ${totalQuestions} questões (${percentage}%) no Quiz de Anatomia NutrikaBones! 🦴 Consegue fazer melhor?`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "NutrikaBones - Quiz de Anatomia",
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Compartilhamento cancelado ou ocorreu um erro:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Resultado copiado!",
          text: "Cole onde quiser para desafiar seus amigos.",
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true,
          background: "#1b2420",
          color: "#eaf4ee",
          iconColor: "#7bc6a4"
        });
      } catch (err) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Erro ao copiar",
          showConfirmButton: false,
          timer: 3000,
          background: "#1b2420",
          color: "#eaf4ee",
        });
      }
    }
  };

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
      
      <div className="result-actions">
        <button className="primary-button" onClick={onRestart} type="button">
          Reiniciar quiz
        </button>
        <button className="secondary-button share-button" onClick={handleShare} type="button">
          <FaShareAlt /> Compartilhar
        </button>
      </div>
    </section>
  );
}

export default ResultScreen;
