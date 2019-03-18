var controllerpelicula = require('./controllerpelicula.js');
var controlleradministrador = require('./controlleradministrador.js');
module.exports = function(app){
	var clasepelicula = new controllerpelicula(); //Guarda en la variable la conección a controllerpelicula 
	app.post('/api/nuevapelicula', clasepelicula.Guardar); //Envia a la direccion de crear una nueva película
	app.post('/api/Modificapelicula', clasepelicula.Modificar); //Envia a la direccion de modificar una película
	app.post('/api/eliminapelicula', clasepelicula.Eliminar); //Envia a la direccion de eliminar una película
	app.post('/api/seleccionarpelicula', clasepelicula.Seleccionartodos); //Envia a la direccion de seleccionar todos los datos
	app.post('/api/seleccionarpeliculaporfecha', clasepelicula.Seleccionarporfecha); //Envia a la direccion de seleccionar pelicula por fecha
	app.post('/api/seleccionarpeliculaporid', clasepelicula.Seleccionarporid); //Envia a la direccion de seleccionar una película por id
	app.post('/api/seleccionarpeliculapornombre', clasepelicula.Seleccionarpornombre); //Envia a la direccion de seleccionar una película por nombre

	var claseadm = new controlleradministrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);

	app.get('*', function(req, res){ //localhost:8080
		res.sendfile('./login.html'); //Carga única de la vista
	});
}