import { useEffect } from 'react';
import css from './MobileMenu.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: underline;

  &.active {
    color: #7a4805;
  }
`;

export default function MobileMenu({ toggleMobilMenu }) {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        toggleMobilMenu();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [toggleMobilMenu]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      toggleMobilMenu();
    }
  };

  return (
    <div className={css.overlay} onClick={onOverlayClickClose}>
      <div className={css.wraper} onClick={toggleMobilMenu}>
        <button className={css.button}>
          <IoMdClose />
        </button>
        <nav className={css.respWraper}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="catalog">Catalog</StyledLink>
          <StyledLink to="favorites">Favorites</StyledLink>
        </nav>
      </div>
    </div>
  );
}
