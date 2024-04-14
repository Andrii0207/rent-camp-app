import { PhotoWrapper, StyledPhoto } from './CardPhoto.styled';

export function CardPhoto({ gallery }) {
  return (
    <PhotoWrapper>
      <StyledPhoto src={gallery[0]} alt="camp_photo" />
    </PhotoWrapper>
  );
}
