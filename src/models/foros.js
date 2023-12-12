const {connectMysql} = require('../dbconnection');

class ForoModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Foro');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Foro').where('id_foro', id);
    }
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Foro').insert(datos).returning('id_foro');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Foro').where('id_foro', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_foro'] = id;
        await db.where('id_foro', id).del();
        await db.insert(newData).into('foro');
        return id;
    }
}

module.exports = ForoModel;