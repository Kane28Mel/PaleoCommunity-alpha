const { connectMysql } = require('../dbconnection');

class SeguidoresModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Seguidores');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Seguidores').where('id_seguidor', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Seguidores').insert(datos).returning('id_seguidor');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Seguidores').where('id_seguidor', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        await db('Seguidores').where('id_seguidor', id).del();
        await db.insert(newData).into('Seguidores');
        return id;
    }
}

module.exports = SeguidoresModel;