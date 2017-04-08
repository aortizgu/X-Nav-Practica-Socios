$(document).ready(function() {

    $("#tabs").hide();

    $(function() {
        $("#tabs").tabs();
    })

    $(function() {
        $("#menu").menu().selectable(({
            selected: function(event, ui) {

                $(".ui-selected", this).each(function() {
                    var index = $("#menu li").index(this).innerText;
                    console.log("selected-> " + this.innerText);
                    showMenuSelected(this.innerText.replace(/(\r\n|\n|\r)/gm, ""));

                });
            }
        }));
    });

    $(function() {
        $("#ususrioListWidget").selectmenu({
            change: function(event, data) {

                changeToUser(data.item.value);
            }
        });
    });
    usuarios.forEach(function(usuario) {
        $("#ususrioListWidget").append("<option>" + usuario.nombre + "</option>");
    }, this);
});

function showMenuSelected(item) {
    $("#recetas").text("");
    if (item == "Todo") {
        for (var i = 0; i < usuario.recetas.length; i++) {
            var receta = usuario.recetas[i];
            var objeto = '<div class="thumbnail"><img src="' + receta.fotos[0] + '"><div class="caption"><h3>' + receta.nombre + '</h3><p>' + receta.descripcion + '</p></div></div>';
            $("#recetas").append(objeto);
        }
    }
    switch (item) {
        case "Todo":

            break;
        case "Ensaladas":

            break;
        case "Primeros":

            break;
        case "Segundos":

            break;
        case "Postres":

            break;
        default:
            break;
    }
}
var usuario = null;

function changeToUser(name) {
    console.log("changeToUser: " + name);
    if (name == "Ninguno") {
        $("#tabs").hide();
        return;
    }
    usuario = null;
    for (var index = 0; index < usuarios.length; index++) {
        var element = usuarios[index];
        if (element.nombre == name) {
            usuario = element;
            break;
        }
    }
    $('#tabs-Fotos').html("");
    if (usuario != null) {
        for (var i = 0; i < usuario.recetas.length; i++) {
            var receta = usuario.recetas[i];
            for (var j = 0; j < receta.fotos.length; j++) {
                var foto = receta.fotos[j];
                $('#tabs-Fotos').append('<div class="col-xs-6 col-md-3"><a class = "thumbnail"><img src="' + foto + '"></a></div >');
            }
        }
        //user info
        $("#tabs-Usuario-foto").attr("src", usuario.foto);
        $("#tabs-Usuario-nombre").text(usuario.nombre);
        $("#tabs-Usuario-email").text(usuario.mail);
        $("#tabs-Usuario-Popularidad").text(usuario.popularidad);
        $("#tabs").show();
    }
}