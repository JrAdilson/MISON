let receitaService = require('../services/receita')

const getReceita = async (req, res, next) => {
    try{
        await receitaService.getReceita()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next(err)
    }
}

const postReceita = async(req, res, next) => {
    try{
        await receitaService.postReceita(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteReceita = async(req, res, next) => {
    try{
        await receitaService.deleteReceita(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const putReceita = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await receitaService.putReceita(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const patchReceita = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await receitaService.patchReceita(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}
module.exports.postReceita = postReceita
module.exports.getReceita = getReceita
module.exports.deleteReceita = deleteReceita
module.exports.putReceita = putReceita
module.exports.patchReceita = patchReceita