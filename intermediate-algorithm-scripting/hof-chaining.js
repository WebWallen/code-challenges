
function getRating(watchList) {
    // Find how many types a director appears (need for average)
    let count = watchList.filter(movie => movie.Director === "Christopher Nolan").length;

    let averageRating = watchList
        // Filter out a director, isolate the ratings, sum them together, and divide by count
        .filter(movie => movie.Director === "Christopher Nolan")
        .map(movie => Number(movie.imdbRating))
        .reduce((sum, rating) => sum += rating) / count;

    return averageRating;
}

// To be used with an array of objects containing properties with details about each movie