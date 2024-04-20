import Options from 'components/Options/Options';
import Button from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, Price, PriceWrapper, TitleCommonWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';
import HeartIcon from '../../images/icons/heart.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFavorites } from 'redux/selectors';

import { selectFavorites } from '../../redux/selectors';
import { ReactComponent as Qwe } from '../../images/icons/adults.svg';
import { addToFavorite, deleteFromFavorite } from '../../redux/favoritesSlice';

export default function Card({ data, openModal, arr }) {
  const { description, gallery, price, _id } = data;
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(() => favorites.some(item => item === _id));

  const dispatch = useDispatch();

  const addFavoriteCard = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(_id));
      setIsFavorite(true);
    } else {
      dispatch(deleteFromFavorite(_id));
      setIsFavorite(false);
    }
  };

  console.log('favorites >>', favorites);

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCommonWrapper>
            <TitleCard entity={data} />
            <PriceWrapper>
              <Price>€ {price.toFixed(2).toString().replace('.', ',')}</Price>
              <button type="button" onClick={addFavoriteCard}>
                <img src={HeartIcon} alt="favorite heart icon" />
              </button>
              <span style={{ color: 'red' }}>
                <Qwe />
              </span>
            </PriceWrapper>
          </TitleCommonWrapper>
          <Description text={description} />
          <Options data={data} />
          <Button data={data} action={openModal}>
            Show More
          </Button>
        </InfoCardWrapper>
        <CardPhoto gallery={gallery} />
      </WrapperCard>
    </>
  );
}
