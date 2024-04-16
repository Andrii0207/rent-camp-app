import {
  CardTitle,
  RatingWrapper,
  Reviews,
  StyledHeader,
  LocationWrapper,
  RatingLocationWrapper,
  TitleWrapper,
  StyledItem,
} from './TitleCard.styled';
import RatingIcon from '../../images/icons/star.svg';
import LocationIcon from 'images/icons/location.png';

export default function TitleCard({ entity }) {
  const { rating, location, reviews, name } = entity;
  return (
    <TitleWrapper>
      <div>
        <StyledHeader>
          <div>
            <CardTitle>{name}</CardTitle>
          </div>
        </StyledHeader>
        <RatingLocationWrapper>
          <RatingWrapper>
            <StyledItem>
              <img src={RatingIcon} alt="" />
            </StyledItem>
            <li>
              <Reviews>
                {rating}({reviews.length} Reviews)
              </Reviews>
            </li>
          </RatingWrapper>

          <LocationWrapper>
            <StyledItem>
              <img src={LocationIcon} alt="location icon" />
            </StyledItem>
            <li>{location}</li>
          </LocationWrapper>
        </RatingLocationWrapper>
      </div>
    </TitleWrapper>
  );
}
