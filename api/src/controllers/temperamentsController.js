const  axios  = require ("axios")
const { Temperaments } = require ("../db")
const { API_KEY, URL } = process.env;



const getTemperaments = async () => {
    
    const apiTemps = await axios.get(`${URL}?api_key=${API_KEY}`);
    const apiTempsClean = apiTemps.data.map(dogs => {return {temperament: dogs.temperament}})
 
    const allDogs = [...apiTempsClean]
    const allTemps = [];

    allDogs.forEach(dogs => {
        if(dogs.temperament) allTemps.push(...dogs.temperament.split(","))
    })  
    const newAllTemps = allTemps.map(str => str.trim())
    const allTempsUnique = [...new Set(newAllTemps)];
    const createdTemperaments = await Promise.all(
        allTempsUnique.map(temps => Temperaments.findOrCreate({where: { name: temps } }))
    );
    console.log(createdTemperaments)
    return createdTemperaments
}   

module.exports = {getTemperaments};