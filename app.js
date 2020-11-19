const path =require('path');
const express = require('express');
const bodyParser = require('body-parser');
//const errorController = require('./controller');
const mongoConnect = require('./DataBase');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {

});
//app.use('/admin', adminRoutes);
//app.use('/shop', shopRoutes);
//app.use(errorController.get404);

MongoConnect(client => {
    console.log (client);
    app.listen(3000);

});
