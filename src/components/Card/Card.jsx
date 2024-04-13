import Options from 'components/Options/Options';
import ShowMore from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';

export default function Card() {
  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCard />
          <Description />
          <Options />
          <ShowMore />
        </InfoCardWrapper>
        <CardPhoto />
      </WrapperCard>
    </>
  );
}
