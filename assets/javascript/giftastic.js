//Make a variable called gifs with an array of well-known celebrities.
//Create a .ready function so the javascript can fully load when the browser loads.
//Create an click function for the button to execute that function when clicked.
//Make a variable called gif with a value of "this" attribute.
//Make a variable called queryURL for the URL link to the giphy api site.
//Create a function that will send request to the server then console log it.
//Make a for loop that will add the gif images to the html. Also include data-still and data-animate.
//Append the gif images to the html.
//Create a renderButtons function so buttons will appear when the name is searched.
//Create an click function that will display the gifs once the button is clicked.

var gifs = ["Stephen Curry", "Eli Manning", "Dwayne Johnson"];

$(document).ready(function () {
    function displayGif() {
        $("button").on("click", function () {
            var gif = $(this).attr("data-person");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                gif + "&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    var responseData = response.data;
                    $("#gifs-view").empty();

                    for (var i = 0; i < responseData.length; i++) {
                        var giphyDiv = $("<div>");
                        var rating = responseData[i].rating;
                        var p = $("<p>").text("Rated: " + rating);
                        var giphyGifs = $("<img>");
                        giphyGifs.attr("src", responseData[i].images.fixed_height_still.url);
                        giphyGifs.attr("data-pause", responseData[i].images.fixed_height_still.url);
                        giphyGifs.attr("data-play", responseData[i].images.fixed_height.url);
                        giphyGifs.attr("data-state", "pause");
                        giphyGifs.addClass("giphy");

                        giphyDiv.append(p);
                        giphyDiv.append(giphyGifs);

                        $("#gifs-view").prepend(giphyDiv);
                    };
                });

        });
    };

    $(document).on("click", ".giphy", function(){
        var state = $(this).attr("data-state");

        if (state === "pause") {
            var animate = $(this).attr("data-play");
            $(this).attr("src", animate);
            $(this).attr("data-state", "play");
        }
        else{
            $(this).attr("src", $(this).attr("data-pause"));
            $(this).attr("data-state", "pause");
        }
    })

    function renderButtons(){
        $("#gif-view").empty();

        
    }

})