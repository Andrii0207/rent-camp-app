import {
  CardTitle,
  Price,
  PriceWrapper,
  RatingWrapper,
  Reviews,
  StyledHeader,
  Location,
  LocationWrapper,
  RatingLocationWrapper,
} from './TitleCard.styled';

export default function TitleCard() {
  return (
    <>
      <StyledHeader>
        <div>
          <CardTitle>Title</CardTitle>
        </div>
        <PriceWrapper>
          <Price>$ 8000.00</Price>
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
            <Reviews>(2 Reviews)</Reviews>
          </li>
        </RatingWrapper>
        <LocationWrapper>
          <div>location-icon</div>
          <Location>
            <a href="qwe">Kyiv, Ukraine</a>
          </Location>
        </LocationWrapper>
      </RatingLocationWrapper>
    </>
  );
}
