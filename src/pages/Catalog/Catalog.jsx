import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import {
  deleteInFavorites,
  getAllCars,
  getCarById,
  getCarsBySearch,
  putInFavorites,
} from 'API/API/api';
import CarsList from '../../components/CarsList/CarsList';
import Search from '../../components/Search/Search';
import Button from 'components/Button/Button';
import css from './Home.module.css';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cars, setCars] = useState([]);
  const [carById, setCarById] = useState({});
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const body = document.body;
  const totalPage = 3;

  const fetchCars = async () => {
    try {
      setIsLoading(true);
      const data = await getAllCars(page);

      setCars(prevCars => [...prevCars, ...data]);
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const paginationPageUpdate = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlySetSearchQuery = async query => {
    const newCars = await getCarsBySearch(query);

    setCars(prevCars => newCars);
  };

  const toggleModal = () => {
    //вмикаємо-вимикаємо модалку(корзину)
    setModalOpen(!modalOpen);
    //вмикаємо-вимикаємо скролл головної сторінки на момент відкриття модлки(корзини)
    !modalOpen
      ? body.classList.add('disable-scroll')
      : body.classList.remove('disable-scroll');
  };

  const handlySearchfromId = async id => {
    if (!id) {
      console.log('Неможливо знайти значення!');
      return;
    }
    try {
      setIsLoading(true);
      const data = await getCarById(id);
      setCarById(data[0]);
      toggleModal();
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorite = async id => {
    const obj = { isFavorite: true };
    await putInFavorites(id, obj);

    cars.forEach(car => {
      if (car.id === id) {
        car.isFavorite = true;
      }
    });
    setCars(prevCars => cars);
  };

  const deleteFromFavorite = async id => {
    const obj = { isFavorite: false };
    await deleteInFavorites(obj);

    cars.forEach(car => {
      if (car.id === id) {
        car.isFavorite = false;
      }
    });

    setCars(prevCars => cars);
  };

  return (
    <>
      {modalOpen && (
        <ModalWindow
          car={carById}
          togleModal={toggleModal}
          isLoading={isLoading}
          error={error}
        />
      )}
      <Search handlySetSearchQuery={handlySetSearchQuery} />
      <div>{isLoading && <Loader />}</div>
      {error && <h2>{error}</h2>}
      <div className={css.pageBc}>
        <CarsList
          addToFavorite={addToFavorite}
          deleteFromFavorite={deleteFromFavorite}
          handlySearchfromId={handlySearchfromId}
          cars={cars}
        />
      </div>
      {page < totalPage && (
        <Button paginationPageUpdate={paginationPageUpdate} />
      )}
    </>
  );
};

export default Catalog;
