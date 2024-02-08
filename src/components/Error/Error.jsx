import EmptyImg from '../../img/404_12.jpg';
import css from './Error.module.css';

export default function Error({ error, emptyFilter }) {
  return (
    <div>
      {error && (
        <div className={css.errordiv}>
          <p className={css.errortext}> {error} </p>
          <img src={EmptyImg} alt="emptyImage" width="400" />
        </div>
      )}
      {emptyFilter && (
        <div>
          <p className={css.errortext}>No car was found.</p>
          <img src={EmptyImg} alt="emptyImage" width="400" />
        </div>
      )}
    </div>
  );
}
