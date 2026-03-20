import React from "react";
import { FaSkull } from "react-icons/fa";
import { GiSkeleton } from "react-icons/gi";

function RegionSelectionScreen({ onSelectMode }) {
  return (
    <section className="welcome-screen">
      <h2>Escolha a Região</h2>
      <p>
        Foque seus estudos na anatomia craniana ou teste seus conhecimentos no esqueleto inteiro.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("cranio")}
          type="button"
        >
          <kbd className="btn-keybadge">1</kbd>
          <FaSkull size={20} />
          Ossos do Crânio
        </button>
        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("all")}
          type="button"
        >
          <kbd className="btn-keybadge">2</kbd>
          <GiSkeleton size={20} />
          Esqueleto Completo
        </button>
      </div>
      <div className="hotkey-hint">
        <kbd>1</kbd> <span>Crânio</span>
        <span style={{ margin: "0 0.5rem", opacity: 0.4 }}>·</span>
        <kbd>2</kbd> <span>Esqueleto</span>
      </div>
    </section>
  );
}

export default RegionSelectionScreen;
