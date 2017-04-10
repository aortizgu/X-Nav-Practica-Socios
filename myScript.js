var user = null;
var users = [];
var messages = [];
var new_messages = [];


$(document).ready(function() {

    $(function() {
        $("#tabs").tabs();
    })

    $(function() {
        $("#filter").menu().selectable(({
            selected: function(event, ui) {
                $(".ui-selected", this).each(function() {
                    var index = $("#filter li").index(this).innerText;
                    console.log("selected-> " + this.innerText);
                    showFilterSelected(this.innerText.replace(/(\r\n|\n|\r)/gm, ""));
                });
            }
        }));
    });

    $(function() {
        $("#usuarioListWidget").selectmenu({
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
            users = JSON.parse(JSON.stringify(data));
            users.forEach(function(user) {
                $("#usuarioListWidget").append("<option>" + user.user_name + "</option>");
            }, this);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

    $("#tabs").hide();

    $.ajax({
            url: "/X-Nav-Practica-Socios/data/messages.json",
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            messages = JSON.parse(JSON.stringify(data));
            messages.sort(function(a, b) {
                return a.date - b.date;
            });
        })
        .fail(function() {
            console.log("error " + "/X-Nav-Practica-Socios/data/messages.json");
        })
        .always(function() {});

    $.ajax({
            url: "/X-Nav-Practica-Socios/data/new_messages.json",
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            new_messages = JSON.parse(JSON.stringify(data));
            $('#num_new_msgs').text(new_messages.length);
        })
        .fail(function() {
            console.log("error " + "/X-Nav-Practica-Socios/data/new_messages.json");
        })
        .always(function() {})

    $('#update_button').click(
        function() {
            messages = messages.concat(new_messages);
            new_messages = [];
            $('#num_new_msgs').text(new_messages.length);
            changeToUser(user.user_name);
        });
});

function getResource(resource) {
    var ret = [];
    $.ajax({
            url: resource,
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            ret = JSON.parse(JSON.stringify(data));
        })
        .fail(function() {
            console.log("error " + resource);
        })
        .always(function() {})
    return ret;
}

function showFilterSelected(item) {
    $("#msgs_filtered").text("");
    messages.forEach(function(m) {
        if (item == "All" || item == m.sender) {
            $("#msgs_filtered").append(genMessage(m));
        }
    }, this);
}

function fillUserInfo() {
    $("#tabs-user-info-photo").attr("src", user.user_photo);
    $("#tabs-user-info-name").text(user.user_name);
    $("#tabs-user-info-mail").text(user.user_mail);
    $("#tabs-user-info-popularity").text(user.user_popularity);
}

function genMessage(message) {
    var ret = "";
    ret += '<h3>' + message.tittle + '</h3>';
    ret += '<div class="my_msg_box thumbnail">';
    ret += '<div class="caption">'
    ret += '<p>From: ' + message.sender + '</p>'
    var d = new Date(message.date);
    ret += '<p>Date: ' + d.getDate() + "/" +
        (d.getMonth() + 1) + "/" +
        d.getFullYear() + "  " +
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds(); + '</p>'
    ret += '<p>' + message.content + '</p>'
    message.media.forEach(function(media) {
        ret += "<img class='my-media-object' src='" + media + "'>";
    }, this);
    ret += '</div></div>';
    return ret;
}

function genFilter() {
    var filter = "<li id='all_msgs'><div>All</div></li>";
    users.forEach(function(u) {
        if (user.user_name != u.user_name) {
            filter += "<li><div>" + u.user_name + "</div></li>";
        }
    }, this);
    $("#filter").html(filter);

    $("#filter").menu("refresh");
    $("#filter").selectable("refresh");

}

function fillMyMsgs() {
    messages.forEach(function(m) {
        if (user.user_name == m.sender) {
            $("#my_messages").append(genMessage(m));
        }
    }, this);
}

function changeToUser(name) {
    $("#accordion").text("");
    $("#content-Fotos").text("");
    console.log("changeToUser: " + name);
    if (name == "None") {
        $("#tabs").hide();
        return;
    }
    users.forEach(function(u) {
        if (u.user_name == name) {
            user = u;
        }
    }, this);
    fillUserInfo();
    genFilter();
    showFilterSelected("All");
    fillMyMsgs();
    $("#tabs").show();
}