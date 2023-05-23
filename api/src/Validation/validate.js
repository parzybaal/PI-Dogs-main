const validateByName = (req, res, next) => {
    const {name} = req.body;
    if (name === undefined) return res.status(404).json({error: "La raza del perro, no existe"}) 
}

module.exports = {validateByName};