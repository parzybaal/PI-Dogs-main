const { Router } = require ("express")
const { validateByName } = require ("../Validation/validate")
const {
    getDogsHandler,
    getDogsByIdHandler,
    postDogsHandler
} = require ("../handlers/dogsHandler")

const dogRoutes = Router();

dogRoutes.get("/", getDogsHandler);

dogRoutes.get("/search", getDogsHandler)

dogRoutes.get("/:id", getDogsByIdHandler);

dogRoutes.post("/", postDogsHandler);

module.exports = dogRoutes;
