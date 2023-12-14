const { connectMysql } = require('../dbconnection');
class ForosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Foros');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Foros').where('id_foro', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Foros').insert(datos).returning('id_foro');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Foros').where('id_foro', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        await db('Foros').where('id_foro', id).del();
        await db.insert(newData).into('Foros');
        return id;
    }
}

module.exports = ForosModel;