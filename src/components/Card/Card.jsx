import Options from 'components/Options/Options';
import ShowMore from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { WrapperCard } from './Card.styled';
import { Description } from 'components/Options/Description/Description';
import { CardPhoto } from 'CardPhoto/CardPhoto';

export default function Card() {
  return (
    <>
      <WrapperCard>
        <div>
          <TitleCard />
          <Description />
          <Options />
          <ShowMore />
        </div>
        <CardPhoto />
      </WrapperCard>
    </>
  );
}
