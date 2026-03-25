import React from "react";
import { FaSkull, FaBone } from "react-icons/fa";
import { GiSkeleton } from "react-icons/gi";

function RegionSelectionScreen({ onSelectMode }) {
  return (
    <section className="welcome-screen">
      <h2>Escolha a Região</h2>
      <p>
        Foque seus estudos na anatomia craniana e da garganta ou teste seus conhecimentos no esqueleto inteiro.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("cranio")}
          type="button"
        >
          <kbd className="btn-keybadge">1</kbd>
          <FaSkull size={20} />
          Ossos do Crânio e Garganta
        </button>
        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("coluna-torax")}
          type="button"
        >
          <kbd className="btn-keybadge">2</kbd>
          <FaBone size={20} />
          Coluna e Tórax
        </button>
        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("all")}
          type="button"
        >
          <kbd className="btn-keybadge">3</kbd>
          <GiSkeleton size={20} />
          Esqueleto Completo
        </button>
      </div>
    </section>
  );
}

export default RegionSelectionScreen;
