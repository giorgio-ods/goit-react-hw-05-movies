const BASE_URL = "https://api.themoviedb.org";

const KEY = "11fad27138e60ff4ac198d4feaa381ed";

async function MovieAPI(url = "") {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Empty"));
}

export function fetchTrending() {
  return MovieAPI(`${BASE_URL}/3/trending/movie/day?api_key=${KEY}`);
}

export function getMovieByQuery(searchQuery) {
  return MovieAPI(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
}

export function getMovieDetails(movieId) {
  return MovieAPI(
    `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export function getCastMovieInfo(movieId) {
  return MovieAPI(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function getMovieReview(movieId) {
  return MovieAPI(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
