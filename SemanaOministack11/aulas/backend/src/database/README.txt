# Instalando o knex (Gerenciador de banco)
    npm install knex

# npx knex ( Para criar o arquivo contendo as acoes gerenciaveis )

# Instalando o banco
    npm install sqlite3

# Criar uma nova configuracao apontando a posta onde vai conter os arquivos de migracao no knexfile.js

# npx knex migrate:make create_ongs <- Nome da migration
     npx knex migrate:latest para gerar a criacao de tablea
     useNullAsDefault = true no arquivo de migrations / Por padrao o sqlite3 n suporta insercao de valores default
     npx knex migrate:rollback <- desfaz a ultima vez que executou a ultima migration