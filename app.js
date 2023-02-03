// Constantes - Variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path')
const mainRoutes = require('./routes/mainRoutes');
const publicFolderPath = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Apps Use
app.use('/', mainRoutes)
app.use(express.static(publicFolderPath));



app.listen(PORT, () => {
    console.log('servidor funcionando http://localhost:' + PORT);
})