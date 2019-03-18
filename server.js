//Inicialización
var express	= require('express'); //Libreria express de nodejs en variable express
var app	= express(); //app toma el valor de express
var mongoose = require('mongoose'); //Libreria mongoose en variable mongoose para Mongo DB
var port = process.env.PORT || 8080; //Elige que todo ocurra en el puerto 8080 ya que no se especifica otro puerto

mongoose.connect('mongodb://localhost:27017/Taquilla'); //conecta con un servidor de mongo db en un puerto predefinido
var db = mongoose.connection; //guarda en una variable la coneccion al servidor de mongo
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //En caso de error lo muestra en consola
app.configure(function(){ //Se configura express
		app.use(express.static(__dirname + '/'));
		app.use(express.logger('dev')); //Configura método Logger de express
		app.use(express.methodOverride()); //Configura método Override
});//Se termina de configurar express

var bodyParser = require('body-parser'); //Se configura el bodyParser usado para recibir los datos que envíe el cliente
app.use(bodyParser.json({limit: '50mb'})); //Se le configura un límite de longitud de 50mb a los datos ingresados
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes.js')(app); //Contacta con el archivo "route.js"

app.listen(port);
console.log("APP por el puerto " + port); //Al todo salir bien se muestra este mensaje