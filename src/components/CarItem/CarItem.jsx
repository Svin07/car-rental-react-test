import { Link } from 'react-router-dom';
import css from './CarItem.module.css';

import FavoritIcon from 'components/FavoriteIcon/FavoritIcon';
import { useState } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function CarItem({ car }) {
  const [modalOpen, setModalOpen] = useState(false);
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
  const body = document.body;

  const newAdress = address.split(',');

  const toggleModal = () => {
    //вмикаємо-вимикаємо модалку(корзину)
    setModalOpen(!modalOpen);
    //вмикаємо-вимикаємо скролл головної сторінки на момент відкриття модлки(корзини)
    !modalOpen
      ? body.classList.add('disable-scroll')
      : body.classList.remove('disable-scroll');
  };

  return (
    <>
      <li className={css.movieGalleryItem}>
        <FavoritIcon dataCar={car} />
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
        <Link className={css.linkDetails} onClick={toggleModal}>
          Learn more
        </Link>
      </li>
      {modalOpen && <ModalWindow car={car} toggleModal={toggleModal} />}
    </>
  );
}
