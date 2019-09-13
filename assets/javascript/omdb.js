var movies = ["Batman", "Little Manhattan", "August Rush", "Toy Story"];

function showMovie() {
    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?=" + movie + "&y=&plot=short&apikey=4445d410";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var movieDiv = $("<div class = 'movie'>");
            console.log(response);

            var title = response.Title;
            var rating = response.Rated;
            var released = response.Released;
            var plot = response.Plot;
            var image = response.Poster;

            $("#movies-view").empty();

            var p = $("<h2>").text("Title: " + title);
            movieDiv.append(p);

            var rated = $("<p>").text("Rated: " + rating);
            movieDiv.append(rated);

            var date = $("<p>").text("Released: " + released);
            movieDiv.append(date);

            var summary = $("<p>").text("Released: " + plot);
            movieDiv.append(summary);

            var picture = $("<img>").attr("src", image);
            movieDiv.append(picture);

            $("#movies-view").append(movieDiv);

        })

}

function renderButtons() {
    $("#movie-view").empty();

    for (var i = 0; i < movies.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("movieButton");
        newButton.attr("data-name", movies[i]);
        newButton.text(movies[i]);
        $("#movie-view").append(newButton);
    }
}



$("#add-movie").on("click", function (event) {
    event.preventDefault();

    var movie = $("#movie-input").val().trim();
    movies.push(movie);

    renderButtons();
});
$(document).on("click", ".movieButton", showMovie);

renderbuttons();