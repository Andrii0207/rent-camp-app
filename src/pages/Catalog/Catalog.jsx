import { Wrapper } from './Catalog.styled';
import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseList } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';
import { Modal } from 'components/Modal/Modal';

export function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  console.log('adverts', adverts);

  const [isShowModal, setShowModal] = useState(false);
  const [modaImg, setModalImg] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImg('');
  };

  useEffect(() => {
    dispatch(getAdvertiseList());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        {adverts.map(item => {
          const { id } = item;
          return <Card key={id} data={item} openModal={handleOpenModal} />;
        })}
      </Wrapper>
      {isShowModal && <Modal closeModal={handleCloseModal} />}
    </>
  );
}
