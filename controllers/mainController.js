const fs = require('fs');
const path = require('path');

const mainController = {
    homeShop: (req,res) => {
        res.render('home-shop')
    }
}

module.exports = mainController;