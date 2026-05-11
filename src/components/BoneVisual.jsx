import { useState } from "react";
import skeletonImage from "../assets/esqueleto.png";

const MARKER_BASE = {
  width: 500,
  height: 500,
};

const VIEW_CONFIG = {
  front: {
    label: "Frontal",
    left: (22 / MARKER_BASE.width) * 100,
    width: ((175 - 22) / MARKER_BASE.width) * 100,
    tagLeft: 20,
  },
  back: {
    label: "Costas",
    left: (201 / MARKER_BASE.width) * 100,
    width: ((354 - 201) / MARKER_BASE.width) * 100,
    tagLeft: 56,
  },
  side: {
    label: "Lateral",
    left: (395 / MARKER_BASE.width) * 100,
    width: ((459 - 395) / MARKER_BASE.width) * 100,
    tagLeft: 86,
  },
};

function BoneVisual({ visualReference }) {
  const { hint, marker, view = "front", landmark, quickTip, image, images } = visualReference;
  const isMultiple = Array.isArray(images) && images.length > 0;
  const [tipVisible, setTipVisible] = useState(false);
  const isTextOnly = view === "text";

  const renderStage = (imgSrc, idx) => {
    if (isTextOnly) return null; // Não renderiza o card de imagem para questões em modo texto

    const isSingle = view === "single" || !!imgSrc;
    const activeView = isSingle ? null : (VIEW_CONFIG[view] ?? VIEW_CONFIG.front);

    return (
      <div className="bone-visual-stage" role="img" aria-label="Esqueleto humano real com estrutura em destaque" key={idx || imgSrc}>
        <img
          className="bone-visual-image"
          src={isSingle ? imgSrc : skeletonImage}
          alt="Anatomia"
          loading="lazy"
        />
        {!isSingle && activeView && (
          <>
            <span
              className="bone-view-focus"
              style={{
                left: `${activeView.left}%`,
                width: `${activeView.width}%`,
              }}
            />
            <span className="bone-view-separator" style={{ left: "37.6%" }} />
            <span className="bone-view-separator" style={{ left: "74.8%" }} />
            {Object.entries(VIEW_CONFIG).map(([key, config]) => (
              <span
                key={key}
                className={`bone-view-tag ${view === key ? "is-active" : ""}`}
                style={{ left: `${config.tagLeft}%` }}
              >
                {config.label}
              </span>
            ))}
          </>
        )}
      </div>
    );
  }

  return (
    <section className="bone-visual-card">
      <div className="bone-visual-header">
        <h3>{isTextOnly ? "Contexto" : "Referência visual"}</h3>
        <p>{hint}</p>
        <p className="bone-visual-meta">
          {!isMultiple && !isTextOnly && (view === "front" || view === "back" || view === "side") && !image && (
             <span className="bone-view-badge">Vista: {VIEW_CONFIG[view]?.label}</span>
          )}
          {landmark ? <span>Marco anatômico: {landmark}</span> : null}
        </p>
        {quickTip ? (
          <div className="bone-visual-tip-wrapper">
            {tipVisible ? (
              <p className="bone-visual-tip">
                <strong>Dica:</strong> {quickTip}
              </p>
            ) : (
              <button
                className="hint-toggle-button"
                type="button"
                onClick={() => setTipVisible(true)}
              >
                Ver dica
              </button>
            )}
          </div>
        ) : null}
      </div>

      {!isTextOnly && (
        isMultiple ? (
          <div className="bone-visual-multiple-stage">
            {images.map((imgData, i) => renderStage(imgData.image, i))}
          </div>
        ) : (
          renderStage(image, "single")
        )
      )}
    </section>
  );
}

export default BoneVisual;

