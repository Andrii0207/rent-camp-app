import TitleCard from 'components/TitleCard/TitleCard';
import {
  ModalDescriptionText,
  ModalGalleryItem,
  ModalGalleryWrapper,
  ModalImg,
  ModalNavButton,
  ModalNavListWrapper,
  ModalNavWrapper,
  ModalWrapper,
  Price,
  PriceWrapper,
  StyledCloseIcon,
} from './ModaCardInfo.styled';
import { useState } from 'react';
import { Reviews } from 'components/Reviews/Reviews';
import { Features } from 'components/Features/Features';
import CloseIcon from '../../images/icons/close.svg';

export function ModaCardInfo({ data, closeModal }) {
  const [isFeatures, setIsFeatures] = useState(true);

  const { gallery, description, price } = data;
  return (
    <>
      <ModalWrapper>
        <div>
          <TitleCard entity={data} />
          <PriceWrapper>
            <Price>€ {price.toFixed(2).toString().replace('.', ',')}</Price>
          </PriceWrapper>
          <button type="button" onClick={() => closeModal()}>
            <StyledCloseIcon src={CloseIcon} alt="close icon" />
          </button>
        </div>
        <ModalGalleryWrapper>
          {gallery.map((item, index) => (
            <ul key={index}>
              <ModalGalleryItem>
                <ModalImg src={item} alt="camp_photo" />
              </ModalGalleryItem>
            </ul>
          ))}
        </ModalGalleryWrapper>
        <ModalDescriptionText>{description}</ModalDescriptionText>
        <ModalNavWrapper>
          <ModalNavListWrapper>
            <li>
              <ModalNavButton type="button" onClick={() => setIsFeatures(true)}>
                Features
              </ModalNavButton>
            </li>
            <li>
              <button type="button" onClick={() => setIsFeatures(false)}>
                Reviews
              </button>
            </li>
          </ModalNavListWrapper>
        </ModalNavWrapper>
        {isFeatures ? <Features data={data} /> : <Reviews data={data} />}
      </ModalWrapper>
    </>
  );
}
