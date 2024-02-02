import { getDetailsMoviesReviews } from 'API/API/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [moviesObj, setMoviesObj] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsMoviesReviews(id);
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

  const { results } = moviesObj;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}

      {results.length < 1 ? (
        <h3>No reviews found</h3>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.author}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
