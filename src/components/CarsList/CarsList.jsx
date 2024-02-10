import css from './CarsList.module.css';
import CarItem from '../CarItem/CarItem';

export default function CarsList({ cars }) {
  return (
    <section className={css.carsGrid}>
      <ul className={css.carslist}>
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </section>
  );
}
