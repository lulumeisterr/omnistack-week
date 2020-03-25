// Instanciando a biblioteca express
const express = require('express');

/**
 * Desacoplando o modulo de rotas em uma nova variavel , antes seria
 * app.get()... agora vai passar a ser routes.get()
 */
const routes = express.Router();

// Importando a Controller
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');

/**
 * Esse metodo :
 * 
 * routes.post('/ongs', async (req,resp) => {
    const id = crypto.randomBytes(4).toString('HEX');
    const {name , email , whatsapp , city , uf } = req.body;     
    await connectionDb('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return resp.json({id});
    }
  });

  Passa a ser :

  routes.post('/ongs', OngController.create);

  */

routes.post('/ongs', OngController.create);
routes.get('/listar',OngController.listar);

routes.post('/criarIncidents',IncidentController.create);
routes.get('/listarIncidents',IncidentController.listarIncidents);
 
module.exports = routes;