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
} from './TitleCard.styled';

export default function TitleCard({ title, price, rating, location, reviews }) {
  return (
    <TitleWrapper>
      <StyledHeader>
        <div>
          <CardTitle>{title}</CardTitle>
        </div>
        <PriceWrapper>
          <Price>$ {price.toFixed(2).toString().replace('.', ',')}</Price>
          <div>
            <p>heart-icon</p>
          </div>
        </PriceWrapper>
      </StyledHeader>
      <RatingLocationWrapper>
        <RatingWrapper>
          <li>
            <div>star-icon</div>
          </li>
          <li>
            <Reviews>
              {rating}({reviews.length} Reviews)
            </Reviews>
          </li>
        </RatingWrapper>

        <LocationWrapper>
          <li>
            <p>location-icon</p>
          </li>
          <li>{location}</li>
        </LocationWrapper>
      </RatingLocationWrapper>
    </TitleWrapper>
  );
}
