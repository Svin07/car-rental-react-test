export default function Favorites() {
  return (
    <>
      <div>
        <h1>Сторінка Улюблених</h1>
        <ul className="{css.movieslist}">
          {/* {movies.map(movie => (
            <MoviesItem
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))} */}
        </ul>
      </div>
    </>
  );
}
