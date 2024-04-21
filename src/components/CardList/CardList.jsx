import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAdvertiseList } from '../../redux/operations';
import Card from 'components/Card/Card';
import { Modal } from 'components/Modal/Modal';
import { Container } from './CardList.styled';

export function CardList({ list }) {
  const [isShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const dispatch = useDispatch();

  const handleOpenModal = data => {
    setShowModal(true);
    setModalData(data);
  };

  const handleCloseModal = data => {
    setShowModal(false);
    setModalData('');
  };

  useEffect(() => {
    dispatch(getAdvertiseList());
  }, [dispatch]);

  return (
    <Container>
      {list.map((item, index) => (
        <Card key={index} item={item} openModal={handleOpenModal} />
      ))}
      {isShowModal && <Modal closeModal={handleCloseModal} modalData={modalData} />}
    </Container>
  );
}
