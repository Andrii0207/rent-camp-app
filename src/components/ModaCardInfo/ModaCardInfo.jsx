import TitleCard from 'components/TitleCard/TitleCard';
import {
  ModalDescriptionText,
  ModalGalleryItem,
  ModalGalleryWrapper,
  ModalImg,
  ModalWrapper,
} from './ModaCardInfo.styled';
import CloseIcon from 'images/icons/close.svg';

export function ModaCardInfo({ data }) {
  const { gallery, description } = data;
  return (
    <>
      <ModalWrapper>
        <div>
          <TitleCard entity={data} />
          <img src={CloseIcon} alt="close icon" />
        </div>
        <ModalGalleryWrapper>
          {gallery.map(item => (
            <ul>
              <ModalGalleryItem>
                <ModalImg src={item} alt="camp_photo" />
              </ModalGalleryItem>
            </ul>
          ))}
        </ModalGalleryWrapper>
        <ModalDescriptionText>{description}</ModalDescriptionText>
      </ModalWrapper>
    </>
  );
}
