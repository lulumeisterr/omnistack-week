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
     * Listando incidents com paginacao
     */
    async listarIncidents(req,resp){

        //Buscar um parametro
        const { page = 1} = req.query;

        const [count] = await connectionDb('incidents').count();
        console.log(count)

        //Realizando Join
        const data = await connectionDb('incidents')
        //Join Chave primaria com FK
        .join('ongs','ong_id', '=' , 'incidents.ong_id')
        //Retornar apenas 5 results
        .limit(5)
        //Na primeira pagina sera 0 - 1 * 5 = 0
        .offset((page - 1) * 5)
        //Recuperar todos os dados da tabela incidents mas alguns especificos da tabela ong
        .select(['incidents.*',
                    'ongs.name' , 
                        'ongs.email' , 
                            'ongs.city' , 
                                'ongs.uf']);

        // Passando uma resposta para o cabecalho da requisicao
        resp.header('X-total-Count',count['count(*)']);

        return resp.json(data);
    },

    /**
     * Inserindo
     */
    async create(req,resp){
        const {title,description,value} = req.body;
        //Recuperar o ID da ong atraves do authzion
        const ong_id =  req.headers.authorization;
        console.log('LOG ONG ID' + ong_id)
        const result = await connectionDb('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        //Obtendo a respota da requisicao e recuperando o id do usuario
        const id = result[0];
        return resp.json({id});
    },

    /**
     * Deletar
     */
    async deletar(req,resp){
        //Recuperar o ID do incidente criado pela Ong
        const { id } = req.params;
        const ong_id =  req.headers.authorization;
        // Select ong_id from incidents where id = id;
        const incident = await connectionDb('incidents')
            .where('id',id).select('ong_id').first();

            if(incident.ong_id != ong_id){
                return resp.status(401).json({
                    error:'Operation not permitted.'});
            }

            await connectionDb('incidents').where('id',id).delete();
        return resp.status(204).send();
    }
};