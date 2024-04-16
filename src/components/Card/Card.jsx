import Options from 'components/Options/Options';
import Button from 'components/ShowMore/ShoreMore';
import TitleCard from 'components/TitleCard/TitleCard';
import { InfoCardWrapper, Price, PriceWrapper, TitleCommonWrapper, WrapperCard } from './Card.styled';
import { Description } from 'components/Description/Description';
import { CardPhoto } from 'components/CardPhoto/CardPhoto';
import HeartIcon from '../../images/icons/heart.png';

export default function Card({ data, openModal }) {
  const { description, gallery, price } = data;

  return (
    <>
      <WrapperCard>
        <InfoCardWrapper>
          <TitleCommonWrapper>
            <TitleCard entity={data} />
            <PriceWrapper>
              <Price>€ {price.toFixed(2).toString().replace('.', ',')}</Price>
              <div>
                <img src={HeartIcon} alt="favorite heart icon" />
              </div>
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
