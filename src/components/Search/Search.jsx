import { useState } from 'react';
import css from './Search.module.css';

export default function Search({ handlySetSearchQuery }) {
  const [query, setQuery] = useState('');

  const handlyChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    handlySetSearchQuery(query);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.searchform}>
        <button type="submit" className={css.searchformbutton}>
          Search
        </button>

        <input
          className={css.searchforminput}
          type="text"
          onChange={handlyChange}
          placeholder="Search movies"
          value={query}
        />
      </form>
    </div>
  );
}
