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
          className="primary-button"
          onClick={() => onSelectMode("cranio")}
          type="button"
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px" }}
        >
          <FaSkull size={24} />
          1: Ossos do Crânio
        </button>
        <button
          className="primary-button"
          onClick={() => onSelectMode("all")}
          type="button"
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px" }}
        >
          <GiSkeleton size={24} />
          2: Esqueleto Completo
        </button>
      </div>
    </section>
  );
}

export default RegionSelectionScreen;
