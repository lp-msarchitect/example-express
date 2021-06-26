const service = require('../services/greetingService')

const getAll = (req, res) => {
    const words = service.getAll();
    res.send(words)
}

const getById = (req, res) => {
    const { id } = req.params;
    const word = service.getOne(id);
    console.log(word);
    if (word) {
        res.send(word);
    }else{
        res.status(404).send(`Word with id ${id} not found`);
    }
}

const create = (req, res) => {
    const {eng, rus} = req.body;
    const word = service.create({eng, rus});
    res.status(201).send(word);
}

const update = () => {

}

const deleteById = () => {

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}