var movies = ["Batman", "Little Manhattan", "August Rush", "Toy Story"];

function showMovie(){
    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?=" + movie + "&y=&plot=short&apikey=4445d410";

    
}