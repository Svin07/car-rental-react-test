import { Link } from 'react-router-dom';
import css from './EmptyFavorite.module.css';

export const EmptyFavorite = () => {
  return (
    <div className={css.container}>
      <p className={css.emptytext}>
        Sorry, nothing found. Return to the{' '}
        <Link className={css.link} to="/catalog">
          Catalog
        </Link>
      </p>
    </div>
  );
};
