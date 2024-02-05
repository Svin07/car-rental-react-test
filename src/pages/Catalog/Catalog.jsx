import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import {
  getAllCars,
  getCarById,
  getCarsBySearch,
  postInFavorites,
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
  const [page, setPage] = useState(1);
  const [carById, setCarById] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  const body = document.body;
  const totalPage = 3;

  useEffect(() => {
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

    fetchCars();
  }, [page]);

  const paginationPageUpdate = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handlySetSearchQuery = async query => {
    if (!query) {
      console.log('Неможливо знайти значення!');
      return;
    }
    try {
      setIsLoading(true);
      const data = await getCarsBySearch(query);
      setCars(data);
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
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
    try {
      setIsLoading(true);
      const obj = { favoritesId: id };
      await postInFavorites(obj);
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFromFavorite = async id => {
    try {
      setIsLoading(true);
      const obj = { id: id };
      await deleteFromFavorite(obj);
    } catch (error) {
      setError(error.response.data.status_message);
    } finally {
      setIsLoading(false);
    }
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
