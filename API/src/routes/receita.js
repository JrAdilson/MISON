const receitaController = require('../controllers/receita')

module.exports = (app) => {
    app.get('/receita', receitaController.getReceita),
    app.post('/receita', receitaController.postReceita)
    app.delete('/receita/:id', receitaController.deleteReceita)
    app.put('/receita/:id', receitaController.putReceita)
    app.patch('/receita/:id', receitaController.patchReceita)
}