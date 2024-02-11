import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { FcStatistics } from 'react-icons/fc';
import { FcCurrencyExchange } from 'react-icons/fc';
import { FcCustomerSupport } from 'react-icons/fc';
import { IconContext } from 'react-icons';

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
      <section className={css.statistic}>
        <div className={css.statisticItem}>
          <IconContext.Provider
            value={{
              size: '3em',
            }}
          >
            <div>
              <FcStatistics />
            </div>
          </IconContext.Provider>
          <h5 className={css.statisticText}>3560 cars were leased</h5>
        </div>
        <div className={css.statisticItem}>
          <IconContext.Provider
            value={{
              size: '3em',
            }}
          >
            <div>
              <FcCurrencyExchange />
            </div>
          </IconContext.Provider>
          <h5 className={css.statisticText}>Convenient payment</h5>
        </div>
        <div className={css.statisticItem}>
          <IconContext.Provider
            value={{
              size: '3em',
              color: 'white',
            }}
          >
            <div>
              <FcCustomerSupport />
            </div>
          </IconContext.Provider>
          <h5 className={css.statisticText}>Round-the-clock support</h5>
        </div>
      </section>
    </div>
  );
}
