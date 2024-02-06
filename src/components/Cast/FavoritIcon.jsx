import { useState } from 'react';

import css from './FavoritIcon.module.css';
import normal from '../../img/normal.svg';
import active from '../../img/active.svg';

export default function FavoritIcon({
  addToFavorite,
  id,
  deleteFromFavorite,
  favor,
}) {
  const [isFavorite, setIsFavorite] = useState(favor);

  function onClickFavorite() {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavorite(id);
    } else deleteFromFavorite(id);
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
