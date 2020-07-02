// Counts amount of time director appears
// Filters out their movies only
// Isolates each movie rating
// Sums the total
// Finds average

function getRating(watchList) {
    let count = watchList.filter(movie => movie.Director === "Christopher Nolan").length;

    let averageRating = watchList
        .filter(movie => movie.Director === "Christopher Nolan")
        .map(movie => Number(movie.imdbRating))
        .reduce((sum, rating) => sum += rating) / count;

    return averageRating;
}