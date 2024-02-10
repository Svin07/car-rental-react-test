import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <section className={css.hero}>
        <h1 className={css.homeTitle}>
          Welcome to <span className={css.logo}>Car rental</span> Ukraine
        </h1>
        <h3 className={css.subHomeTitle}>
          To choose a car, go to the{' '}
          <Link className={css.link} to="/catalog">
            catalog
          </Link>
        </h3>
      </section>
    </div>
  );
}
