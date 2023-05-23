const { Router } = require('express');
const dogRoutes = require ("./dogsRoutes")
const temperamentsRoutes = require ("./temperamentsRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogRoutes);
router.use("/temperaments", temperamentsRoutes);


module.exports = router;
