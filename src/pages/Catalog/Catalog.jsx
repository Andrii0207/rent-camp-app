import { Wrapper } from './Catalog.styled';
import Card from 'components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseList } from '../../redux/operations';

export function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertiseList());
  }, [dispatch]);

  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}
