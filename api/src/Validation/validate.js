const validateByName = (req, res, next) => {
    const {name} = req.query;
    if (name === undefined) return res.status(404).json({error: "La raza del perro, no existe"})
    next(); 
}

module.exports = { validateByName };