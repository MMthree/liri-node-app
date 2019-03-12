# Liri Node App


### File liri.js can take in one of the following commands:

    * `spotify-this`

    * `movie-this`

    * `do-what-it-says`


### How to run each command:

1. `node liri spotify-this '<song name here>'`

    * This will show the following information about the song in your terminal/bash window

    ```
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
    ```

<p><img src="./public/images/fc_home_preview.png" alt="Full Circle Preview" width="650"></p>

2. `node liri movie-this '<movie name here>'`

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


3. `node liri do-what-it-says`

        * LIRI will take the text inside of random.txt and then use it to call the `<spotify-this>` command.
