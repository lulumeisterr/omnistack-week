// Importando conexao da base atraves de modulos
const connectionDb = require('../database/connectionDb');


module.exports = {

    async create(req,resp){

        const {id} = req.body;
        const ong = await connectionDb('ongs').where('id',id).select('name').first();

        if(!ong){
            return resp.status(400).json({error:'No Ong found with this ID'});
        }
        return resp.json(ong);
    }
}