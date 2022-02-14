import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ApiService from "../ApiService/ApiService";

export default function Cast({ movieId }) {
  // const { movieId } = useParams();
  // console.log(movieId)
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiService.getCastMovieInfo(movieId).then((res) => {
      setCast([...res.cast]);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map((cast) => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                    : null
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
