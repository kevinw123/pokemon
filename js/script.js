$(document).ready(function() {
    /*for(var j = 1; j < 5; j++){
        $("#name" + j).text("HELLO");
    }*/
    /*for (var i = 1; i < 719; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
        $('div.pokemon').append(pokePic);
    }*/
    for (var i = 1; i < 152; i++) {
        var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
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
                "<h1>" + res.name + "</h1>" +
                "<img src=http://pokeapi.co/media/img/" + uniqueId + ".png>" +
                "<h4>Types:</h4>" +
                "<ul>" +
                types + 
                "</ul>" + 
                "<h4>Abilities:</h4>" +
                "<ul>" +
                abilities +
                "</ul>" + 
                "<h4>Height:</h4>" +
                "<p>" + res.height + "</p>" +
                "<h4>Weight:</h4>" +
                "<p>" + res.weight + "</p>"
            );

        }, 'json');
    });
});
