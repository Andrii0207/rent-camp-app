import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertiseList, getAll } from '../../redux/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'components/Card/Card';
import { Modal } from 'components/Modal/Modal';
import { Wrapper } from './CardList.styled';
import Button from 'components/ShowMore/Button';
import { selectAll, selectIsLoading } from '../../redux/selectors';
import Spinner from 'components/Loader/Loader';

export function CardList({ list }) {
  const [isShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const [data, setfirst] = useState([]);

  const dispatch = useDispatch();
  const totalHits = useSelector(selectAll);
  const isLoading = useSelector(selectIsLoading);

  const handleOpenModal = data => {
    setShowModal(true);
    setModalData(data);
  };

  const handleCloseModal = data => {
    setShowModal(false);
    setModalData('');
  };

  const handleLoadMore = () => {
    setPage(() => page + 1);
  };

  console.log('totalHits >', totalHits.length);

  const isShownButtonLoadMore = page < Math.ceil(totalHits.length / 4);
  console.log('isShownButtonLoadMore >>>', isShownButtonLoadMore);

  useEffect(() => {
    // setIsLoadMore(page < Math.ceil(totalHits / 4) ? true : false);
    !isLoadMore &&
      toast.info('You got all advertise', {
        autoClose: 2000,
        theme: 'light',
      });
    dispatch(getAdvertiseList(page));
  }, [dispatch, isLoadMore, page]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  console.log(isLoading);

  return (
    <>
      {isLoading && <Spinner />}
      <Wrapper>
        {list.map((item, index) => (
          <Card key={index} item={item} openModal={handleOpenModal} />
        ))}
        {isShowModal && <Modal closeModal={handleCloseModal} modalData={modalData} />}
      </Wrapper>
      {isShownButtonLoadMore && (
        <Button action={handleLoadMore} page={page}>
          Load more
        </Button>
      )}
    </>
  );
}
