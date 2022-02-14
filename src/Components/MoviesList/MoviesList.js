import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {
  // const location = useLocation();

  return (
    <div>
      <h1>Movies</h1>

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
