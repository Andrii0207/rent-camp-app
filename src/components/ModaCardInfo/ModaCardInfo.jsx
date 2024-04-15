import TitleCard from 'components/TitleCard/TitleCard';
import {
  ModalDescriptionText,
  ModalGalleryItem,
  ModalGalleryWrapper,
  ModalImg,
  ModalNavListWrapper,
  ModalNavWrapper,
  ModalWrapper,
} from './ModaCardInfo.styled';
import CloseIcon from 'images/icons/close.svg';
import { useState } from 'react';
import { Reviews } from 'components/Reviews/Reviews';
import { Features } from 'components/Features/Features';

export function ModaCardInfo({ data }) {
  const [isFeatures, setIsFeatures] = useState(true);

  console.log(isFeatures);

  const { gallery, description } = data;
  return (
    <>
      <ModalWrapper>
        <div>
          <TitleCard entity={data} />
          <img src={CloseIcon} alt="close icon" />
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
              <button type="button" onClick={() => setIsFeatures(true)}>
                Features
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setIsFeatures(false)}>
                Reviews
              </button>
            </li>
          </ModalNavListWrapper>
        </ModalNavWrapper>
        {isFeatures ? <Features /> : <Reviews />}
      </ModalWrapper>
    </>
  );
}
