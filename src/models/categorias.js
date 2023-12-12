const {connectMysql} = require('../dbconnection');

class CategoriaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Categorias');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Categorias').where('id_categoria', id);
    }
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Categorias').insert(datos).returning('id_categoria');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Categorias').where('id_categoria', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_categoria'] = id;
        await db.where('id_categoria', id).del();
        await db.insert(newData).into('categoria');
        return id;
    }
}

module.exports = CategoriaModel;