import Loader from 'components/Loader/Loader';
import css from './ModalWindow.module.css';

export default function ModalWindow({ car, togleModal, isLoading, error }) {
  const {
    img,
    id,
    year,
    make,
    model,
    type,
    rentalPrice,
    address,
    description,
    rentalCompany,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    mileage,
    rentalConditions,
  } = car;

  const newAdress = address.split(',');

  const rentalConditionsArr = rentalConditions.split('\n');
  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modalwindow}>
          <button
            type="button"
            onClick={togleModal}
            className={css.modalclosebtn}
          >
            <svg width="8" height="8">
              <img src="/public/x.svg" alt="" />
            </svg>
          </button>
          <div>{isLoading && <Loader />}</div>
          {error && <h2>{error}</h2>}
          <div className={css.prodactcard}>
            <div className={css.imgWraper}>
              <img src={img} alt={make} className={css.movieGalleryItemImage} />
            </div>
            <div className={css.titlewraper}>
              <h3 className={css.itemtitle}>
                {make} <span className={css.titlespan}>{model}</span>, {year}
              </h3>
            </div>
            <p className={css.text}>
              {newAdress[1]} |{newAdress[2]} | id:{id} | Year:{year} | Type:
              {type} <br></br> Fuel Consumption:{fuelConsumption} | Engine Size:
              {engineSize}
            </p>
            <h3 className={css.description}>{description}</h3>

            <h4 className={css.accessories}>
              Accessories and functionalities:
            </h4>
            <p className={css.text}>
              {accessories[0]} | {accessories[1]} | {accessories[2]}
            </p>
            <p className={css.text}>
              {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
            </p>
            <ul className={css.accessories}>Rental Conditions:</ul>
            <li className={css.rentalprice}>{rentalConditionsArr[0]}</li>
            <li className={css.rentalprice}>{rentalConditionsArr[1]}</li>
            <li className={css.rentalprice}>{rentalConditionsArr[2]}</li>
            <li className={css.rentalprice}>
              Mileage:
              <span className={css.titlespan}>{mileage}</span>
            </li>
            <li className={css.rentalprice}>
              Price:
              <span className={css.titlespan}>{rentalPrice}</span>
            </li>
            <button type="button" className={css.linkDetails}>
              <a class="link mail" href="tel:+380730000000">
                Rental car
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
