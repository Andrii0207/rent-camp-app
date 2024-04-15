import { Avatar, IconWrapper, Letter, List, NameRatingWrapper, Text, TitleWrapper } from './Consumer.styled';
import Star from 'images/icons/star.svg';

export function Consumer({ data: { reviews } }) {
  console.log(reviews);
  return (
    <List>
      {reviews.map(({ comment, reviewer_name, id }) => (
        <li key={id}>
          <TitleWrapper>
            <Avatar>
              <Letter>{reviewer_name.slice(0, 1)}</Letter>
            </Avatar>
            <NameRatingWrapper>
              <h3>{reviewer_name}</h3>
              <IconWrapper>
                <img src={Star} alt="" />
              </IconWrapper>
            </NameRatingWrapper>
          </TitleWrapper>
          <Text>{comment}</Text>
        </li>
      ))}
    </List>
  );
}
