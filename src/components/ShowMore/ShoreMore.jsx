import { StyledButton } from './ShowMore.styled';

export default function ShowMore({ openModal, data }) {
  return (
    <StyledButton type="button" onClick={() => openModal(data)}>
      Show more
    </StyledButton>
  );
}
