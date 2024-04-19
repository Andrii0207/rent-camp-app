import styled from 'styled-components';
import Location from '../../images/icons/location.png';
import { Container, Icon, ImputWrapper, InputLocation, Label, StyledButton } from './Filters.styled';
import { FilterOptions } from './FilterOptions';

export function Filters() {
  return (
    <Container>
      <Label htmlFor="filters">Location</Label>
      <ImputWrapper>
        <InputLocation type="text" id="filters" placeholder="Kyiv, Ukraine" />
        <Icon src={Location} alt="icon location" />
      </ImputWrapper>
      <FilterOptions />

      <StyledButton type="button">Search</StyledButton>
    </Container>
  );
}
