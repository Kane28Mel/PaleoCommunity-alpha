const { connectMysql } = require('../dbconnection');
class UsuariosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('<tabla>');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('<tabla>').where('<idtabla>', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('<tabla>').insert(datos).returning('<idtabla>');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('<tabla>').where('<idtabla>', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        await db('<tabla>').where('<idtabla>', id).del();
        await db.insert(newData).into('<tabla>');
        return id;
    }
}

module.exports = UsuariosModel;