import 'react-toastify/dist/ReactToastify.css';
import Card from 'components/Card/Card';
import { Wrapper } from './CardList.styled';

export function CardList({ list, handleOpenModal }) {
  return (
    <>
      <Wrapper>
        {list.map(item => (
          <Card key={item._id} item={item} openModal={handleOpenModal} />
        ))}
      </Wrapper>
    </>
  );
}
