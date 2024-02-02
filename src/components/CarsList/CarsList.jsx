// компонент MoviesList, сторінка пошуку кінофільмів за ключовим словом

import css from './CarsList.module.css';
import MoviesItem from '../MoviesItem/MoviesItem';

export default function CarsList({ cars }) {
  return (
    <>
      <div>
        <ul className={css.carslist}>
          {cars.map(car => (
            <MoviesItem
              key={car.id}
              id={car.id}
              image={car.img}
              title={car.model}
              rating={car.rentalPrice}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
