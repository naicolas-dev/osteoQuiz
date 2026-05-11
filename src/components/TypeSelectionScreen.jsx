import React, { useEffect } from 'react';
import { quizRegistry } from '../data/quizRegistry';
import { FaBone } from 'react-icons/fa';
import { GiJoint, GiMuscleUp } from 'react-icons/gi';

const TYPE_ICONS = {
  ossos: <FaBone />,
  articulacoes: <GiJoint />,
  musculos: <GiMuscleUp />
};

const TypeSelectionScreen = ({ onSelectType, onBack }) => {
  const types = Object.values(quizRegistry);

  // Suporte a teclado para navegação rápida
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      // 1 até o número de tipos
      if (key >= '1' && key <= String(types.length)) {
        const index = parseInt(key) - 1;
        if (types[index]) {
          onSelectType(types[index].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [types, onSelectType]);

  return (
    <section className="welcome-screen">
      <h2>O que você quer estudar?</h2>
      <p>
        Escolha o sistema anatômico para focar seus estudos.
      </p>
      
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
        {types.map((type, index) => (
          <button 
            key={type.id}
            className="primary-button region-btn" 
            onClick={() => onSelectType(type.id)}
            type="button"
          >
            <kbd className="btn-keybadge">{index + 1}</kbd>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {TYPE_ICONS[type.id] || type.icon}
              </span>
              <span>{type.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button className="secondary-button" onClick={onBack}>
          Voltar ao Início
        </button>
      </div>
    </section>
  );
};

export default TypeSelectionScreen;
