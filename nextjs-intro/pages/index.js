import { useEffect, useState } from 'react';
import MyHead from '../components/MyHead';

export default function home() {
  const API_KEY = '4a1e120a11deae2f39f59e90bf93826e';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <MyHead title="Home" />
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.original_title}</div>
        </div>
      ))}
    </div>
  );
}
