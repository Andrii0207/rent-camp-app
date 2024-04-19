import { Outlet } from 'react-router-dom';
import { Header, HeaderList, HeaderNav, MenuItem, StyledLink } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <div>
      <Header>
        <HeaderNav>
          <HeaderList>
            <MenuItem>
              <StyledLink to="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </MenuItem>
          </HeaderList>
        </HeaderNav>
      </Header>
      <Outlet />
    </div>
  );
}
