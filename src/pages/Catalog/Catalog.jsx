import { CardListWrapper, Container, LoadMoreWrapper, MainWrapper, Wrapper } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'components/Loader/Loader';
import { selectAdverts, selectAll, selectIsLoading } from '../../redux/selectors';
import { getAdvertiseList, getAll } from '../../redux/operations';
import { Filters } from 'components/Filters/Filters';
import { CardList } from 'components/CardList/CardList';
import Button from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export function Catalog() {
  const [isShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');
  const [page, setPage] = useState(1);

  const adverts = useSelector(selectAdverts);

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

  const isShownButtonLoadMore = page < Math.ceil(totalHits.length / 4);
  const lastPage = Math.ceil(totalHits.length / page);

  useEffect(() => {
    page === lastPage &&
      toast.info('You got all advertise', {
        autoClose: 2000,
        theme: 'light',
      });
    dispatch(getAdvertiseList(page));
  }, [dispatch, lastPage, page]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <MainWrapper>
        {isLoading && <Spinner />}
        <Container>
          <Filters />
          <CardListWrapper>
            <Wrapper>
              <CardList list={adverts} handleOpenModal={handleOpenModal} />
            </Wrapper>
            {isShownButtonLoadMore && (
              <LoadMoreWrapper>
                <Button action={handleLoadMore} isLoadMore={true}>
                  Load more
                </Button>
              </LoadMoreWrapper>
            )}
          </CardListWrapper>
        </Container>

        {isShowModal && <Modal closeModal={handleCloseModal} modalData={modalData} />}
      </MainWrapper>
    </>
  );
}
