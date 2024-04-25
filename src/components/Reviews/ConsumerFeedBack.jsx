import ReactStars from 'react-rating-stars-component';
import { Avatar, IconWrapper, Letter, NameRatingWrapper, Text, TitleWrapper } from './ConsumerFeedBack.styled';

export function ConsumerFeedBack({ data: { comment, reviewer_name, reviewer_rating } }) {
  const options = {
    count: 5,
    activeColor: '#FFC531',
    value: reviewer_rating,
    edit: false,
    size: 16,
  };



  return (
    <>
      <TitleWrapper>
        <Avatar>
          <Letter>{reviewer_name.slice(0, 1)}</Letter>
        </Avatar>
        <NameRatingWrapper>
          <h3>{reviewer_name}</h3>
          <IconWrapper>
            <ReactStars {...options} />
          </IconWrapper>
        </NameRatingWrapper>
      </TitleWrapper>
      <Text>{comment}</Text>
    </>
  );
}
