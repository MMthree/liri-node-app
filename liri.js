require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var searchType = process.argv[2].toLowerCase();
var searchTerm = process.argv.slice(3).join(" ").toLowerCase();


// --------------------CONDITIONAL STATEMENTS FOR SWITCHING SEARCH FUNCTIONS--------------------

if (searchType === "spotify-this") {
    console.log("\n---------Searching for your song---------")
    spotifySearch();
}
else if (searchType === "movie-this") {
    console.log("\n---------Searching for your movie---------")
    movieSearch();
}
else if (searchType === "do-what-it-says") {
    randomTxt();
}
else if (searchType != "spotify-this" || "movie-this") {
    console.log("\n--------------------------------------------------------"
        + "\nPlease use 'spotify-this' or 'movie-this' in your search"
        + "\n--------------------------------------------------------");
}


// ----------------------MOVIE SEARCH----------------------------- 

function movieSearch() {

    var URL = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

    axios.get(URL)
        .then(function (response) {
            console.log("\n------------------------------------"
                + "\nTitle: " + response.data.Title
                + "\nYear of Release: " + response.data.Year
                + "\nIMDB Rating: " + response.data.imdbRating
                + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value
                + "\nCountry: " + response.data.Country
                + "\nLanguage: " + response.data.Language
                + "\nPlot: " + response.data.Plot
                + "\nActors: " + response.data.Actors
                + "\n------------------------------------");
        })
        .catch(function (error) {
            console.log(error);
        });

}


// ----------------------SPOTIFY----------------------------- 

function spotifySearch() {
    spotify.search(
        {
            type: 'track',
            query: searchTerm,
            limit: 1
        }, function (err, data) {
            if (data) {
                var response = data.tracks.items;
                console.log("\n------------------------------------"
                    + "\nArtist: " + response[0].artists[0].name
                    + "\nSong Title: " + response[0].name
                    + "\nAlbum: " + response[0].album.name
                    + "\nSong Preview: " + response[0].preview_url
                    + "\n------------------------------------");
            }
            else if (err) {
                return console.log('Error occurred: ' + err);
            }

        });
}



// ----------------------READ RANDOM.TXT AND SEARCH SPOTIFY----------------------------- 

function randomTxt() {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err)
        }
        else if (data) {
            var arr = (data.split(","));
            var textTerm = arr[1];

            spotify.search(
                {
                    type: 'track',
                    query: textTerm,
                    limit: 1
                }, function (err, data) {
                    if (data) {
                        var response = data.tracks.items;
                        console.log("\n------------------------------------"
                            + "\nArtist: " + response[0].artists[0].name
                            + "\nSong Title: " + response[0].name
                            + "\nAlbum: " + response[0].album.name
                            + "\nSong Preview: " + response[0].preview_url
                            + "\n------------------------------------");
                    }
                    else if (err) {
                        return console.log('Error occurred: ' + err);
                    }

                });
        }
    })
}
