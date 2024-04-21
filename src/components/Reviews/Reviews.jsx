import { Form } from 'components/Form/Form';
import { ConsumerFeedBack } from './ConsumerFeedBack';
import { Container, List } from './Reviews.styled';

export function Reviews({ data }) {
  const { reviews } = data;

  return (
    <Container>
      <List>
        {reviews.map(({ comment, reviewer_name, reviewer_rating }, index) => (
          <li key={index}>
            <ConsumerFeedBack data={{ comment, reviewer_name, reviewer_rating }} />
          </li>
        ))}
      </List>
      <Form />
    </Container>
  );
}
