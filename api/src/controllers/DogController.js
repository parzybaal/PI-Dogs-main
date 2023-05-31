const { Dogs, Temperaments } = require("../db")
const { Op } = require ("sequelize")
const axios = require ("axios")
const { API_KEY, URL, URL_DEPLOY } = process.env;


const cleanApi = (api) => {
    return api.data.map(apiDogs => {
        return {
            id: apiDogs.id,
            name: apiDogs.name,
            weight: apiDogs.weight.metric,
            height: apiDogs.height.metric,
            life_time: apiDogs.life_span,
            temperament: apiDogs.temperament,
            image: apiDogs.image.url,
            created: false
        }
    })
}

const getAllDogs = async () => {
    const dbDogs = await Dogs.findAll({include: [Temperaments]});
    const apiDogs = await axios.get(`${URL_DEPLOY}?api_key=${API_KEY}`);

    //filtro la información que necesito unicamente
    const apiDogsresult = cleanApi(apiDogs)
    
    const allDogs = [...dbDogs, ...apiDogsresult]

    return allDogs
}

const getDogById = async(id, source) => {
    if(source === "api"){ 
        const dogs = await getAllDogs()
        const response = await axios.get(`${URL_DEPLOY}/${id}?api_key=${API_KEY}`)
        const dogApi = {
            id: response.data.id,
            name: response.data.name,
            weight: response.data.weight.metric,
            height: response.data.height.metric,
            life_time: response.data.life_span,
            temperament: response.data.temperament,
            image: dogs.find(dog => dog.id === response.data.id).image
        }
        return dogApi;
    } 
    else {
        const bdDog = await Dogs.findByPk(id, {include: {model: Temperaments, attributes: ["name"]}})

        return bdDog;
    }
     
}

const getDogByQuery = async (name) => {
    name = name.toLowerCase()
    const responseDb = await Dogs.findAll({where:{name: {[Op.like]: `%${name}%`}}});

    const dogs = await getAllDogs()
    const responseApi = dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
    /* const apiResponse = await axios.get(`${URL}/search?name=${name}&api_key=${API_KEY}`);
    const responseApiClean = {
        id: apiResponse.data.id,
        name: apiResponse.data.name,
        weight: apiResponse.data.weight,
        height: apiResponse.data.height,
        life_time: apiResponse.data.life_span,
        temperament: apiResponse.data.temperament,
        image: dogs.find(dog => dog.id === apiResponse.data.id)?.image?.url,
        created: false
    } */


    return [...responseDb, ...responseApi];
}

const createNewDog = async (name, image, height, weight, life_time, temperament) => {
    
    const newDog = await Dogs.create({
        name,
        image,
        height,
        weight,
        life_time
    })
    const tempsArray = temperament.split(",")
    console.log(tempsArray)
    for (const temp of tempsArray) {
        const dbTemps = await Temperaments.findOne({where:{name: temp.trim()}})
        console.log(dbTemps)
        await newDog.addTemperaments(dbTemps)     

    }
    console.log(newDog)
    return newDog
}

const deleteDog = async (id) => {
    await Dogs.destroy({ where: { id:id }})
    const dogs = getAllDogs();
    return dogs
}


module.exports = {
    createNewDog,
    getDogById,
    getAllDogs,
    getDogByQuery,
    deleteDog
}