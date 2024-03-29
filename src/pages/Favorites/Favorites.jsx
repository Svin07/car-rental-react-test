import CarItem from 'components/CarItem/CarItem';
import { getFilteredCars } from '../../helpers/getFilteredCars';
import { useSelector } from 'react-redux';
import {
  selectBrand,
  selectMileageFrom,
  selectMileageTo,
  selectPrice,
} from '../../redux/filters/filterSelectors';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import { EmptyFavorite } from 'components/EmptyFavorite/EmptyFavorite';

import css from './Favorites.module.css';
import Search from 'components/Search/Search';

export default function Favorites() {
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const priceFilter = useSelector(selectPrice);
  const brandFilter = useSelector(selectBrand);
  const favorite = useSelector(selectFavorite);

  const filteredCars = getFilteredCars(
    favorite,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

  return (
    <div className={css.container}>
      <section className={css.section}>
        {favorite.length === 0 ? (
          <EmptyFavorite />
        ) : (
          <div>
            <Search />
            <ul className={css.carslist}>
              {filteredCars.map(car => (
                <CarItem key={car.id} car={car} />
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
