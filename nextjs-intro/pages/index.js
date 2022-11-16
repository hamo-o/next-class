import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

  // const router = useRouter();
  // const onClick = (id, title) => {
  //   // url 설정, url에 정보 넣기
  //   router.push(
  //     { pathname: `/movies/${id}`, query: { title } },
  //     // 요걸로 우리의 보이는 url 설정 (이용자에게 숨기기)
  //     `/movies/${id}`
  //   );
  // };

  // return (
  //   <div>
  //     <MyHead title="Home" />
  //     {movies.map((movie) => (
  //       <Link href={`/movies/${movie.id}`} key={movie.id}>
  //         <img
  //           onClick={() => onClick(movie.id, movie.original_title)}
  //           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //           alt=""
  //         />
  //         <div>{movie.original_title}</div>
  //       </Link>
  //     ))}
  //   </div>
  // );

  return (
    <div>
      <MyHead title="Home" />
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.original_title}/${movie.id}`}
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <div>{movie.original_title}</div>
        </Link>
      ))}
    </div>
  );
}
