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
      <div className={css.dropDown}>
        <p className={css.dropDownTitle}>Car brand</p>
        <button
          onClick={handleShownSelectedBrand}
          className={css.dropDownButton}
        >
          {selectedBrand}
        </button>
        <ul
          className={
            isShownSelectBrand ? css.dropDownListVisiable : css.dropDownList
          }
        >
          {modelData.map(model => (
            <li
              onClick={() => changeBrand(model)}
              className={css.dropDownListItem}
              key={model}
            >
              {model}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.dropDown}>
        <p className={css.dropDownTitle}>Price/ 1 hour</p>
        <button
          onClick={handleShownSelectedPrice}
          className={css.dropDownButtonPrice}
        >
          {selectedPrice}
        </button>
        <ul
          className={
            isShownSelectPrice
              ? css.dropDownListPriceVisiable
              : css.dropDownListPrice
          }
        >
          {priceData.map(price => (
            <li
              onClick={() => changePrice(price)}
              className={css.dropDownListItem}
              key={price}
            >
              {price}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.inputBlock}>
        <label className={css.labelInputTop}>Сar mileage / km</label>
        <div style={{ display: 'flex' }}>
          <div className={css.inputWrap}>
            <input
              className={css.inputFrom}
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeFrom}
              value={selectedFromMileage}
              id="mileageFrom"
            />
            <label className={css.labelInput} htmlFor="mileageFrom">
              From
            </label>
          </div>
          <div className={css.inputWrap}>
            <input
              className={css.inputTo}
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeTo}
              value={selectedToMileage}
              id="mileageTo"
            />
            <label className={css.labelInput} htmlFor="mileageTo">
              To
            </label>
          </div>
        </div>
      </div>
      <button type="button" className={css.button} onClick={handleFilterSubmit}>
        Search
      </button>
      <button type="button" className={css.button} onClick={handleFilterClear}>
        Reset
      </button>
    </form>
  );
}

/* <input
          type="text"
          value=""
          name="select-model"
          className={css.dropDownInputHidden}
        /> */
