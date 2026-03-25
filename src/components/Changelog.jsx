import React, { useState } from "react";
import { IoRocket, IoSparkles, IoLeaf, IoChevronDown, IoChevronUp } from "react-icons/io5";

const changelogData = [
  {
    date: "25 de Março de 2026",
    title: "A Grande Atualização do Esqueleto",
    icon: IoRocket,
    items: [
      { text: "Agora temos um changelog", desc: "Para que vocês possam acompanhar as novidades do app!" },
      { text: "Navegação Aprimorada", desc: "Adicionados botões com ícones na tela de resultados para reiniciar o quiz ou voltar para a tela de escolha de regiões confortavelmente." },
      { text: "O Corpo Humano Completo", desc: "O banco de questões passou por uma expansão gigantesca! Agora, além do crânio, você pode testar seus conhecimentos sobre a Coluna, Tórax, Membros Superiores e Membros Inferiores." },
      { text: "Atenção aos Detalhes", desc: "Adicionamos uma área dedicada especificamente para os ossos complexos do quadril." },
      { text: "Visual Renovado", desc: "O menu inicial de seleção de região ganhou nomes mais amigáveis e ícones atualizados." },
      { text: "Revisão de Qualidade", desc: "Fizemos um pente-fino nos dados do Crânio e removemos perguntas duplicadas." },
      { text: "Dicas e didática atualizada", desc: "As dicas agora estão mais completas e didáticas, com informações adicionais sobre os ossos." },
    ]
  },
  {
    date: "20 de Março de 2026",
    title: "Experiência Premium e Compartilhamento",
    icon: IoSparkles,
    items: [
      { text: "Compartilhe Suas Vitórias", desc: "O aplicativo agora gera uma imagem estilizada com o seu resultado para você compartilhar com os amigos." },
      { text: "Animação Nova", desc: "Adicionada a animação \"Quebra de Osso\" ao confirmar a saída do quiz." },
      { text: "Atalhos de Teclado", desc: "O site agora tem suporte a teclas de atalho para facilitar a navegação." },
      { text: "Celular vs Computador", desc: "Interface adaptativa que mostra (A-E) no celular e atalhos numéricos (1-5) no computador." },
      { text: "Navegação", desc: "Implementação do menu para escolher entre estudar o corpo todo ou regiões específicas." },
    ]
  },
  {
    date: "19 de Março de 2026",
    title: "O Início de Tudo",
    icon: IoLeaf,
    items: [
      { text: "Nascimento do Projeto", desc: "Criação das bases do sistema de perguntas com 5 alternativas e feedback imediato." },
      { text: "Identidade Visual", desc: "Adição do ícone principal do projeto." },
      { text: "Mecânica", desc: "Implementação da confirmação de resposta antes do envio." },
    ]
  }
];

function Changelog() {
  const [expandedItems, setExpandedItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="changelog-container">
      <div className="changelog-title-wrapper">
        <h3 className="changelog-main-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <img src="/osteo_quiz_icon.svg" alt="OsteoQuiz Logo" style={{ width: '28px', height: '28px' }} />
          Novidades do OsteoQuiz
        </h3>
        <p className="changelog-subtitle">Acompanhe a evolução do app!</p>
      </div>

      <div className="changelog-timeline">
        {changelogData.map((update, index) => {
          const Icon = update.icon;
          const isExpanded = !!expandedItems[index];

          return (
            <div className="changelog-item" key={index} style={{ marginBottom: "16px" }}>
              <div 
                className="changelog-header" 
                onClick={() => toggleItem(index)}
                style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", flex: 1 }}>
                  <div className="changelog-icon-wrapper">
                    <Icon className="changelog-icon" />
                  </div>
                  <div>
                    <h4 className="changelog-date">{update.date}</h4>
                    <h5 className="changelog-title">{update.title}</h5>
                  </div>
                </div>
                <div style={{ color: "#6b7280", flexShrink: 0, padding: "0 8px" }}>
                  <IoChevronDown 
                    size={20} 
                    className={`changelog-chevron ${isExpanded ? "expanded" : ""}`} 
                  />
                </div>
              </div>
              
              <div className={`changelog-content ${isExpanded ? "expanded" : ""}`}>
                <div className="changelog-content-inner">
                  <ul className="changelog-list" style={{ marginTop: "12px", paddingBottom: "8px" }}>
                    {update.items.map((item, itemIdx) => (
                      <li key={itemIdx}><strong>{item.text}:</strong> {item.desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Changelog;