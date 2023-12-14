const { connectMysql } = require('../dbconnection');

class PublicacionesModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Publicacion');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Publicacion').where('id_publicacion', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Publicacion').insert(datos).returning('id_publicacion');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Publicacion').where('id_publicacion', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        await db('Publicacion').where('id_publicacion', id).del();
        await db.insert(newData).into('Publicacion');
        return id;
    }
}

module.exports = PublicacionesModel;