const conect = require('../database/Connection')

module.exports = {
    async index(req, res) {
        const data = await conect('users')
        .select('*')
        return res.json(data)
    },
    async storage(req, res){
        const { nome, apelido } = req.body
        const result =  await conect('users')
        .insert({
            id: Math.random().toString(36).substr(2, 20),
            nome: nome,
            apelido: apelido
        })
        if(result) {
            return res.status(201).send()
        } 
    },
    async delete(req, res) {
        const { id } = req.params
        await conect('users')
        .where('id', id)
        .delete()

        return res.status(204).send()
    }

}