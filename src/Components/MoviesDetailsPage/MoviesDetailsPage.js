import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getMovieDetails } from "../ApiService/ApiService";
import * as ApiService from "../ApiService/ApiService";
import Cast from "../Cast/Cast";

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovies] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    ApiService.getMovieDetails(movieId).then(setMovies);
  }, [movieId, setMovies]);

  return (
    <>
      {movie && (
        <div>
          <h2>{movie.original_title}</h2>

          <img
            src={`${IMG_PATH}/${movie.poster_path}`}
            alt={movie.original_title}
            width="640px"
          />
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres && (
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}

          <Routes>
            <Route path="/" element={<Cast movieId={movieId} />} exact></Route>
          </Routes>
        </div>
      )}
    </>
  );
}
