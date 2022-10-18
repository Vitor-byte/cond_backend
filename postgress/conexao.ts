const { Client } = require("pg");
 
const client = new Client({
    user: 'Vitor',
    host: 'localhost',
    database: 'condominio',
    password: '15340154',
    port: 5432,
    connectionTimeoutMillis:0
  });
  client.connect();

 export{client};