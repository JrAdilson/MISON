let despesaService = require('../services/despesa')

const getDespesa = async (req, res, next) => {
    try{
        await despesaService.getDespesa()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next(err)
    }
}

const postDespesa = async(req, res, next) => {
    try{
        await despesaService.postDespesa(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteDespesa = async(req, res, next) => {
    try{
        await despesaService.deleteDespesa(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const putDespesa = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await despesaService.putDespesa(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const patchDespesa = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await despesaService.patchDespesa(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}
module.exports.postDespesa = postDespesa
module.exports.getDespesa = getDespesa
module.exports.deleteDespesa = deleteDespesa
module.exports.putDespesa = putDespesa
module.exports.patchDespesa = patchDespesa