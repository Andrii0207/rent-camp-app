import { FormData, FormWrapper, StyledButton, Text, Title } from './Form.styled';

export function Form() {
  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <FormData></FormData>

      <StyledButton type="submit">Send</StyledButton>
    </FormWrapper>
  );
}
