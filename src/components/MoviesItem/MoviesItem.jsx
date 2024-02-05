import { Link } from 'react-router-dom';
import css from './MoviesItem.module.css';
import { useLocation } from 'react-router-dom';
import FavoritIcon from 'components/Cast/FavoritIcon';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MoviesItem({ car, handlySearchfromId, addToFavorite }) {
  const {
    img,
    id,
    year,
    make,
    model,
    type,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
  } = car;

  const newAdress = address.split(',');

  const location = useLocation();

  const onClickBtn = e => {
    handlySearchfromId(id);
  };

  return (
    <li className={css.movieGalleryItem}>
      <FavoritIcon addToFavorite={addToFavorite} id={id} />
      <div className={css.imgWraper}>
        <img
          src={img ? `${img}` : defaultImg}
          alt={make}
          className={css.movieGalleryItemImage}
        />
      </div>
      <div className={css.titlewraper}>
        <h2 className={css.itemtitle}>
          {make} <span className={css.titlespan}>{model}</span>, {year}
        </h2>
        <h3 className={css.rentalprice}>{rentalPrice}</h3>
      </div>

      <p className={css.text}>
        {newAdress[1]} |{newAdress[2]} | {rentalCompany} | {type} | {id} |{' '}
        {accessories[0]}
      </p>
      <Link className={css.linkDetails} onClick={onClickBtn} state={location}>
        Learn more
      </Link>
    </li>
  );
}
