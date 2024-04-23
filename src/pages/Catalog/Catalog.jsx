import { Container, MainWrapper, Wrapper } from './Catalog.styled';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { Filters } from 'components/Filters/Filters';
import { CardList } from 'components/CardList/CardList';

export function Catalog() {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <MainWrapper>
        <Container>
          <Filters />
          <Wrapper>
            <CardList list={adverts} />
          </Wrapper>
        </Container>
        {/* <Button action={handleLoadMore}>Load more</Button> */}
      </MainWrapper>
    </>
  );
}
