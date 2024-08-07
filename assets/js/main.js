// Control sobre formularios

$(document).ready(function(){

    function limpiarErroresIndex() {
        $("#msj-nombre-index").html("")
        $("#msj-email-index").html("")
        $("#msj-telefono-index").html("")
        $("#msj-comentario-index").html("")
        $("#lbl-nombre-index").removeClass("text-danger")
        $("#lbl-email-index").removeClass("text-danger")
        $("#lbl-telefono-index").removeClass("text-danger")
        $("#lbl-comentario-index").removeClass("text-danger")
        $("#alerta-error-envio-index").addClass("d-none")
        $("#alerta-exito-envio-index").addClass("d-none")
    }

    // Formulario Página Inicial
    $("#formulario-index").submit(function(evento){
        evento.preventDefault();
        limpiarErroresIndex();

        // Variables de Entrada
        var nombreIndex = $("#nombre-index").val();
        var emailIndex = $("#email-index").val();
        var telefonoIndex = $("#telefono-index").val();
        var comentarioIndex = $("#comentario-index").val();

        // Variable booleana para verificacion de llenado de campos
        var camposRellenados = true

        if (nombreIndex == "") {
            camposRellenados = false
            $("#msj-nombre-index").html("Ingrese su nombre")
            $("#lbl-nombre-index").addClass("text-danger")
        }

        if (emailIndex == "") {
            camposRellenados = false
            $("#msj-email-index").html("Ingrese su correo electrónico")
            $("#lbl-email-index").addClass("text-danger")
        }

        if (telefonoIndex == "") {
            camposRellenados = false
            $("#msj-telefono-index").html("Ingrese su número de teléfono")
            $("#lbl-telefono-index").addClass("text-danger")
        }

        if (comentarioIndex == "") {
            camposRellenados = false
            $("#msj-comentario-index").html("Comente su consulta")
            $("#lbl-comentario-index").addClass("text-danger")
        }

        if (camposRellenados == false) {
            $("#alerta-error-envio-index").removeClass("d-none")
        } else {
            $("#alerta-error-envio-index").addClass("d-none")
            $("#alerta-exito-envio-index").removeClass("d-none")
        }
    });

});