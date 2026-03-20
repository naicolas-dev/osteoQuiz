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
  const { hint, marker, view = "front", landmark, quickTip, image } = visualReference;
  const isSingle = view === "single" || !!image;
  const activeView = isSingle ? null : (VIEW_CONFIG[view] ?? VIEW_CONFIG.front);
  const markerXPercent = (marker.x / MARKER_BASE.width) * 100;
  const markerYPercent = (marker.y / MARKER_BASE.height) * 100;
  const markerSizePercent = (marker.r * 2 / MARKER_BASE.width) * 100;
  const markerGlowSizePercent = ((marker.r + 14) * 2 / MARKER_BASE.width) * 100;

  return (
    <section className="bone-visual-card">
      <div className="bone-visual-header">
        <h3>Referência visual</h3>
        <p>{hint}</p>
        <p className="bone-visual-meta">
          {activeView && <span className="bone-view-badge">Vista: {activeView.label}</span>}
          {landmark ? <span>Marco: {landmark}</span> : null}
        </p>
        {quickTip ? (
          <p className="bone-visual-tip">
            <strong>Dica:</strong> {quickTip}
          </p>
        ) : null}
      </div>

      <div className="bone-visual-stage" role="img" aria-label="Esqueleto humano real com osso em destaque">
        <img
          className="bone-visual-image"
          src={isSingle ? image : skeletonImage}
          alt="Esqueleto anatômico"
          loading="lazy"
        />
        {!isSingle && (
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
        <span
          className="bone-marker-glow"
          style={{
            left: `${markerXPercent}%`,
            top: `${markerYPercent}%`,
            width: `${markerGlowSizePercent}%`,
            height: `${markerGlowSizePercent}%`,
          }}
        />
        <span
          className="bone-marker-dot"
          style={{
            left: `${markerXPercent}%`,
            top: `${markerYPercent}%`,
            width: `${markerSizePercent}%`,
            height: `${markerSizePercent}%`,
          }}
        />
      </div>
    </section>
  );
}

export default BoneVisual;
