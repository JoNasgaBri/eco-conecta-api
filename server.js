//  Importar o Express
import express from 'express';

//  Importar nossas rotas definidas (importa o export default), não esquecer a extensão .js
import ecoRoutes from './src/routes/ecoRoutes.js';

//  Criar a instância do app Express
const app = express();

//  Definir a porta
const PORT = 3000;

//  Usar as rotas importadas

app.use('/', ecoRoutes);

//  Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Eco Conecta (ESM Refatorado) rodando na porta ${PORT}`);
  console.log(`Acesse em: http://localhost:${PORT}`);
});