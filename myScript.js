var usuario = null;
var usuarios = [];
var recetas = [];

$(document).ready(function() {

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

    $.ajax({
            url: '/X-Nav-Practica-Socios/data/users.json',
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            usuarios = JSON.parse(JSON.stringify(data));
            usuarios.forEach(function(usuario) {
                $("#ususrioListWidget").append("<option>" + usuario.user_name + "</option>");
            }, this);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });



    $(function() {
        $("#accordion").accordion({
            collapsible: true,
            active: false
        });
    });

    $("#tabs").hide();
});

function showMenuSelected(item) {
    $("#accordion").text("");
    recetas.forEach(function(receta) {
        if (item == "Todo" || item == receta.tipo) {
            var objeto = '<h3>' + receta.nombre +
                '</h3><div class="thumbnail"><img src="' + receta.fotos[0] +
                '"><div class="caption"><h3>' + receta.nombre +
                '<br><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> ' + receta.likes +
                '</h3><p>' + receta.descripcion +
                '</p><br><h4>Ingredientes</h4><ol>';
            receta.ingredientes.forEach(function(element) {
                objeto += '<li><div>' + element + '</div></li>';
            }, this);
            objeto += '</ol></div></div>';
            $("#accordion").append(objeto);
        }
    }, this);
    $("#accordion").accordion("refresh");
}

function getUserDataFileName(name) {
    var dataFile = "";
    for (var i = 0; i < usuarios.length; i++) {
        var u = usuarios[i];
        if (u.user_name == name) {
            dataFile = "/X-Nav-Practica-Socios/data/" + u.user_mail + ".json";
            break;
        }
    }
    return dataFile;
}

function changeToUser(name) {
    $("#accordion").text("");
    $("#content-Fotos").text("");
    delete recetas;
    recetas = [];
    console.log("changeToUser: " + name);
    if (name == "Ninguno") {
        $("#tabs").hide();
        return;
    }
    usuario = null;
    fileName = getUserDataFileName(name);
    $.ajax({
            url: fileName,
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            usuario = JSON.parse(JSON.stringify(data));
            if (usuario != null) {
                //user info
                $("#tabs-Usuario-foto").attr("src", usuario.foto);
                $("#tabs-Usuario-nombre").text(usuario.nombre);
                $("#tabs-Usuario-email").text(usuario.mail);
                $("#tabs-Usuario-Popularidad").text(usuario.popularidad);
                $("#tabs").show();
                var ajaxReqs = [];
                usuario.recetas.forEach(function(recetaName) {
                    ajaxReqs.push($.ajax({
                            url: recetaName,
                            type: 'GET',
                            cache: false,
                            async: false
                        })
                        .done(function(data, status) {
                            receta = JSON.parse(JSON.stringify(data));
                            recetas.push(receta);
                        })
                        .fail(function() {
                            console.log("error " + recetaName);
                        })
                        .always(function() {}));
                }, this);
                $.when.apply($, ajaxReqs).then(function() {
                    // all requests are complete
                    recetas.forEach(function(receta) {
                        receta.fotos.forEach(function(foto) {
                            $('#content-Fotos').append('<div class="col-xs-6 col-md-3"><a class = "thumbnail"><img src="' + foto + '"></a></div >');
                        })
                    }, this);
                    showMenuSelected("Todo");
                });
            } else {
                console.log("user not found");
            }
        })
        .fail(function() {
            console.log("error " + fileName);
        })
        .always(function() {})
}
