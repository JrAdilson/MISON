const Receita = require('./receita')
const Despesa = require('./despesa')

module.exports = (app) => {
    Receita(app)
    Despesa(app)
}