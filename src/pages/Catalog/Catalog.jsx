import { Container, MainWrapper, Wrapper } from './Catalog.styled';
import { useSelector } from 'react-redux';
import { selectAdverts, selectAll } from '../../redux/selectors';
import { Filters } from 'components/Filters/Filters';
import { CardList } from 'components/CardList/CardList';
import Button from 'components/ShowMore/Button';
import { useState } from 'react';

export function Catalog() {
  // const [page, setPage] = useState(1);

  const adverts = useSelector(selectAdverts);
  // const all = useSelector(selectAll);

  // console.log('Catalog all', all);

  // const handleLoadMore = () => {
  //   console.log('load more click', page);
  //   setPage(() => page + 1);
  // };

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
