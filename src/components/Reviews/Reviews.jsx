import { Form } from 'components/Form/Form';
import { Consumer } from './Consumer';
import { Container } from './Reviews.styled';

export function Reviews({ data }) {
  return (
    <Container>
      <Consumer data={data} />
      <Form />
    </Container>
  );
}
