import Options from 'components/Options/Options';
import ShowMore from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';
import { NavLink, Outlet } from 'react-router-dom';

export default function Card({ data, openModal }) {
  const { description, gallery } = data;

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCard entity={data} />
          <Description text={description} />
          <Options campInfo={data} />
          <ShowMore data={data} openModal={openModal} />
        </InfoCardWrapper>
        <CardPhoto gallery={gallery} />
      </WrapperCard>
    </>
  );
}
