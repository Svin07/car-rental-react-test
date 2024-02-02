import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsMoviesCast } from 'API/API/api';
import Loader from '../../components/Loader/Loader';
import css from './Cast.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [moviesObj, setMoviesObj] = useState(null);

  const { id } = useParams();
  const basicUrlForImage = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsMoviesCast(id);
        setMoviesObj(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [id]);

  if (!moviesObj) return;
  const { cast } = moviesObj;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={css.castList}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              className={css.castImg}
              src={
                profile_path ? `${basicUrlForImage}${profile_path}` : defaultImg
              }
              alt={name}
            />
            <h3>{name}</h3>
            <h5>Character: {character}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
