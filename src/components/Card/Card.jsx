import Options from 'components/Options/Options';
import Button from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, Price, PriceWrapper, TitleCommonWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';
import HeartIcon from '../../images/icons/heart.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Card({ data, openModal, arr }) {
  const { description, gallery, price, _id } = data;
  const [favorite, setFavorite] = useState([]);

  const dispatch = useDispatch();

  const addFavoriteCard = id => {
    console.log('addFavoriteCard >>', arr);
    const filter = arr.map(item => item).filter(item => item._id === id);
    setFavorite(filter);
    if (favorite) {
      console.log('favorite >>>', favorite);
    }
    // dispatch(addFavoriteCard(favorite));
  };

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCommonWrapper>
            <TitleCard entity={data} />
            <PriceWrapper>
              <Price>€ {price.toFixed(2).toString().replace('.', ',')}</Price>
              <button type="button" onClick={() => addFavoriteCard(_id)}>
                <img src={HeartIcon} alt="favorite heart icon" />
              </button>
            </PriceWrapper>
          </TitleCommonWrapper>
          <Description text={description} />
          <Options data={data} />
          <Button data={data} openModal={openModal} />
        </InfoCardWrapper>
        <CardPhoto gallery={gallery} />
      </WrapperCard>
    </>
  );
}
