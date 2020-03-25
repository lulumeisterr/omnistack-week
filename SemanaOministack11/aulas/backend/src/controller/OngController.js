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

// Importando conexao da base atraves de modulos
const connectionDb = require('../database/connectionDb');

//Criptografia para gerar uma string aleatoria
const crypto = require('crypto');


module.exports = {

    /**
     * Listando todas as ongs
     */
    async listar(req,resp){
        const ongs = await connectionDb('ongs').select('*');
        return resp.json(ongs);
    },

   /**
   * Metodo create : Persistindo na db
   * uri : localhost:3333/ongs
   * body exemplo : {
            "name":"CÃO SEM DONO",
            "email":"https://www.facebook.com/caosemdono",
            "whatsapp":"35992660222",
            "city":"Carapicuiba",
            "uf":"SP"
        }
   */

    async create(req,resp){
    //Gerando 4 bytes de numero aleatorio em hexadecimal
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
};