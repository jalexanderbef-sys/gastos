const model = requiere ('../models/gastos.model')

class GastosController{
    
    static async obtenerGastos(req,res){
        const gastos = await model.obtenerGastos()

    }
}

module.exports = GastosController