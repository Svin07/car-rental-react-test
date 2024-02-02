import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { getAllCars } from 'API/API/api';
import CarsList from '../../components/CarsList/CarsList';
import css from './Home.module.css';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getAllCars();

        setCars(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    // setCars([]);
  }, []);
  return (
    <>
      <div>{isLoading && <Loader />}</div>
      {error && <h2>{error}</h2>}
      <div className={css.pageBc}>
        <CarsList cars={cars} />
      </div>
    </>
  );
};

export default Catalog;
