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
    <div className="container">
      <MyHead title="Home" />
      <div className="movies-section">
        <div className="movies-name">Nollywood Movies & TV</div>
        <div className="movies-wrapper">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="movies-section">
        <div className="movies-name">Nollywood Movies & TV</div>
        <div className="movies-wrapper">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="movies-section">
        <div className="movies-name">Nollywood Movies & TV</div>
        <div className="movies-wrapper">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="movies-section">
        <div className="movies-name">Nollywood Movies & TV</div>
        <div className="movies-wrapper">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="movies-section">
        <div className="movies-name">Nollywood Movies & TV</div>
        <div className="movies-wrapper">
          {movies?.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
 
      .movies-section {
        width: 100%;
        padding: 0.5rem 0 0.5rem;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
        .movies-name {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 700;
          font-size: 20.9212px;
          color: white;
        }

        .movies-wrapper {
          width: 100%;
          display: flex;
          flex-direction
          gap: 7px;

          overflow: auto;
        }

        img {
          width: 103px;
          height: 161px;
        }
      `}</style>
    </div>
  );
}

// movie api를 받아오기 전까지 아무것도 보여주지 않는
// Server Side Rendering
// export async function getServerSideProps() {
//   const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
