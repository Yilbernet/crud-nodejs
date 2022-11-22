// Dependencias
const router = require('express').Router();

//Archivo Importado
const userServices = require('./users.services');

router.get('/users', userServices.getAllUsers);
router.post('/users', userServices.postNewUser);
router.get('/users/random', userServices.getRandomUser);
router.get('/users/:id', userServices.getUserById);

module.exports = router;