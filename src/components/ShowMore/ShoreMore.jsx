import { StyledButton } from './ShowMore.styled';

export default function ShowMore({ openModal }) {
  return (
    <StyledButton type="button" onClick={() => openModal()}>
      Show more
    </StyledButton>
  );
}
