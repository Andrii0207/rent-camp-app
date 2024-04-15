import { FormWrapper } from './Form.styled';

export function Form() {
  return (
    <FormWrapper>
      <Form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Booking date" />
        <textarea name="" id="" placeholder="Comment"></textarea>
      </Form>
    </FormWrapper>
  );
}
