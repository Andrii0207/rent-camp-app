import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
margin-bottom: 16px;
display: flex;
align-items: baseline;
justify-content: space-between;
gap: 24px;
`


export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 8px;

`
export const CardTitle = styled.h2`
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSize.large};
font-style: ${props => props.theme.fontStyle.normal};
font-weight: ${props => props.theme.fontWeight.heavy};;
line-height: 1.25; /* 125% */
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
width: 16px;
height: 16px;
`
export const RatingIconSpan = styled.span`
stroke: ${props => props.theme.colors.yellow};
fill: ${props => props.theme.colors.yellow};
padding: 0;
`

export const LocationWrapper = styled.ul`
display: flex;
align-items: center;
`

export const LocationIconSpan = styled.span`
stroke: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.primary};;
width: 16px;
height: 16px;
`

export const RatingLocationWrapper = styled.div`
display: flex;
align-items: center;
`

