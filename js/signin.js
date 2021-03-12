
$(document).ready(function () {

   
    function validate(contrasena){
         
        input=contrasena;
        if (input.length>8){
            alert("la contraseña debe contener al menos 8 caracteres!")
            return true
        }else {
            return false
        }
    }

    $("#Registrarse").click(function () {
        alert("todo bien");
        var UnError = false

        // obteniendo los valores

        //var nombre = $("#Nombre").val();
        //var apellido = $("#Nombre").val();
        //var materno = $("#Nombre").val();
        var contrasena = $("#inputPassword").val();
        //alert("Tu contraseña es: "+ contrasena);

        //var correo = $("#email").val();
        //var telefono = $("#email").val();
        /*
        var nombre = $("#Nombre").val();
        var correo = $("#email").val();
        var contrasena = $("#password").val();
        var Fnaci = $("#naci").val();
        var Hnaci = $("#Hnaci").val();
        var genero = ratioB();
        var Niveles = [];
        $.each($("input[name='Nivel']:checked"), function () {
            Niveles.push($(this).val());

        });
        var prefe = $("#Preferencias").val();

        var Redes = [];
        $.each($("#Redes option"), function () {
            Redes.push($(this).val());

        });
*/
        // alert("Redes son: " + Redes.join(", "));


        if (validate(contrasena)) {
            alert("Tu contraseña esta mal");
            var UnError = true;

        }
        else   alert("no pasó nada");
        // validaciones de vacio
        /*
                if (nombre == "") {
                    alert("No ingresó nada en Nombre");
                    UnError = true;
                }
        
                if (correo == "") {
        
                    alert("No ingresó nada en correo");
                    UnError = true;
                }
        
                if (contrasena == "") {
                    alert("No ingresó ninguna Contraseña");
                    UnError = true;
                }
                if (Fnaci == "") {
                    alert("No ingresó ninguna Fecha de nacimiento");
                    UnError = true;
                }
                if (Hnaci == "") {
                    alert("No ingresó ninguna Hora de nacimiento");
                    UnError = true;
                }
                if (genero == null) {
                    alert("No seleccionó ningun genero");
                    UnError = true;
                }
                if (Niveles == "") {
                    alert("no seleccionó niveles académicos");
                    UnError = true;
                }
                if (prefe == "") {
                    alert("no seleccionó ninguna de Prefencias");
                    UnError = true;
                }
        
        
                if (Redes == "") {
                    alert("no seleccionó ninguna red Social");
                    UnError = true;
                }

                  if (!UnError) {

            alert("Informacion Correcta!!!\nNombre : " + nombre
                + "\nCorreo: " + correo
                + "\nContraseña: " + contrasena
                + "\nFecha de nacimiento: " + Fnaci
                + "\nHora de nacimiento: " + Hnaci


            );
        }
        */



        if (!UnError) {

            alert("Informacion Correcta!!!\nNombre : "
                + "\nContraseña: " + contrasena


            );
        }


    });

});

