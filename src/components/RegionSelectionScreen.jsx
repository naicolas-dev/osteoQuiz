import React, { useEffect } from "react";
import { quizCategories, quizRegistry } from "../data/quizRegistry";

function RegionSelectionScreen({ onSelectMode, onBack, selectedType }) {
  const typeInfo = quizRegistry[selectedType];
  const categories = quizCategories[selectedType] || [];

  // Suporte a teclado para navegação rápida
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      // 1 até o número de categorias
      if (key >= '1' && key <= String(categories.length)) {
        const index = parseInt(key) - 1;
        if (categories[index]) {
          onSelectMode(categories[index].id);
        }
      }
      // A última opção + 1 para "Todas as regiões"
      if (key === String(categories.length + 1)) {
        onSelectMode("all");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [categories, onSelectMode]);

  return (
    <section className="welcome-screen">
      <h2>{typeInfo?.label || "Escolha a Região"}</h2>
      <p>
        Foque seus estudos ou teste seus conhecimentos no conteúdo completo.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
        
        {categories.map((category, index) => (
          <button
            key={category.id}
            className="primary-button region-btn"
            onClick={() => onSelectMode(category.id)}
            type="button"
          >
            <kbd className="btn-keybadge">{index + 1}</kbd>
            {category.label}
          </button>
        ))}

        <button
          className="primary-button region-btn"
          onClick={() => onSelectMode("all")}
          type="button"
        >
          <kbd className="btn-keybadge">{categories.length + 1}</kbd>
          Todas as regiões
        </button>
      </div>
      
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button className="secondary-button" onClick={onBack}>
          Voltar
        </button>
      </div>
    </section>
  );
}

export default RegionSelectionScreen;
