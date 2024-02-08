/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { modelData, priceData } from '../../constants/dataConstants';

import { useDispatch, useSelector } from 'react-redux';

import { setValueFilter } from '../../redux/filters/filterSlice';
import { selectBrand, selectPrice } from '../../redux/filters/filterSelectors';

import css from './Search.module.css';

export default function Search() {
  const brandFilter = useSelector(selectBrand);
  const priceFilter = useSelector(selectPrice);

  const [selectedBrand, setSelectedBrand] = useState(
    brandFilter ? brandFilter : 'Enter the text'
  );
  const [isShownSelectBrand, setShownSelectBrand] = useState(false);
  const [isShownSelectPrice, setShownSelectPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(
    priceFilter ? priceFilter : 'To $'
  );
  const [selectedFromMileage, setSelectedFromMileage] = useState('');
  const [selectedToMileage, setSelectedToMileage] = useState('');
  const dispatch = useDispatch();

  const handleShownSelectedBrand = e => {
    e.preventDefault();
    setShownSelectBrand(prev => !prev);
  };

  const handleShownSelectedPrice = e => {
    e.preventDefault();
    setShownSelectPrice(prev => !prev);
  };
  const changeBrand = brand => {
    setSelectedBrand(brand);
    setShownSelectBrand(false);
  };
  const changePrice = price => {
    setSelectedPrice(price + ' $');
    setShownSelectPrice(false);
  };

  const handleInputChangeFrom = e => {
    const { value } = e.target;
    setSelectedFromMileage(value.replace(/,/g, ''));
  };

  const handleInputChangeTo = e => {
    const { value } = e.target;
    setSelectedToMileage(value.replace(/,/g, ''));
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
    if (
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      !selectedFromMileage &&
      !selectedToMileage
    ) {
      return;
    }
    const data = {
      brand: selectedBrand === 'Enter the text' ? '' : selectedBrand,
      price: selectedPrice === 'To $' ? '' : `$${parseInt(selectedPrice, 10)}`,
      mileageFrom: selectedFromMileage.trim(),
      mileageTo: selectedToMileage.trim(),
      onFilter: true,
    };
    dispatch(setValueFilter(data));
  };

  const handleFilterClear = e => {
    e.preventDefault();
    const data = {
      brand: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
      onFilter: false,
    };

    dispatch(setValueFilter(data));
    setSelectedBrand('Enter the text');
    setSelectedPrice('To $');
    setSelectedFromMileage('');
    setSelectedToMileage('');
  };

  return (
    <form className={css.searchform}>
      <div>
        <label className={css.filterLabel}>Car brand</label>
        <div style={{ position: 'relative' }}>
          <select className={css.select} onClick={handleShownSelectedBrand}>
            {selectedBrand}
          </select>
          {isShownSelectBrand && (
            <div className={css.dropedown}>
              <ul className={css.dropdownlist}>
                {modelData.map(el => (
                  <li
                    className={css.dropdownitem}
                    key={el}
                    onClick={() => changeBrand(el)}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <label className={css.filterLabel}>Price/ 1 hour</label>
        <div style={{ position: 'relative' }}>
          <select className={css.select} onClick={handleShownSelectedPrice}>
            {selectedPrice}
          </select>
          {isShownSelectPrice && (
            <div className={css.dropdownprise}>
              <ul className={css.dropdownlist}>
                {priceData.map(el => (
                  <li
                    className={css.dropdownitem}
                    key={el}
                    onClick={() => changePrice(el)}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <label className={css.filterLabel}>Сar mileage / km</label>
        <div style={{ display: 'flex' }}>
          <div className={css.inputwrap}>
            <input
              className={css.inputfrom}
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeFrom}
              value={selectedFromMileage}
              id="mileageFrom"
            />
            <label className={css.label} htmlFor="mileageFrom">
              From
            </label>
          </div>
          <div className={css.inputwrap}>
            <input
              className={css.inputto}
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeTo}
              value={selectedToMileage}
              id="mileageTo"
            />
            <label className={css.labelinput} htmlFor="mileageTo">
              To
            </label>
          </div>
        </div>
      </div>
      <button className={css.searchformbutton} onClick={handleFilterSubmit}>
        Search
      </button>
      <button className={css.searchformbutton} onClick={handleFilterClear}>
        Reset
      </button>
    </form>
  );
}
