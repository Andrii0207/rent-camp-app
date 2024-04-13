import Options from 'components/Options/Options';
import ShowMore from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';

export default function Card({ entity }) {
  const { name, price, rating, location, reviews } = entity;
  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCard title={name} price={price} rating={rating} location={location} reviews={reviews} />
          <Description />
          <Options />
          <ShowMore />
        </InfoCardWrapper>
        <CardPhoto />
      </WrapperCard>
    </>
  );
}
