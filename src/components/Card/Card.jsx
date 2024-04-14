import Options from 'components/Options/Options';
import ShowMore from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';

export default function Card({ data, openModal }) {
  const { description, gallery, id } = data;
  console.log('Card data >>', data);

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCard entity={data} />
          <Description text={description} />
          <Options camp={data} />
          <ShowMore openModal={openModal} id={id} />
        </InfoCardWrapper>
        <CardPhoto gallery={gallery} />
      </WrapperCard>
    </>
  );
}
