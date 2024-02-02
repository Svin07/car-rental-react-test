import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

export default function Header() {
  return (
    <header className={css.header}>
      <Link to="/">
        <h2>*GREAT LOGO*</h2>
      </Link>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </header>
  );
}
