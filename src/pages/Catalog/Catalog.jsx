import { Container, Wrapper } from './Catalog.styled';
import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseList } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';
import { Modal } from 'components/Modal/Modal';
import { Filters } from 'components/Filters/Filters';

export function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  console.log('adverts', adverts);

  const [isShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleOpenModal = data => {
    console.log('openModal >>', data);
    setShowModal(true);
    setModalData(data);
  };

  const handleCloseModal = data => {
    console.log('handleCloseModal >>', data);
    setShowModal(false);
    setModalData('');
  };

  useEffect(() => {
    dispatch(getAdvertiseList());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filters />
        <Wrapper>
          {adverts.map((item, index) => (
            <Card key={index} item={item} openModal={handleOpenModal} arr={adverts} />
          ))}
        </Wrapper>
        {isShowModal && <Modal closeModal={handleCloseModal} modalData={modalData} />}
      </Container>
    </>
  );
}
