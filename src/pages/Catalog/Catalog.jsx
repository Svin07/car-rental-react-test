/* eslint-disable no-use-before-define */

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import CarsList from '../../components/CarsList/CarsList';
import Search from '../../components/Search/Search';
import Button from 'components/Button/Button';

import css from './Catalog.module.css';

import { getFilteredCars } from '../../helpers/getFilteredCars';
import { clearCarsData } from '../../redux/cars/carsSlice';
import { getAllCars, getAllCarsWithoutPage } from '../../redux/cars/carsAPI';
import {
  selectCars,
  selectCarsFilter,
  selectError,
  selectIsLoading,
} from '../../redux/cars/carsSelectors';
import {
  selectBrand,
  selectMileageFrom,
  selectMileageTo,
  selectOnFilter,
  selectPrice,
} from '../../redux/filters/filterSelectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allCars = useSelector(selectCars);
  const onFilter = useSelector(selectOnFilter);
  const brandFilter = useSelector(selectBrand);
  const allCarsForFilter = useSelector(selectCarsFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const priceFilter = useSelector(selectPrice);
  const [page, setPage] = useState(1);

  const totalPage = 3;

  useEffect(() => {
    const height = 426;
    if (allCars.length > 12) {
      window.scrollBy({
        top: height * 1.3,
        behavior: 'smooth',
      });
    }
  }, [allCars]);

  useEffect(() => {
    dispatch(clearCarsData());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };
  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (onFilter) {
      dispatch(getAllCarsWithoutPage());
    }
  }, [dispatch, onFilter]);

  const filteredCars = getFilteredCars(
    allCarsForFilter,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

  const combinedCars = onFilter ? filteredCars : allCars;
  return (
    <div className={css.container}>
      {isLoading && !error && <Loader />}
      <Search />
      <section className={css.section}>
        {filteredCars.length === 0 && onFilter ? (
          <Error emptyFilter={true} />
        ) : (
          <CarsList cars={combinedCars} />
        )}

        {page < totalPage && (
          <Button paginationPageUpdate={handleLoadMoreClick}>Load more</Button>
        )}
      </section>
    </div>
  );
};

export default Catalog;
