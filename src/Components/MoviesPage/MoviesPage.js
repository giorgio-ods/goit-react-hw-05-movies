import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import * as ApiService from "../ApiService/ApiService";
import { createBrowserHistory } from "history";
import MoviesList from "../MoviesList/MoviesList";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();
  let { pathname } = useLocation();
  let history = createBrowserHistory();

  const handleSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    history.push({
      pathname: `${location.pathname}`,
      search: `query=${searchQuery}`,
    });
    location.search = `?query = ${searchQuery}`;
  };

  const searchByUrl = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    setSearchQuery(searchByUrl);
  }, [searchByUrl]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus(Status.PENDING);
    ApiService.getMovieByQuery(searchQuery)
      .then((res) => {
        if (res.results.length === 0) {
          setStatus(Status.REJECTED);
          return;
        }
        setMovies(res.results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  if (status === Status.IDLE) {
    return <SearchForm onSubmit={handleSubmit} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <SearchForm onSubmit={handleSubmit} />
        <MoviesList movies={movies}></MoviesList>
      </>
    );
  }

  return <h2>Movies Page</h2>;
}
