import { Avatar, IconWrapper, Letter, List, NameRatingWrapper, Text, TitleWrapper } from './Consumer.styled';
import Star from 'images/icons/star.svg';

export function Consumer({ data: { reviews } }) {
  console.log('Consumer >>>', reviews);
  return (
    <List>
      {reviews.map(({ comment, reviewer_name }, index) => {
        return (
          <li key={index ?? comment}>
            <TitleWrapper>
              <Avatar>
                <Letter>{reviewer_name.slice(0, 1)}</Letter>
              </Avatar>
              <NameRatingWrapper>
                <h3>{reviewer_name}</h3>
                <IconWrapper>
                  <img src={Star} alt="rating icon" />
                </IconWrapper>
              </NameRatingWrapper>
            </TitleWrapper>
            <Text>{comment}</Text>
          </li>
        );
      })}
    </List>
  );
}
