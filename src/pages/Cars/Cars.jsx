import { useEffect, useState } from 'react';

import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/CarsList/CarsList';
import { getMoviesBySearch } from 'API/API/api';
import Search from '../../components/Search/Search';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesBySearch(query);
        const { results } = data;

        setMovies(results);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
    setMovies([]);
  }, [query]);

  const handlySetSearchQuery = value => {
    setSearchParams({ query: value });
  };
  return (
    <>
      <div>
        <Search handlySetSearchQuery={handlySetSearchQuery} />
      </div>
      <div>{isLoading && <Loader />}</div>
      {error && <h2>{error}</h2>}
      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  );
}
