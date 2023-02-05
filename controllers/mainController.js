const fs = require('fs');
const path = require('path');

const mainController = {
    // Pagina principal
    homeShop: (req,res) => {
        res.render('home-shop')
    },
    // Categorias
    categorias: (req,res) => {
        res.render('categorias')
    },
    // Login
    login: (req,res) => {
        res.render('form-login')
    },
    // Registro
    registro: (req,res) => {
        res.render('form-registro')
    },
    createUser:(req, res) => {
        alert('usuario creado')
    },
    // Carrito
    carrito: (req,res) => {
        res.render('carrito')
    },


}

module.exports = mainController;