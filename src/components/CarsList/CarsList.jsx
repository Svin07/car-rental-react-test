// компонент MoviesList, сторінка пошуку кінофільмів за ключовим словом

import css from './CarsList.module.css';
import MoviesItem from '../MoviesItem/MoviesItem';

export default function CarsList({
  cars,
  handlySearchfromId,
  addToFavorite,
  deleteFromFavorite,
}) {
  return (
    <>
      <div>
        <ul className={css.carslist}>
          {cars.map(car => (
            <MoviesItem
              key={car.id}
              car={car}
              handlySearchfromId={handlySearchfromId}
              addToFavorite={addToFavorite}
              deleteFromFavorite={deleteFromFavorite}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
