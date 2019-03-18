class _Administrador {
   constructor(_id, 
    NOMBRE,
    CLAVE,
    EMAIL,
    IMAGEN,
    ESTADO,
    SALT
    ) {
      this._id=_id;
      this.NOMBRE =NOMBRE;
      this.CLAVE=CLAVE;
      this.EMAIL=EMAIL;
      this.IMAGEN=IMAGEN;
      this.ESTADO=ESTADO;
      this.SALT=SALT;
    }
    Guardar() {
        
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuffs 
          try {
            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://bebecitaa-ua.herokuapp.com/api/nuevoadm');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                    {
                       reject(xhr); 
                    }
            };
            xhr.send(JSON.stringify(objetoaenviar));   
          }
          catch(err) {
              reject(err.message);

          }
      });
    }
    Login() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff    
          try {
                 
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://bebecitaa-ua.herokuapp.com/api/loginadm');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else
                    {
                       reject(xhr); 
                    }
            };
            xhr.send(JSON.stringify(objetoaenviar));                
          }
          catch(err) {
              reject(err.message);
          }
      });     
    }   
}
            
let imagenenbase64 = "";
$("#imagen").change(function(){
    readURL(this);
});    
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          imagenenbase64=e.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
}

function validar(){
  var clave1 = document.getElementById('contrasena').value;
  var clave2 = document.getElementById('ccontrasena').value;
  if(clave1!=clave2){
    alert("Las contraseñas no coinciden");
  }else{
    botonguardarclick();
  }
}

function botonguardarclick()
  {
    var peliculainstanciada = new _Administrador(0,
      document.getElementById("nombre").value,
      document.getElementById("contrasena").value,
      document.getElementById("email").value,
      imagenenbase64
    );
                                                        
    peliculainstanciada.Guardar().then(function(response) {
      console.log("Success!", response);
      alert("Guardado con exito");
              
    }, function(error) {
      console.error("Failed!", error);
      alert("Error " + error);
           
    });                                       
  }

function botonguardarlogin()
  {
    var administradorinstanciado = new _Administrador(0,
      '',
      document.getElementById("contrasena").value,
      document.getElementById("email").value
    );
                                                        
      administradorinstanciado.Login().then(function(response) {
      alert("Sesión iniciada");
      localStorage.setItem("userlogin",JSON.stringify(response));
      location.href="calendario.html";
              
    }, function() {
      alert("Contraseña incorrecta");
           
    });                                       
  }


