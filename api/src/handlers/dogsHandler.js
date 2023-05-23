const { createNewDog, getDogById, getAllDogs, getDogByQuery } = require("../controllers/DogController")



const getDogsHandler = async (req, res, next) => {
    const {name} = req.query

    const search = name ? await getDogByQuery(name) : await getAllDogs();
    try {
        
        res.status(200).json(search)

    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

const getDogsByIdHandler = async (req, res, next) => {
    const {id} = req.params

    const source = isNaN(id) ? "bdd" : "api"
 
    try {

        const dog = await getDogById(id, source)
        res.status(200).json(dog)

    } catch (error) {

        res.status(404).send({error: error.message})

    }
}

const getDogsByQueryHandler = async (req, res, next) => {
    const {name} = req.body
    
    try {
        const dog = await getDogByQuery(name)
        res.status(200).json(dog)

    } catch (error) {

        res.status(404).send({error: error.message})

    }
}

const postDogsHandler = async (req, res, next) => {
    try {
        const {name, image, height, weight, life_time, temperament} = req.body
        const newDog = await createNewDog(name, image, height, weight, life_time, temperament)
        res.status(201).json(newDog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDogsHandler,
    getDogsByIdHandler,
    getDogsByQueryHandler,
    postDogsHandler
}