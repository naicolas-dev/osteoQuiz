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

  const renderStage = (imgSrc, imgMarker, idx) => {
    const isSingle = view === "single" || !!imgSrc;
    const activeView = isSingle ? null : (VIEW_CONFIG[view] ?? VIEW_CONFIG.front);
    
    let mX = 0, mY = 0, mS = 0, mG = 0;
    if (imgMarker) {
      mX = (imgMarker.x / MARKER_BASE.width) * 100;
      mY = (imgMarker.y / MARKER_BASE.height) * 100;
      mS = (imgMarker.r * 2 / MARKER_BASE.width) * 100;
      mG = ((imgMarker.r + 14) * 2 / MARKER_BASE.width) * 100;
    }

    return (
      <div className="bone-visual-stage" role="img" aria-label="Esqueleto humano real com osso em destaque" key={idx || imgSrc}>
        <img
          className="bone-visual-image"
          src={isSingle ? imgSrc : skeletonImage}
          alt="Esqueleto anatômico"
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
        {imgMarker && (
          <>
            <span
              className="bone-marker-glow"
              style={{
                left: `${mX}%`,
                top: `${mY}%`,
                width: `${mG}%`,
                height: `${mG}%`,
              }}
            />
            <span
              className="bone-marker-dot"
              style={{
                left: `${mX}%`,
                top: `${mY}%`,
                width: `${mS}%`,
                height: `${mS}%`,
              }}
            />
          </>
        )}
      </div>
    );
  }

  return (
    <section className="bone-visual-card">
      <div className="bone-visual-header">
        <h3>Referência visual</h3>
        <p>{hint}</p>
        <p className="bone-visual-meta">
          {!isMultiple && (view === "front" || view === "back" || view === "side") && !image && (
             <span className="bone-view-badge">Vista: {VIEW_CONFIG[view]?.label}</span>
          )}
          {landmark ? <span>Marco: {landmark}</span> : null}
        </p>
        {quickTip ? (
          <p className="bone-visual-tip">
            <strong>Dica:</strong> {quickTip}
          </p>
        ) : null}
      </div>

      {isMultiple ? (
        <div className="bone-visual-multiple-stage">
          {images.map((imgData, i) => renderStage(imgData.image, imgData.marker, i))}
        </div>
      ) : (
        renderStage(image, marker, "single")
      )}
    </section>
  );
}

export default BoneVisual;

