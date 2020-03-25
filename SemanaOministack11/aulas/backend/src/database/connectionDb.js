const knex = require('knex');
const configKnexFile = require('../../knexfile');

//Criando conexao
const connection = knex(configKnexFile.development);

//Exportando a conexao de banco de dados
module.exports = connection;