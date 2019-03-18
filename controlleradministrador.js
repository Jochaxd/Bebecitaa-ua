var Item = require('./administrador');
let administradorinstanciado = new Item(); 
module.exports = class _Administrador {
  constructor( ) {}
  Guardar(req,res) {
      var claveysaltlocal = administradorinstanciado.setPassword(req.body.CLAVE);
      console.log(claveysaltlocal[0]);
      console.log(req.body.CLAVE);
    	Item.create(
    			{
        NOMBRE: req.body.NOMBRE,
        CLAVE: claveysaltlocal[0],
        EMAIL: req.body.EMAIL,
        IMAGEN: req.body.IMAGEN,
        ESTADO: req.body.ESTADO,
                 SALT: claveysaltlocal[1]   
              }, 
  			function(err, item) {
  				if (err)
                      {
  					res.send(err);
          }else{
                Item.find(function(err, item) {
          				 	if (err)
          				 		res.send(err)
          				    res.json(item);
          				  });}}); 
  }   
  Modificar(req,res) {
  		Item.update( {_id : req.body.id},
  		{$set:
  			{
          NOMBRE: req.body.NOMBRE,
          CLAVE: req.body.CLAVE,
          EMAIL:req.body.EMAIL,
          IMAGEN: req.body.IMAGEN,
          ESTADO: req.body.ESTADO
        }}, 
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

  Eliminar(req,res) {
  	  Item.remove({_id : req.body.id}, 
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

  Seleccionarporid(req,res) {
  	  Item.find({_id:req.body.id}, 
          function(err, item) {
      			if (err){
      				  res.send(err)
            }else{ 
  					    res.json(item); // devuelve todas las Personas en JSON		
            }
          }
  		);   
  }

  Login(req,res) {
      Item.find({EMAIL:req.body.EMAIL}, 
          function(err, item) {
  			    if (err){
  				      res.send(err)}
            else{
                console.log(item[0].CLAVE);
                if(administradorinstanciado.validPassword(req.body.CLAVE,item[0].CLAVE,item[0].SALT)){
                    item[0].SALT="NO F..ING WAY";
  					        res.json(item); // devuelve todas las Personas en JSON	
                }else{
                      res.status(400).send({ 
                        message : "Datos incorrectos"
                      }); 
                }
            }
          });
  }
}