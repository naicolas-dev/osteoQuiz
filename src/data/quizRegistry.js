import { bonesQuizData } from './bonesQuizData';
import { articulacoesQuizData } from './articulacoesQuizData';
import { musculosQuizData } from './musculosQuizData';
import { specialQuizData } from './specialQuizData';

// Registra os diferentes tipos de quiz disponíveis
export const quizRegistry = {
  ossos: {
    id: 'ossos',
    label: 'Ossos',
    data: bonesQuizData,
    icon: '🦴', // Opcional: para usar na UI
    description: 'Teste seus conhecimentos sobre o sistema esquelético'
  },
  articulacoes: {
    id: 'articulacoes',
    label: 'Articulações',
    data: articulacoesQuizData,
    icon: '🔗',
    description: 'Aprenda sobre as principais articulações do corpo humano'
  },
  musculos: {
    id: 'musculos',
    label: 'Músculos',
    data: musculosQuizData,
    icon: '💪',
    description: 'Explore o sistema muscular e suas funções'
  },
  especial: {
    id: 'especial',
    label: 'Quiz Especial',
    data: specialQuizData,
    icon: '⭐',
    description: 'Quiz especial'
  }
};

// Categorias disponíveis por tipo (agrupamento de regiões)
export const quizCategories = {
  ossos: [
    { id: 'cranio', label: 'Crânio e Face' },
    { id: 'coluna', label: 'Coluna Vertebral' },
    { id: 'torax', label: 'Tórax e Pelve' },
    { id: 'membro_superior', label: 'Membros Superiores' },
    { id: 'membro_inferior', label: 'Membros Inferiores' },
  ],
  articulacoes: [
    { id: 'ombro', label: 'Ombro' },
    { id: 'cotovelo', label: 'Cotovelo' },
    { id: 'joelho', label: 'Joelho' },
    { id: 'pelve', label: 'Pelve' },
  ],
  musculos: [
    { id: 'face', label: 'Face' },
  ],
  especial: [
    { id: 'geral', label: 'Quiz Completo' }
  ]
};

// Helper para pegar dados filtrados por tipo e região
export const getQuizData = (typeId, regionId) => {
  const typeData = quizRegistry[typeId]?.data || [];
  
  if (regionId === 'all') {
    return typeData;
  }
  
  return typeData.filter(q => q.category === regionId);
};
