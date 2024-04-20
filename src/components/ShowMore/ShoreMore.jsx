import { StyledButton } from './ShowMore.styled';

export default function Button({ action, data, children }) {
  return (
    <StyledButton type="button" onClick={() => action(data)}>
      {children}
    </StyledButton>
  );
}
