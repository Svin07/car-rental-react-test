import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

import css from './Header.module.css';
import styled from 'styled-components';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { ReactComponent as Burger } from '../../img/menu.svg';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: underline;

  &.active {
    color: #7a4805;
  }
`;

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleMobilMenu = () => {
    setShowModal(!showModal);
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <span className={css.logo}>Car rental</span>
      </Link>
      <div className={css.visionWraper}>
        <nav className={css.respWraper}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="catalog">Catalog</StyledLink>
          <StyledLink to="favorites">Favorites</StyledLink>
        </nav>
      </div>
      <div className={css.visionMobileMenu}>
        <button className={css.burgerButton} onClick={toggleMobilMenu}>
          <Burger />
        </button>
      </div>
      {showModal && <MobileMenu toggleMobilMenu={toggleMobilMenu} />}
    </header>
  );
}
