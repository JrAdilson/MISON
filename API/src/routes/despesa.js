const despesaController = require('../controllers/despesa')

module.exports = (app) => {
    app.get('/despesa', despesaController.getDespesa),
    app.post('/despesa', despesaController.postDespesa)
    app.delete('/despesa/:id', despesaController.deleteDespesa)
    app.put('/despesa/:id', despesaController.putDespesa)
    app.patch('/despesa/:id', despesaController.patchDespesa)
}