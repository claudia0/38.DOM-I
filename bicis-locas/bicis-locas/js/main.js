function validateForm(){
	/* Escribe tú código aquí */
	var inputname = document.getElementById("name").value;
	var inputLastname = document.getElementById("lastname").value;
	var inputEmail = document.getElementById("input-email").value;
	var inputPassword = document.getElementById("input-password").value;

	if (inputname == null || inputname.length == 0){
        alert("Ingrese un nombre");
        return false;
	}

	if (inputLastname == null || inputLastname.length == 0){
		alert("Ingrese su Apellido");
        return false;
	}
	if (inputEmail == null || inputEmail.length == 0){
		alert("Ingrese su correo");
        return false;
	}
	if (inputPassword == null || inputPassword.length == 0){
		alert("Ingrese su contraseña");
        return false;
	}

     if (!/^[a-zA-z]*$/g.test(document.getElementById("name").value)){
     	alert("Caracteres invalidos, nombre y apellido la primera letra debe ser mayúscula");//letras//
     	return alert;
     }
	var limiteCaracteres = document.getElementById("input-password").value //caracteres minimos de 6//
		if (limiteCaracteres.length < 6){
		alert("minimo 6 caracteres como contraseña");
		return alert;
	}else if (limiteCaracteres == "123456" || limiteCaracteres == "password" || limiteCaracteres == "098765" ) {
		alert("Su password no puede ser igual a password ó números consecutivos");
		return alert;
	}

	var elOpciones = document.getElementById("opciones").selectedIndex;
        if( elOpciones == null || elOpciones == 0) {
        alert("elija una opción");
        return false;
	}
 
  
}


// <input type="text" id="referencia" name="referencia" required pattern="[A-Z]{3}[0-9]{4}" 
// title="El formato debe coincidir con 3 letras mayúsculas y 4 números."/>