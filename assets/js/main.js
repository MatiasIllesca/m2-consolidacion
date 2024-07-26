// Control sobre formularios

$(document).ready(function(){
    // Formulario Página Inicial
    $("#formulario-index").submit(function(evento){
        evento.preventDefault();
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
        }
    });

    // Formulario Pagina Cafeteria
    $("#formulario-cafeteria").submit(function(evento){
        evento.preventDefault();
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
        }
    });
});