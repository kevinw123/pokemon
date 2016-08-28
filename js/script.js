$(document).ready(function() {
    var toggle = true;
    $(function() {
        $("#modal-background, #modal-close, img").click(function() {
            $("#modal-content, #modal-background").toggleClass("active");
            if (toggle === true) {
                var uniqueId = $(this).attr('id');
                var webAddress = "http://pokeapi.co/api/v1/pokemon/" + uniqueId;
                var types = "";
                var abilities = "";
                $('#icon').attr("src", "img/" + uniqueId + ".png");
                toggle = false;
                $.getJSON(webAddress, function(data) {
                    $("#modalName").text(data.name);
                    $("#pokeHeight").text(data.height);
                    $("#pokeWeight").text(data.weight);
                    for (var j = 0; j < data.types.length; j++) {
                        if (j == 0) {
                            types += data.types[j].name;
                            abilities += data.abilities[j].name;
                        } else {
                            types += "," + data.types[j].name;
                            abilities += "," + data.abilities[j].name;
                        }
                    }
                    $("#pokeType").text(types);
                    $("#pokeAbility").text(abilities);
                });
            } else {
                toggle = true;
            }
        });
    });
    var pokemonLength = 152;
    for (var i = 0; i < pokemonLength; i++) {
        $('#' + i).prepend("<img src='img/" + i + ".png' id=" + i + ">");
    }
    for (var j = 1; j < pokemonLength; j++) {
        (function(index) {
            var webAddress2 = "http://pokeapi.co/api/v1/pokemon/" + index;
            $.getJSON(webAddress2, function(data) {
                $("#name" + index).text(data.name);
            });
        }(j))
    }

});