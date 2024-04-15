import { StyledButton } from './ShowMore.styled';

export default function Button({ openModal, data }) {
  return (
    <StyledButton type="button" onClick={() => openModal(data)}>
      Show more
    </StyledButton>
  );
}
