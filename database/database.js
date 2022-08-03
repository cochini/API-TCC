const Sequelize = require('sequelize');

/* 
CRIA UMA CONSTANTE "connection" QUE GUARDA UMA INSTANCIA DO sequelize E ABRE A 
CONEXÃO COM O BANCO DE DADOS;
PARAMETROS:
1 - NOME DO BANCO DE DADOS
2 - USUÁRIO DO BANCO DE DADOS
3 - SENHA DO BANCO DE DADOS
4 - OBJETO JSON QUE DETERMINA O LOCAL ONDE O BANCO DE DADOS ESTÁ LOCALIZADO E SEU TIPO DE LINGUA
*/
const connection = new Sequelize('saudebaby', 'bebe', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});



/* EXPORTA A CONSTANTE connection TORNANDO ESSA DISPONÍVEL EM TODA A APLICAÇÃO */
module.exports = connection;