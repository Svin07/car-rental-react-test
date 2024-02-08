import css from './FavoritIcon.module.css';
import normal from '../../img/normal.svg';
import active from '../../img/active.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/favoriteSlice';

export default function FavoritIcon({ dataCar }) {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);

  const handleFavorite = dataCar => {
    if (!favorite.some(car => car.id === dataCar.id)) {
      console.log(dataCar);
      dispatch(addToFavorite(dataCar));
    } else {
      dispatch(removeFromFavorite(dataCar));
    }
  };

  return (
    <div>
      <img
        onClick={() => handleFavorite(dataCar)}
        aria-label="Add to Favorites"
        src={favorite.some(car => car.id === dataCar.id) ? active : normal}
        alt="Like"
        className={css.favoriteimg}
      />
    </div>
  );
}
