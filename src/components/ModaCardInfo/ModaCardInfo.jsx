import TitleCard from 'components/TitleCard/TitleCard';
import {
  ModalDescriptionText,
  ModalGalleryItem,
  ModalGalleryWrapper,
  ModalImg,
  ModalNavButton,
  ModalNavListWrapper,
  ModalNavWrapper,
  ModalTitleWrapper,
  ModalWrapper,
  NavItem,
  Price,
  PriceWrapper,
  StyledCloseButton,
} from './ModaCardInfo.styled';
import { useState } from 'react';
import { Reviews } from 'components/Reviews/Reviews';
import { Features } from 'components/Features/Features';
import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';

export function ModaCardInfo({ data, closeModal }) {
  const [isFeatures, setIsFeatures] = useState(true);

  const { gallery, description, price, reviews } = data;
  console.log('ModaCardInfo reviews>>', data);
  return (
    <>
      <ModalWrapper>
        <ModalTitleWrapper>
          <TitleCard entity={data} />
          <PriceWrapper>
            <Price>€ {price.toFixed(2).toString().replace('.', ',')}</Price>
          </PriceWrapper>
          <StyledCloseButton type="button" onClick={() => closeModal()}>
            <CloseIcon />
          </StyledCloseButton>
        </ModalTitleWrapper>
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
            <NavItem>
              <ModalNavButton type="button" onClick={() => setIsFeatures(true)}>
                Features
              </ModalNavButton>
            </NavItem>
            <NavItem>
              <ModalNavButton type="button" onClick={() => setIsFeatures(false)}>
                Reviews
              </ModalNavButton>
            </NavItem>
          </ModalNavListWrapper>
        </ModalNavWrapper>
        {isFeatures ? (
          <Features data={data} isFeatures={isFeatures} />
        ) : (
          <Reviews data={data} isFeatures={isFeatures} />
        )}
      </ModalWrapper>
    </>
  );
}
