const { Router } = require ("express")
const { getTemperamentsHandler } = require("../handlers/temperamentsHandler")

const temperamentsRoutes = Router();

temperamentsRoutes.get("/", getTemperamentsHandler);

module.exports = temperamentsRoutes;