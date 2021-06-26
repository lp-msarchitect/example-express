const words = [
    {
        id: 1,
        rus: 'Собака',
        eng: 'Dog'
    },
    {
        id: 2,
        rus: 'Кот',
        eng: 'Cat'
    }
];

const getAll = () => words;

const getOne = (id) => {
    return words.find((item)=>{
        return item.id == id
    })
}

const create = ({eng, rus}) => {
    const id = words[words.length - 1].id + 1

    words.push({
        id,
        eng,
        rus
    });

    return getOne(id);
}

module.exports = {
    getAll,
    getOne,
    create
}