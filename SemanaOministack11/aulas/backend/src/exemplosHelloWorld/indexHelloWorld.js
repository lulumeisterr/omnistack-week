// Instanciando a biblioteca express
const express = require('express');

/**
 * Desacoplando o modulo de rotas em uma nova variavel , antes seria
 * app.get()... agora vai passar a ser routes.get()
 */

const routes = express.Router();

/**
 * 
 * Metodos Http :
 * 
 * GET : Usado quando necessitamos consultar ou buscar uma informacao
 * POST : Inserir ou criar um usuario no sistemas
 * PUT : Atualizar uma informacao
 * DELETE : Deletar informacao no backEnd
 */

 /**
  * Tipos de parametros :
  * 
  * Querys : Parametros nomeados enviados na rota apos
  * o simbolo ? que representa inicio de parametro
  * localhost:3333/usuarios?name=lucas
  * 
  * Route Params : Parametros utilizados para identificar recursos
  * Serve para identificar um unico recurso :
  * localhost333:/users/1 -> Listar apenas usuario que contem id 1
  * 
  * RequestBody : Corpo da requisicao , utilizado para
  * criar ou alterar recursos
  */
 routes.get('/',(req,resp) => {
    return resp.json({
        evento:'Semana OminiStack 11.0',
        nome : 'lulumeisterrPegaaaaa'
    })
});

// Query Params : Recebendo os parametros da url
routes.get('/users',(req,resp) => {
  const param = req.query;
  console.log(param);
    return resp.json({
        evento:'Semana OminiStack 11.0',
        nome : 'lulumeisterrPegaaaaa'
    })

});

// Metodo Put , criacao e atualizacao de conteudo
routes.post('/criandoUsuario',(req,resp) => {
    const body = req.body;
    console.log(body);
    return resp.json({
        evento:'Semana OminiStack 11.0',
        nome : 'lulumeisterrPegaaaaa'
    })
});


/**
 * Deixando as rotas disponiveis para ser acessiveis  pelo (index.js) ou seja
 * exportando uma variaveis de dentro de um arquivo
 */

 module.exports = routes;