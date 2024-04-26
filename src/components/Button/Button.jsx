import { LoadMore, Search } from './Button.styled';

export default function Button({ action, data, children, isLoadMore }) {
  const StyledButton = isLoadMore ? LoadMore : Search;

  return (
    <StyledButton type="button" onClick={() => action(data)}>
      {children}
    </StyledButton>
  );
}
