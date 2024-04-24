import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderList,
  HeaderNav,
  IconWrapper,
  MenuItem,
  SpanTitle,
  StyledLink,
  Title,
} from './SharedLayout.styled';
import { ReactComponent as LogoIcon } from '../../images/icons/logo.svg';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <HeaderNav>
          <Title href="./">
            Camp <SpanTitle>Rent</SpanTitle>
            <IconWrapper>
              <LogoIcon />
            </IconWrapper>
          </Title>
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
    </Container>
  );
}
