import { useState, useEffect } from "react";
import { Link, useMatch, useLocation } from "react-router-dom";
import { fetchTrending } from "../ApiService/ApiService";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  // const { url } = useMatch();
  // const location = useLocation();

  useEffect(() => {
    fetchTrending().then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending</h1>

      {movies.length > 0 &&
        movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              {/* <div>{original_title}</div> */}
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
    </div>
  );
}
