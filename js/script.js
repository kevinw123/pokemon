/*$(document).ready(function() {

    for (var i = 1; i <152; i++) {
        var pokePic = $("<img src=img/" + i + ".png id=" + i + ">");
        $('#' + i).append(pokePic);
    }

  for (var j = 1; j < 152; j++) {
    (function(index) {
      var webAddress2 = "http://pokeapi.co/api/v1/pokemon/" + index;
      $.getJSON(webAddress2, function(data) {
        $("#name" + index).text(data.name);
      });
    }(j))
  }

    $('img', this).click(function() {

        var uniqueId = $(this).attr('id');

        var webAddress = "http://pokeapi.co/api/v1/pokemon/" + uniqueId;
        var types = " ";
        var abilities = " ";
        $.get(webAddress, function(res) {
            for (var j = 0; j < res.types.length; j++) {
                types += "<li>" + res.types[j].name + "</li>";
                abilities += "<li>" + res.abilities[j].name + "</li>";
                
            }
        }, 'json');

        $.get(webAddress, function(res) {

            $('div.pokedex').html(
                "<h1 align='center'>" + res.name + "</h1>" +
                "<div align='center'><img src=http://pokeapi.co/media/img/" + uniqueId + ".png></div>" +
                "<h4 align='center'>Types:</h4>" +
                "<ul>" +
                types + 
                "</ul>" + 
                "<h4 align='center'>Abilities:</h4>" +
                "<ul>" +
                abilities +
                "</ul>" + 
                "<h4 align='center'>Height:</h4>" +
                "<p align='center'>" + res.height + "</p>" +
                "<h4 align='center'>Weight:</h4>" +
                "<p align='center'>" + res.weight + "</p>"
            );

        }, 'json');
    });
});
*/
$(document).ready(function() {
    var toggle = true;
    $(function() {
        $("#modal-background, #modal-close, img").click(function() {
            $("#modal-content, #modal-background").toggleClass("active");
            if(toggle === true){
                var uniqueId = $(this).attr('id');
                $('#icon').attr("src","img/" + uniqueId + ".png");
                toggle = false;
            }else{
                toggle = true;
            }
        });
    });
    var pokemonLength = 10;
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