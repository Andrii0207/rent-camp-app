import {
  CardTitle,
  Price,
  PriceWrapper,
  RatingWrapper,
  Reviews,
  StyledHeader,
  LocationWrapper,
  RatingLocationWrapper,
  TitleWrapper,
  StyledStarIcon,
  StyledItem,
} from './TitleCard.styled';
import StarIcon from 'images/icons/star.png';
import HeartIcon from 'images/icons/heart.png';
import LocationIcon from 'images/icons/location.png';

export default function TitleCard({ entity: { price, rating, location, reviews, name } }) {
  return (
    <TitleWrapper>
      <StyledHeader>
        <div>
          <CardTitle>{name}</CardTitle>
        </div>
        <PriceWrapper>
          <Price>$ {price.toFixed(2).toString().replace('.', ',')}</Price>
          <div>
            <img src={HeartIcon} alt="favorite heart icon" />
          </div>
        </PriceWrapper>
      </StyledHeader>
      <RatingLocationWrapper>
        <RatingWrapper>
          <StyledItem>
            <StyledStarIcon src={StarIcon} alt="rating icon" />
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
    </TitleWrapper>
  );
}
