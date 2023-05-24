const { Router } = require ("express")
const { validateByName } = require ("../Validation/validate")
const {
    getDogsHandler,
    getDogsByIdHandler,
    postDogsHandler,
    deleteDogHandler
} = require ("../handlers/dogsHandler")

const dogRoutes = Router();

dogRoutes.get("/", getDogsHandler);

dogRoutes.get("/search", validateByName, getDogsHandler);

dogRoutes.get("/:id", getDogsByIdHandler);

dogRoutes.delete("/:id", deleteDogHandler);

dogRoutes.post("/", postDogsHandler);


module.exports = dogRoutes;
