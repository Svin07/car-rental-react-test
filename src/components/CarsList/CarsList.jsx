import css from './CarsList.module.css';
import CarItem from '../CarItem/CarItem';

export default function CarsList({ cars }) {
  return (
    <>
      <ul className={css.carslist}>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
}
