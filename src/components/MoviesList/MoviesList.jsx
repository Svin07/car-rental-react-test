// компонент MoviesList, сторінка пошуку кінофільмів за ключовим словом

import css from './MoviesList.module.css';
import MoviesItem from '../../components/MoviesItem/MoviesItem';

export default function MoviesList({ movies }) {
  return (
    <>
      <div>
        <ul className={css.movieslist}>
          {movies.map(movie => (
            <MoviesItem
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
