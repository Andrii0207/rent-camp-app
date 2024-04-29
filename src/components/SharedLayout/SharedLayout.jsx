import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  HeaderList,
  HeaderNav,
  IconWrapper,
  LogoLink,
  MenuItem,
  SpanTitle,
  StyledLink,
} from './SharedLayout.styled';
import { ReactComponent as LogoIcon } from '../../images/icons/logo.svg';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <HeaderNav>
          <LogoLink href="./">
            Camp <SpanTitle>Rent</SpanTitle>
            <IconWrapper>
              <LogoIcon />
            </IconWrapper>
          </LogoLink>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
