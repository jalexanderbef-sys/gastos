const db = require('../config/db')


class GastosModel{
    
    
    static async obtenerGastos(){

    const rows = await db.query('select * from transacciones');
    retunr(rows);

    }

}

module.exports = GastosModel