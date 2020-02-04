// import the output data via
// mongoimport --db webmad0120-1 --collection movies --jsonArray moviesCleanByIronhackers.json
const fs = require("fs");

fs.readFile("./movies.json", "utf8", function(err, moviesLoaded) {
  moviesLoaded = JSON.parse(moviesLoaded);

  moviesLoaded = moviesLoaded.map(movie => {
    movie.year = +movie.year;
    movie.rate = +movie.rate;

    return movie;
  });

  fs.writeFile("./moviesCleanByIronhackers.json", JSON.stringify(moviesLoaded), function(
    err,
    data
  ) {
    console.log("cleaned data has been recorded into moviesCleanByIronhackers.json. काम");
  });
});
