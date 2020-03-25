// Importando conexao da base atraves de modulos
const connectionDb = require('../database/connectionDb');

/**
 * 
 * uri : localhost:3333/
 * Body
 *  {
 *    "title":"Caso 1",
 *    "description":"xpto",
 *    "value":120
 *  }
 * 
 * Header :
 *  Authorization : id ong
 */
module.exports = {

    /**
     * Listando incidents
     * @param {*} req 
     * @param {*} resp 
     */
    async listarIncidents(req,resp){
        const data = await connectionDb('incidents').select('*');
        return resp.json(data);
    },

    async create(req,resp){
        const {title,description,value} = req.body;
        //Recuperar o ID da ong atraves do authzion
        const ong_id =  req.headers.authorization;
        console.log(ong_id)
        const result = await connectionDb('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        //Obtendo a respota da requisicao e recuperando o id do usuario
        const id = result[0];
        return resp.json({id});
    }
};