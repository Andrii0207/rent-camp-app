import { Container, ImputWrapper, InputLocation, Label, SpanIcon } from './Filters.styled';
import { FilterOptions } from './FilterOptions';
import Button from 'components/Button/Button';
import { ReactComponent as LocationIcon } from '../../images/icons/location.svg';

export function Filters() {
  const getFilterData = () => {
    console.log('search-button click');
  };

  return (
    <Container>
      <Label htmlFor="filters">Location</Label>
      <ImputWrapper>
        <InputLocation type="text" id="filters" placeholder="Kyiv, Ukraine" />
        <SpanIcon>
          <LocationIcon width="18" height="20" />
        </SpanIcon>
      </ImputWrapper>
      <FilterOptions />

      <Button type="button" action={getFilterData} isLoadMore={false}>
        Search
      </Button>
    </Container>
  );
}
