import { useEffect, useState } from 'react';
import MyHead from '../components/MyHead';

export default function home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/movies`);
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <MyHead title="Home" />
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <div>{movie.original_title}</div>
        </div>
      ))}
    </div>
  );
}
