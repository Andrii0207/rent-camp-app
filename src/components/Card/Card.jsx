import Options from 'components/Options/Options';
import Button from 'components/ShowMore/Button';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, Price, PriceWrapper, SpanIcon, TitleCommonWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/selectors';
import { ReactComponent as Heart } from '../../images/icons/heart.svg';
import { addToFavorite, deleteFromFavorite } from '../../redux/favoritesSlice';

export default function Card({ item, openModal }) {
  const { description, gallery, price, _id } = item;
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(() => favorites.some(item => item._id === _id));

  const dispatch = useDispatch();

  const addFavoriteCard = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(item));
      setIsFavorite(true);
    } else {
      dispatch(deleteFromFavorite(item));
      setIsFavorite(false);
    }
  };

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCommonWrapper>
            <TitleCard entity={item} />
            <PriceWrapper>
              <Price>€ {price.toFixed(2)}</Price>
              <button type="button" onClick={addFavoriteCard}>
                <SpanIcon
                  style={{ stroke: isFavorite ? '#D84343' : 'black', fill: isFavorite ? '#D84343' : 'transparent' }}
                >
                  <Heart />
                </SpanIcon>
              </button>
            </PriceWrapper>
          </TitleCommonWrapper>
          <Description text={description} />
          <Options data={item} />
          <Button data={item} action={openModal}>
            Show More
          </Button>
        </InfoCardWrapper>
        <CardPhoto gallery={gallery} />
      </WrapperCard>
    </>
  );
}
