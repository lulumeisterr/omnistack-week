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
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

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

 routes.get('/ongEspecifica',ProfileController.ongEspecifica);
 routes.get('/listar',OngController.listar);
 routes.get('/listarIncidents',IncidentController.listarIncidents);

 // Criando sesaso de login
 routes.post('/sessions',SessionController.create);

 routes.post('/ongs', OngController.create);
 routes.post('/criarIncidents',IncidentController.create);
 //Route Param
 routes.delete('/incidents/:id',IncidentController.deletar);

 module.exports = routes;