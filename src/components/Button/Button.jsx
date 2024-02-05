import css from './Button.module.css';

export default function Button({ paginationPageUpdate }) {
  return (
    <button onClick={paginationPageUpdate} type="button" className={css.Button}>
      Load more
    </button>
  );
}
