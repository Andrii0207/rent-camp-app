import { Wrapper } from './Catalog.styled';
import Card from 'components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseList } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';

export function Catalog() {
  const dispatch = useDispatch();

  const adverts = useSelector(selectAdverts);

  console.log('adverts', adverts);

  useEffect(() => {
    dispatch(getAdvertiseList());
  }, [dispatch]);

  return (
    <Wrapper>
      {adverts.map((item, index) => (
        <Card key={index} entity={item} />
      ))}
    </Wrapper>
  );
}
