const db = require('../configs/pg')

const getDespesa = async () => {
    const sql_get = `select * from despesas`
    let despesa = {}
    await db.query(sql_get)
    .then(ret => despesa = {total: ret.rows.length, despesa: ret.rows})
    .catch(err => despesa = err.stack)
    return despesa
}

const postDespesa = async(params) => {
    const sql_insert = `insert into despesas(referencia, valor, descricao, valortot, datapag, custofixo) values ($1, $2, $3, $4, $5, $6)`
    const {referencia, valor, descricao, valortot, datapag, custofixo} = params
    await db.query(sql_insert, [referencia, valor, descricao, valortot, datapag, custofixo])
}

const sql_delete = `delete from despesas WHERE id = $1`
const deleteDespesa = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const sql_updateput = `update despesas set 
        referencia = $2, 
        valor = $3, 
        descricao = $4, 
        valortot = $5,
        datapag = $6,
        custofixo = $7 
    WHERE id = $1`
const putDespesa = async(params) => {
    const {id, referencia, valor, descricao, valortot, datapag, custofixo} = params
    await db.query(sql_updateput, [id, referencia, valor, descricao, valortot, datapag, custofixo])
}

const sql_updatepatch =
    `update despesas set
    `
const patchDespesa = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.referencia){
        countParams++
        fields += `referencia = $${countParams}`
        binds.push(params.referencia)
    }
    if(params.valor){
        countParams++
        fields += `valor = $${countParams}`
        binds.push(params.valor)
    }
    if(params.descricao){
        countParams++
        fields += `descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if(params.valortot){
        countParams++
        fields += `valortot = $${countParams}`
        binds.push(params.valortot)
    }    
    if(params.datapag){
        countParams++
        fields += `datapag = $${countParams}`
        binds.push(params.datapag)
    }
    if(params.custofixo){
        countParams++
        fields += `custofixo = $${countParams}`
        binds.push(params.custofixo)
    }
    let sql = sql_updatepatch + fields + ' where id = $1 '
    return await db.query(sql, binds)
}
module.exports.postDespesa = postDespesa
module.exports.getDespesa = getDespesa
module.exports.deleteDespesa = deleteDespesa
module.exports.putDespesa = putDespesa
module.exports.patchDespesa = patchDespesa