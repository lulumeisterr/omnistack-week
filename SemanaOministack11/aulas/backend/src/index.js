// Importando bibliotecas 
const express = require('express');

// Importando Cors
const cors = require('cors')

// Importando as Rotas {Referenciando com ./ para arquivos}
const routes = require('./routes');

// Instanciando a aplicacao
const app = express();

// Permitindo qualquer recurso acessar nossa api
app.use(cors());

// Informar que utilizaremos json no corpo da requisicoes
app.use(express.json());

// Chamando o arquivo routes
app.use(routes);

// Liberando a porta 3333
app.listen(3333);

