import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
