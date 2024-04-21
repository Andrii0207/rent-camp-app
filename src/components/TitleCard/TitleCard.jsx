import {
  CardTitle,
  RatingWrapper,
  Reviews,
  StyledHeader,
  LocationWrapper,
  RatingLocationWrapper,
  TitleWrapper,
  StyledItem,
  RatingIconSpan,
  LocationIconSpan,
} from './TitleCard.styled';

import { ReactComponent as LocationIcon } from 'images/icons/location.svg';
import { ReactComponent as RatingIcon } from 'images/icons/rating.svg';

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
              <RatingIconSpan>
                <RatingIcon width="16" height="16" />
              </RatingIconSpan>
            </StyledItem>
            <li>
              <Reviews>
                {rating}({reviews.length} Reviews)
              </Reviews>
            </li>
          </RatingWrapper>

          <LocationWrapper>
            <StyledItem>
              <LocationIconSpan>
                <LocationIcon width="16" height="16" />
              </LocationIconSpan>
            </StyledItem>
            <li>{location}</li>
          </LocationWrapper>
        </RatingLocationWrapper>
      </div>
    </TitleWrapper>
  );
}
