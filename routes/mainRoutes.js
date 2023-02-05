const express = require('express');
const router = express();
const mainController = require('../controllers/mainController');


// Rutas
// Ruta principal
router.get('/', mainController.homeShop);
// Ruta de las categorias
router.get('/categorias', mainController.categorias);
// Ruta formulario de login
router.get('/form-login', mainController.login);
// Ruta formulario de registro
router.get('/form-registro', mainController.registro);
router.post('/registro', mainController.registro);
// Ruta del carrito
router.get('/carrito', mainController.carrito);



module.exports = router;

