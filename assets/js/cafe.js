// Control sobre formularios

$(document).ready(function(){

    function limpiarErroresCafe() {
        $("#msj-nombre-cafeteria").html("")
        $("#msj-email-cafeteria").html("")
        $("#msj-telefono-cafeteria").html("")
        $("#lbl-nombre-cafeteria").removeClass("text-danger")
        $("#lbl-email-cafeteria").removeClass("text-danger")
        $("#lbl-telefono-cafeteria").removeClass("text-danger")
        $("#alerta-error-envio-cafeteria").addClass("d-none")
        $("#alerta-exito-envio-cafeteria").addClass("d-none")
    }

    // Formulario Pagina Cafeteria
    $("#formulario-cafeteria").submit(function(evento){
        evento.preventDefault();
        limpiarErroresCafe();
        // Variables de Entrada
        var nombreClienteCafeteria = $("#nombre-cliente-cafeteria").val();
        var emailClienteCafeteria = $("#email-cliente-cafeteria").val();
        var telefonoClienteCafeteria = $("#telefono-cliente-cafeteria").val();

        // Variable booleana para verificacion de llenado de campos
        var camposRellenados = true

        if (nombreClienteCafeteria == "") {
            camposRellenados = false
            $("#msj-nombre-cafeteria").html("Ingrese su nombre")
            $("#lbl-nombre-cafeteria").addClass("text-danger")
        }

        if (emailClienteCafeteria == "") {
            camposRellenados = false
            $("#msj-email-cafeteria").html("Ingrese su correo electrónico")
            $("#lbl-email-cafeteria").addClass("text-danger")
        }

        if (telefonoClienteCafeteria == "") {
            camposRellenados = false
            $("#msj-telefono-cafeteria").html("Ingrese su número de teléfono")
            $("#lbl-telefono-cafeteria").addClass("text-danger")
        }

        if (camposRellenados == false) {
            $("#alerta-error-envio-cafeteria").removeClass("d-none")
        } else {
            $("#alerta-error-envio-cafeteria").addClass("d-none")
            $("#alerta-exito-envio-cafeteria").removeClass("d-none")
        }

    });
});