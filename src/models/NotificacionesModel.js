const { connectMysql } = require('../dbconnection');

class NotificacionesModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('Notificaciones');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Notificaciones').where('id_notificacion', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Notificaciones').insert(datos).returning('id_notificacion');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Notificaciones').where('id_notificacion', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        await db('Notificaciones').where('id_notificacion', id).del();
        await db.insert(newData).into('Notificaciones');
        return id;
    }
}

module.exports = NotificacionesModel;