# Liri Node App


### Video example: https://youtu.be/5nEAwYiEL3Q


### File liri.js can take in one of the following commands:

    * `spotify-this`

    * `movie-this`

    * `do-what-it-says`


### How to run each command:

1. `node liri.js spotify-this-song '<song name here>'`

    * This will show the following information about the song in your terminal/bash window

    ```
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
    ```


2. `node liri.js movie-this '<movie name here>'`

    * This will output the following information to your terminal/bash window:

     ```
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
     ```


3. `node liri.js do-what-it-says`

        * LIRI will take the text inside of random.txt and then use it to call the `<spotify-this>` command.
