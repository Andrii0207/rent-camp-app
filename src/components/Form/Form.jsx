import Button from 'components/Button/Button';
import { FormData, FormWrapper, IconWrapper, Input, InputWrapper, Text, TextAria, Title } from './Form.styled';
import { ReactComponent as Calendar } from '../../images/icons/calendar.svg';

export function Form() {
  const getFormData = () => {
    console.log('booking-form-button click');
  };

  return (
    <FormWrapper>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <FormData>
        <div>
          <Input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
          <Input type="email" name="email" placeholder="Email" required />
        </div>
        <InputWrapper>
          <Input type="text" name="booking-date" placeholder="Booking date" required />
          <IconWrapper>
            <Calendar />
          </IconWrapper>
        </InputWrapper>
        <div>
          <TextAria name="text" id="" cols="30" rows="10" placeholder="Comment"></TextAria>
        </div>
      </FormData>
      <Button type="submit" action={getFormData}>
        Send
      </Button>
    </FormWrapper>
  );
}
