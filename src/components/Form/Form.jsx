import Button from 'components/ShowMore/ShoreMore';
import { FormData, FormWrapper, Text, Title } from './Form.styled';

export function Form() {
  const getFormData = () => {
    console.log('booking-form-button click');
  };

  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <FormData></FormData>

      <Button type="submit" action={getFormData}>
        Send
      </Button>
    </FormWrapper>
  );
}
