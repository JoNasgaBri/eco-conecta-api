// 1. Importar os dados usando desestruturação e a extensão .js
import {
    dicasReciclagem,
    dadosConsumoAgua,
    alternativasPlasticos,
    calendarioAmbiental
} from '/data/ecoData';

// Controller para a rota /dicas-reciclagem
const getDicaReciclagem = (req, res) => {
  const indiceAleatorio = Math.floor(Math.random() * dicasReciclagem.length);
  const dicaDoDia = dicasReciclagem[indiceAleatorio];
  res.json({ dica: dicaDoDia });
};

// Controller para a rota /info-consumo-agua
const getInfoAgua = (req, res) => {
  res.json(dadosConsumoAgua);
};

// Controller para a rota /alternativas-plasticos
const getAlternativasPlastico = (req, res) => {
  res.json(alternativasPlasticos);
};

// Controller para a rota /calendario-ambiental
const getCalendarioAmbiental = (req, res) => {
  res.json(calendarioAmbiental);
};

// 3. Exportar todas as funções do controller usando exportação nomeada
export {
    getDicaReciclagem,
    getInfoAgua,
    getAlternativasPlastico,
    getCalendarioAmbiental
};