const db = require('../configs/pg')

const getReceita = async () => {
    const sql_get = `select * from receitas`
    let receita = {}
    await db.query(sql_get)
    .then(ret => receita = {total: ret.rows.length, receita: ret.rows})
    .catch(err => receita = err.stack)
    return receita
}

const postReceita = async(params) => {
    const sql_insert = `insert into receitas(fonte, valor, datalanc, descricao, datadisp) values ($1, $2, $3, $4, $5)`
    const {fonte, valor, datalanc, descricao, datadisp} = params
    await db.query(sql_insert, [fonte, valor, datalanc, descricao, datadisp])
}

const sql_delete = `delete from receitas WHERE id = $1`
const deleteReceita = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const sql_updateput = `update receitas set 
        fonte = $2, 
        valor = $3, 
        datalanc = $4, 
        descricao = $5,
        datadisp = $6 
    WHERE id = $1`
const putReceita = async(params) => {
    const {id, fonte, valor, datalanc, descricao, datadisp} = params
    await db.query(sql_updateput, [id, fonte, valor, datalanc, descricao, datadisp])
}

const sql_updatepatch =
    `update receitas set
    `
const patchReceita = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.fonte){
        countParams++
        fields += `fonte = $${countParams}`
        binds.push(params.fonte)
    }
    if(params.valor){
        countParams++
        fields += `valor = $${countParams}`
        binds.push(params.valor)
    }
    if(params.datalanc){
        countParams++
        fields += `datalanc = $${countParams}`
        binds.push(params.datalanc)
    }
    if(params.descricao){
        countParams++
        fields += `descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if(params.datadisp){
        countParams++
        fields += `datadisp = $${countParams}`
        binds.push(params.datadisp)
    }
    let sql = sql_updatepatch + fields + ' where id = $1 '
    return await db.query(sql, binds)
}
module.exports.postReceita = postReceita
module.exports.getReceita = getReceita
module.exports.deleteReceita = deleteReceita
module.exports.putReceita = putReceita
module.exports.patchReceita = patchReceita