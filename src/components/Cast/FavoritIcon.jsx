import { useState } from 'react';

import css from './FavoritIcon.module.css';
import normal from '../../img/normal.svg';
import active from '../../img/active.svg';
import { getFavoritesBySearch } from 'API/API/api';

export default function FavoritIcon({ addToFavorite, id, deleteFromFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // useEffect(() => {
  //   console.log(isFavorite);
  // }, [isFavorite]);

  async function onClickFavorite() {
    try {
      const data = await getFavoritesBySearch(id);
      console.log(data);

      if (data.length === 0 || !data) {
        await addToFavorite(id);
        setIsFavorite(!isFavorite);
        return;
      }
      const { favoritesId } = data[0];
      await deleteFromFavorite(favoritesId);
    } catch (error) {
      console.log(error.response.data.status_message);
    }
  }

  return (
    <div>
      <img
        onClick={onClickFavorite}
        src={isFavorite ? active : normal}
        alt="Like"
        className={css.favoriteimg}
      />
    </div>
  );
}
// css.favoriteimg"absolute top-8 left-8"
