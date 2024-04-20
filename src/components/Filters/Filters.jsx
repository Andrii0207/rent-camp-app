import Location from '../../images/icons/location.png';
import { Container, Icon, ImputWrapper, InputLocation, Label } from './Filters.styled';
import { FilterOptions } from './FilterOptions';
import Button from 'components/ShowMore/ShoreMore';

export function Filters() {
  const getFilterData = () => {
    console.log('search-button click');
  };

  return (
    <Container>
      <Label htmlFor="filters">Location</Label>
      <ImputWrapper>
        <InputLocation type="text" id="filters" placeholder="Kyiv, Ukraine" />
        <Icon src={Location} alt="icon location" />
      </ImputWrapper>
      <FilterOptions />

      <Button type="button" action={getFilterData}>
        Search
      </Button>
    </Container>
  );
}
