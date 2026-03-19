function BoneVisual({ visualReference }) {
  const { hint, marker } = visualReference;

  return (
    <section className="bone-visual-card">
      <div className="bone-visual-header">
        <h3>Referencia visual</h3>
        <p>{hint}</p>
      </div>

      <svg
        className="bone-visual-svg"
        viewBox="0 0 240 420"
        role="img"
        aria-label="Figura anatomica simplificada com ponto em destaque"
      >
        <rect x="0" y="0" width="240" height="420" rx="20" fill="url(#bg)" />
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9fff9" />
            <stop offset="100%" stopColor="#ecf5ef" />
          </linearGradient>
        </defs>

        <g opacity="0.92" fill="#c8d7cf" stroke="#9fb2a8" strokeWidth="2">
          <circle cx="120" cy="46" r="22" />
          <rect x="104" y="70" width="32" height="88" rx="14" />
          <rect x="78" y="88" width="26" height="86" rx="12" />
          <rect x="136" y="88" width="26" height="86" rx="12" />
          <rect x="84" y="158" width="72" height="108" rx="22" />
          <rect x="88" y="264" width="24" height="126" rx="12" />
          <rect x="128" y="264" width="24" height="126" rx="12" />
        </g>

        <g>
          <circle
            cx={marker.x}
            cy={marker.y}
            r={marker.r + 8}
            fill="#ffcfa4"
            opacity="0.55"
          />
          <circle
            cx={marker.x}
            cy={marker.y}
            r={marker.r}
            fill="#f97316"
            stroke="#9a3412"
            strokeWidth="2"
          />
        </g>
      </svg>
    </section>
  );
}

export default BoneVisual;
