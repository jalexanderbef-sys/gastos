const db = requiere('../config/db')


class GastosModel{
    
    
    static async obtenerGastos(){

    const rows = await db.query('select * from transacciones');
    console.log(rows);

    }

}

module.exports = GastosModel