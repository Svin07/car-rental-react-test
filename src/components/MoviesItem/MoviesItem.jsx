import { Link } from 'react-router-dom';
import css from './MoviesItem.module.css';
import { useLocation } from 'react-router-dom';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MoviesItem({ image, title, rating, id }) {
  const location = useLocation();

  return (
    <li className={css.movieGalleryItem}>
      <div className={css.imgWraper}>
        <img
          src={image ? `${image}` : defaultImg}
          alt={title}
          className={css.movieGalleryItemImage}
        />
      </div>
      <h2>{title}</h2>
      <h3>Рейтинг ☆ {rating}</h3>
      <Link className={css.linkDetails} to={`/catalog/${id}`} state={location}>
        Details
      </Link>
    </li>
  );
}
// https://image.tmdb.org/t/p/w500/T5xXoFqyc9jNXZIbH4Sw0jwWjw.jpg
