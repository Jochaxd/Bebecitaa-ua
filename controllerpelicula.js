var Item = require('./pelicula');
module.exports = class _Pelicula {
    constructor( ) {}//mongo no acepta el constructor lol

    Guardar(req,res) { //Función para guardar datos
	      Item.create({ //Crea un nuevo item
          NOMBRE: req.body.NOMBRE, //Guarda el nombre que se le envía
          DURACIONMINUTOS: req.body.DURACIONMINUTOS, //Guarda la duración en minutos que se le envía
          GENERO: req.body.GENERO, //Guarda el género que se le envía
          IDIOMAAUDIO: req.body.IDIOMAAUDIO, //Guarda el idioma del audio de la película
          IDIOMASUB: req.body.IDIOMASUB, //Guarda el idioma de los subtitulos de la película
          SINOPSIS: req.body.SINOPSIS, //Guarda la sinopsis de la película
          CLASIFICACION: req.body.CLASIFICACION, //Guarda la clasificación de la película
          PRECIO: req.body.PRECIO, //Guarda el precio de la película
          HORAINICIO: req.body.HORAINICIO, //Guarda la hora de inicio de la película
          FECHA: req.body.FECHA, //Guarda la fecha de la película
          MINUTOINICIO: req.body.MINUTOINICIO, //Guarda el minuto de inicio de la película
          ASIENTOS: req.body.ASIENTOS, //Guarda la sinopsis de la película
          IMAGEN: req.body.IMAGEN, //Guarda la imagen de la película
          ESTADO: req.body.ESTADO //Guarda el estado de la película
        }, 
			   
        function(err, item) {
				  if (err){
					  res.send(err); //En caso de error lo notifica
          }
				  else{
              Item.find(function(err, item) {
    				 	    if (err)
    				 	        res.send(err) //En caso de error lo notifica
    				      res.json(item); //Guarda en un json la información recaudada anteriormente
				      });
                
                
          }
               	
			  });
    }
    
  Modificar(req,res) {
		Item.update( {_id : req.body._id}, //Modifica un item creado anteriormente
			  {$set:
			      {
              NOMBRE: req.body.NOMBRE, 
              DURACIONMINUTOS: req.body.DURACIONMINUTOS,
              GENERO: req.body.GENERO,
              IDIOMAAUDIO: req.body.IDIOMAAUDIO,
              IDIOMASUB: req.body.IDIOMASUB,
              SINOPSIS: req.body.SINOPSIS,
              CLASIFICACION: req.body.CLASIFICACION,
              PRECIO: req.body.PRECIO,
              HORAINICIO: req.body.HORAINICIO,
              FECHA: req.body.FECHA,
              MINUTOINICIO: req.body.MINUTOINICIO,
              ASIENTOS: req.body.ASIENTOS,
              IMAGEN: req.body.IMAGEN,
              ESTADO: req.body.ESTADO
            }
        }, 
			  function(err, item) {
				    if (err){
					      res.send(err);}
	      // Obtine y devuelve todas las personas tras crear una de ellas
            else{
                Item.find(function(err, item) {
				 	          if (err)
				 		           res.send(err)
				            res.json(item);
				        });     
            }       	
		  });
  }   
    
  Eliminar(req,res) {
	   Item.remove({_id : req.body.id}, 
			  function(err, item) {
				    if (err){
					      res.send(err);
            }
				// Obtine y devuelve todas las personas tras crear una de ellas
            else{
                Item.find(function(err, item) {
				 	          if (err)
				 		            res.send(err)
				            res.json(item);
				        });        
            }         	
			  });
        
    
    
    }
    Seleccionartodos(req,res) {
		    Item.find(
		        function(err, item) {
			          if (err){
				            res.send(err)
                }else{    
					          res.json(item); // devuelve todas las Personas en JSON	
                }
				    }
		    );
    }
    
    Seleccionarporfecha(req,res) {
	      Item.find({FECHA:req.body.FECHA}, function(err, item) {
			      if (err){
				        res.send(err)
            }
            else{
                res.json(item); // devuelve todas las Personas en JSON		
				    } 
        });   
    }
    
    Seleccionarporid(req,res) {
	      Item.find({_id:req.body._id}, function(err, item) {
			      if (err){
				        res.send(err)
            }
            else{
                res.json(item); // devuelve todas las Personas en JSON		
			      }
        });  
    }
    
    Seleccionarpornombre(req,res) {
	      Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			      if (err){
				        res.send(err)
            }
            else{
					      res.json(item); // devuelve todas las Personas en JSON		
			      }
        });
    }
}