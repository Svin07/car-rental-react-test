import { useEffect, useState } from 'react';
import css from './Search.module.css';

export default function Search({ handlySetSearchQuery }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modelCar = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const [query, setQuery] = useState('');
  const [value, setValue] = useState('null');

  const option = modelCar.map((model, index) => {
    return (
      <option key={index} value={index}>
        {model}
      </option>
    );
  });

  useEffect(() => {
    const newModel = modelCar[value];
    setQuery(newModel);
  }, [value, modelCar]);

  const getSelect = e => {
    setValue(e.target.value);
  };

  // const handlyChange = ({ target: { value } }) => {
  //   setQuery(value);
  // };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(modelCar[value]);

    handlySetSearchQuery(query);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.searchform}>
        <label className={css.labelforselect} htmlFor="car-select">
          Car brand
          <select name="Car brand" value={value} onChange={getSelect}>
            <option value="null" disabled>
              Enter the text
            </option>
            {option}
          </select>
        </label>

        <label className={css.labelforselect} htmlFor="">
          Price/ 1 hour
          <select name="Price/ 1 hour"></select>
        </label>

        <label>
          Сar mileage / km
          <div className="labelforinput">
            <input
              className={css.searchforminput}
              type="text"
              // onChange={handlyChange}
              placeholder="From"
              // value={query}
            />
            <input
              className={css.searchforminput}
              type="text"
              // onChange={handlyChange}
              placeholder="To"
              // value={query}
            />
          </div>
        </label>

        <button type="submit" className={css.searchformbutton}>
          Search
        </button>
      </form>
    </div>
  );
}
