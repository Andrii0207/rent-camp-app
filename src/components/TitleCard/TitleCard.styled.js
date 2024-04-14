import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
margin-bottom: 24px;
display: flex;
align-items: baseline;
justify-content: space-between;
`


export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 8px;

`
export const CardTitle = styled.h2`
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};;
line-height: 1.25; /* 125% */
color: ${props => props.theme.colors.primary};
`

export const Price = styled.p`
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};
line-height:1.25; /* 125% */
color: ${props => props.theme.colors.primary};
padding-right: 11px;
`

export const PriceWrapper = styled.div`
display: flex;
align-items: center;
`

export const Reviews = styled.p`
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.medium};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.normal};
line-height: 1.5; /* 150% */
text-decoration-line: underline;
`

export const RatingWrapper = styled.ul`
display: flex;
align-items: center;
padding-right: 16px;
`

export const StyledItem = styled.li`
margin-right: 4px;
`

export const StyledStarIcon = styled.img`
background-color: ${props => props.theme.colors.yellow};
`

export const Location = styled.div`
color: ${props => props.theme.colors.primary};;

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`

export const LocationWrapper = styled.ul`
display: flex;
align-items: center;
`

export const RatingLocationWrapper = styled.div`
display: flex;
align-items: center;
`