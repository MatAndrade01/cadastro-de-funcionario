const cors = require('cors');
const { Client } = require('pg');

export const cliente = new Client({
    user: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "colaboradores",
});