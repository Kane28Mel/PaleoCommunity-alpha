const fs = require('fs');
const knex = require('knex');

async function connectMysql() {
    const mysqlPassword = await fs.promises.readFile('/run/secrets/MYSQL_PASSWORD');

    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql', // docker-compose service
            user: 'admin',
            password: mysqlPassword,
            database: 'PaleoCommunity'
        }
    });
    return db;
};

module.exports = {connectMysql};