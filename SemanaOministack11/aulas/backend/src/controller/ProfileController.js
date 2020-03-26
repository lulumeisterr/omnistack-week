// Importando conexao da base atraves de modulos
const connectionDb = require('../database/connectionDb');

module.exports = {

/**
 * Buscar Ong especifica por Query Param
 */

 async ongEspecifica(req,resp){
    const { id } = req.query;
    console.log(id)

    const incidents = await connectionDb('incidents').where('ong_id',id).select('*');
    return resp.json(incidents);
 }

}