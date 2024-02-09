import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: underline;

  &.active {
    color: #7a4805;
  }
`;

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/">
        <h2>*GREAT LOGO*</h2>
      </Link>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="catalog">Catalog</StyledLink>
      <StyledLink to="favorites">Favorites</StyledLink>
    </header>
  );
}
